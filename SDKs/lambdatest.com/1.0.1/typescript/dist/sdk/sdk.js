"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var getdevices_1 = require("./getdevices");
var getlocations_1 = require("./getlocations");
var getosbrowsers_1 = require("./getosbrowsers");
var getprofiles_1 = require("./getprofiles");
var getresolutions_1 = require("./getresolutions");
var getscreenshots_1 = require("./getscreenshots");
var getzippedscreenshots_1 = require("./getzippedscreenshots");
var startscreenshottest_1 = require("./startscreenshottest");
var stopscreenshottest_1 = require("./stopscreenshottest");
exports.ServerList = [
    "https://api.lambdatest.com/screenshots/v1",
];
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.getDevices = new getdevices_1.GetDevices(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.getLocations = new getlocations_1.GetLocations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.getOSBrowsers = new getosbrowsers_1.GetOsBrowsers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.getProfiles = new getprofiles_1.GetProfiles(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.getResolutions = new getresolutions_1.GetResolutions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.getScreenshots = new getscreenshots_1.GetScreenshots(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.getZippedScreenshots = new getzippedscreenshots_1.GetZippedScreenshots(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.startScreenshotTest = new startscreenshottest_1.StartScreenshotTest(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.stopScreenshotTest = new stopscreenshottest_1.StopScreenshotTest(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

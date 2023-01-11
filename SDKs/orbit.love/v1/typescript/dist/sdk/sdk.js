"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var activities_1 = require("./activities");
var activitytypes_1 = require("./activitytypes");
var members_1 = require("./members");
var notes_1 = require("./notes");
var reports_1 = require("./reports");
var users_1 = require("./users");
var workspaces_1 = require("./workspaces");
exports.ServerList = [
    "https://app.orbit.love/api/v1",
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
        this.activities = new activities_1.Activities(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.activityTypes = new activitytypes_1.ActivityTypes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.members = new members_1.Members(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.notes = new notes_1.Notes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.reports = new reports_1.Reports(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.users = new users_1.Users(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.workspaces = new workspaces_1.Workspaces(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

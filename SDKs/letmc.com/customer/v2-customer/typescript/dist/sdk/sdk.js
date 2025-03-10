"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var branchcontroller_1 = require("./branchcontroller");
var landlordcontroller_1 = require("./landlordcontroller");
var photocontroller_1 = require("./photocontroller");
var propertycontroller_1 = require("./propertycontroller");
var sessioncontroller_1 = require("./sessioncontroller");
var axios_1 = __importDefault(require("axios"));
/**
 * Contains the list of servers available to the SDK
 */
exports.ServerList = ["https://live-api.letmc.com"];
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props === null || props === void 0 ? void 0 : props.serverURL) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient =
            (_b = props === null || props === void 0 ? void 0 : props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.branchController = new branchcontroller_1.BranchController(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.landlordController = new landlordcontroller_1.LandlordController(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.photoController = new photocontroller_1.PhotoController(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.propertyController = new propertycontroller_1.PropertyController(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sessionController = new sessioncontroller_1.SessionController(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

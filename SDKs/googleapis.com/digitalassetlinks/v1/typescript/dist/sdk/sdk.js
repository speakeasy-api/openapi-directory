"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var assetlinks_1 = require("./assetlinks");
var statements_1 = require("./statements");
var axios_1 = __importDefault(require("axios"));
/**
 * Contains the list of servers available to the SDK
 */
exports.ServerList = [
    "https://digitalassetlinks.googleapis.com/",
];
/**
 * Discovers relationships between online assets such as websites or mobile apps.
 *
 * @see {@link https://developers.google.com/digital-asset-links/}
 */
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
        this.assetlinks = new assetlinks_1.Assetlinks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.statements = new statements_1.Statements(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

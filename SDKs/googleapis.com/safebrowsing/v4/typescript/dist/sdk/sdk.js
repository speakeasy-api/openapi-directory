"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var encodedfullhashes_1 = require("./encodedfullhashes");
var encodedupdates_1 = require("./encodedupdates");
var fullhashes_1 = require("./fullhashes");
var threathits_1 = require("./threathits");
var threatlistupdates_1 = require("./threatlistupdates");
var threatlists_1 = require("./threatlists");
var threatmatches_1 = require("./threatmatches");
exports.ServerList = [
    "https://safebrowsing.googleapis.com/",
];
/* SDK Documentation: https://developers.google.com/safe-browsing/*/
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.encodedFullHashes = new encodedfullhashes_1.EncodedFullHashes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.encodedUpdates = new encodedupdates_1.EncodedUpdates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.fullHashes = new fullhashes_1.FullHashes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.threatHits = new threathits_1.ThreatHits(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.threatListUpdates = new threatlistupdates_1.ThreatListUpdates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.threatLists = new threatlists_1.ThreatLists(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.threatMatches = new threatmatches_1.ThreatMatches(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

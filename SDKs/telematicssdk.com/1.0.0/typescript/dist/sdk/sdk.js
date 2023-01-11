"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var twoformobileappoptional_1 = require("./twoformobileappoptional");
var two1userstatisticsoptional_1 = require("./two1userstatisticsoptional");
var two2usertripsoptional_1 = require("./two2usertripsoptional");
var two4usersafescoringoptional_1 = require("./two4usersafescoringoptional");
var threeforbackendoptional_1 = require("./threeforbackendoptional");
var consolidatedsafescoring_1 = require("./consolidatedsafescoring");
var consolidatedstatistics_1 = require("./consolidatedstatistics");
exports.ServerList = [
    "https://api.telematicssdk.com",
    "https://mobilesdk.telematicssdk.com",
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
        this.twoForMobileAppOptional = new twoformobileappoptional_1.TwoForMobileAppOptional(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.two1UserStatisticsOptional = new two1userstatisticsoptional_1.Two1UserStatisticsOptional(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.two2UserTripsOptional = new two2usertripsoptional_1.Two2UserTripsOptional(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.two4UserSafeScoringOptional = new two4usersafescoringoptional_1.Two4UserSafeScoringOptional(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.threeForBackEndOptional = new threeforbackendoptional_1.ThreeForBackEndOptional(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.consolidatedSafeScoring = new consolidatedsafescoring_1.ConsolidatedSafeScoring(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.consolidatedStatistics = new consolidatedstatistics_1.ConsolidatedStatistics(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

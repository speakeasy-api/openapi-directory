"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var baseconversion_1 = require("./baseconversion");
var numberchecks_1 = require("./numberchecks");
var numberfacts_1 = require("./numberfacts");
var numbergeneration_1 = require("./numbergeneration");
var numbersystemsconversion_1 = require("./numbersystemsconversion");
var numberoftheday_1 = require("./numberoftheday");
var pi_1 = require("./pi");
var prime_1 = require("./prime");
var spell_1 = require("./spell");
exports.ServerList = [
    "https://api.math.tools",
    "http://api.math.tools",
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
        this.baseConversion = new baseconversion_1.BaseConversion(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.numberChecks = new numberchecks_1.NumberChecks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.numberFacts = new numberfacts_1.NumberFacts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.numberGeneration = new numbergeneration_1.NumberGeneration(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.numberSystemsConversion = new numbersystemsconversion_1.NumberSystemsConversion(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.numberOfTheDay = new numberoftheday_1.NumberOfTheDay(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pi = new pi_1.Pi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.prime = new prime_1.Prime(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.spell = new spell_1.Spell(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

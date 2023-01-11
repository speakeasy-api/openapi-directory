"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var applications_1 = require("./applications");
var edits_1 = require("./edits");
var generatedapks_1 = require("./generatedapks");
var grants_1 = require("./grants");
var inappproducts_1 = require("./inappproducts");
var internalappsharingartifacts_1 = require("./internalappsharingartifacts");
var monetization_1 = require("./monetization");
var orders_1 = require("./orders");
var purchases_1 = require("./purchases");
var reviews_1 = require("./reviews");
var systemapks_1 = require("./systemapks");
var users_1 = require("./users");
exports.ServerList = [
    "https://androidpublisher.googleapis.com/",
];
/* SDK Documentation: https://developers.google.com/android-publisher*/
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.applications = new applications_1.Applications(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.edits = new edits_1.Edits(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.generatedapks = new generatedapks_1.Generatedapks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.grants = new grants_1.Grants(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.inappproducts = new inappproducts_1.Inappproducts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.internalappsharingartifacts = new internalappsharingartifacts_1.Internalappsharingartifacts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.monetization = new monetization_1.Monetization(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orders = new orders_1.Orders(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.purchases = new purchases_1.Purchases(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.reviews = new reviews_1.Reviews(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.systemapks = new systemapks_1.Systemapks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.users = new users_1.Users(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

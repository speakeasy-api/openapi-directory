"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var accounts_1 = require("./accounts");
var billinginfo_1 = require("./billinginfo");
var budget_1 = require("./budget");
var creatives_1 = require("./creatives");
var marketplacedeals_1 = require("./marketplacedeals");
var marketplacenotes_1 = require("./marketplacenotes");
var marketplaceprivateauction_1 = require("./marketplaceprivateauction");
var performancereport_1 = require("./performancereport");
var pretargetingconfig_1 = require("./pretargetingconfig");
var products_1 = require("./products");
var proposals_1 = require("./proposals");
var pubprofiles_1 = require("./pubprofiles");
exports.ServerList = [
    "https://www.googleapis.com/adexchangebuyer/v1.4",
];
/* SDK Documentation: https://developers.google.com/ad-exchange/buyer-rest*/
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.accounts = new accounts_1.Accounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.billingInfo = new billinginfo_1.BillingInfo(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.budget = new budget_1.Budget(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.creatives = new creatives_1.Creatives(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.marketplacedeals = new marketplacedeals_1.Marketplacedeals(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.marketplacenotes = new marketplacenotes_1.Marketplacenotes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.marketplaceprivateauction = new marketplaceprivateauction_1.Marketplaceprivateauction(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.performanceReport = new performancereport_1.PerformanceReport(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pretargetingConfig = new pretargetingconfig_1.PretargetingConfig(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.products = new products_1.Products(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.proposals = new proposals_1.Proposals(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pubprofiles = new pubprofiles_1.Pubprofiles(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

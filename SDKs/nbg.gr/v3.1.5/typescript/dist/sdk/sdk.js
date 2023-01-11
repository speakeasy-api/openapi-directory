"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var accountaccess_1 = require("./accountaccess");
var accounts_1 = require("./accounts");
var balances_1 = require("./balances");
var beneficiaries_1 = require("./beneficiaries");
var parties_1 = require("./parties");
var sandbox_1 = require("./sandbox");
var scheduledpayments_1 = require("./scheduledpayments");
var standingorders_1 = require("./standingorders");
var statements_1 = require("./statements");
var transactions_1 = require("./transactions");
exports.ServerList = [
    "https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5",
    "https://services.nbg.gr/apis/open-banking/v3.1.5/aisp",
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
        this.accountAccess = new accountaccess_1.AccountAccess(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.accounts = new accounts_1.Accounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.balances = new balances_1.Balances(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.beneficiaries = new beneficiaries_1.Beneficiaries(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.parties = new parties_1.Parties(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sandbox = new sandbox_1.Sandbox(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.scheduledPayments = new scheduledpayments_1.ScheduledPayments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.standingOrders = new standingorders_1.StandingOrders(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.statements = new statements_1.Statements(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.transactions = new transactions_1.Transactions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var accounts_1 = require("./accounts");
var accountstatuses_1 = require("./accountstatuses");
var accounttax_1 = require("./accounttax");
var datafeeds_1 = require("./datafeeds");
var datafeedstatuses_1 = require("./datafeedstatuses");
var liasettings_1 = require("./liasettings");
var orderinvoices_1 = require("./orderinvoices");
var orderreports_1 = require("./orderreports");
var orderreturns_1 = require("./orderreturns");
var orders_1 = require("./orders");
var pos_1 = require("./pos");
var products_1 = require("./products");
var productstatuses_1 = require("./productstatuses");
var shippingsettings_1 = require("./shippingsettings");
exports.ServerList = [
    "https://shoppingcontent.googleapis.com/content/v2",
];
/* SDK Documentation: https://developers.google.com/shopping-content/v2/*/
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
        this.accountstatuses = new accountstatuses_1.Accountstatuses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.accounttax = new accounttax_1.Accounttax(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.datafeeds = new datafeeds_1.Datafeeds(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.datafeedstatuses = new datafeedstatuses_1.Datafeedstatuses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.liasettings = new liasettings_1.Liasettings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orderinvoices = new orderinvoices_1.Orderinvoices(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orderreports = new orderreports_1.Orderreports(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orderreturns = new orderreturns_1.Orderreturns(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orders = new orders_1.Orders(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pos = new pos_1.Pos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.products = new products_1.Products(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.productstatuses = new productstatuses_1.Productstatuses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.shippingsettings = new shippingsettings_1.Shippingsettings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

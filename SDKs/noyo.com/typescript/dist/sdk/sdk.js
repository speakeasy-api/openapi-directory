"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var agents_1 = require("./agents");
var applicationdocuments_1 = require("./applicationdocuments");
var applications_1 = require("./applications");
var bankaccounts_1 = require("./bankaccounts");
var coverageplans_1 = require("./coverageplans");
var dependents_1 = require("./dependents");
var employees_1 = require("./employees");
var groupconfigurationcontacts_1 = require("./groupconfigurationcontacts");
var groupconfigurationlocations_1 = require("./groupconfigurationlocations");
var groupcoverages_1 = require("./groupcoverages");
var groups_1 = require("./groups");
var memberelections_1 = require("./memberelections");
exports.ServerList = [
    "https://group-installation.noyo.com",
    "https://group-installation-sandbox.noyo.com",
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
        this.agents = new agents_1.Agents(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.applicationDocuments = new applicationdocuments_1.ApplicationDocuments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.applications = new applications_1.Applications(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.bankAccounts = new bankaccounts_1.BankAccounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.coveragePlans = new coverageplans_1.CoveragePlans(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dependents = new dependents_1.Dependents(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.employees = new employees_1.Employees(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groupConfigurationContacts = new groupconfigurationcontacts_1.GroupConfigurationContacts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groupConfigurationLocations = new groupconfigurationlocations_1.GroupConfigurationLocations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groupCoverages = new groupcoverages_1.GroupCoverages(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groups = new groups_1.Groups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.memberElections = new memberelections_1.MemberElections(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    /**
     * ping - Ping Endpoint
     *
     * Returns a simple OK message with a 200 status code
    **/
    SDK.prototype.ping = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/ping";
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    return SDK;
}());
exports.SDK = SDK;

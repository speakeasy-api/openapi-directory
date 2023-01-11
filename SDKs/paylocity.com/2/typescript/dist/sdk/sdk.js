"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var additionalrates_1 = require("./additionalrates");
var clientcredentials_1 = require("./clientcredentials");
var companycodes_1 = require("./companycodes");
var companyspecificschema_1 = require("./companyspecificschema");
var customfields_1 = require("./customfields");
var directdeposit_1 = require("./directdeposit");
var earnings_1 = require("./earnings");
var emergencycontacts_1 = require("./emergencycontacts");
var employee_1 = require("./employee");
var employeebenefitsetup_1 = require("./employeebenefitsetup");
var employeestaging_1 = require("./employeestaging");
var localtaxes_1 = require("./localtaxes");
var nonprimarystatetax_1 = require("./nonprimarystatetax");
var paystatements_1 = require("./paystatements");
var primarystatetax_1 = require("./primarystatetax");
exports.ServerList = [
    "https://api.paylocity.com/api",
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
        this.additionalRates = new additionalrates_1.AdditionalRates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.clientCredentials = new clientcredentials_1.ClientCredentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.companyCodes = new companycodes_1.CompanyCodes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.companySpecificSchema = new companyspecificschema_1.CompanySpecificSchema(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.customFields = new customfields_1.CustomFields(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.directDeposit = new directdeposit_1.DirectDeposit(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.earnings = new earnings_1.Earnings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.emergencyContacts = new emergencycontacts_1.EmergencyContacts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.employee = new employee_1.Employee(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.employeeBenefitSetup = new employeebenefitsetup_1.EmployeeBenefitSetup(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.employeeStaging = new employeestaging_1.EmployeeStaging(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.localTaxes = new localtaxes_1.LocalTaxes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.nonPrimaryStateTax = new nonprimarystatetax_1.NonPrimaryStateTax(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.payStatements = new paystatements_1.PayStatements(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.primaryStateTax = new primarystatetax_1.PrimaryStateTax(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

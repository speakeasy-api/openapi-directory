"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var utils = __importStar(require("../internal/utils"));
var shared_1 = require("./models/shared");
var accountinformationserviceais_1 = require("./accountinformationserviceais");
var commonservices_1 = require("./commonservices");
var confirmationoffundsservicepiis_1 = require("./confirmationoffundsservicepiis");
var paymentinitiationservicepis_1 = require("./paymentinitiationservicepis");
var signingbasketsservicesbs_1 = require("./signingbasketsservicesbs");
exports.ServerList = [
    "https://api.dev.openbankingproject.ch",
];
/* SDK Documentation: https://github.com/openbankingproject-ch/obp-apis - Full Documentation of NextGen Access to Account Interoperability Framework
 * (General Introduction Paper, Operational Rules, Implementation Guidelines)
 * */
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        if (props.security) {
            var security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase))
                security = new shared_1.Security(props.security);
            this._securityClient = utils.createSecurityClient(this._defaultClient, security);
        }
        else {
            this._securityClient = this._defaultClient;
        }
        this.accountInformationServiceAIS = new accountinformationserviceais_1.AccountInformationServiceAis(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.commonServices = new commonservices_1.CommonServices(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.confirmationOfFundsServicePIIS = new confirmationoffundsservicepiis_1.ConfirmationOfFundsServicePiis(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.paymentInitiationServicePIS = new paymentinitiationservicepis_1.PaymentInitiationServicePis(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.signingBasketsServiceSBS = new signingbasketsservicesbs_1.SigningBasketsServiceSbs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

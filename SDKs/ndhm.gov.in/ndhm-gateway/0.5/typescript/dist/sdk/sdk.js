"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var cmfacing_1 = require("./cmfacing");
var consentflow_1 = require("./consentflow");
var dataflow_1 = require("./dataflow");
var discovery_1 = require("./discovery");
var hipfacing_1 = require("./hipfacing");
var hiufacing_1 = require("./hiufacing");
var identification_1 = require("./identification");
var link_1 = require("./link");
var monitoring_1 = require("./monitoring");
var patientnotification_1 = require("./patientnotification");
var profile_1 = require("./profile");
var services_1 = require("./services");
var sessions_1 = require("./sessions");
var subscriptions_1 = require("./subscriptions");
var userauth_1 = require("./userauth");
exports.ServerList = [
    "https://dev.ndhm.gov.in/gateway",
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
        this.cmFacing = new cmfacing_1.CmFacing(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.consentFlow = new consentflow_1.ConsentFlow(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dataFlow = new dataflow_1.DataFlow(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.discovery = new discovery_1.Discovery(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.hipFacing = new hipfacing_1.HipFacing(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.hiuFacing = new hiufacing_1.HiuFacing(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.identification = new identification_1.Identification(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.link = new link_1.Link(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.monitoring = new monitoring_1.Monitoring(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.patientNotification = new patientnotification_1.PatientNotification(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.profile = new profile_1.Profile(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.services = new services_1.Services(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sessions = new sessions_1.Sessions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.subscriptions = new subscriptions_1.Subscriptions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.userAuth = new userauth_1.UserAuth(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

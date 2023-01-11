"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var addshortlink_1 = require("./addshortlink");
var addsubaccount_1 = require("./addsubaccount");
var campagne_1 = require("./campagne");
var comptage_1 = require("./comptage");
var credit_1 = require("./credit");
var dellistenoire_1 = require("./dellistenoire");
var editsubaccount_1 = require("./editsubaccount");
var getlistenoire_1 = require("./getlistenoire");
var hlr_1 = require("./hlr");
var repertoire_1 = require("./repertoire");
var setlistenoire_1 = require("./setlistenoire");
var sms_1 = require("./sms");
exports.ServerList = [
    "https://apirest.isendpro.com/cgi-bin",
    "http://apirest.isendpro.com/cgi-bin",
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
        this.addShortlink = new addshortlink_1.AddShortlink(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.addSubaccount = new addsubaccount_1.AddSubaccount(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.campagne = new campagne_1.Campagne(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.comptage = new comptage_1.Comptage(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.credit = new credit_1.Credit(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.delListeNoire = new dellistenoire_1.DelListeNoire(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.editSubaccount = new editsubaccount_1.EditSubaccount(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.getListeNoire = new getlistenoire_1.GetListeNoire(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.hlr = new hlr_1.Hlr(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.repertoire = new repertoire_1.Repertoire(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.setListeNoire = new setlistenoire_1.SetListeNoire(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sms = new sms_1.Sms(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

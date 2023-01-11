"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var bookshelves_1 = require("./bookshelves");
var cloudloading_1 = require("./cloudloading");
var dictionary_1 = require("./dictionary");
var familysharing_1 = require("./familysharing");
var layers_1 = require("./layers");
var myconfig_1 = require("./myconfig");
var mylibrary_1 = require("./mylibrary");
var notification_1 = require("./notification");
var onboarding_1 = require("./onboarding");
var personalizedstream_1 = require("./personalizedstream");
var promooffer_1 = require("./promooffer");
var series_1 = require("./series");
var volumes_1 = require("./volumes");
exports.ServerList = [
    "https://books.googleapis.com/",
];
/* SDK Documentation: https://code.google.com/apis/books/docs/v1/getting_started.html*/
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.bookshelves = new bookshelves_1.Bookshelves(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.cloudloading = new cloudloading_1.Cloudloading(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dictionary = new dictionary_1.Dictionary(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.familysharing = new familysharing_1.Familysharing(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.layers = new layers_1.Layers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.myconfig = new myconfig_1.Myconfig(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.mylibrary = new mylibrary_1.Mylibrary(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.notification = new notification_1.Notification(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onboarding = new onboarding_1.Onboarding(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.personalizedstream = new personalizedstream_1.Personalizedstream(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.promooffer = new promooffer_1.Promooffer(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.series = new series_1.Series(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.volumes = new volumes_1.Volumes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

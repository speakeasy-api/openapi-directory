"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var addons_1 = require("./addons");
var base_1 = require("./base");
var citations_1 = require("./citations");
var collections_1 = require("./collections");
var comments_1 = require("./comments");
var files_1 = require("./files");
var institutions_1 = require("./institutions");
var licenses_1 = require("./licenses");
var logs_1 = require("./logs");
var metaschemas_1 = require("./metaschemas");
var nodes_1 = require("./nodes");
var preprintproviders_1 = require("./preprintproviders");
var preprints_1 = require("./preprints");
var registrations_1 = require("./registrations");
var taxonomies_1 = require("./taxonomies");
var users_1 = require("./users");
var viewonlylinks_1 = require("./viewonlylinks");
var wikis_1 = require("./wikis");
exports.ServerList = [
    "https://test-api.osf.io/v2",
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
        this.addons = new addons_1.Addons(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.base = new base_1.Base(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.citations = new citations_1.Citations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.collections = new collections_1.Collections(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.comments = new comments_1.Comments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.files = new files_1.Files(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.institutions = new institutions_1.Institutions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.licenses = new licenses_1.Licenses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.logs = new logs_1.Logs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.metaschemas = new metaschemas_1.Metaschemas(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.nodes = new nodes_1.Nodes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.preprintProviders = new preprintproviders_1.PreprintProviders(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.preprints = new preprints_1.Preprints(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.registrations = new registrations_1.Registrations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.taxonomies = new taxonomies_1.Taxonomies(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.users = new users_1.Users(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.viewOnlyLinks = new viewonlylinks_1.ViewOnlyLinks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.wikis = new wikis_1.Wikis(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

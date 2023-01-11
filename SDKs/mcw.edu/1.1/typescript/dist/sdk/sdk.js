"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var agr_1 = require("./agr");
var annotation_1 = require("./annotation");
var chromosome_1 = require("./chromosome");
var gene_1 = require("./gene");
var lookup_1 = require("./lookup");
var map_1 = require("./map");
var ontology_1 = require("./ontology");
var pathway_1 = require("./pathway");
var qtl_1 = require("./qtl");
var quantitativephenotype_1 = require("./quantitativephenotype");
var ratstrain_1 = require("./ratstrain");
var sslp_1 = require("./sslp");
var statistics_1 = require("./statistics");
var enrichmentwebservice_1 = require("./enrichmentwebservice");
exports.ServerList = [
    "https://mcw.edu//rest.rgd.mcw.edu/rgdws",
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
        this.agr = new agr_1.Agr(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.annotation = new annotation_1.Annotation(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.chromosome = new chromosome_1.Chromosome(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.gene = new gene_1.Gene(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.lookup = new lookup_1.Lookup(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.map = new map_1.Map(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ontology = new ontology_1.Ontology(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pathway = new pathway_1.Pathway(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.qtl = new qtl_1.Qtl(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.quantitativePhenotype = new quantitativephenotype_1.QuantitativePhenotype(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ratStrain = new ratstrain_1.RatStrain(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sslp = new sslp_1.Sslp(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.statistics = new statistics_1.Statistics(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.enrichmentWebService = new enrichmentwebservice_1.EnrichmentWebService(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

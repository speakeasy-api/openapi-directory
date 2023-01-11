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
var assetscorrelationmatrix_1 = require("./assetscorrelationmatrix");
var assetscovariancematrix_1 = require("./assetscovariancematrix");
var assetsreturns_1 = require("./assetsreturns");
var assetsvariance_1 = require("./assetsvariance");
var assetsvolatility_1 = require("./assetsvolatility");
var factors_1 = require("./factors");
var portfolioanalysis_1 = require("./portfolioanalysis");
var portfolioconstruction_1 = require("./portfolioconstruction");
var portfoliooptimization_1 = require("./portfoliooptimization");
var portfoliosimulation_1 = require("./portfoliosimulation");
exports.ServerList = [
    "https://api.portfoliooptimizer.io/v1",
    "https://eu-west-1.api.portfoliooptimizer.io/v1",
];
/* SDK Documentation: https://docs.portfoliooptimizer.io/ - External documentation*/
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
        this.assetsCorrelationMatrix = new assetscorrelationmatrix_1.AssetsCorrelationMatrix(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.assetsCovarianceMatrix = new assetscovariancematrix_1.AssetsCovarianceMatrix(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.assetsReturns = new assetsreturns_1.AssetsReturns(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.assetsVariance = new assetsvariance_1.AssetsVariance(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.assetsVolatility = new assetsvolatility_1.AssetsVolatility(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.factors = new factors_1.Factors(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.portfolioAnalysis = new portfolioanalysis_1.PortfolioAnalysis(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.portfolioConstruction = new portfolioconstruction_1.PortfolioConstruction(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.portfolioOptimization = new portfoliooptimization_1.PortfolioOptimization(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.portfolioSimulation = new portfoliosimulation_1.PortfolioSimulation(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;

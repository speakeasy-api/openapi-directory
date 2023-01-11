"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostPortfolioSimulationRebalancingFixedWeightResponse = exports.PostPortfolioSimulationRebalancingFixedWeightRequest = exports.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson = exports.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios = exports.PostPortfolioSimulationRebalancingFixedWeightRequestBody = exports.PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios = exports.PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets = void 0;
var utils_1 = require("../../../internal/utils");
var PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets, _super);
    function PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetPrices" }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets.prototype, "assetPrices", void 0);
    return PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets = PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets;
var PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios, _super);
    function PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios.prototype, "assetsWeights", void 0);
    return PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios = PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios;
var PostPortfolioSimulationRebalancingFixedWeightRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingFixedWeightRequestBody, _super);
    function PostPortfolioSimulationRebalancingFixedWeightRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets", elemType: PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingFixedWeightRequestBody.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios", elemType: PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingFixedWeightRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioSimulationRebalancingFixedWeightRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioSimulationRebalancingFixedWeightRequestBody = PostPortfolioSimulationRebalancingFixedWeightRequestBody;
var PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios, _super);
    function PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolioValues" }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios.prototype, "portfolioValues", void 0);
    return PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios = PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios;
var PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson, _super);
    function PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios", elemType: PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson = PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson;
var PostPortfolioSimulationRebalancingFixedWeightRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingFixedWeightRequest, _super);
    function PostPortfolioSimulationRebalancingFixedWeightRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioSimulationRebalancingFixedWeightRequestBody)
    ], PostPortfolioSimulationRebalancingFixedWeightRequest.prototype, "request", void 0);
    return PostPortfolioSimulationRebalancingFixedWeightRequest;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioSimulationRebalancingFixedWeightRequest = PostPortfolioSimulationRebalancingFixedWeightRequest;
var PostPortfolioSimulationRebalancingFixedWeightResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingFixedWeightResponse, _super);
    function PostPortfolioSimulationRebalancingFixedWeightResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPortfolioSimulationRebalancingFixedWeightResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPortfolioSimulationRebalancingFixedWeightResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson)
    ], PostPortfolioSimulationRebalancingFixedWeightResponse.prototype, "postPortfolioSimulationRebalancingFixedWeight200ApplicationJSONObject", void 0);
    return PostPortfolioSimulationRebalancingFixedWeightResponse;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioSimulationRebalancingFixedWeightResponse = PostPortfolioSimulationRebalancingFixedWeightResponse;

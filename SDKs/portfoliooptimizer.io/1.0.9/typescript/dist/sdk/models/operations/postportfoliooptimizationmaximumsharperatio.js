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
exports.PostPortfolioOptimizationMaximumSharpeRatioResponse = exports.PostPortfolioOptimizationMaximumSharpeRatioRequest = exports.PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson = exports.PostPortfolioOptimizationMaximumSharpeRatioRequestBody = exports.PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints = void 0;
var utils_1 = require("../../../internal/utils");
var PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints, _super);
    function PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints.prototype, "assetsGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsGroupsMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints.prototype, "assetsGroupsMatrix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumAssetsGroupsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints.prototype, "maximumAssetsGroupsWeights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints.prototype, "maximumAssetsWeights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints.prototype, "maximumPortfolioExposure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints.prototype, "minimumAssetsWeights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints.prototype, "minimumPortfolioExposure", void 0);
    return PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints = PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints;
var PostPortfolioOptimizationMaximumSharpeRatioRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMaximumSharpeRatioRequestBody, _super);
    function PostPortfolioOptimizationMaximumSharpeRatioRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBody.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBody.prototype, "assetsReturns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=constraints" }),
        __metadata("design:type", PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBody.prototype, "constraints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=riskFreeRate" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequestBody.prototype, "riskFreeRate", void 0);
    return PostPortfolioOptimizationMaximumSharpeRatioRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMaximumSharpeRatioRequestBody = PostPortfolioOptimizationMaximumSharpeRatioRequestBody;
var PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson, _super);
    function PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson = PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson;
var PostPortfolioOptimizationMaximumSharpeRatioRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMaximumSharpeRatioRequest, _super);
    function PostPortfolioOptimizationMaximumSharpeRatioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioOptimizationMaximumSharpeRatioRequestBody)
    ], PostPortfolioOptimizationMaximumSharpeRatioRequest.prototype, "request", void 0);
    return PostPortfolioOptimizationMaximumSharpeRatioRequest;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMaximumSharpeRatioRequest = PostPortfolioOptimizationMaximumSharpeRatioRequest;
var PostPortfolioOptimizationMaximumSharpeRatioResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMaximumSharpeRatioResponse, _super);
    function PostPortfolioOptimizationMaximumSharpeRatioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPortfolioOptimizationMaximumSharpeRatioResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMaximumSharpeRatioResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson)
    ], PostPortfolioOptimizationMaximumSharpeRatioResponse.prototype, "postPortfolioOptimizationMaximumSharpeRatio200ApplicationJSONObject", void 0);
    return PostPortfolioOptimizationMaximumSharpeRatioResponse;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMaximumSharpeRatioResponse = PostPortfolioOptimizationMaximumSharpeRatioResponse;

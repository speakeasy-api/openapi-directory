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
exports.PostPortfolioAnalysisFactorExposuresResponse = exports.PostPortfolioAnalysisFactorExposuresRequest = exports.PostPortfolioAnalysisFactorExposures200ApplicationJson = exports.PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios = exports.PostPortfolioAnalysisFactorExposuresRequestBody = exports.PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios = exports.PostPortfolioAnalysisFactorExposuresRequestBodyFactors = void 0;
var utils_1 = require("../../../internal/utils");
var PostPortfolioAnalysisFactorExposuresRequestBodyFactors = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposuresRequestBodyFactors, _super);
    function PostPortfolioAnalysisFactorExposuresRequestBodyFactors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=factorReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposuresRequestBodyFactors.prototype, "factorReturns", void 0);
    return PostPortfolioAnalysisFactorExposuresRequestBodyFactors;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisFactorExposuresRequestBodyFactors = PostPortfolioAnalysisFactorExposuresRequestBodyFactors;
var PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios, _super);
    function PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolioReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios.prototype, "portfolioReturns", void 0);
    return PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios = PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios;
var PostPortfolioAnalysisFactorExposuresRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposuresRequestBody, _super);
    function PostPortfolioAnalysisFactorExposuresRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=factors", elemType: PostPortfolioAnalysisFactorExposuresRequestBodyFactors }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposuresRequestBody.prototype, "factors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposuresRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisFactorExposuresRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisFactorExposuresRequestBody = PostPortfolioAnalysisFactorExposuresRequestBody;
var PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolioAlpha" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios.prototype, "portfolioAlpha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolioBetas" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios.prototype, "portfolioBetas", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolioRSquared" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios.prototype, "portfolioRSquared", void 0);
    return PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios = PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios;
var PostPortfolioAnalysisFactorExposures200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposures200ApplicationJson, _super);
    function PostPortfolioAnalysisFactorExposures200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposures200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisFactorExposures200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisFactorExposures200ApplicationJson = PostPortfolioAnalysisFactorExposures200ApplicationJson;
var PostPortfolioAnalysisFactorExposuresRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposuresRequest, _super);
    function PostPortfolioAnalysisFactorExposuresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisFactorExposuresRequestBody)
    ], PostPortfolioAnalysisFactorExposuresRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisFactorExposuresRequest;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisFactorExposuresRequest = PostPortfolioAnalysisFactorExposuresRequest;
var PostPortfolioAnalysisFactorExposuresResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposuresResponse, _super);
    function PostPortfolioAnalysisFactorExposuresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisFactorExposuresResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisFactorExposuresResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPortfolioAnalysisFactorExposures200ApplicationJson)
    ], PostPortfolioAnalysisFactorExposuresResponse.prototype, "postPortfolioAnalysisFactorExposures200ApplicationJSONObject", void 0);
    return PostPortfolioAnalysisFactorExposuresResponse;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisFactorExposuresResponse = PostPortfolioAnalysisFactorExposuresResponse;

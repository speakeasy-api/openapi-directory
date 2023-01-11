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
exports.PostPortfolioAnalysisSharpeRatioResponse = exports.PostPortfolioAnalysisSharpeRatioRequest = exports.PostPortfolioAnalysisSharpeRatio200ApplicationJson = exports.PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios = void 0;
var utils_1 = require("../../../internal/utils");
var PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolioSharpeRatio" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios.prototype, "portfolioSharpeRatio", void 0);
    return PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios = PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios;
var PostPortfolioAnalysisSharpeRatio200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisSharpeRatio200ApplicationJson, _super);
    function PostPortfolioAnalysisSharpeRatio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisSharpeRatio200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisSharpeRatio200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisSharpeRatio200ApplicationJson = PostPortfolioAnalysisSharpeRatio200ApplicationJson;
var PostPortfolioAnalysisSharpeRatioRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisSharpeRatioRequest, _super);
    function PostPortfolioAnalysisSharpeRatioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostPortfolioAnalysisSharpeRatioRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisSharpeRatioRequest;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisSharpeRatioRequest = PostPortfolioAnalysisSharpeRatioRequest;
var PostPortfolioAnalysisSharpeRatioResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisSharpeRatioResponse, _super);
    function PostPortfolioAnalysisSharpeRatioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisSharpeRatioResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisSharpeRatioResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPortfolioAnalysisSharpeRatio200ApplicationJson)
    ], PostPortfolioAnalysisSharpeRatioResponse.prototype, "postPortfolioAnalysisSharpeRatio200ApplicationJSONObject", void 0);
    return PostPortfolioAnalysisSharpeRatioResponse;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisSharpeRatioResponse = PostPortfolioAnalysisSharpeRatioResponse;

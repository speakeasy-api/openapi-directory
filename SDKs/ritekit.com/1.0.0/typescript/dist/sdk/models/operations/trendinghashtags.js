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
exports.TrendingHashtagsResponse = exports.TrendingHashtagsRequest = exports.TrendingHashtagsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var TrendingHashtagsQueryParams = /** @class */ (function (_super) {
    __extends(TrendingHashtagsQueryParams, _super);
    function TrendingHashtagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=green" }),
        __metadata("design:type", Boolean)
    ], TrendingHashtagsQueryParams.prototype, "green", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=latin" }),
        __metadata("design:type", Boolean)
    ], TrendingHashtagsQueryParams.prototype, "latin", void 0);
    return TrendingHashtagsQueryParams;
}(utils_1.SpeakeasyBase));
exports.TrendingHashtagsQueryParams = TrendingHashtagsQueryParams;
var TrendingHashtagsRequest = /** @class */ (function (_super) {
    __extends(TrendingHashtagsRequest, _super);
    function TrendingHashtagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrendingHashtagsQueryParams)
    ], TrendingHashtagsRequest.prototype, "queryParams", void 0);
    return TrendingHashtagsRequest;
}(utils_1.SpeakeasyBase));
exports.TrendingHashtagsRequest = TrendingHashtagsRequest;
var TrendingHashtagsResponse = /** @class */ (function (_super) {
    __extends(TrendingHashtagsResponse, _super);
    function TrendingHashtagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TrendingHashtagsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TrendingHashtagsResponse.prototype, "statusCode", void 0);
    return TrendingHashtagsResponse;
}(utils_1.SpeakeasyBase));
exports.TrendingHashtagsResponse = TrendingHashtagsResponse;

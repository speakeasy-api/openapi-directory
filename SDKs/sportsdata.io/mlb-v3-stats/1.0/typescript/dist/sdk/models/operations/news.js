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
exports.NewsResponse = exports.NewsRequest = exports.NewsPathParams = exports.NewsFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var NewsFormatEnum;
(function (NewsFormatEnum) {
    NewsFormatEnum["Xml"] = "XML";
    NewsFormatEnum["Json"] = "JSON";
})(NewsFormatEnum = exports.NewsFormatEnum || (exports.NewsFormatEnum = {}));
var NewsPathParams = /** @class */ (function (_super) {
    __extends(NewsPathParams, _super);
    function NewsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], NewsPathParams.prototype, "format", void 0);
    return NewsPathParams;
}(utils_1.SpeakeasyBase));
exports.NewsPathParams = NewsPathParams;
var NewsRequest = /** @class */ (function (_super) {
    __extends(NewsRequest, _super);
    function NewsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NewsPathParams)
    ], NewsRequest.prototype, "pathParams", void 0);
    return NewsRequest;
}(utils_1.SpeakeasyBase));
exports.NewsRequest = NewsRequest;
var NewsResponse = /** @class */ (function (_super) {
    __extends(NewsResponse, _super);
    function NewsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NewsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], NewsResponse.prototype, "news", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NewsResponse.prototype, "statusCode", void 0);
    return NewsResponse;
}(utils_1.SpeakeasyBase));
exports.NewsResponse = NewsResponse;

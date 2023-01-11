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
exports.TextToImageResponse = exports.TextToImageRequest = exports.TextToImageQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var TextToImageQueryParams = /** @class */ (function (_super) {
    __extends(TextToImageQueryParams, _super);
    function TextToImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=animation" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "animation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=author" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=authorFont" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "authorFont", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=authorFontColor" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "authorFontColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=backgroundColor" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "backgroundColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=bgType" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "bgType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=brandLogo" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "brandLogo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=enableHighlight" }),
        __metadata("design:type", Number)
    ], TextToImageQueryParams.prototype, "enableHighlight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fontSize" }),
        __metadata("design:type", Number)
    ], TextToImageQueryParams.prototype, "fontSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=gradientColor1" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "gradientColor1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=gradientColor2" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "gradientColor2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=gradientType" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "gradientType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=highlightColor" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "highlightColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quote" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "quote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quoteFont" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "quoteFont", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quoteFontColor" }),
        __metadata("design:type", String)
    ], TextToImageQueryParams.prototype, "quoteFontColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=showQuoteMark" }),
        __metadata("design:type", Number)
    ], TextToImageQueryParams.prototype, "showQuoteMark", void 0);
    return TextToImageQueryParams;
}(utils_1.SpeakeasyBase));
exports.TextToImageQueryParams = TextToImageQueryParams;
var TextToImageRequest = /** @class */ (function (_super) {
    __extends(TextToImageRequest, _super);
    function TextToImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TextToImageQueryParams)
    ], TextToImageRequest.prototype, "queryParams", void 0);
    return TextToImageRequest;
}(utils_1.SpeakeasyBase));
exports.TextToImageRequest = TextToImageRequest;
var TextToImageResponse = /** @class */ (function (_super) {
    __extends(TextToImageResponse, _super);
    function TextToImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TextToImageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TextToImageResponse.prototype, "statusCode", void 0);
    return TextToImageResponse;
}(utils_1.SpeakeasyBase));
exports.TextToImageResponse = TextToImageResponse;

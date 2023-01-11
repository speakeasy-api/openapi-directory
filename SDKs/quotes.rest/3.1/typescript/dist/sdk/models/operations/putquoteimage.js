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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutQuoteImageResponse = exports.PutQuoteImageRequest = exports.PutQuoteImageSecurity = exports.PutQuoteImageQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutQuoteImageQueryParams = /** @class */ (function (_super) {
    __extends(PutQuoteImageQueryParams, _super);
    function PutQuoteImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=bg_color" }),
        __metadata("design:type", String)
    ], PutQuoteImageQueryParams.prototype, "bgColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=bgimage_id" }),
        __metadata("design:type", String)
    ], PutQuoteImageQueryParams.prototype, "bgimageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=branding" }),
        __metadata("design:type", Boolean)
    ], PutQuoteImageQueryParams.prototype, "branding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=font_id" }),
        __metadata("design:type", String)
    ], PutQuoteImageQueryParams.prototype, "fontId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=halign" }),
        __metadata("design:type", String)
    ], PutQuoteImageQueryParams.prototype, "halign", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], PutQuoteImageQueryParams.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_transparent_layer" }),
        __metadata("design:type", Boolean)
    ], PutQuoteImageQueryParams.prototype, "includeTransparentLayer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quote_id" }),
        __metadata("design:type", String)
    ], PutQuoteImageQueryParams.prototype, "quoteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text_color" }),
        __metadata("design:type", String)
    ], PutQuoteImageQueryParams.prototype, "textColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text_size" }),
        __metadata("design:type", String)
    ], PutQuoteImageQueryParams.prototype, "textSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=valign" }),
        __metadata("design:type", String)
    ], PutQuoteImageQueryParams.prototype, "valign", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], PutQuoteImageQueryParams.prototype, "width", void 0);
    return PutQuoteImageQueryParams;
}(utils_1.SpeakeasyBase));
exports.PutQuoteImageQueryParams = PutQuoteImageQueryParams;
var PutQuoteImageSecurity = /** @class */ (function (_super) {
    __extends(PutQuoteImageSecurity, _super);
    function PutQuoteImageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXTheySaidSoApiSecret)
    ], PutQuoteImageSecurity.prototype, "xTheySaidSoApiSecret", void 0);
    return PutQuoteImageSecurity;
}(utils_1.SpeakeasyBase));
exports.PutQuoteImageSecurity = PutQuoteImageSecurity;
var PutQuoteImageRequest = /** @class */ (function (_super) {
    __extends(PutQuoteImageRequest, _super);
    function PutQuoteImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutQuoteImageQueryParams)
    ], PutQuoteImageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutQuoteImageSecurity)
    ], PutQuoteImageRequest.prototype, "security", void 0);
    return PutQuoteImageRequest;
}(utils_1.SpeakeasyBase));
exports.PutQuoteImageRequest = PutQuoteImageRequest;
var PutQuoteImageResponse = /** @class */ (function (_super) {
    __extends(PutQuoteImageResponse, _super);
    function PutQuoteImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutQuoteImageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutQuoteImageResponse.prototype, "statusCode", void 0);
    return PutQuoteImageResponse;
}(utils_1.SpeakeasyBase));
exports.PutQuoteImageResponse = PutQuoteImageResponse;

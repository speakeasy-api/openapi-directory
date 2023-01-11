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
exports.Html5RenderResponse = exports.Html5RenderRequest = exports.Html5RenderRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var Html5RenderRequestBody = /** @class */ (function (_super) {
    __extends(Html5RenderRequestBody, _super);
    function Html5RenderRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=content;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=css;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "css", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=footer-font;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "footerFont", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=footer-font-size;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "footerFontSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=footer-line;" }),
        __metadata("design:type", Boolean)
    ], Html5RenderRequestBody.prototype, "footerLine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=footer-size;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "footerSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=footer-text-center;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "footerTextCenter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=footer-text-left;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "footerTextLeft", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=footer-text-right;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "footerTextRight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=format;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=forms;" }),
        __metadata("design:type", Boolean)
    ], Html5RenderRequestBody.prototype, "forms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=grayscale;" }),
        __metadata("design:type", Boolean)
    ], Html5RenderRequestBody.prototype, "grayscale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=header-font;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "headerFont", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=header-font-size;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "headerFontSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=header-line;" }),
        __metadata("design:type", Boolean)
    ], Html5RenderRequestBody.prototype, "headerLine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=header-size;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "headerSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=header-text-center;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "headerTextCenter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=header-text-left;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "headerTextLeft", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=header-text-right;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "headerTextRight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=image-height;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "imageHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=image-width;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "imageWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=landscape;" }),
        __metadata("design:type", Boolean)
    ], Html5RenderRequestBody.prototype, "landscape", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=margin;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "margin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=margin-bottom;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "marginBottom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=margin-left;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "marginLeft", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=margin-right;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "marginRight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=margin-top;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "marginTop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=media-print;" }),
        __metadata("design:type", Boolean)
    ], Html5RenderRequestBody.prototype, "mediaPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=media-queries;" }),
        __metadata("design:type", Boolean)
    ], Html5RenderRequestBody.prototype, "mediaQueries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=page-height;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "pageHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=page-size;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=page-width;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "pageWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=render-delay;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "renderDelay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=title;" }),
        __metadata("design:type", String)
    ], Html5RenderRequestBody.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=zoom;" }),
        __metadata("design:type", Number)
    ], Html5RenderRequestBody.prototype, "zoom", void 0);
    return Html5RenderRequestBody;
}(utils_1.SpeakeasyBase));
exports.Html5RenderRequestBody = Html5RenderRequestBody;
var Html5RenderRequest = /** @class */ (function (_super) {
    __extends(Html5RenderRequest, _super);
    function Html5RenderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", Html5RenderRequestBody)
    ], Html5RenderRequest.prototype, "request", void 0);
    return Html5RenderRequest;
}(utils_1.SpeakeasyBase));
exports.Html5RenderRequest = Html5RenderRequest;
var Html5RenderResponse = /** @class */ (function (_super) {
    __extends(Html5RenderResponse, _super);
    function Html5RenderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiError)
    ], Html5RenderResponse.prototype, "apiError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Html5RenderResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], Html5RenderResponse.prototype, "html5Render200ApplicationJSONBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], Html5RenderResponse.prototype, "statusCode", void 0);
    return Html5RenderResponse;
}(utils_1.SpeakeasyBase));
exports.Html5RenderResponse = Html5RenderResponse;

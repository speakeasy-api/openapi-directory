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
exports.PostQuoteImageBackgroundResponse = exports.PostQuoteImageBackgroundRequest = exports.PostQuoteImageBackgroundSecurity = exports.PostQuoteImageBackgroundRequestBody = exports.PostQuoteImageBackgroundRequestBodyImage = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostQuoteImageBackgroundRequestBodyImage = /** @class */ (function (_super) {
    __extends(PostQuoteImageBackgroundRequestBodyImage, _super);
    function PostQuoteImageBackgroundRequestBodyImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostQuoteImageBackgroundRequestBodyImage.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=image" }),
        __metadata("design:type", String)
    ], PostQuoteImageBackgroundRequestBodyImage.prototype, "image", void 0);
    return PostQuoteImageBackgroundRequestBodyImage;
}(utils_1.SpeakeasyBase));
exports.PostQuoteImageBackgroundRequestBodyImage = PostQuoteImageBackgroundRequestBodyImage;
var PostQuoteImageBackgroundRequestBody = /** @class */ (function (_super) {
    __extends(PostQuoteImageBackgroundRequestBody, _super);
    function PostQuoteImageBackgroundRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostQuoteImageBackgroundRequestBodyImage)
    ], PostQuoteImageBackgroundRequestBody.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=tags" }),
        __metadata("design:type", String)
    ], PostQuoteImageBackgroundRequestBody.prototype, "tags", void 0);
    return PostQuoteImageBackgroundRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostQuoteImageBackgroundRequestBody = PostQuoteImageBackgroundRequestBody;
var PostQuoteImageBackgroundSecurity = /** @class */ (function (_super) {
    __extends(PostQuoteImageBackgroundSecurity, _super);
    function PostQuoteImageBackgroundSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXTheySaidSoApiSecret)
    ], PostQuoteImageBackgroundSecurity.prototype, "xTheySaidSoApiSecret", void 0);
    return PostQuoteImageBackgroundSecurity;
}(utils_1.SpeakeasyBase));
exports.PostQuoteImageBackgroundSecurity = PostQuoteImageBackgroundSecurity;
var PostQuoteImageBackgroundRequest = /** @class */ (function (_super) {
    __extends(PostQuoteImageBackgroundRequest, _super);
    function PostQuoteImageBackgroundRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostQuoteImageBackgroundRequestBody)
    ], PostQuoteImageBackgroundRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostQuoteImageBackgroundSecurity)
    ], PostQuoteImageBackgroundRequest.prototype, "security", void 0);
    return PostQuoteImageBackgroundRequest;
}(utils_1.SpeakeasyBase));
exports.PostQuoteImageBackgroundRequest = PostQuoteImageBackgroundRequest;
var PostQuoteImageBackgroundResponse = /** @class */ (function (_super) {
    __extends(PostQuoteImageBackgroundResponse, _super);
    function PostQuoteImageBackgroundResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostQuoteImageBackgroundResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostQuoteImageBackgroundResponse.prototype, "statusCode", void 0);
    return PostQuoteImageBackgroundResponse;
}(utils_1.SpeakeasyBase));
exports.PostQuoteImageBackgroundResponse = PostQuoteImageBackgroundResponse;

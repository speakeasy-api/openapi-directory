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
exports.PostApiTextTransformResponse = exports.PostApiTextTransformRequest = exports.PostApiTextTransformRequests = exports.PostApiTextTransformHeaders = exports.PostApiTextTransformQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostApiTextTransformQueryParams = /** @class */ (function (_super) {
    __extends(PostApiTextTransformQueryParams, _super);
    function PostApiTextTransformQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=caseType" }),
        __metadata("design:type", String)
    ], PostApiTextTransformQueryParams.prototype, "caseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=find" }),
        __metadata("design:type", String)
    ], PostApiTextTransformQueryParams.prototype, "find", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=replace" }),
        __metadata("design:type", String)
    ], PostApiTextTransformQueryParams.prototype, "replace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=textActionType" }),
        __metadata("design:type", String)
    ], PostApiTextTransformQueryParams.prototype, "textActionType", void 0);
    return PostApiTextTransformQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostApiTextTransformQueryParams = PostApiTextTransformQueryParams;
var PostApiTextTransformHeaders = /** @class */ (function (_super) {
    __extends(PostApiTextTransformHeaders, _super);
    function PostApiTextTransformHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], PostApiTextTransformHeaders.prototype, "xApiKey", void 0);
    return PostApiTextTransformHeaders;
}(utils_1.SpeakeasyBase));
exports.PostApiTextTransformHeaders = PostApiTextTransformHeaders;
var PostApiTextTransformRequests = /** @class */ (function (_super) {
    __extends(PostApiTextTransformRequests, _super);
    function PostApiTextTransformRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.TextDto)
    ], PostApiTextTransformRequests.prototype, "textDto", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TextDto)
    ], PostApiTextTransformRequests.prototype, "textDto1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.TextDto)
    ], PostApiTextTransformRequests.prototype, "textDto2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.TextDto)
    ], PostApiTextTransformRequests.prototype, "textDto3", void 0);
    return PostApiTextTransformRequests;
}(utils_1.SpeakeasyBase));
exports.PostApiTextTransformRequests = PostApiTextTransformRequests;
var PostApiTextTransformRequest = /** @class */ (function (_super) {
    __extends(PostApiTextTransformRequest, _super);
    function PostApiTextTransformRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostApiTextTransformQueryParams)
    ], PostApiTextTransformRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostApiTextTransformHeaders)
    ], PostApiTextTransformRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostApiTextTransformRequests)
    ], PostApiTextTransformRequest.prototype, "request", void 0);
    return PostApiTextTransformRequest;
}(utils_1.SpeakeasyBase));
exports.PostApiTextTransformRequest = PostApiTextTransformRequest;
var PostApiTextTransformResponse = /** @class */ (function (_super) {
    __extends(PostApiTextTransformResponse, _super);
    function PostApiTextTransformResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostApiTextTransformResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostApiTextTransformResponse.prototype, "statusCode", void 0);
    return PostApiTextTransformResponse;
}(utils_1.SpeakeasyBase));
exports.PostApiTextTransformResponse = PostApiTextTransformResponse;

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
exports.CreateStyleGuideResponse = exports.CreateStyleGuideRequest = exports.CreateStyleGuideRequestBody = exports.CreateStyleGuideRequestBodyStyleguides = exports.CreateStyleGuidePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateStyleGuidePathParams = /** @class */ (function (_super) {
    __extends(CreateStyleGuidePathParams, _super);
    function CreateStyleGuidePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", Number)
    ], CreateStyleGuidePathParams.prototype, "projectId", void 0);
    return CreateStyleGuidePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateStyleGuidePathParams = CreateStyleGuidePathParams;
var CreateStyleGuideRequestBodyStyleguides = /** @class */ (function (_super) {
    __extends(CreateStyleGuideRequestBodyStyleguides, _super);
    function CreateStyleGuideRequestBodyStyleguides() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], CreateStyleGuideRequestBodyStyleguides.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=styleguides[]" }),
        __metadata("design:type", String)
    ], CreateStyleGuideRequestBodyStyleguides.prototype, "styleguides", void 0);
    return CreateStyleGuideRequestBodyStyleguides;
}(utils_1.SpeakeasyBase));
exports.CreateStyleGuideRequestBodyStyleguides = CreateStyleGuideRequestBodyStyleguides;
var CreateStyleGuideRequestBody = /** @class */ (function (_super) {
    __extends(CreateStyleGuideRequestBody, _super);
    function CreateStyleGuideRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", CreateStyleGuideRequestBodyStyleguides)
    ], CreateStyleGuideRequestBody.prototype, "styleguides", void 0);
    return CreateStyleGuideRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateStyleGuideRequestBody = CreateStyleGuideRequestBody;
var CreateStyleGuideRequest = /** @class */ (function (_super) {
    __extends(CreateStyleGuideRequest, _super);
    function CreateStyleGuideRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateStyleGuidePathParams)
    ], CreateStyleGuideRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreateStyleGuideRequestBody)
    ], CreateStyleGuideRequest.prototype, "request", void 0);
    return CreateStyleGuideRequest;
}(utils_1.SpeakeasyBase));
exports.CreateStyleGuideRequest = CreateStyleGuideRequest;
var CreateStyleGuideResponse = /** @class */ (function (_super) {
    __extends(CreateStyleGuideResponse, _super);
    function CreateStyleGuideResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateStyleGuideResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], CreateStyleGuideResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateStyleGuideResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.StyleGuideList)
    ], CreateStyleGuideResponse.prototype, "styleGuideList", void 0);
    return CreateStyleGuideResponse;
}(utils_1.SpeakeasyBase));
exports.CreateStyleGuideResponse = CreateStyleGuideResponse;

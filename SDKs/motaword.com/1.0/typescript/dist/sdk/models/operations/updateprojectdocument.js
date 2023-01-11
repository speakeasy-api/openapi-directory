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
exports.UpdateProjectDocumentResponse = exports.UpdateProjectDocumentRequest = exports.UpdateProjectDocumentRequestBody = exports.UpdateProjectDocumentRequestBodyDocuments = exports.UpdateProjectDocumentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateProjectDocumentPathParams = /** @class */ (function (_super) {
    __extends(UpdateProjectDocumentPathParams, _super);
    function UpdateProjectDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=documentId" }),
        __metadata("design:type", Number)
    ], UpdateProjectDocumentPathParams.prototype, "documentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", Number)
    ], UpdateProjectDocumentPathParams.prototype, "projectId", void 0);
    return UpdateProjectDocumentPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateProjectDocumentPathParams = UpdateProjectDocumentPathParams;
var UpdateProjectDocumentRequestBodyDocuments = /** @class */ (function (_super) {
    __extends(UpdateProjectDocumentRequestBodyDocuments, _super);
    function UpdateProjectDocumentRequestBodyDocuments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UpdateProjectDocumentRequestBodyDocuments.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=documents" }),
        __metadata("design:type", String)
    ], UpdateProjectDocumentRequestBodyDocuments.prototype, "documents", void 0);
    return UpdateProjectDocumentRequestBodyDocuments;
}(utils_1.SpeakeasyBase));
exports.UpdateProjectDocumentRequestBodyDocuments = UpdateProjectDocumentRequestBodyDocuments;
var UpdateProjectDocumentRequestBody = /** @class */ (function (_super) {
    __extends(UpdateProjectDocumentRequestBody, _super);
    function UpdateProjectDocumentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", UpdateProjectDocumentRequestBodyDocuments)
    ], UpdateProjectDocumentRequestBody.prototype, "documents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=schemes" }),
        __metadata("design:type", String)
    ], UpdateProjectDocumentRequestBody.prototype, "schemes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=source-link;json=true" }),
        __metadata("design:type", shared.LinkedSourceDocument)
    ], UpdateProjectDocumentRequestBody.prototype, "sourceLink", void 0);
    return UpdateProjectDocumentRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateProjectDocumentRequestBody = UpdateProjectDocumentRequestBody;
var UpdateProjectDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateProjectDocumentRequest, _super);
    function UpdateProjectDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateProjectDocumentPathParams)
    ], UpdateProjectDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateProjectDocumentRequestBody)
    ], UpdateProjectDocumentRequest.prototype, "request", void 0);
    return UpdateProjectDocumentRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateProjectDocumentRequest = UpdateProjectDocumentRequest;
var UpdateProjectDocumentResponse = /** @class */ (function (_super) {
    __extends(UpdateProjectDocumentResponse, _super);
    function UpdateProjectDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateProjectDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Document)
    ], UpdateProjectDocumentResponse.prototype, "document", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], UpdateProjectDocumentResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateProjectDocumentResponse.prototype, "statusCode", void 0);
    return UpdateProjectDocumentResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateProjectDocumentResponse = UpdateProjectDocumentResponse;

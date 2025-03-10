"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ReposGenerateReleaseNotesResponse = exports.ReposGenerateReleaseNotesRequest = exports.ReposGenerateReleaseNotesRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
var ReposGenerateReleaseNotesRequestBody = /** @class */ (function (_super) {
    __extends(ReposGenerateReleaseNotesRequestBody, _super);
    function ReposGenerateReleaseNotesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "configuration_file_path" }),
        __metadata("design:type", String)
    ], ReposGenerateReleaseNotesRequestBody.prototype, "configurationFilePath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "previous_tag_name" }),
        __metadata("design:type", String)
    ], ReposGenerateReleaseNotesRequestBody.prototype, "previousTagName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "tag_name" }),
        __metadata("design:type", String)
    ], ReposGenerateReleaseNotesRequestBody.prototype, "tagName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "target_commitish" }),
        __metadata("design:type", String)
    ], ReposGenerateReleaseNotesRequestBody.prototype, "targetCommitish", void 0);
    return ReposGenerateReleaseNotesRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReposGenerateReleaseNotesRequestBody = ReposGenerateReleaseNotesRequestBody;
var ReposGenerateReleaseNotesRequest = /** @class */ (function (_super) {
    __extends(ReposGenerateReleaseNotesRequest, _super);
    function ReposGenerateReleaseNotesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposGenerateReleaseNotesRequestBody)
    ], ReposGenerateReleaseNotesRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=owner",
        }),
        __metadata("design:type", String)
    ], ReposGenerateReleaseNotesRequest.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=repo",
        }),
        __metadata("design:type", String)
    ], ReposGenerateReleaseNotesRequest.prototype, "repo", void 0);
    return ReposGenerateReleaseNotesRequest;
}(utils_1.SpeakeasyBase));
exports.ReposGenerateReleaseNotesRequest = ReposGenerateReleaseNotesRequest;
var ReposGenerateReleaseNotesResponse = /** @class */ (function (_super) {
    __extends(ReposGenerateReleaseNotesResponse, _super);
    function ReposGenerateReleaseNotesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposGenerateReleaseNotesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposGenerateReleaseNotesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReposGenerateReleaseNotesResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReposGenerateReleaseNotesResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ReleaseNotesContent)
    ], ReposGenerateReleaseNotesResponse.prototype, "releaseNotesContent", void 0);
    return ReposGenerateReleaseNotesResponse;
}(utils_1.SpeakeasyBase));
exports.ReposGenerateReleaseNotesResponse = ReposGenerateReleaseNotesResponse;

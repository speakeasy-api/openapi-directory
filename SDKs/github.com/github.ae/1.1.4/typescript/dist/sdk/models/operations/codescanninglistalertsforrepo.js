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
exports.CodeScanningListAlertsForRepoResponse = exports.CodeScanningListAlertsForRepo503ApplicationJSON = exports.CodeScanningListAlertsForRepoRequest = exports.CodeScanningListAlertsForRepoSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * The property by which to sort the results.
 */
var CodeScanningListAlertsForRepoSortEnum;
(function (CodeScanningListAlertsForRepoSortEnum) {
    CodeScanningListAlertsForRepoSortEnum["Created"] = "created";
    CodeScanningListAlertsForRepoSortEnum["Updated"] = "updated";
})(CodeScanningListAlertsForRepoSortEnum = exports.CodeScanningListAlertsForRepoSortEnum || (exports.CodeScanningListAlertsForRepoSortEnum = {}));
var CodeScanningListAlertsForRepoRequest = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertsForRepoRequest, _super);
    function CodeScanningListAlertsForRepoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=direction",
        }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepoRequest.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=owner",
        }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepoRequest.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CodeScanningListAlertsForRepoRequest.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=per_page",
        }),
        __metadata("design:type", Number)
    ], CodeScanningListAlertsForRepoRequest.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ref" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepoRequest.prototype, "ref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=repo",
        }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepoRequest.prototype, "repo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepoRequest.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepoRequest.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=tool_guid",
        }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepoRequest.prototype, "toolGuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=tool_name",
        }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepoRequest.prototype, "toolName", void 0);
    return CodeScanningListAlertsForRepoRequest;
}(utils_1.SpeakeasyBase));
exports.CodeScanningListAlertsForRepoRequest = CodeScanningListAlertsForRepoRequest;
/**
 * Service unavailable
 */
var CodeScanningListAlertsForRepo503ApplicationJSON = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertsForRepo503ApplicationJSON, _super);
    function CodeScanningListAlertsForRepo503ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepo503ApplicationJSON.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "documentation_url" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepo503ApplicationJSON.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepo503ApplicationJSON.prototype, "message", void 0);
    return CodeScanningListAlertsForRepo503ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.CodeScanningListAlertsForRepo503ApplicationJSON = CodeScanningListAlertsForRepo503ApplicationJSON;
var CodeScanningListAlertsForRepoResponse = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertsForRepoResponse, _super);
    function CodeScanningListAlertsForRepoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CodeScanningListAlertsForRepoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CodeScanningListAlertsForRepoResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CodeScanningListAlertsForRepoResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], CodeScanningListAlertsForRepoResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.CodeScanningAlertItems }),
        __metadata("design:type", Array)
    ], CodeScanningListAlertsForRepoResponse.prototype, "codeScanningAlertItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CodeScanningListAlertsForRepo503ApplicationJSON)
    ], CodeScanningListAlertsForRepoResponse.prototype, "codeScanningListAlertsForRepo503ApplicationJSONObject", void 0);
    return CodeScanningListAlertsForRepoResponse;
}(utils_1.SpeakeasyBase));
exports.CodeScanningListAlertsForRepoResponse = CodeScanningListAlertsForRepoResponse;

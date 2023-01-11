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
exports.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse = exports.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest = exports.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity = exports.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams = exports.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=definitionId" }),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams.prototype, "definitionId", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams;
}(utils_1.SpeakeasyBase));
exports.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams = GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams;
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams.prototype, "after", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams.prototype, "limit", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams = GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams;
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity.prototype, "developerHapikey", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity = GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity;
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest.prototype, "security", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest;
}(utils_1.SpeakeasyBase));
exports.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest = GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest;
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CollectionResponseActionRevisionForwardPaging)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse.prototype, "collectionResponseActionRevisionForwardPaging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse.prototype, "statusCode", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse;
}(utils_1.SpeakeasyBase));
exports.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse = GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse;

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
exports.GetAutomationV4ActionsAppIdGetPageResponse = exports.GetAutomationV4ActionsAppIdGetPageRequest = exports.GetAutomationV4ActionsAppIdGetPageSecurity = exports.GetAutomationV4ActionsAppIdGetPageQueryParams = exports.GetAutomationV4ActionsAppIdGetPagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAutomationV4ActionsAppIdGetPagePathParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdGetPagePathParams, _super);
    function GetAutomationV4ActionsAppIdGetPagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdGetPagePathParams.prototype, "appId", void 0);
    return GetAutomationV4ActionsAppIdGetPagePathParams;
}(utils_1.SpeakeasyBase));
exports.GetAutomationV4ActionsAppIdGetPagePathParams = GetAutomationV4ActionsAppIdGetPagePathParams;
var GetAutomationV4ActionsAppIdGetPageQueryParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdGetPageQueryParams, _super);
    function GetAutomationV4ActionsAppIdGetPageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdGetPageQueryParams.prototype, "after", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], GetAutomationV4ActionsAppIdGetPageQueryParams.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdGetPageQueryParams.prototype, "limit", void 0);
    return GetAutomationV4ActionsAppIdGetPageQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAutomationV4ActionsAppIdGetPageQueryParams = GetAutomationV4ActionsAppIdGetPageQueryParams;
var GetAutomationV4ActionsAppIdGetPageSecurity = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdGetPageSecurity, _super);
    function GetAutomationV4ActionsAppIdGetPageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetAutomationV4ActionsAppIdGetPageSecurity.prototype, "developerHapikey", void 0);
    return GetAutomationV4ActionsAppIdGetPageSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAutomationV4ActionsAppIdGetPageSecurity = GetAutomationV4ActionsAppIdGetPageSecurity;
var GetAutomationV4ActionsAppIdGetPageRequest = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdGetPageRequest, _super);
    function GetAutomationV4ActionsAppIdGetPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAutomationV4ActionsAppIdGetPagePathParams)
    ], GetAutomationV4ActionsAppIdGetPageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAutomationV4ActionsAppIdGetPageQueryParams)
    ], GetAutomationV4ActionsAppIdGetPageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAutomationV4ActionsAppIdGetPageSecurity)
    ], GetAutomationV4ActionsAppIdGetPageRequest.prototype, "security", void 0);
    return GetAutomationV4ActionsAppIdGetPageRequest;
}(utils_1.SpeakeasyBase));
exports.GetAutomationV4ActionsAppIdGetPageRequest = GetAutomationV4ActionsAppIdGetPageRequest;
var GetAutomationV4ActionsAppIdGetPageResponse = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdGetPageResponse, _super);
    function GetAutomationV4ActionsAppIdGetPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetAutomationV4ActionsAppIdGetPageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CollectionResponseExtensionActionDefinitionForwardPaging)
    ], GetAutomationV4ActionsAppIdGetPageResponse.prototype, "collectionResponseExtensionActionDefinitionForwardPaging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdGetPageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdGetPageResponse.prototype, "statusCode", void 0);
    return GetAutomationV4ActionsAppIdGetPageResponse;
}(utils_1.SpeakeasyBase));
exports.GetAutomationV4ActionsAppIdGetPageResponse = GetAutomationV4ActionsAppIdGetPageResponse;

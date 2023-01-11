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
exports.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse = exports.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest = exports.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity = exports.DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams = /** @class */ (function (_super) {
    __extends(DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams, _super);
    function DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=definitionId" }),
        __metadata("design:type", String)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams.prototype, "definitionId", void 0);
    return DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams = DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams;
var DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity = /** @class */ (function (_super) {
    __extends(DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity, _super);
    function DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity.prototype, "developerHapikey", void 0);
    return DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity = DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity;
var DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest = /** @class */ (function (_super) {
    __extends(DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest, _super);
    function DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest.prototype, "security", void 0);
    return DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest = DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest;
var DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse = /** @class */ (function (_super) {
    __extends(DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse, _super);
    function DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse.prototype, "statusCode", void 0);
    return DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse = DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse;

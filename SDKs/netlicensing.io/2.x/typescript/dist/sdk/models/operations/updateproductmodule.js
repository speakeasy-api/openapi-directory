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
exports.UpdateProductModuleResponse = exports.UpdateProductModuleRequest = exports.UpdateProductModuleSecurity = exports.UpdateProductModuleRequestBody = exports.UpdateProductModuleRequestBodyNodeSecretModeEnum = exports.UpdateProductModuleRequestBodyLicenseTemplateEnum = exports.UpdateProductModulePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateProductModulePathParams = /** @class */ (function (_super) {
    __extends(UpdateProductModulePathParams, _super);
    function UpdateProductModulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=productModuleNumber" }),
        __metadata("design:type", String)
    ], UpdateProductModulePathParams.prototype, "productModuleNumber", void 0);
    return UpdateProductModulePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateProductModulePathParams = UpdateProductModulePathParams;
var UpdateProductModuleRequestBodyLicenseTemplateEnum;
(function (UpdateProductModuleRequestBodyLicenseTemplateEnum) {
    UpdateProductModuleRequestBodyLicenseTemplateEnum["Timevolume"] = "TIMEVOLUME";
    UpdateProductModuleRequestBodyLicenseTemplateEnum["Feature"] = "FEATURE";
})(UpdateProductModuleRequestBodyLicenseTemplateEnum = exports.UpdateProductModuleRequestBodyLicenseTemplateEnum || (exports.UpdateProductModuleRequestBodyLicenseTemplateEnum = {}));
var UpdateProductModuleRequestBodyNodeSecretModeEnum;
(function (UpdateProductModuleRequestBodyNodeSecretModeEnum) {
    UpdateProductModuleRequestBodyNodeSecretModeEnum["Predefined"] = "PREDEFINED";
    UpdateProductModuleRequestBodyNodeSecretModeEnum["Client"] = "CLIENT";
})(UpdateProductModuleRequestBodyNodeSecretModeEnum = exports.UpdateProductModuleRequestBodyNodeSecretModeEnum || (exports.UpdateProductModuleRequestBodyNodeSecretModeEnum = {}));
var UpdateProductModuleRequestBody = /** @class */ (function (_super) {
    __extends(UpdateProductModuleRequestBody, _super);
    function UpdateProductModuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], UpdateProductModuleRequestBody.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=licenseTemplate;" }),
        __metadata("design:type", Array)
    ], UpdateProductModuleRequestBody.prototype, "licenseTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=licensingModel;" }),
        __metadata("design:type", String)
    ], UpdateProductModuleRequestBody.prototype, "licensingModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=maxCheckoutValidity;" }),
        __metadata("design:type", Number)
    ], UpdateProductModuleRequestBody.prototype, "maxCheckoutValidity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], UpdateProductModuleRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=nodeSecretMode;" }),
        __metadata("design:type", Array)
    ], UpdateProductModuleRequestBody.prototype, "nodeSecretMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], UpdateProductModuleRequestBody.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=redThreshold;" }),
        __metadata("design:type", Number)
    ], UpdateProductModuleRequestBody.prototype, "redThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=yellowThreshold;" }),
        __metadata("design:type", Number)
    ], UpdateProductModuleRequestBody.prototype, "yellowThreshold", void 0);
    return UpdateProductModuleRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateProductModuleRequestBody = UpdateProductModuleRequestBody;
var UpdateProductModuleSecurity = /** @class */ (function (_super) {
    __extends(UpdateProductModuleSecurity, _super);
    function UpdateProductModuleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], UpdateProductModuleSecurity.prototype, "basicAuth", void 0);
    return UpdateProductModuleSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateProductModuleSecurity = UpdateProductModuleSecurity;
var UpdateProductModuleRequest = /** @class */ (function (_super) {
    __extends(UpdateProductModuleRequest, _super);
    function UpdateProductModuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateProductModulePathParams)
    ], UpdateProductModuleRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateProductModuleRequestBody)
    ], UpdateProductModuleRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateProductModuleSecurity)
    ], UpdateProductModuleRequest.prototype, "security", void 0);
    return UpdateProductModuleRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateProductModuleRequest = UpdateProductModuleRequest;
var UpdateProductModuleResponse = /** @class */ (function (_super) {
    __extends(UpdateProductModuleResponse, _super);
    function UpdateProductModuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateProductModuleResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateProductModuleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateProductModuleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateProductModuleResponse.prototype, "netlicensing", void 0);
    return UpdateProductModuleResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateProductModuleResponse = UpdateProductModuleResponse;

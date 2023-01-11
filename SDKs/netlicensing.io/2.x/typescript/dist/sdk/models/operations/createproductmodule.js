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
exports.CreateProductModuleResponse = exports.CreateProductModuleRequest = exports.CreateProductModuleSecurity = exports.CreateProductModuleRequestBody = exports.CreateProductModuleRequestBodyNodeSecretModeEnum = exports.CreateProductModuleRequestBodyLicenseTemplateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateProductModuleRequestBodyLicenseTemplateEnum;
(function (CreateProductModuleRequestBodyLicenseTemplateEnum) {
    CreateProductModuleRequestBodyLicenseTemplateEnum["Timevolume"] = "TIMEVOLUME";
    CreateProductModuleRequestBodyLicenseTemplateEnum["Feature"] = "FEATURE";
})(CreateProductModuleRequestBodyLicenseTemplateEnum = exports.CreateProductModuleRequestBodyLicenseTemplateEnum || (exports.CreateProductModuleRequestBodyLicenseTemplateEnum = {}));
var CreateProductModuleRequestBodyNodeSecretModeEnum;
(function (CreateProductModuleRequestBodyNodeSecretModeEnum) {
    CreateProductModuleRequestBodyNodeSecretModeEnum["Predefined"] = "PREDEFINED";
    CreateProductModuleRequestBodyNodeSecretModeEnum["Client"] = "CLIENT";
})(CreateProductModuleRequestBodyNodeSecretModeEnum = exports.CreateProductModuleRequestBodyNodeSecretModeEnum || (exports.CreateProductModuleRequestBodyNodeSecretModeEnum = {}));
var CreateProductModuleRequestBody = /** @class */ (function (_super) {
    __extends(CreateProductModuleRequestBody, _super);
    function CreateProductModuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], CreateProductModuleRequestBody.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=licenseTemplate;" }),
        __metadata("design:type", Array)
    ], CreateProductModuleRequestBody.prototype, "licenseTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=licensingModel;" }),
        __metadata("design:type", String)
    ], CreateProductModuleRequestBody.prototype, "licensingModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=maxCheckoutValidity;" }),
        __metadata("design:type", Number)
    ], CreateProductModuleRequestBody.prototype, "maxCheckoutValidity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], CreateProductModuleRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=nodeSecretMode;" }),
        __metadata("design:type", Array)
    ], CreateProductModuleRequestBody.prototype, "nodeSecretMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], CreateProductModuleRequestBody.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=productNumber;" }),
        __metadata("design:type", String)
    ], CreateProductModuleRequestBody.prototype, "productNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=redThreshold;" }),
        __metadata("design:type", Number)
    ], CreateProductModuleRequestBody.prototype, "redThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=yellowThreshold;" }),
        __metadata("design:type", Number)
    ], CreateProductModuleRequestBody.prototype, "yellowThreshold", void 0);
    return CreateProductModuleRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateProductModuleRequestBody = CreateProductModuleRequestBody;
var CreateProductModuleSecurity = /** @class */ (function (_super) {
    __extends(CreateProductModuleSecurity, _super);
    function CreateProductModuleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], CreateProductModuleSecurity.prototype, "basicAuth", void 0);
    return CreateProductModuleSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateProductModuleSecurity = CreateProductModuleSecurity;
var CreateProductModuleRequest = /** @class */ (function (_super) {
    __extends(CreateProductModuleRequest, _super);
    function CreateProductModuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateProductModuleRequestBody)
    ], CreateProductModuleRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateProductModuleSecurity)
    ], CreateProductModuleRequest.prototype, "security", void 0);
    return CreateProductModuleRequest;
}(utils_1.SpeakeasyBase));
exports.CreateProductModuleRequest = CreateProductModuleRequest;
var CreateProductModuleResponse = /** @class */ (function (_super) {
    __extends(CreateProductModuleResponse, _super);
    function CreateProductModuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreateProductModuleResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateProductModuleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateProductModuleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateProductModuleResponse.prototype, "netlicensing", void 0);
    return CreateProductModuleResponse;
}(utils_1.SpeakeasyBase));
exports.CreateProductModuleResponse = CreateProductModuleResponse;

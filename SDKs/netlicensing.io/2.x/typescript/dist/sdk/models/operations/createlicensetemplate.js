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
exports.CreateLicenseTemplateResponse = exports.CreateLicenseTemplateRequestBody = exports.CreateLicenseTemplateSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateLicenseTemplateSecurity = /** @class */ (function (_super) {
    __extends(CreateLicenseTemplateSecurity, _super);
    function CreateLicenseTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=http;subtype=basic;name=password",
        }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateSecurity.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=http;subtype=basic;name=username",
        }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateSecurity.prototype, "username", void 0);
    return CreateLicenseTemplateSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateLicenseTemplateSecurity = CreateLicenseTemplateSecurity;
var CreateLicenseTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateLicenseTemplateRequestBody, _super);
    function CreateLicenseTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateLicenseTemplateRequestBody.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=automatic" }),
        __metadata("design:type", Boolean)
    ], CreateLicenseTemplateRequestBody.prototype, "automatic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=currency" }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateRequestBody.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=hidden" }),
        __metadata("design:type", Boolean)
    ], CreateLicenseTemplateRequestBody.prototype, "hidden", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=hideLicenses" }),
        __metadata("design:type", Boolean)
    ], CreateLicenseTemplateRequestBody.prototype, "hideLicenses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=licenseType" }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateRequestBody.prototype, "licenseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=maxSessions" }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateRequestBody.prototype, "maxSessions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=name" }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=number" }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateRequestBody.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=price" }),
        __metadata("design:type", Number)
    ], CreateLicenseTemplateRequestBody.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=productModuleNumber" }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateRequestBody.prototype, "productModuleNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=quantity" }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateRequestBody.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=quota" }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateRequestBody.prototype, "quota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=timeVolume" }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateRequestBody.prototype, "timeVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=timeVolumePeriod" }),
        __metadata("design:type", String)
    ], CreateLicenseTemplateRequestBody.prototype, "timeVolumePeriod", void 0);
    return CreateLicenseTemplateRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateLicenseTemplateRequestBody = CreateLicenseTemplateRequestBody;
var CreateLicenseTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateLicenseTemplateResponse, _super);
    function CreateLicenseTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreateLicenseTemplateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLicenseTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateLicenseTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLicenseTemplateResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Netlicensing)
    ], CreateLicenseTemplateResponse.prototype, "netlicensing", void 0);
    return CreateLicenseTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.CreateLicenseTemplateResponse = CreateLicenseTemplateResponse;

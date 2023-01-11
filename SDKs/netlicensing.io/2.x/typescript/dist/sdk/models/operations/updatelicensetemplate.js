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
exports.UpdateLicenseTemplateResponse = exports.UpdateLicenseTemplateRequest = exports.UpdateLicenseTemplateSecurity = exports.UpdateLicenseTemplateRequestBody = exports.UpdateLicenseTemplatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateLicenseTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateLicenseTemplatePathParams, _super);
    function UpdateLicenseTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=licenseTemplateNumber" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplatePathParams.prototype, "licenseTemplateNumber", void 0);
    return UpdateLicenseTemplatePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateLicenseTemplatePathParams = UpdateLicenseTemplatePathParams;
var UpdateLicenseTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLicenseTemplateRequestBody, _super);
    function UpdateLicenseTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], UpdateLicenseTemplateRequestBody.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=automatic;" }),
        __metadata("design:type", Boolean)
    ], UpdateLicenseTemplateRequestBody.prototype, "automatic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=currency;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=hidden;" }),
        __metadata("design:type", Boolean)
    ], UpdateLicenseTemplateRequestBody.prototype, "hidden", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=hideLicenses;" }),
        __metadata("design:type", Boolean)
    ], UpdateLicenseTemplateRequestBody.prototype, "hideLicenses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=licenseType;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "licenseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=maxSessions;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "maxSessions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=price;" }),
        __metadata("design:type", Number)
    ], UpdateLicenseTemplateRequestBody.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=quantity;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=quota;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "quota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=timeVolume;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "timeVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=timeVolumePeriod;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "timeVolumePeriod", void 0);
    return UpdateLicenseTemplateRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateLicenseTemplateRequestBody = UpdateLicenseTemplateRequestBody;
var UpdateLicenseTemplateSecurity = /** @class */ (function (_super) {
    __extends(UpdateLicenseTemplateSecurity, _super);
    function UpdateLicenseTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], UpdateLicenseTemplateSecurity.prototype, "basicAuth", void 0);
    return UpdateLicenseTemplateSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateLicenseTemplateSecurity = UpdateLicenseTemplateSecurity;
var UpdateLicenseTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateLicenseTemplateRequest, _super);
    function UpdateLicenseTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateLicenseTemplatePathParams)
    ], UpdateLicenseTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateLicenseTemplateRequestBody)
    ], UpdateLicenseTemplateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateLicenseTemplateSecurity)
    ], UpdateLicenseTemplateRequest.prototype, "security", void 0);
    return UpdateLicenseTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateLicenseTemplateRequest = UpdateLicenseTemplateRequest;
var UpdateLicenseTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateLicenseTemplateResponse, _super);
    function UpdateLicenseTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateLicenseTemplateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateLicenseTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLicenseTemplateResponse.prototype, "netlicensing", void 0);
    return UpdateLicenseTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateLicenseTemplateResponse = UpdateLicenseTemplateResponse;

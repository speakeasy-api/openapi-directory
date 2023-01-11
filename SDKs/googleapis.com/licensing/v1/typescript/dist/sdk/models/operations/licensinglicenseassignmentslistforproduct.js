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
exports.LicensingLicenseAssignmentsListForProductResponse = exports.LicensingLicenseAssignmentsListForProductRequest = exports.LicensingLicenseAssignmentsListForProductSecurity = exports.LicensingLicenseAssignmentsListForProductQueryParams = exports.LicensingLicenseAssignmentsListForProductPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LicensingLicenseAssignmentsListForProductPathParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsListForProductPathParams, _super);
    function LicensingLicenseAssignmentsListForProductPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductPathParams.prototype, "productId", void 0);
    return LicensingLicenseAssignmentsListForProductPathParams;
}(utils_1.SpeakeasyBase));
exports.LicensingLicenseAssignmentsListForProductPathParams = LicensingLicenseAssignmentsListForProductPathParams;
var LicensingLicenseAssignmentsListForProductQueryParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsListForProductQueryParams, _super);
    function LicensingLicenseAssignmentsListForProductQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "customerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductQueryParams.prototype, "uploadProtocol", void 0);
    return LicensingLicenseAssignmentsListForProductQueryParams;
}(utils_1.SpeakeasyBase));
exports.LicensingLicenseAssignmentsListForProductQueryParams = LicensingLicenseAssignmentsListForProductQueryParams;
var LicensingLicenseAssignmentsListForProductSecurity = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsListForProductSecurity, _super);
    function LicensingLicenseAssignmentsListForProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LicensingLicenseAssignmentsListForProductSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LicensingLicenseAssignmentsListForProductSecurity.prototype, "oauth2c", void 0);
    return LicensingLicenseAssignmentsListForProductSecurity;
}(utils_1.SpeakeasyBase));
exports.LicensingLicenseAssignmentsListForProductSecurity = LicensingLicenseAssignmentsListForProductSecurity;
var LicensingLicenseAssignmentsListForProductRequest = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsListForProductRequest, _super);
    function LicensingLicenseAssignmentsListForProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LicensingLicenseAssignmentsListForProductPathParams)
    ], LicensingLicenseAssignmentsListForProductRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LicensingLicenseAssignmentsListForProductQueryParams)
    ], LicensingLicenseAssignmentsListForProductRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LicensingLicenseAssignmentsListForProductSecurity)
    ], LicensingLicenseAssignmentsListForProductRequest.prototype, "security", void 0);
    return LicensingLicenseAssignmentsListForProductRequest;
}(utils_1.SpeakeasyBase));
exports.LicensingLicenseAssignmentsListForProductRequest = LicensingLicenseAssignmentsListForProductRequest;
var LicensingLicenseAssignmentsListForProductResponse = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsListForProductResponse, _super);
    function LicensingLicenseAssignmentsListForProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LicenseAssignmentList)
    ], LicensingLicenseAssignmentsListForProductResponse.prototype, "licenseAssignmentList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LicensingLicenseAssignmentsListForProductResponse.prototype, "statusCode", void 0);
    return LicensingLicenseAssignmentsListForProductResponse;
}(utils_1.SpeakeasyBase));
exports.LicensingLicenseAssignmentsListForProductResponse = LicensingLicenseAssignmentsListForProductResponse;

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
exports.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse = exports.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest = exports.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity = exports.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams = exports.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=migratingVm" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams.prototype, "migratingVm", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams;
}(utils_1.SpeakeasyBase));
exports.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams = VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams;
var VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams;
}(utils_1.SpeakeasyBase));
exports.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams = VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams;
var VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity;
}(utils_1.SpeakeasyBase));
exports.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity = VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity;
var VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest;
}(utils_1.SpeakeasyBase));
exports.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest = VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest;
var VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse;
}(utils_1.SpeakeasyBase));
exports.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse = VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse;

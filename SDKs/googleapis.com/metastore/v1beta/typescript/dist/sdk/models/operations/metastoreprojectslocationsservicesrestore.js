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
exports.MetastoreProjectsLocationsServicesRestoreResponse = exports.MetastoreProjectsLocationsServicesRestoreRequest = exports.MetastoreProjectsLocationsServicesRestoreSecurity = exports.MetastoreProjectsLocationsServicesRestoreQueryParams = exports.MetastoreProjectsLocationsServicesRestorePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MetastoreProjectsLocationsServicesRestorePathParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesRestorePathParams, _super);
    function MetastoreProjectsLocationsServicesRestorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=service" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestorePathParams.prototype, "service", void 0);
    return MetastoreProjectsLocationsServicesRestorePathParams;
}(utils_1.SpeakeasyBase));
exports.MetastoreProjectsLocationsServicesRestorePathParams = MetastoreProjectsLocationsServicesRestorePathParams;
var MetastoreProjectsLocationsServicesRestoreQueryParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesRestoreQueryParams, _super);
    function MetastoreProjectsLocationsServicesRestoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreQueryParams.prototype, "uploadProtocol", void 0);
    return MetastoreProjectsLocationsServicesRestoreQueryParams;
}(utils_1.SpeakeasyBase));
exports.MetastoreProjectsLocationsServicesRestoreQueryParams = MetastoreProjectsLocationsServicesRestoreQueryParams;
var MetastoreProjectsLocationsServicesRestoreSecurity = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesRestoreSecurity, _super);
    function MetastoreProjectsLocationsServicesRestoreSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MetastoreProjectsLocationsServicesRestoreSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MetastoreProjectsLocationsServicesRestoreSecurity.prototype, "oauth2c", void 0);
    return MetastoreProjectsLocationsServicesRestoreSecurity;
}(utils_1.SpeakeasyBase));
exports.MetastoreProjectsLocationsServicesRestoreSecurity = MetastoreProjectsLocationsServicesRestoreSecurity;
var MetastoreProjectsLocationsServicesRestoreRequest = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesRestoreRequest, _super);
    function MetastoreProjectsLocationsServicesRestoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MetastoreProjectsLocationsServicesRestorePathParams)
    ], MetastoreProjectsLocationsServicesRestoreRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MetastoreProjectsLocationsServicesRestoreQueryParams)
    ], MetastoreProjectsLocationsServicesRestoreRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RestoreServiceRequest)
    ], MetastoreProjectsLocationsServicesRestoreRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MetastoreProjectsLocationsServicesRestoreSecurity)
    ], MetastoreProjectsLocationsServicesRestoreRequest.prototype, "security", void 0);
    return MetastoreProjectsLocationsServicesRestoreRequest;
}(utils_1.SpeakeasyBase));
exports.MetastoreProjectsLocationsServicesRestoreRequest = MetastoreProjectsLocationsServicesRestoreRequest;
var MetastoreProjectsLocationsServicesRestoreResponse = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesRestoreResponse, _super);
    function MetastoreProjectsLocationsServicesRestoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesRestoreResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], MetastoreProjectsLocationsServicesRestoreResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesRestoreResponse.prototype, "statusCode", void 0);
    return MetastoreProjectsLocationsServicesRestoreResponse;
}(utils_1.SpeakeasyBase));
exports.MetastoreProjectsLocationsServicesRestoreResponse = MetastoreProjectsLocationsServicesRestoreResponse;

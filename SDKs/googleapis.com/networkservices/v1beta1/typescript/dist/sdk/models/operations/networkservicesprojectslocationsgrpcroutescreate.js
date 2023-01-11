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
exports.NetworkservicesProjectsLocationsGrpcRoutesCreateResponse = exports.NetworkservicesProjectsLocationsGrpcRoutesCreateRequest = exports.NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity = exports.NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams = exports.NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams, _super);
    function NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams.prototype, "parent", void 0);
    return NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams = NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams;
var NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams, _super);
    function NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=grpcRouteId" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "grpcRouteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams = NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams;
var NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity, _super);
    function NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity.prototype, "oauth2c", void 0);
    return NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity = NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity;
var NetworkservicesProjectsLocationsGrpcRoutesCreateRequest = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsGrpcRoutesCreateRequest, _super);
    function NetworkservicesProjectsLocationsGrpcRoutesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GrpcRouteInput)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateRequest.prototype, "security", void 0);
    return NetworkservicesProjectsLocationsGrpcRoutesCreateRequest;
}(utils_1.SpeakeasyBase));
exports.NetworkservicesProjectsLocationsGrpcRoutesCreateRequest = NetworkservicesProjectsLocationsGrpcRoutesCreateRequest;
var NetworkservicesProjectsLocationsGrpcRoutesCreateResponse = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsGrpcRoutesCreateResponse, _super);
    function NetworkservicesProjectsLocationsGrpcRoutesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsGrpcRoutesCreateResponse.prototype, "statusCode", void 0);
    return NetworkservicesProjectsLocationsGrpcRoutesCreateResponse;
}(utils_1.SpeakeasyBase));
exports.NetworkservicesProjectsLocationsGrpcRoutesCreateResponse = NetworkservicesProjectsLocationsGrpcRoutesCreateResponse;

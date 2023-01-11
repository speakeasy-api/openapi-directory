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
exports.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse = exports.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest = exports.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity = exports.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams = exports.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams.prototype, "name", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams = DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams;
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams = DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams;
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity.prototype, "oauth2c", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity = DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity;
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteQueryParams)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest.prototype, "security", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest = DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest;
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse.prototype, "statusCode", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse = DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse;

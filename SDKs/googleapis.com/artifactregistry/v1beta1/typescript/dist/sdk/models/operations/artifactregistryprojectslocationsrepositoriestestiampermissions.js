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
exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse = exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest = exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity = exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2 = exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1 = exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams = exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams;
}(utils_1.SpeakeasyBase));
exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams = ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams;
var ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams = ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams;
var ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1, _super);
    function ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1 = ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1;
var ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2, _super);
    function ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2 = ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2;
var ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity.prototype, "option2", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity;
}(utils_1.SpeakeasyBase));
exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity = ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity;
var ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest;
}(utils_1.SpeakeasyBase));
exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest = ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest;
var ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse;
}(utils_1.SpeakeasyBase));
exports.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse = ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse;

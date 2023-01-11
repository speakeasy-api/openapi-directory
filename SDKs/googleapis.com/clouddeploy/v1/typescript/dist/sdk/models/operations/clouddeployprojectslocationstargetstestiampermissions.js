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
exports.ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse = exports.ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest = exports.ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity = exports.ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams = exports.ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams, _super);
    function ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams;
}(utils_1.SpeakeasyBase));
exports.ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams = ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams;
var ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams, _super);
    function ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams = ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams;
var ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity, _super);
    function ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity;
}(utils_1.SpeakeasyBase));
exports.ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity = ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity;
var ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest, _super);
    function ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest.prototype, "security", void 0);
    return ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest;
}(utils_1.SpeakeasyBase));
exports.ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest = ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest;
var ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse, _super);
    function ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse;
}(utils_1.SpeakeasyBase));
exports.ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse = ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse;

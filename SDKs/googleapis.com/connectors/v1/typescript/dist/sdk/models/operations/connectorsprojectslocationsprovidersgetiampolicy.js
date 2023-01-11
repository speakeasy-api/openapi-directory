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
exports.ConnectorsProjectsLocationsProvidersGetIamPolicyResponse = exports.ConnectorsProjectsLocationsProvidersGetIamPolicyRequest = exports.ConnectorsProjectsLocationsProvidersGetIamPolicySecurity = exports.ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams = exports.ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams, _super);
    function ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams.prototype, "resource", void 0);
    return ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams = ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams;
var ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams, _super);
    function ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams = ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams;
var ConnectorsProjectsLocationsProvidersGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersGetIamPolicySecurity, _super);
    function ConnectorsProjectsLocationsProvidersGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return ConnectorsProjectsLocationsProvidersGetIamPolicySecurity;
}(utils_1.SpeakeasyBase));
exports.ConnectorsProjectsLocationsProvidersGetIamPolicySecurity = ConnectorsProjectsLocationsProvidersGetIamPolicySecurity;
var ConnectorsProjectsLocationsProvidersGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersGetIamPolicyRequest, _super);
    function ConnectorsProjectsLocationsProvidersGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersGetIamPolicySecurity)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyRequest.prototype, "security", void 0);
    return ConnectorsProjectsLocationsProvidersGetIamPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.ConnectorsProjectsLocationsProvidersGetIamPolicyRequest = ConnectorsProjectsLocationsProvidersGetIamPolicyRequest;
var ConnectorsProjectsLocationsProvidersGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersGetIamPolicyResponse, _super);
    function ConnectorsProjectsLocationsProvidersGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Policy)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsProvidersGetIamPolicyResponse.prototype, "statusCode", void 0);
    return ConnectorsProjectsLocationsProvidersGetIamPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.ConnectorsProjectsLocationsProvidersGetIamPolicyResponse = ConnectorsProjectsLocationsProvidersGetIamPolicyResponse;

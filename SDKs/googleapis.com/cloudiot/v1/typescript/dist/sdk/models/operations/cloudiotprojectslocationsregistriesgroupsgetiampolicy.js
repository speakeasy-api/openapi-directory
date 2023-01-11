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
exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse = exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest = exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity = exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2 = exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1 = exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams = exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams, _super);
    function CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams = CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams;
var CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams = CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams;
var CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1 = CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1;
var CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2 = CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2;
var CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity, _super);
    function CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity = CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity;
var CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest, _super);
    function CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest = CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest;
var CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse, _super);
    function CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Policy)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse = CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse;

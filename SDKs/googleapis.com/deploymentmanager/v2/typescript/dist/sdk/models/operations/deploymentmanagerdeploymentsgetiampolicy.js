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
exports.DeploymentmanagerDeploymentsGetIamPolicyResponse = exports.DeploymentmanagerDeploymentsGetIamPolicyRequest = exports.DeploymentmanagerDeploymentsGetIamPolicySecurity = exports.DeploymentmanagerDeploymentsGetIamPolicySecurityOption2 = exports.DeploymentmanagerDeploymentsGetIamPolicySecurityOption1 = exports.DeploymentmanagerDeploymentsGetIamPolicyQueryParams = exports.DeploymentmanagerDeploymentsGetIamPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeploymentmanagerDeploymentsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetIamPolicyPathParams, _super);
    function DeploymentmanagerDeploymentsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyPathParams.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyPathParams.prototype, "resource", void 0);
    return DeploymentmanagerDeploymentsGetIamPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsGetIamPolicyPathParams = DeploymentmanagerDeploymentsGetIamPolicyPathParams;
var DeploymentmanagerDeploymentsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetIamPolicyQueryParams, _super);
    function DeploymentmanagerDeploymentsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=optionsRequestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsGetIamPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsGetIamPolicyQueryParams = DeploymentmanagerDeploymentsGetIamPolicyQueryParams;
var DeploymentmanagerDeploymentsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetIamPolicySecurityOption1, _super);
    function DeploymentmanagerDeploymentsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsGetIamPolicySecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsGetIamPolicySecurityOption1 = DeploymentmanagerDeploymentsGetIamPolicySecurityOption1;
var DeploymentmanagerDeploymentsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetIamPolicySecurityOption2, _super);
    function DeploymentmanagerDeploymentsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsGetIamPolicySecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsGetIamPolicySecurityOption2 = DeploymentmanagerDeploymentsGetIamPolicySecurityOption2;
var DeploymentmanagerDeploymentsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetIamPolicySecurity, _super);
    function DeploymentmanagerDeploymentsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsGetIamPolicySecurityOption1)
    ], DeploymentmanagerDeploymentsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsGetIamPolicySecurityOption2)
    ], DeploymentmanagerDeploymentsGetIamPolicySecurity.prototype, "option2", void 0);
    return DeploymentmanagerDeploymentsGetIamPolicySecurity;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsGetIamPolicySecurity = DeploymentmanagerDeploymentsGetIamPolicySecurity;
var DeploymentmanagerDeploymentsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetIamPolicyRequest, _super);
    function DeploymentmanagerDeploymentsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerDeploymentsGetIamPolicyPathParams)
    ], DeploymentmanagerDeploymentsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerDeploymentsGetIamPolicyQueryParams)
    ], DeploymentmanagerDeploymentsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerDeploymentsGetIamPolicySecurity)
    ], DeploymentmanagerDeploymentsGetIamPolicyRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsGetIamPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsGetIamPolicyRequest = DeploymentmanagerDeploymentsGetIamPolicyRequest;
var DeploymentmanagerDeploymentsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetIamPolicyResponse, _super);
    function DeploymentmanagerDeploymentsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Policy)
    ], DeploymentmanagerDeploymentsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerDeploymentsGetIamPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsGetIamPolicyResponse = DeploymentmanagerDeploymentsGetIamPolicyResponse;

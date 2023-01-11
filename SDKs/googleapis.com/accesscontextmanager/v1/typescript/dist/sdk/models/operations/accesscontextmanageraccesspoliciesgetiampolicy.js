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
exports.AccesscontextmanagerAccessPoliciesGetIamPolicyResponse = exports.AccesscontextmanagerAccessPoliciesGetIamPolicyRequest = exports.AccesscontextmanagerAccessPoliciesGetIamPolicySecurity = exports.AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams = exports.AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams, _super);
    function AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams.prototype, "resource", void 0);
    return AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams = AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams;
var AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams, _super);
    function AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams = AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams;
var AccesscontextmanagerAccessPoliciesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesGetIamPolicySecurity, _super);
    function AccesscontextmanagerAccessPoliciesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerAccessPoliciesGetIamPolicySecurity;
}(utils_1.SpeakeasyBase));
exports.AccesscontextmanagerAccessPoliciesGetIamPolicySecurity = AccesscontextmanagerAccessPoliciesGetIamPolicySecurity;
var AccesscontextmanagerAccessPoliciesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesGetIamPolicyRequest, _super);
    function AccesscontextmanagerAccessPoliciesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesGetIamPolicySecurity)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyRequest.prototype, "security", void 0);
    return AccesscontextmanagerAccessPoliciesGetIamPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.AccesscontextmanagerAccessPoliciesGetIamPolicyRequest = AccesscontextmanagerAccessPoliciesGetIamPolicyRequest;
var AccesscontextmanagerAccessPoliciesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesGetIamPolicyResponse, _super);
    function AccesscontextmanagerAccessPoliciesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Policy)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerAccessPoliciesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerAccessPoliciesGetIamPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.AccesscontextmanagerAccessPoliciesGetIamPolicyResponse = AccesscontextmanagerAccessPoliciesGetIamPolicyResponse;

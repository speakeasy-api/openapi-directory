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
exports.CloudprivatecatalogproducerCatalogsGetIamPolicyResponse = exports.CloudprivatecatalogproducerCatalogsGetIamPolicyRequest = exports.CloudprivatecatalogproducerCatalogsGetIamPolicySecurity = exports.CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams = exports.CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams, _super);
    function CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams = CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams;
var CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams, _super);
    function CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams = CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams;
var CloudprivatecatalogproducerCatalogsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsGetIamPolicySecurity, _super);
    function CloudprivatecatalogproducerCatalogsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return CloudprivatecatalogproducerCatalogsGetIamPolicySecurity;
}(utils_1.SpeakeasyBase));
exports.CloudprivatecatalogproducerCatalogsGetIamPolicySecurity = CloudprivatecatalogproducerCatalogsGetIamPolicySecurity;
var CloudprivatecatalogproducerCatalogsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsGetIamPolicyRequest, _super);
    function CloudprivatecatalogproducerCatalogsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsGetIamPolicySecurity)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyRequest.prototype, "security", void 0);
    return CloudprivatecatalogproducerCatalogsGetIamPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.CloudprivatecatalogproducerCatalogsGetIamPolicyRequest = CloudprivatecatalogproducerCatalogsGetIamPolicyRequest;
var CloudprivatecatalogproducerCatalogsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsGetIamPolicyResponse, _super);
    function CloudprivatecatalogproducerCatalogsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudprivatecatalogproducerCatalogsGetIamPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.CloudprivatecatalogproducerCatalogsGetIamPolicyResponse = CloudprivatecatalogproducerCatalogsGetIamPolicyResponse;

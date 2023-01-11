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
exports.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse = exports.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest = exports.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity = exports.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams = exports.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams.prototype, "name", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams;
}(utils_1.SpeakeasyBase));
exports.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams = CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams;
var CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams = CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams;
var CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity;
}(utils_1.SpeakeasyBase));
exports.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity = CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity;
var CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudChannelV1CustomerRepricingConfigInput)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest.prototype, "security", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest;
}(utils_1.SpeakeasyBase));
exports.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest = CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest;
var CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GoogleCloudChannelV1CustomerRepricingConfig)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse.prototype, "googleCloudChannelV1CustomerRepricingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse;
}(utils_1.SpeakeasyBase));
exports.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse = CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse;

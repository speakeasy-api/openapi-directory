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
exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse = exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest = exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity = exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2 = exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1 = exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams = exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams.prototype, "parent", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams = CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams;
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams = CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams;
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1 = CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1;
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2 = CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2;
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity = CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity;
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UnbindDeviceFromGatewayRequest)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest = CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest;
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse.prototype, "unbindDeviceFromGatewayResponse", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse;
}(utils_1.SpeakeasyBase));
exports.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse = CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse;

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
exports.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse = exports.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest = exports.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity = exports.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams = exports.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams.prototype, "name", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams = ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams;
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=acceptsIncomplete" }),
        __metadata("design:type", Boolean)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "acceptsIncomplete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=planId" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "planId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=serviceId" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "serviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams = ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams;
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity.prototype, "oauth2c", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity = ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity;
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest.prototype, "security", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest = ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest;
var ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse = /** @class */ (function (_super) {
    __extends(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse, _super);
    function ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse.prototype, "statusCode", void 0);
    return ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse = ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse;

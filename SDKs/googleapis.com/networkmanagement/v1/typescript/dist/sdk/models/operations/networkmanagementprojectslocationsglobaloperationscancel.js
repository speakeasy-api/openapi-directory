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
exports.NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse = exports.NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest = exports.NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity = exports.NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams = exports.NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams, _super);
    function NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams.prototype, "name", void 0);
    return NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams;
}(utils_1.SpeakeasyBase));
exports.NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams = NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams;
var NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams, _super);
    function NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams;
}(utils_1.SpeakeasyBase));
exports.NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams = NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams;
var NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity, _super);
    function NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity;
}(utils_1.SpeakeasyBase));
exports.NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity = NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity;
var NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest, _super);
    function NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest.prototype, "security", void 0);
    return NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest;
}(utils_1.SpeakeasyBase));
exports.NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest = NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest;
var NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse, _super);
    function NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse.prototype, "statusCode", void 0);
    return NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse;
}(utils_1.SpeakeasyBase));
exports.NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse = NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse;

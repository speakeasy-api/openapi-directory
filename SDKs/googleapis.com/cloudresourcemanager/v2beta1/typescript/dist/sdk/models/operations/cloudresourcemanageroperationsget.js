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
exports.CloudresourcemanagerOperationsGetResponse = exports.CloudresourcemanagerOperationsGetRequest = exports.CloudresourcemanagerOperationsGetSecurity = exports.CloudresourcemanagerOperationsGetSecurityOption2 = exports.CloudresourcemanagerOperationsGetSecurityOption1 = exports.CloudresourcemanagerOperationsGetQueryParams = exports.CloudresourcemanagerOperationsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudresourcemanagerOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetPathParams, _super);
    function CloudresourcemanagerOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetPathParams.prototype, "name", void 0);
    return CloudresourcemanagerOperationsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerOperationsGetPathParams = CloudresourcemanagerOperationsGetPathParams;
var CloudresourcemanagerOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetQueryParams, _super);
    function CloudresourcemanagerOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerOperationsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerOperationsGetQueryParams = CloudresourcemanagerOperationsGetQueryParams;
var CloudresourcemanagerOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetSecurityOption1, _super);
    function CloudresourcemanagerOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOperationsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerOperationsGetSecurityOption1 = CloudresourcemanagerOperationsGetSecurityOption1;
var CloudresourcemanagerOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetSecurityOption2, _super);
    function CloudresourcemanagerOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOperationsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerOperationsGetSecurityOption2 = CloudresourcemanagerOperationsGetSecurityOption2;
var CloudresourcemanagerOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetSecurity, _super);
    function CloudresourcemanagerOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOperationsGetSecurityOption1)
    ], CloudresourcemanagerOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOperationsGetSecurityOption2)
    ], CloudresourcemanagerOperationsGetSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerOperationsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerOperationsGetSecurity = CloudresourcemanagerOperationsGetSecurity;
var CloudresourcemanagerOperationsGetRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetRequest, _super);
    function CloudresourcemanagerOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudresourcemanagerOperationsGetPathParams)
    ], CloudresourcemanagerOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudresourcemanagerOperationsGetQueryParams)
    ], CloudresourcemanagerOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudresourcemanagerOperationsGetSecurity)
    ], CloudresourcemanagerOperationsGetRequest.prototype, "security", void 0);
    return CloudresourcemanagerOperationsGetRequest;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerOperationsGetRequest = CloudresourcemanagerOperationsGetRequest;
var CloudresourcemanagerOperationsGetResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetResponse, _super);
    function CloudresourcemanagerOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], CloudresourcemanagerOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerOperationsGetResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerOperationsGetResponse;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerOperationsGetResponse = CloudresourcemanagerOperationsGetResponse;

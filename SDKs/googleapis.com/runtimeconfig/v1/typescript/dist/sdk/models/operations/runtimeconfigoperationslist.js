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
exports.RuntimeconfigOperationsListResponse = exports.RuntimeconfigOperationsListRequest = exports.RuntimeconfigOperationsListSecurity = exports.RuntimeconfigOperationsListSecurityOption2 = exports.RuntimeconfigOperationsListSecurityOption1 = exports.RuntimeconfigOperationsListQueryParams = exports.RuntimeconfigOperationsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RuntimeconfigOperationsListPathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsListPathParams, _super);
    function RuntimeconfigOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListPathParams.prototype, "name", void 0);
    return RuntimeconfigOperationsListPathParams;
}(utils_1.SpeakeasyBase));
exports.RuntimeconfigOperationsListPathParams = RuntimeconfigOperationsListPathParams;
var RuntimeconfigOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsListQueryParams, _super);
    function RuntimeconfigOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RuntimeconfigOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigOperationsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.RuntimeconfigOperationsListQueryParams = RuntimeconfigOperationsListQueryParams;
var RuntimeconfigOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsListSecurityOption1, _super);
    function RuntimeconfigOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigOperationsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.RuntimeconfigOperationsListSecurityOption1 = RuntimeconfigOperationsListSecurityOption1;
var RuntimeconfigOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsListSecurityOption2, _super);
    function RuntimeconfigOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigOperationsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.RuntimeconfigOperationsListSecurityOption2 = RuntimeconfigOperationsListSecurityOption2;
var RuntimeconfigOperationsListSecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsListSecurity, _super);
    function RuntimeconfigOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigOperationsListSecurityOption1)
    ], RuntimeconfigOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigOperationsListSecurityOption2)
    ], RuntimeconfigOperationsListSecurity.prototype, "option2", void 0);
    return RuntimeconfigOperationsListSecurity;
}(utils_1.SpeakeasyBase));
exports.RuntimeconfigOperationsListSecurity = RuntimeconfigOperationsListSecurity;
var RuntimeconfigOperationsListRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsListRequest, _super);
    function RuntimeconfigOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RuntimeconfigOperationsListPathParams)
    ], RuntimeconfigOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RuntimeconfigOperationsListQueryParams)
    ], RuntimeconfigOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RuntimeconfigOperationsListSecurity)
    ], RuntimeconfigOperationsListRequest.prototype, "security", void 0);
    return RuntimeconfigOperationsListRequest;
}(utils_1.SpeakeasyBase));
exports.RuntimeconfigOperationsListRequest = RuntimeconfigOperationsListRequest;
var RuntimeconfigOperationsListResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsListResponse, _super);
    function RuntimeconfigOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListOperationsResponse)
    ], RuntimeconfigOperationsListResponse.prototype, "listOperationsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RuntimeconfigOperationsListResponse.prototype, "statusCode", void 0);
    return RuntimeconfigOperationsListResponse;
}(utils_1.SpeakeasyBase));
exports.RuntimeconfigOperationsListResponse = RuntimeconfigOperationsListResponse;

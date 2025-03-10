"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.CloudresourcemanagerProjectsListResponse = exports.CloudresourcemanagerProjectsListRequest = exports.CloudresourcemanagerProjectsListSecurity = exports.CloudresourcemanagerProjectsListSecurityOption2 = exports.CloudresourcemanagerProjectsListSecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudresourcemanagerProjectsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListSecurityOption1, _super);
    function CloudresourcemanagerProjectsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerProjectsListSecurityOption1 = CloudresourcemanagerProjectsListSecurityOption1;
var CloudresourcemanagerProjectsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListSecurityOption2, _super);
    function CloudresourcemanagerProjectsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerProjectsListSecurityOption2 = CloudresourcemanagerProjectsListSecurityOption2;
var CloudresourcemanagerProjectsListSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListSecurity, _super);
    function CloudresourcemanagerProjectsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsListSecurityOption1)
    ], CloudresourcemanagerProjectsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsListSecurityOption2)
    ], CloudresourcemanagerProjectsListSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerProjectsListSecurity;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerProjectsListSecurity = CloudresourcemanagerProjectsListSecurity;
var CloudresourcemanagerProjectsListRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListRequest, _super);
    function CloudresourcemanagerProjectsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=pageSize",
        }),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsListRequest.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=pageToken",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=parent",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "parent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsListRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=showDeleted",
        }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsListRequest.prototype, "showDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListRequest.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsListRequest;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerProjectsListRequest = CloudresourcemanagerProjectsListRequest;
var CloudresourcemanagerProjectsListResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListResponse, _super);
    function CloudresourcemanagerProjectsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListProjectsResponse)
    ], CloudresourcemanagerProjectsListResponse.prototype, "listProjectsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CloudresourcemanagerProjectsListResponse.prototype, "rawResponse", void 0);
    return CloudresourcemanagerProjectsListResponse;
}(utils_1.SpeakeasyBase));
exports.CloudresourcemanagerProjectsListResponse = CloudresourcemanagerProjectsListResponse;

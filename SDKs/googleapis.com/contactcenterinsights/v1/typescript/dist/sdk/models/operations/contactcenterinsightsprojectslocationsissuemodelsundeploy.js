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
exports.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse = exports.ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest = exports.ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity = exports.ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams = exports.ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams.prototype, "name", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams;
}(utils_1.SpeakeasyBase));
exports.ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams = ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams;
var ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams;
}(utils_1.SpeakeasyBase));
exports.ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams = ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams;
var ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity;
}(utils_1.SpeakeasyBase));
exports.ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity = ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity;
var ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest;
}(utils_1.SpeakeasyBase));
exports.ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest = ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest;
var ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse;
}(utils_1.SpeakeasyBase));
exports.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse = ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse;

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrganizationAdminResponse = exports.CreateOrganizationAdminRequest = exports.CreateOrganizationAdminRequestBody = exports.CreateOrganizationAdminRequestBodyTags = exports.CreateOrganizationAdminRequestBodyTagsAccessEnum = exports.CreateOrganizationAdminRequestBodyOrgAccessEnum = exports.CreateOrganizationAdminRequestBodyNetworks = exports.CreateOrganizationAdminRequestBodyNetworksAccessEnum = exports.CreateOrganizationAdminRequestBodyAuthenticationMethodEnum = exports.CreateOrganizationAdminPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateOrganizationAdminPathParams = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdminPathParams, _super);
    function CreateOrganizationAdminPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdminPathParams.prototype, "organizationId", void 0);
    return CreateOrganizationAdminPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdminPathParams = CreateOrganizationAdminPathParams;
var CreateOrganizationAdminRequestBodyAuthenticationMethodEnum;
(function (CreateOrganizationAdminRequestBodyAuthenticationMethodEnum) {
    CreateOrganizationAdminRequestBodyAuthenticationMethodEnum["Email"] = "Email";
    CreateOrganizationAdminRequestBodyAuthenticationMethodEnum["CiscoSecureXSignOn"] = "Cisco SecureX Sign-On";
})(CreateOrganizationAdminRequestBodyAuthenticationMethodEnum = exports.CreateOrganizationAdminRequestBodyAuthenticationMethodEnum || (exports.CreateOrganizationAdminRequestBodyAuthenticationMethodEnum = {}));
var CreateOrganizationAdminRequestBodyNetworksAccessEnum;
(function (CreateOrganizationAdminRequestBodyNetworksAccessEnum) {
    CreateOrganizationAdminRequestBodyNetworksAccessEnum["Full"] = "full";
    CreateOrganizationAdminRequestBodyNetworksAccessEnum["ReadOnly"] = "read-only";
    CreateOrganizationAdminRequestBodyNetworksAccessEnum["GuestAmbassador"] = "guest-ambassador";
    CreateOrganizationAdminRequestBodyNetworksAccessEnum["MonitorOnly"] = "monitor-only";
})(CreateOrganizationAdminRequestBodyNetworksAccessEnum = exports.CreateOrganizationAdminRequestBodyNetworksAccessEnum || (exports.CreateOrganizationAdminRequestBodyNetworksAccessEnum = {}));
var CreateOrganizationAdminRequestBodyNetworks = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdminRequestBodyNetworks, _super);
    function CreateOrganizationAdminRequestBodyNetworks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdminRequestBodyNetworks.prototype, "access", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdminRequestBodyNetworks.prototype, "id", void 0);
    return CreateOrganizationAdminRequestBodyNetworks;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdminRequestBodyNetworks = CreateOrganizationAdminRequestBodyNetworks;
var CreateOrganizationAdminRequestBodyOrgAccessEnum;
(function (CreateOrganizationAdminRequestBodyOrgAccessEnum) {
    CreateOrganizationAdminRequestBodyOrgAccessEnum["Full"] = "full";
    CreateOrganizationAdminRequestBodyOrgAccessEnum["ReadOnly"] = "read-only";
    CreateOrganizationAdminRequestBodyOrgAccessEnum["Enterprise"] = "enterprise";
    CreateOrganizationAdminRequestBodyOrgAccessEnum["None"] = "none";
})(CreateOrganizationAdminRequestBodyOrgAccessEnum = exports.CreateOrganizationAdminRequestBodyOrgAccessEnum || (exports.CreateOrganizationAdminRequestBodyOrgAccessEnum = {}));
var CreateOrganizationAdminRequestBodyTagsAccessEnum;
(function (CreateOrganizationAdminRequestBodyTagsAccessEnum) {
    CreateOrganizationAdminRequestBodyTagsAccessEnum["Full"] = "full";
    CreateOrganizationAdminRequestBodyTagsAccessEnum["ReadOnly"] = "read-only";
    CreateOrganizationAdminRequestBodyTagsAccessEnum["GuestAmbassador"] = "guest-ambassador";
    CreateOrganizationAdminRequestBodyTagsAccessEnum["MonitorOnly"] = "monitor-only";
})(CreateOrganizationAdminRequestBodyTagsAccessEnum = exports.CreateOrganizationAdminRequestBodyTagsAccessEnum || (exports.CreateOrganizationAdminRequestBodyTagsAccessEnum = {}));
var CreateOrganizationAdminRequestBodyTags = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdminRequestBodyTags, _super);
    function CreateOrganizationAdminRequestBodyTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdminRequestBodyTags.prototype, "access", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdminRequestBodyTags.prototype, "tag", void 0);
    return CreateOrganizationAdminRequestBodyTags;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdminRequestBodyTags = CreateOrganizationAdminRequestBodyTags;
var CreateOrganizationAdminRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdminRequestBody, _super);
    function CreateOrganizationAdminRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authenticationMethod" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdminRequestBody.prototype, "authenticationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdminRequestBody.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdminRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networks", elemType: CreateOrganizationAdminRequestBodyNetworks }),
        __metadata("design:type", Array)
    ], CreateOrganizationAdminRequestBody.prototype, "networks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orgAccess" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdminRequestBody.prototype, "orgAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: CreateOrganizationAdminRequestBodyTags }),
        __metadata("design:type", Array)
    ], CreateOrganizationAdminRequestBody.prototype, "tags", void 0);
    return CreateOrganizationAdminRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdminRequestBody = CreateOrganizationAdminRequestBody;
var CreateOrganizationAdminRequest = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdminRequest, _super);
    function CreateOrganizationAdminRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateOrganizationAdminPathParams)
    ], CreateOrganizationAdminRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrganizationAdminRequestBody)
    ], CreateOrganizationAdminRequest.prototype, "request", void 0);
    return CreateOrganizationAdminRequest;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdminRequest = CreateOrganizationAdminRequest;
var CreateOrganizationAdminResponse = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdminResponse, _super);
    function CreateOrganizationAdminResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateOrganizationAdminResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateOrganizationAdminResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateOrganizationAdminResponse.prototype, "createOrganizationAdmin201ApplicationJSONObject", void 0);
    return CreateOrganizationAdminResponse;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdminResponse = CreateOrganizationAdminResponse;

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
exports.CreateOrganizationSamlRoleResponse = exports.CreateOrganizationSamlRoleRequest = exports.CreateOrganizationSamlRoleRequestBody = exports.CreateOrganizationSamlRoleRequestBodyTags = exports.CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = exports.CreateOrganizationSamlRoleRequestBodyOrgAccessEnum = exports.CreateOrganizationSamlRoleRequestBodyNetworks = exports.CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = exports.CreateOrganizationSamlRolePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateOrganizationSamlRolePathParams = /** @class */ (function (_super) {
    __extends(CreateOrganizationSamlRolePathParams, _super);
    function CreateOrganizationSamlRolePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CreateOrganizationSamlRolePathParams.prototype, "organizationId", void 0);
    return CreateOrganizationSamlRolePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationSamlRolePathParams = CreateOrganizationSamlRolePathParams;
var CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
(function (CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum) {
    CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum["Full"] = "full";
    CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum["ReadOnly"] = "read-only";
    CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum["GuestAmbassador"] = "guest-ambassador";
    CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum["MonitorOnly"] = "monitor-only";
})(CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = exports.CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum || (exports.CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = {}));
var CreateOrganizationSamlRoleRequestBodyNetworks = /** @class */ (function (_super) {
    __extends(CreateOrganizationSamlRoleRequestBodyNetworks, _super);
    function CreateOrganizationSamlRoleRequestBodyNetworks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], CreateOrganizationSamlRoleRequestBodyNetworks.prototype, "access", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateOrganizationSamlRoleRequestBodyNetworks.prototype, "id", void 0);
    return CreateOrganizationSamlRoleRequestBodyNetworks;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationSamlRoleRequestBodyNetworks = CreateOrganizationSamlRoleRequestBodyNetworks;
var CreateOrganizationSamlRoleRequestBodyOrgAccessEnum;
(function (CreateOrganizationSamlRoleRequestBodyOrgAccessEnum) {
    CreateOrganizationSamlRoleRequestBodyOrgAccessEnum["None"] = "none";
    CreateOrganizationSamlRoleRequestBodyOrgAccessEnum["ReadOnly"] = "read-only";
    CreateOrganizationSamlRoleRequestBodyOrgAccessEnum["Full"] = "full";
})(CreateOrganizationSamlRoleRequestBodyOrgAccessEnum = exports.CreateOrganizationSamlRoleRequestBodyOrgAccessEnum || (exports.CreateOrganizationSamlRoleRequestBodyOrgAccessEnum = {}));
var CreateOrganizationSamlRoleRequestBodyTagsAccessEnum;
(function (CreateOrganizationSamlRoleRequestBodyTagsAccessEnum) {
    CreateOrganizationSamlRoleRequestBodyTagsAccessEnum["Full"] = "full";
    CreateOrganizationSamlRoleRequestBodyTagsAccessEnum["ReadOnly"] = "read-only";
    CreateOrganizationSamlRoleRequestBodyTagsAccessEnum["GuestAmbassador"] = "guest-ambassador";
    CreateOrganizationSamlRoleRequestBodyTagsAccessEnum["MonitorOnly"] = "monitor-only";
})(CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = exports.CreateOrganizationSamlRoleRequestBodyTagsAccessEnum || (exports.CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = {}));
var CreateOrganizationSamlRoleRequestBodyTags = /** @class */ (function (_super) {
    __extends(CreateOrganizationSamlRoleRequestBodyTags, _super);
    function CreateOrganizationSamlRoleRequestBodyTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], CreateOrganizationSamlRoleRequestBodyTags.prototype, "access", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateOrganizationSamlRoleRequestBodyTags.prototype, "tag", void 0);
    return CreateOrganizationSamlRoleRequestBodyTags;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationSamlRoleRequestBodyTags = CreateOrganizationSamlRoleRequestBodyTags;
var CreateOrganizationSamlRoleRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrganizationSamlRoleRequestBody, _super);
    function CreateOrganizationSamlRoleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networks", elemType: CreateOrganizationSamlRoleRequestBodyNetworks }),
        __metadata("design:type", Array)
    ], CreateOrganizationSamlRoleRequestBody.prototype, "networks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orgAccess" }),
        __metadata("design:type", String)
    ], CreateOrganizationSamlRoleRequestBody.prototype, "orgAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], CreateOrganizationSamlRoleRequestBody.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: CreateOrganizationSamlRoleRequestBodyTags }),
        __metadata("design:type", Array)
    ], CreateOrganizationSamlRoleRequestBody.prototype, "tags", void 0);
    return CreateOrganizationSamlRoleRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationSamlRoleRequestBody = CreateOrganizationSamlRoleRequestBody;
var CreateOrganizationSamlRoleRequest = /** @class */ (function (_super) {
    __extends(CreateOrganizationSamlRoleRequest, _super);
    function CreateOrganizationSamlRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateOrganizationSamlRolePathParams)
    ], CreateOrganizationSamlRoleRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrganizationSamlRoleRequestBody)
    ], CreateOrganizationSamlRoleRequest.prototype, "request", void 0);
    return CreateOrganizationSamlRoleRequest;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationSamlRoleRequest = CreateOrganizationSamlRoleRequest;
var CreateOrganizationSamlRoleResponse = /** @class */ (function (_super) {
    __extends(CreateOrganizationSamlRoleResponse, _super);
    function CreateOrganizationSamlRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateOrganizationSamlRoleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateOrganizationSamlRoleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateOrganizationSamlRoleResponse.prototype, "createOrganizationSamlRole201ApplicationJSONObject", void 0);
    return CreateOrganizationSamlRoleResponse;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationSamlRoleResponse = CreateOrganizationSamlRoleResponse;

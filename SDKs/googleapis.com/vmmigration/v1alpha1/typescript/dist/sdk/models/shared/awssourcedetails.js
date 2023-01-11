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
exports.AwsSourceDetailsInput = exports.AwsSourceDetails = exports.AwsSourceDetailsStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accesskeycredentials_1 = require("./accesskeycredentials");
var status_1 = require("./status");
var tag_1 = require("./tag");
var AwsSourceDetailsStateEnum;
(function (AwsSourceDetailsStateEnum) {
    AwsSourceDetailsStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    AwsSourceDetailsStateEnum["Pending"] = "PENDING";
    AwsSourceDetailsStateEnum["Failed"] = "FAILED";
    AwsSourceDetailsStateEnum["Active"] = "ACTIVE";
})(AwsSourceDetailsStateEnum = exports.AwsSourceDetailsStateEnum || (exports.AwsSourceDetailsStateEnum = {}));
// AwsSourceDetails
/**
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
var AwsSourceDetails = /** @class */ (function (_super) {
    __extends(AwsSourceDetails, _super);
    function AwsSourceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessKeyCreds" }),
        __metadata("design:type", accesskeycredentials_1.AccessKeyCredentials)
    ], AwsSourceDetails.prototype, "accessKeyCreds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessKeyId" }),
        __metadata("design:type", String)
    ], AwsSourceDetails.prototype, "accessKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=awsRegion" }),
        __metadata("design:type", String)
    ], AwsSourceDetails.prototype, "awsRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", status_1.Status)
    ], AwsSourceDetails.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventorySecurityGroupNames" }),
        __metadata("design:type", Array)
    ], AwsSourceDetails.prototype, "inventorySecurityGroupNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventoryTagList", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], AwsSourceDetails.prototype, "inventoryTagList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventoryTags" }),
        __metadata("design:type", Object)
    ], AwsSourceDetails.prototype, "inventoryTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=migrationResourcesUserTags" }),
        __metadata("design:type", Object)
    ], AwsSourceDetails.prototype, "migrationResourcesUserTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publicIp" }),
        __metadata("design:type", String)
    ], AwsSourceDetails.prototype, "publicIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secretAccessKey" }),
        __metadata("design:type", String)
    ], AwsSourceDetails.prototype, "secretAccessKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AwsSourceDetails.prototype, "state", void 0);
    return AwsSourceDetails;
}(utils_1.SpeakeasyBase));
exports.AwsSourceDetails = AwsSourceDetails;
// AwsSourceDetailsInput
/**
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
var AwsSourceDetailsInput = /** @class */ (function (_super) {
    __extends(AwsSourceDetailsInput, _super);
    function AwsSourceDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessKeyCreds" }),
        __metadata("design:type", accesskeycredentials_1.AccessKeyCredentials)
    ], AwsSourceDetailsInput.prototype, "accessKeyCreds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessKeyId" }),
        __metadata("design:type", String)
    ], AwsSourceDetailsInput.prototype, "accessKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=awsRegion" }),
        __metadata("design:type", String)
    ], AwsSourceDetailsInput.prototype, "awsRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", status_1.Status)
    ], AwsSourceDetailsInput.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventorySecurityGroupNames" }),
        __metadata("design:type", Array)
    ], AwsSourceDetailsInput.prototype, "inventorySecurityGroupNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventoryTagList", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], AwsSourceDetailsInput.prototype, "inventoryTagList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventoryTags" }),
        __metadata("design:type", Object)
    ], AwsSourceDetailsInput.prototype, "inventoryTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=migrationResourcesUserTags" }),
        __metadata("design:type", Object)
    ], AwsSourceDetailsInput.prototype, "migrationResourcesUserTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secretAccessKey" }),
        __metadata("design:type", String)
    ], AwsSourceDetailsInput.prototype, "secretAccessKey", void 0);
    return AwsSourceDetailsInput;
}(utils_1.SpeakeasyBase));
exports.AwsSourceDetailsInput = AwsSourceDetailsInput;

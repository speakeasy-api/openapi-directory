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
exports.Asset = void 0;
var utils_1 = require("../../../internal/utils");
var googleidentityaccesscontextmanagerv1accesslevel_1 = require("./googleidentityaccesscontextmanagerv1accesslevel");
var googleidentityaccesscontextmanagerv1accesspolicy_1 = require("./googleidentityaccesscontextmanagerv1accesspolicy");
var policy_1 = require("./policy");
var googlecloudorgpolicyv1policy_1 = require("./googlecloudorgpolicyv1policy");
var resource_1 = require("./resource");
var googleidentityaccesscontextmanagerv1serviceperimeter_1 = require("./googleidentityaccesscontextmanagerv1serviceperimeter");
// Asset
/**
 * An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
**/
var Asset = /** @class */ (function (_super) {
    __extends(Asset, _super);
    function Asset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessLevel" }),
        __metadata("design:type", googleidentityaccesscontextmanagerv1accesslevel_1.GoogleIdentityAccesscontextmanagerV1AccessLevel)
    ], Asset.prototype, "accessLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessPolicy" }),
        __metadata("design:type", googleidentityaccesscontextmanagerv1accesspolicy_1.GoogleIdentityAccesscontextmanagerV1AccessPolicy)
    ], Asset.prototype, "accessPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ancestors" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "ancestors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetType" }),
        __metadata("design:type", String)
    ], Asset.prototype, "assetType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iamPolicy" }),
        __metadata("design:type", policy_1.Policy)
    ], Asset.prototype, "iamPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Asset.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orgPolicy", elemType: googlecloudorgpolicyv1policy_1.GoogleCloudOrgpolicyV1Policy }),
        __metadata("design:type", Array)
    ], Asset.prototype, "orgPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource" }),
        __metadata("design:type", resource_1.Resource)
    ], Asset.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=servicePerimeter" }),
        __metadata("design:type", googleidentityaccesscontextmanagerv1serviceperimeter_1.GoogleIdentityAccesscontextmanagerV1ServicePerimeter)
    ], Asset.prototype, "servicePerimeter", void 0);
    return Asset;
}(utils_1.SpeakeasyBase));
exports.Asset = Asset;

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
exports.ConfigContext = void 0;
var utils_1 = require("../../../internal/utils");
var nestedclustergroup_1 = require("./nestedclustergroup");
var nestedcluster_1 = require("./nestedcluster");
var nestedplatform_1 = require("./nestedplatform");
var nestedregion_1 = require("./nestedregion");
var nesteddevicerole_1 = require("./nesteddevicerole");
var nestedsite_1 = require("./nestedsite");
var nestedtenantgroup_1 = require("./nestedtenantgroup");
var nestedtenant_1 = require("./nestedtenant");
var ConfigContext = /** @class */ (function (_super) {
    __extends(ConfigContext, _super);
    function ConfigContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cluster_groups", elemType: nestedclustergroup_1.NestedClusterGroup }),
        __metadata("design:type", Array)
    ], ConfigContext.prototype, "clusterGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusters", elemType: nestedcluster_1.NestedCluster }),
        __metadata("design:type", Array)
    ], ConfigContext.prototype, "clusters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], ConfigContext.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ConfigContext.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ConfigContext.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_active" }),
        __metadata("design:type", Boolean)
    ], ConfigContext.prototype, "isActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConfigContext.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platforms", elemType: nestedplatform_1.NestedPlatform }),
        __metadata("design:type", Array)
    ], ConfigContext.prototype, "platforms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regions", elemType: nestedregion_1.NestedRegion }),
        __metadata("design:type", Array)
    ], ConfigContext.prototype, "regions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roles", elemType: nesteddevicerole_1.NestedDeviceRole }),
        __metadata("design:type", Array)
    ], ConfigContext.prototype, "roles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sites", elemType: nestedsite_1.NestedSite }),
        __metadata("design:type", Array)
    ], ConfigContext.prototype, "sites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ConfigContext.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tenant_groups", elemType: nestedtenantgroup_1.NestedTenantGroup }),
        __metadata("design:type", Array)
    ], ConfigContext.prototype, "tenantGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tenants", elemType: nestedtenant_1.NestedTenant }),
        __metadata("design:type", Array)
    ], ConfigContext.prototype, "tenants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], ConfigContext.prototype, "weight", void 0);
    return ConfigContext;
}(utils_1.SpeakeasyBase));
exports.ConfigContext = ConfigContext;

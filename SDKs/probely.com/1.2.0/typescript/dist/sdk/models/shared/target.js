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
exports.TargetInput = exports.Target = exports.TargetAllowedScanProfiles = void 0;
var utils_1 = require("../../../internal/utils");
var scanprofileenum_1 = require("./scanprofileenum");
var asset_1 = require("./asset");
var changedby_1 = require("./changedby");
var environmentenum_1 = require("./environmentenum");
var reporttypeenum_1 = require("./reporttypeenum");
var site_1 = require("./site");
var targettypeenum_1 = require("./targettypeenum");
var site_2 = require("./site");
var TargetAllowedScanProfiles = /** @class */ (function (_super) {
    __extends(TargetAllowedScanProfiles, _super);
    function TargetAllowedScanProfiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TargetAllowedScanProfiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TargetAllowedScanProfiles.prototype, "name", void 0);
    return TargetAllowedScanProfiles;
}(utils_1.SpeakeasyBase));
exports.TargetAllowedScanProfiles = TargetAllowedScanProfiles;
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_scan_profiles", elemType: TargetAllowedScanProfiles }),
        __metadata("design:type", Array)
    ], Target.prototype, "allowedScanProfiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets", elemType: asset_1.Asset }),
        __metadata("design:type", Array)
    ], Target.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changed" }),
        __metadata("design:type", Date)
    ], Target.prototype, "changed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changed_by" }),
        __metadata("design:type", changedby_1.ChangedBy)
    ], Target.prototype, "changedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connected_target" }),
        __metadata("design:type", String)
    ], Target.prototype, "connectedTarget", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], Target.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], Target.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Target.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], Target.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Target.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], Target.prototype, "reportType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scan_profile" }),
        __metadata("design:type", String)
    ], Target.prototype, "scanProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", site_1.Site)
    ], Target.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Target.prototype, "type", void 0);
    return Target;
}(utils_1.SpeakeasyBase));
exports.Target = Target;
var TargetInput = /** @class */ (function (_super) {
    __extends(TargetInput, _super);
    function TargetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connected_target" }),
        __metadata("design:type", String)
    ], TargetInput.prototype, "connectedTarget", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], TargetInput.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], TargetInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TargetInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], TargetInput.prototype, "reportType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scan_profile" }),
        __metadata("design:type", String)
    ], TargetInput.prototype, "scanProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", site_2.SiteInput)
    ], TargetInput.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TargetInput.prototype, "type", void 0);
    return TargetInput;
}(utils_1.SpeakeasyBase));
exports.TargetInput = TargetInput;

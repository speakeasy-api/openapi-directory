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
exports.FeatureInput = exports.Feature = void 0;
var utils_1 = require("../../../internal/utils");
var membershipfeaturespec_1 = require("./membershipfeaturespec");
var membershipfeaturestate_1 = require("./membershipfeaturestate");
var featureresourcestate_1 = require("./featureresourcestate");
var scopefeaturestate_1 = require("./scopefeaturestate");
var commonfeaturespec_1 = require("./commonfeaturespec");
var commonfeaturestate_1 = require("./commonfeaturestate");
var membershipfeaturespec_2 = require("./membershipfeaturespec");
// Feature
/**
 * Feature represents the settings and status of any Hub Feature.
**/
var Feature = /** @class */ (function (_super) {
    __extends(Feature, _super);
    function Feature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Feature.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], Feature.prototype, "deleteTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], Feature.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=membershipSpecs", elemType: membershipfeaturespec_1.MembershipFeatureSpec }),
        __metadata("design:type", Object)
    ], Feature.prototype, "membershipSpecs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=membershipStates", elemType: membershipfeaturestate_1.MembershipFeatureState }),
        __metadata("design:type", Object)
    ], Feature.prototype, "membershipStates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Feature.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceState" }),
        __metadata("design:type", featureresourcestate_1.FeatureResourceState)
    ], Feature.prototype, "resourceState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scopeSpecs" }),
        __metadata("design:type", Object)
    ], Feature.prototype, "scopeSpecs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scopeStates", elemType: scopefeaturestate_1.ScopeFeatureState }),
        __metadata("design:type", Object)
    ], Feature.prototype, "scopeStates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", commonfeaturespec_1.CommonFeatureSpec)
    ], Feature.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", commonfeaturestate_1.CommonFeatureState)
    ], Feature.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Feature.prototype, "updateTime", void 0);
    return Feature;
}(utils_1.SpeakeasyBase));
exports.Feature = Feature;
// FeatureInput
/**
 * Feature represents the settings and status of any Hub Feature.
**/
var FeatureInput = /** @class */ (function (_super) {
    __extends(FeatureInput, _super);
    function FeatureInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], FeatureInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=membershipSpecs", elemType: membershipfeaturespec_2.MembershipFeatureSpecInput }),
        __metadata("design:type", Object)
    ], FeatureInput.prototype, "membershipSpecs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceState" }),
        __metadata("design:type", featureresourcestate_1.FeatureResourceState)
    ], FeatureInput.prototype, "resourceState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scopeSpecs" }),
        __metadata("design:type", Object)
    ], FeatureInput.prototype, "scopeSpecs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", commonfeaturespec_1.CommonFeatureSpec)
    ], FeatureInput.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", commonfeaturestate_1.CommonFeatureState)
    ], FeatureInput.prototype, "state", void 0);
    return FeatureInput;
}(utils_1.SpeakeasyBase));
exports.FeatureInput = FeatureInput;

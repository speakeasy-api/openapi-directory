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
exports.ContainerVersion = void 0;
var utils_1 = require("../../../internal/utils");
var container_1 = require("./container");
var folder_1 = require("./folder");
var macro_1 = require("./macro");
var rule_1 = require("./rule");
var tag_1 = require("./tag");
var trigger_1 = require("./trigger");
var variable_1 = require("./variable");
var class_transformer_1 = require("class-transformer");
/**
 * Represents a Google Tag Manager Container Version.
 */
var ContainerVersion = /** @class */ (function (_super) {
    __extends(ContainerVersion, _super);
    function ContainerVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "accountId" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "container" }),
        (0, class_transformer_1.Type)(function () { return container_1.Container; }),
        __metadata("design:type", container_1.Container)
    ], ContainerVersion.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "containerId" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "containerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "containerVersionId" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "containerVersionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], ContainerVersion.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "fingerprint" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "fingerprint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: folder_1.Folder }),
        (0, class_transformer_1.Expose)({ name: "folder" }),
        (0, class_transformer_1.Type)(function () { return folder_1.Folder; }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "folder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: macro_1.Macro }),
        (0, class_transformer_1.Expose)({ name: "macro" }),
        (0, class_transformer_1.Type)(function () { return macro_1.Macro; }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "macro", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "notes" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: rule_1.Rule }),
        (0, class_transformer_1.Expose)({ name: "rule" }),
        (0, class_transformer_1.Type)(function () { return rule_1.Rule; }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "rule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: tag_1.Tag }),
        (0, class_transformer_1.Expose)({ name: "tag" }),
        (0, class_transformer_1.Type)(function () { return tag_1.Tag; }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: trigger_1.Trigger }),
        (0, class_transformer_1.Expose)({ name: "trigger" }),
        (0, class_transformer_1.Type)(function () { return trigger_1.Trigger; }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "trigger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: variable_1.Variable }),
        (0, class_transformer_1.Expose)({ name: "variable" }),
        (0, class_transformer_1.Type)(function () { return variable_1.Variable; }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "variable", void 0);
    return ContainerVersion;
}(utils_1.SpeakeasyBase));
exports.ContainerVersion = ContainerVersion;

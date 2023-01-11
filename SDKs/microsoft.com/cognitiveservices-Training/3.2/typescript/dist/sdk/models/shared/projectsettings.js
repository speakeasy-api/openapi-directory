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
exports.ProjectSettingsInput = exports.ProjectSettings = exports.ProjectSettingsTargetExportPlatformsEnum = exports.ProjectSettingsClassificationTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var imageprocessingsettings_1 = require("./imageprocessingsettings");
var ProjectSettingsClassificationTypeEnum;
(function (ProjectSettingsClassificationTypeEnum) {
    ProjectSettingsClassificationTypeEnum["Multiclass"] = "Multiclass";
    ProjectSettingsClassificationTypeEnum["Multilabel"] = "Multilabel";
})(ProjectSettingsClassificationTypeEnum = exports.ProjectSettingsClassificationTypeEnum || (exports.ProjectSettingsClassificationTypeEnum = {}));
var ProjectSettingsTargetExportPlatformsEnum;
(function (ProjectSettingsTargetExportPlatformsEnum) {
    ProjectSettingsTargetExportPlatformsEnum["CoreMl"] = "CoreML";
    ProjectSettingsTargetExportPlatformsEnum["TensorFlow"] = "TensorFlow";
    ProjectSettingsTargetExportPlatformsEnum["DockerFile"] = "DockerFile";
    ProjectSettingsTargetExportPlatformsEnum["Onnx"] = "ONNX";
    ProjectSettingsTargetExportPlatformsEnum["Vaidk"] = "VAIDK";
})(ProjectSettingsTargetExportPlatformsEnum = exports.ProjectSettingsTargetExportPlatformsEnum || (exports.ProjectSettingsTargetExportPlatformsEnum = {}));
// ProjectSettings
/**
 * Represents settings associated with a project.
**/
var ProjectSettings = /** @class */ (function (_super) {
    __extends(ProjectSettings, _super);
    function ProjectSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classificationType" }),
        __metadata("design:type", String)
    ], ProjectSettings.prototype, "classificationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detectionParameters" }),
        __metadata("design:type", String)
    ], ProjectSettings.prototype, "detectionParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domainId" }),
        __metadata("design:type", String)
    ], ProjectSettings.prototype, "domainId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageProcessingSettings" }),
        __metadata("design:type", imageprocessingsettings_1.ImageProcessingSettings)
    ], ProjectSettings.prototype, "imageProcessingSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetExportPlatforms" }),
        __metadata("design:type", Array)
    ], ProjectSettings.prototype, "targetExportPlatforms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=useNegativeSet" }),
        __metadata("design:type", Boolean)
    ], ProjectSettings.prototype, "useNegativeSet", void 0);
    return ProjectSettings;
}(utils_1.SpeakeasyBase));
exports.ProjectSettings = ProjectSettings;
// ProjectSettingsInput
/**
 * Represents settings associated with a project.
**/
var ProjectSettingsInput = /** @class */ (function (_super) {
    __extends(ProjectSettingsInput, _super);
    function ProjectSettingsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classificationType" }),
        __metadata("design:type", String)
    ], ProjectSettingsInput.prototype, "classificationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domainId" }),
        __metadata("design:type", String)
    ], ProjectSettingsInput.prototype, "domainId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageProcessingSettings" }),
        __metadata("design:type", imageprocessingsettings_1.ImageProcessingSettings)
    ], ProjectSettingsInput.prototype, "imageProcessingSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetExportPlatforms" }),
        __metadata("design:type", Array)
    ], ProjectSettingsInput.prototype, "targetExportPlatforms", void 0);
    return ProjectSettingsInput;
}(utils_1.SpeakeasyBase));
exports.ProjectSettingsInput = ProjectSettingsInput;

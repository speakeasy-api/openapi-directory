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
exports.ReleaseInput = exports.Release = exports.ReleaseRenderStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var buildartifact_1 = require("./buildartifact");
var deliverypipeline_1 = require("./deliverypipeline");
var targetartifact_1 = require("./targetartifact");
var targetrender_1 = require("./targetrender");
var target_1 = require("./target");
var deliverypipeline_2 = require("./deliverypipeline");
var ReleaseRenderStateEnum;
(function (ReleaseRenderStateEnum) {
    ReleaseRenderStateEnum["RenderStateUnspecified"] = "RENDER_STATE_UNSPECIFIED";
    ReleaseRenderStateEnum["Succeeded"] = "SUCCEEDED";
    ReleaseRenderStateEnum["Failed"] = "FAILED";
    ReleaseRenderStateEnum["InProgress"] = "IN_PROGRESS";
})(ReleaseRenderStateEnum = exports.ReleaseRenderStateEnum || (exports.ReleaseRenderStateEnum = {}));
// Release
/**
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
var Release = /** @class */ (function (_super) {
    __extends(Release, _super);
    function Release() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=abandoned" }),
        __metadata("design:type", Boolean)
    ], Release.prototype, "abandoned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotations" }),
        __metadata("design:type", Object)
    ], Release.prototype, "annotations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buildArtifacts", elemType: buildartifact_1.BuildArtifact }),
        __metadata("design:type", Array)
    ], Release.prototype, "buildArtifacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Release.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deliveryPipelineSnapshot" }),
        __metadata("design:type", deliverypipeline_1.DeliveryPipeline)
    ], Release.prototype, "deliveryPipelineSnapshot", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Release.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Release.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], Release.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Release.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renderEndTime" }),
        __metadata("design:type", String)
    ], Release.prototype, "renderEndTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renderStartTime" }),
        __metadata("design:type", String)
    ], Release.prototype, "renderStartTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renderState" }),
        __metadata("design:type", String)
    ], Release.prototype, "renderState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skaffoldConfigPath" }),
        __metadata("design:type", String)
    ], Release.prototype, "skaffoldConfigPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skaffoldConfigUri" }),
        __metadata("design:type", String)
    ], Release.prototype, "skaffoldConfigUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skaffoldVersion" }),
        __metadata("design:type", String)
    ], Release.prototype, "skaffoldVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetArtifacts", elemType: targetartifact_1.TargetArtifact }),
        __metadata("design:type", Object)
    ], Release.prototype, "targetArtifacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetRenders", elemType: targetrender_1.TargetRender }),
        __metadata("design:type", Object)
    ], Release.prototype, "targetRenders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetSnapshots", elemType: target_1.Target }),
        __metadata("design:type", Array)
    ], Release.prototype, "targetSnapshots", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Release.prototype, "uid", void 0);
    return Release;
}(utils_1.SpeakeasyBase));
exports.Release = Release;
// ReleaseInput
/**
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
var ReleaseInput = /** @class */ (function (_super) {
    __extends(ReleaseInput, _super);
    function ReleaseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotations" }),
        __metadata("design:type", Object)
    ], ReleaseInput.prototype, "annotations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buildArtifacts", elemType: buildartifact_1.BuildArtifact }),
        __metadata("design:type", Array)
    ], ReleaseInput.prototype, "buildArtifacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deliveryPipelineSnapshot" }),
        __metadata("design:type", deliverypipeline_2.DeliveryPipelineInput)
    ], ReleaseInput.prototype, "deliveryPipelineSnapshot", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], ReleaseInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skaffoldConfigPath" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "skaffoldConfigPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skaffoldConfigUri" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "skaffoldConfigUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skaffoldVersion" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "skaffoldVersion", void 0);
    return ReleaseInput;
}(utils_1.SpeakeasyBase));
exports.ReleaseInput = ReleaseInput;

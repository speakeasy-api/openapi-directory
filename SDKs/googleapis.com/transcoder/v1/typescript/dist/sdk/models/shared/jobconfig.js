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
exports.JobConfig = void 0;
var utils_1 = require("../../../internal/utils");
var adbreak_1 = require("./adbreak");
var editatom_1 = require("./editatom");
var elementarystream_1 = require("./elementarystream");
var input_1 = require("./input");
var manifest_1 = require("./manifest");
var muxstream_1 = require("./muxstream");
var output_1 = require("./output");
var overlay_1 = require("./overlay");
var pubsubdestination_1 = require("./pubsubdestination");
var spritesheet_1 = require("./spritesheet");
// JobConfig
/**
 * Job configuration
**/
var JobConfig = /** @class */ (function (_super) {
    __extends(JobConfig, _super);
    function JobConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adBreaks", elemType: adbreak_1.AdBreak }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "adBreaks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=editList", elemType: editatom_1.EditAtom }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "editList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=elementaryStreams", elemType: elementarystream_1.ElementaryStream }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "elementaryStreams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inputs", elemType: input_1.Input }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "inputs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manifests", elemType: manifest_1.Manifest }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "manifests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=muxStreams", elemType: muxstream_1.MuxStream }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "muxStreams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=output" }),
        __metadata("design:type", output_1.Output)
    ], JobConfig.prototype, "output", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overlays", elemType: overlay_1.Overlay }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "overlays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pubsubDestination" }),
        __metadata("design:type", pubsubdestination_1.PubsubDestination)
    ], JobConfig.prototype, "pubsubDestination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spriteSheets", elemType: spritesheet_1.SpriteSheet }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "spriteSheets", void 0);
    return JobConfig;
}(utils_1.SpeakeasyBase));
exports.JobConfig = JobConfig;

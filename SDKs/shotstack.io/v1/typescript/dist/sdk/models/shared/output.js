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
exports.Output = exports.OutputScaleToEnum = exports.OutputResolutionEnum = exports.OutputQualityEnum = exports.OutputFormatEnum = exports.OutputAspectRatioEnum = void 0;
var utils_1 = require("../../../internal/utils");
var poster_1 = require("./poster");
var range_1 = require("./range");
var size_1 = require("./size");
var thumbnail_1 = require("./thumbnail");
var OutputAspectRatioEnum;
(function (OutputAspectRatioEnum) {
    OutputAspectRatioEnum["Sixteen9"] = "16:9";
    OutputAspectRatioEnum["Nine16"] = "9:16";
    OutputAspectRatioEnum["One1"] = "1:1";
    OutputAspectRatioEnum["Four5"] = "4:5";
    OutputAspectRatioEnum["Four3"] = "4:3";
})(OutputAspectRatioEnum = exports.OutputAspectRatioEnum || (exports.OutputAspectRatioEnum = {}));
var OutputFormatEnum;
(function (OutputFormatEnum) {
    OutputFormatEnum["Mp4"] = "mp4";
    OutputFormatEnum["Gif"] = "gif";
    OutputFormatEnum["Mp3"] = "mp3";
    OutputFormatEnum["Jpg"] = "jpg";
    OutputFormatEnum["Png"] = "png";
    OutputFormatEnum["Bmp"] = "bmp";
})(OutputFormatEnum = exports.OutputFormatEnum || (exports.OutputFormatEnum = {}));
var OutputQualityEnum;
(function (OutputQualityEnum) {
    OutputQualityEnum["Low"] = "low";
    OutputQualityEnum["Medium"] = "medium";
    OutputQualityEnum["High"] = "high";
})(OutputQualityEnum = exports.OutputQualityEnum || (exports.OutputQualityEnum = {}));
var OutputResolutionEnum;
(function (OutputResolutionEnum) {
    OutputResolutionEnum["Preview"] = "preview";
    OutputResolutionEnum["Mobile"] = "mobile";
    OutputResolutionEnum["Sd"] = "sd";
    OutputResolutionEnum["Hd"] = "hd";
    OutputResolutionEnum["OneThousandAndEighty"] = "1080";
})(OutputResolutionEnum = exports.OutputResolutionEnum || (exports.OutputResolutionEnum = {}));
var OutputScaleToEnum;
(function (OutputScaleToEnum) {
    OutputScaleToEnum["Preview"] = "preview";
    OutputScaleToEnum["Mobile"] = "mobile";
    OutputScaleToEnum["Sd"] = "sd";
    OutputScaleToEnum["Hd"] = "hd";
    OutputScaleToEnum["OneThousandAndEighty"] = "1080";
})(OutputScaleToEnum = exports.OutputScaleToEnum || (exports.OutputScaleToEnum = {}));
// Output
/**
 * The output format, render range and type of media to generate.
**/
var Output = /** @class */ (function (_super) {
    __extends(Output, _super);
    function Output() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspectRatio" }),
        __metadata("design:type", String)
    ], Output.prototype, "aspectRatio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinations" }),
        __metadata("design:type", Array)
    ], Output.prototype, "destinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], Output.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fps" }),
        __metadata("design:type", Number)
    ], Output.prototype, "fps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=poster" }),
        __metadata("design:type", poster_1.Poster)
    ], Output.prototype, "poster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], Output.prototype, "quality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=range" }),
        __metadata("design:type", range_1.Range)
    ], Output.prototype, "range", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], Output.prototype, "resolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scaleTo" }),
        __metadata("design:type", String)
    ], Output.prototype, "scaleTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", size_1.Size)
    ], Output.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbnail" }),
        __metadata("design:type", thumbnail_1.Thumbnail)
    ], Output.prototype, "thumbnail", void 0);
    return Output;
}(utils_1.SpeakeasyBase));
exports.Output = Output;

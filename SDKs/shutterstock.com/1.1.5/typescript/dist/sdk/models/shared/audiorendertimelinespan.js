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
exports.AudioRenderTimelineSpan = exports.AudioRenderTimelineSpanSpanTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var audiorendertimelinespaninstrumentgroup_1 = require("./audiorendertimelinespaninstrumentgroup");
var audiorendertimelinespanregion_1 = require("./audiorendertimelinespanregion");
var audiorendertimelinespantempochanges_1 = require("./audiorendertimelinespantempochanges");
var AudioRenderTimelineSpanSpanTypeEnum;
(function (AudioRenderTimelineSpanSpanTypeEnum) {
    AudioRenderTimelineSpanSpanTypeEnum["Metered"] = "metered";
    AudioRenderTimelineSpanSpanTypeEnum["Unmetered"] = "unmetered";
})(AudioRenderTimelineSpanSpanTypeEnum = exports.AudioRenderTimelineSpanSpanTypeEnum || (exports.AudioRenderTimelineSpanSpanTypeEnum = {}));
// AudioRenderTimelineSpan
/**
 * The beginning of a non-overlapping period of absolute time
**/
var AudioRenderTimelineSpan = /** @class */ (function (_super) {
    __extends(AudioRenderTimelineSpan, _super);
    function AudioRenderTimelineSpan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AudioRenderTimelineSpan.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instrument_groups", elemType: audiorendertimelinespaninstrumentgroup_1.AudioRenderTimelineSpanInstrumentGroup }),
        __metadata("design:type", Array)
    ], AudioRenderTimelineSpan.prototype, "instrumentGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regions", elemType: audiorendertimelinespanregion_1.AudioRenderTimelineSpanRegion }),
        __metadata("design:type", Array)
    ], AudioRenderTimelineSpan.prototype, "regions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=span_type" }),
        __metadata("design:type", String)
    ], AudioRenderTimelineSpan.prototype, "spanType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tempo" }),
        __metadata("design:type", Number)
    ], AudioRenderTimelineSpan.prototype, "tempo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tempo_changes", elemType: audiorendertimelinespantempochanges_1.AudioRenderTimelineSpanTempoChanges }),
        __metadata("design:type", Array)
    ], AudioRenderTimelineSpan.prototype, "tempoChanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], AudioRenderTimelineSpan.prototype, "time", void 0);
    return AudioRenderTimelineSpan;
}(utils_1.SpeakeasyBase));
exports.AudioRenderTimelineSpan = AudioRenderTimelineSpan;

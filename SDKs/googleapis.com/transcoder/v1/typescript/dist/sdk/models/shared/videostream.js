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
exports.VideoStream = void 0;
var utils_1 = require("../../../internal/utils");
var h264codecsettings_1 = require("./h264codecsettings");
var h265codecsettings_1 = require("./h265codecsettings");
var vp9codecsettings_1 = require("./vp9codecsettings");
// VideoStream
/**
 * Video stream resource.
**/
var VideoStream = /** @class */ (function (_super) {
    __extends(VideoStream, _super);
    function VideoStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=h264" }),
        __metadata("design:type", h264codecsettings_1.H264CodecSettings)
    ], VideoStream.prototype, "h264", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=h265" }),
        __metadata("design:type", h265codecsettings_1.H265CodecSettings)
    ], VideoStream.prototype, "h265", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vp9" }),
        __metadata("design:type", vp9codecsettings_1.Vp9CodecSettings)
    ], VideoStream.prototype, "vp9", void 0);
    return VideoStream;
}(utils_1.SpeakeasyBase));
exports.VideoStream = VideoStream;

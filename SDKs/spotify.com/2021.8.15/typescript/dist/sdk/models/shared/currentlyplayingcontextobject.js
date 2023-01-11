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
exports.CurrentlyPlayingContextObject = void 0;
var utils_1 = require("../../../internal/utils");
var disallowsobject_1 = require("./disallowsobject");
var contextobject_1 = require("./contextobject");
var deviceobject_1 = require("./deviceobject");
// CurrentlyPlayingContextObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingcontextobject - Find more info on the official Spotify Web API Reference
**/
var CurrentlyPlayingContextObject = /** @class */ (function (_super) {
    __extends(CurrentlyPlayingContextObject, _super);
    function CurrentlyPlayingContextObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actions" }),
        __metadata("design:type", disallowsobject_1.DisallowsObject)
    ], CurrentlyPlayingContextObject.prototype, "actions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=context" }),
        __metadata("design:type", contextobject_1.ContextObject)
    ], CurrentlyPlayingContextObject.prototype, "context", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currently_playing_type" }),
        __metadata("design:type", String)
    ], CurrentlyPlayingContextObject.prototype, "currentlyPlayingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", deviceobject_1.DeviceObject)
    ], CurrentlyPlayingContextObject.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_playing" }),
        __metadata("design:type", Boolean)
    ], CurrentlyPlayingContextObject.prototype, "isPlaying", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=item" }),
        __metadata("design:type", Object)
    ], CurrentlyPlayingContextObject.prototype, "item", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress_ms" }),
        __metadata("design:type", Number)
    ], CurrentlyPlayingContextObject.prototype, "progressMs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_state" }),
        __metadata("design:type", String)
    ], CurrentlyPlayingContextObject.prototype, "repeatState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shuffle_state" }),
        __metadata("design:type", String)
    ], CurrentlyPlayingContextObject.prototype, "shuffleState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", Number)
    ], CurrentlyPlayingContextObject.prototype, "timestamp", void 0);
    return CurrentlyPlayingContextObject;
}(utils_1.SpeakeasyBase));
exports.CurrentlyPlayingContextObject = CurrentlyPlayingContextObject;

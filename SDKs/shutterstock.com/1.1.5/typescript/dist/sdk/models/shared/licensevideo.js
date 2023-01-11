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
exports.LicenseVideo = exports.LicenseVideoSizeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var cookie_1 = require("./cookie");
var LicenseVideoSizeEnum;
(function (LicenseVideoSizeEnum) {
    LicenseVideoSizeEnum["Web"] = "web";
    LicenseVideoSizeEnum["Sd"] = "sd";
    LicenseVideoSizeEnum["Hd"] = "hd";
    LicenseVideoSizeEnum["Fourk"] = "4k";
})(LicenseVideoSizeEnum = exports.LicenseVideoSizeEnum || (exports.LicenseVideoSizeEnum = {}));
// LicenseVideo
/**
 * Data required to license a video
**/
var LicenseVideo = /** @class */ (function (_super) {
    __extends(LicenseVideo, _super);
    function LicenseVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auth_cookie" }),
        __metadata("design:type", cookie_1.Cookie)
    ], LicenseVideo.prototype, "authCookie", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=editorial_acknowledgement" }),
        __metadata("design:type", Boolean)
    ], LicenseVideo.prototype, "editorialAcknowledgement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", Object)
    ], LicenseVideo.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], LicenseVideo.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_id" }),
        __metadata("design:type", String)
    ], LicenseVideo.prototype, "searchId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_modal" }),
        __metadata("design:type", Boolean)
    ], LicenseVideo.prototype, "showModal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], LicenseVideo.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscription_id" }),
        __metadata("design:type", String)
    ], LicenseVideo.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_id" }),
        __metadata("design:type", String)
    ], LicenseVideo.prototype, "videoId", void 0);
    return LicenseVideo;
}(utils_1.SpeakeasyBase));
exports.LicenseVideo = LicenseVideo;

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
exports.LicenseImage = exports.LicenseImageSizeEnum = exports.LicenseImageFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var cookie_1 = require("./cookie");
var customsizedimensions_1 = require("./customsizedimensions");
var LicenseImageFormatEnum;
(function (LicenseImageFormatEnum) {
    LicenseImageFormatEnum["Jpg"] = "jpg";
    LicenseImageFormatEnum["Eps"] = "eps";
})(LicenseImageFormatEnum = exports.LicenseImageFormatEnum || (exports.LicenseImageFormatEnum = {}));
var LicenseImageSizeEnum;
(function (LicenseImageSizeEnum) {
    LicenseImageSizeEnum["Small"] = "small";
    LicenseImageSizeEnum["Medium"] = "medium";
    LicenseImageSizeEnum["Huge"] = "huge";
    LicenseImageSizeEnum["Vector"] = "vector";
    LicenseImageSizeEnum["Custom"] = "custom";
})(LicenseImageSizeEnum = exports.LicenseImageSizeEnum || (exports.LicenseImageSizeEnum = {}));
// LicenseImage
/**
 * Data required to license an image
**/
var LicenseImage = /** @class */ (function (_super) {
    __extends(LicenseImage, _super);
    function LicenseImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auth_cookie" }),
        __metadata("design:type", cookie_1.Cookie)
    ], LicenseImage.prototype, "authCookie", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_dimensions" }),
        __metadata("design:type", customsizedimensions_1.CustomSizeDimensions)
    ], LicenseImage.prototype, "customDimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=editorial_acknowledgement" }),
        __metadata("design:type", Boolean)
    ], LicenseImage.prototype, "editorialAcknowledgement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LicenseImage.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image_id" }),
        __metadata("design:type", String)
    ], LicenseImage.prototype, "imageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", Object)
    ], LicenseImage.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], LicenseImage.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_id" }),
        __metadata("design:type", String)
    ], LicenseImage.prototype, "searchId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_modal" }),
        __metadata("design:type", Boolean)
    ], LicenseImage.prototype, "showModal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], LicenseImage.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscription_id" }),
        __metadata("design:type", String)
    ], LicenseImage.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification_code" }),
        __metadata("design:type", String)
    ], LicenseImage.prototype, "verificationCode", void 0);
    return LicenseImage;
}(utils_1.SpeakeasyBase));
exports.LicenseImage = LicenseImage;

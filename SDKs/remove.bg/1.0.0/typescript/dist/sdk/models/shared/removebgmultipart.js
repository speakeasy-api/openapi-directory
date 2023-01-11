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
exports.RemoveBgMultipart = exports.RemoveBgMultipartTypeLevelEnum = exports.RemoveBgMultipartTypeEnum = exports.RemoveBgMultipartSizeEnum = exports.RemoveBgMultipartImageFile = exports.RemoveBgMultipartFormatEnum = exports.RemoveBgMultipartChannelsEnum = exports.RemoveBgMultipartBgImageFile = void 0;
var utils_1 = require("../../../internal/utils");
var RemoveBgMultipartBgImageFile = /** @class */ (function (_super) {
    __extends(RemoveBgMultipartBgImageFile, _super);
    function RemoveBgMultipartBgImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=bg_image_file" }),
        __metadata("design:type", String)
    ], RemoveBgMultipartBgImageFile.prototype, "bgImageFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], RemoveBgMultipartBgImageFile.prototype, "content", void 0);
    return RemoveBgMultipartBgImageFile;
}(utils_1.SpeakeasyBase));
exports.RemoveBgMultipartBgImageFile = RemoveBgMultipartBgImageFile;
var RemoveBgMultipartChannelsEnum;
(function (RemoveBgMultipartChannelsEnum) {
    RemoveBgMultipartChannelsEnum["Rgba"] = "rgba";
    RemoveBgMultipartChannelsEnum["Alpha"] = "alpha";
})(RemoveBgMultipartChannelsEnum = exports.RemoveBgMultipartChannelsEnum || (exports.RemoveBgMultipartChannelsEnum = {}));
var RemoveBgMultipartFormatEnum;
(function (RemoveBgMultipartFormatEnum) {
    RemoveBgMultipartFormatEnum["Auto"] = "auto";
    RemoveBgMultipartFormatEnum["Png"] = "png";
    RemoveBgMultipartFormatEnum["Jpg"] = "jpg";
    RemoveBgMultipartFormatEnum["Zip"] = "zip";
})(RemoveBgMultipartFormatEnum = exports.RemoveBgMultipartFormatEnum || (exports.RemoveBgMultipartFormatEnum = {}));
var RemoveBgMultipartImageFile = /** @class */ (function (_super) {
    __extends(RemoveBgMultipartImageFile, _super);
    function RemoveBgMultipartImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], RemoveBgMultipartImageFile.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=image_file" }),
        __metadata("design:type", String)
    ], RemoveBgMultipartImageFile.prototype, "imageFile", void 0);
    return RemoveBgMultipartImageFile;
}(utils_1.SpeakeasyBase));
exports.RemoveBgMultipartImageFile = RemoveBgMultipartImageFile;
var RemoveBgMultipartSizeEnum;
(function (RemoveBgMultipartSizeEnum) {
    RemoveBgMultipartSizeEnum["Preview"] = "preview";
    RemoveBgMultipartSizeEnum["Full"] = "full";
    RemoveBgMultipartSizeEnum["Auto"] = "auto";
})(RemoveBgMultipartSizeEnum = exports.RemoveBgMultipartSizeEnum || (exports.RemoveBgMultipartSizeEnum = {}));
var RemoveBgMultipartTypeEnum;
(function (RemoveBgMultipartTypeEnum) {
    RemoveBgMultipartTypeEnum["Auto"] = "auto";
    RemoveBgMultipartTypeEnum["Person"] = "person";
    RemoveBgMultipartTypeEnum["Product"] = "product";
    RemoveBgMultipartTypeEnum["Car"] = "car";
})(RemoveBgMultipartTypeEnum = exports.RemoveBgMultipartTypeEnum || (exports.RemoveBgMultipartTypeEnum = {}));
var RemoveBgMultipartTypeLevelEnum;
(function (RemoveBgMultipartTypeLevelEnum) {
    RemoveBgMultipartTypeLevelEnum["None"] = "none";
    RemoveBgMultipartTypeLevelEnum["One"] = "1";
    RemoveBgMultipartTypeLevelEnum["Two"] = "2";
    RemoveBgMultipartTypeLevelEnum["Latest"] = "latest";
})(RemoveBgMultipartTypeLevelEnum = exports.RemoveBgMultipartTypeLevelEnum || (exports.RemoveBgMultipartTypeLevelEnum = {}));
var RemoveBgMultipart = /** @class */ (function (_super) {
    __extends(RemoveBgMultipart, _super);
    function RemoveBgMultipart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=add_shadow" }),
        __metadata("design:type", Boolean)
    ], RemoveBgMultipart.prototype, "addShadow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=bg_color" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "bgColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", RemoveBgMultipartBgImageFile)
    ], RemoveBgMultipart.prototype, "bgImageFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=bg_image_url" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "bgImageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=channels" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "channels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=crop" }),
        __metadata("design:type", Boolean)
    ], RemoveBgMultipart.prototype, "crop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=crop_margin" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "cropMargin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=format" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", RemoveBgMultipartImageFile)
    ], RemoveBgMultipart.prototype, "imageFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=image_file_b64" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "imageFileB64", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=image_url" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "imageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=position" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=roi" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "roi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=scale" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "scale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=semitransparency" }),
        __metadata("design:type", Boolean)
    ], RemoveBgMultipart.prototype, "semitransparency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=size" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type_level" }),
        __metadata("design:type", String)
    ], RemoveBgMultipart.prototype, "typeLevel", void 0);
    return RemoveBgMultipart;
}(utils_1.SpeakeasyBase));
exports.RemoveBgMultipart = RemoveBgMultipart;

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
exports.RemoveBgJson = exports.RemoveBgJsonTypeLevelEnum = exports.RemoveBgJsonTypeEnum = exports.RemoveBgJsonSizeEnum = exports.RemoveBgJsonFormatEnum = exports.RemoveBgJsonChannelsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var RemoveBgJsonChannelsEnum;
(function (RemoveBgJsonChannelsEnum) {
    RemoveBgJsonChannelsEnum["Rgba"] = "rgba";
    RemoveBgJsonChannelsEnum["Alpha"] = "alpha";
})(RemoveBgJsonChannelsEnum = exports.RemoveBgJsonChannelsEnum || (exports.RemoveBgJsonChannelsEnum = {}));
var RemoveBgJsonFormatEnum;
(function (RemoveBgJsonFormatEnum) {
    RemoveBgJsonFormatEnum["Auto"] = "auto";
    RemoveBgJsonFormatEnum["Png"] = "png";
    RemoveBgJsonFormatEnum["Jpg"] = "jpg";
    RemoveBgJsonFormatEnum["Zip"] = "zip";
})(RemoveBgJsonFormatEnum = exports.RemoveBgJsonFormatEnum || (exports.RemoveBgJsonFormatEnum = {}));
var RemoveBgJsonSizeEnum;
(function (RemoveBgJsonSizeEnum) {
    RemoveBgJsonSizeEnum["Preview"] = "preview";
    RemoveBgJsonSizeEnum["Full"] = "full";
    RemoveBgJsonSizeEnum["Auto"] = "auto";
})(RemoveBgJsonSizeEnum = exports.RemoveBgJsonSizeEnum || (exports.RemoveBgJsonSizeEnum = {}));
var RemoveBgJsonTypeEnum;
(function (RemoveBgJsonTypeEnum) {
    RemoveBgJsonTypeEnum["Auto"] = "auto";
    RemoveBgJsonTypeEnum["Person"] = "person";
    RemoveBgJsonTypeEnum["Product"] = "product";
    RemoveBgJsonTypeEnum["Car"] = "car";
})(RemoveBgJsonTypeEnum = exports.RemoveBgJsonTypeEnum || (exports.RemoveBgJsonTypeEnum = {}));
var RemoveBgJsonTypeLevelEnum;
(function (RemoveBgJsonTypeLevelEnum) {
    RemoveBgJsonTypeLevelEnum["None"] = "none";
    RemoveBgJsonTypeLevelEnum["One"] = "1";
    RemoveBgJsonTypeLevelEnum["Two"] = "2";
    RemoveBgJsonTypeLevelEnum["Latest"] = "latest";
})(RemoveBgJsonTypeLevelEnum = exports.RemoveBgJsonTypeLevelEnum || (exports.RemoveBgJsonTypeLevelEnum = {}));
var RemoveBgJson = /** @class */ (function (_super) {
    __extends(RemoveBgJson, _super);
    function RemoveBgJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add_shadow, form, name=add_shadow;" }),
        __metadata("design:type", Boolean)
    ], RemoveBgJson.prototype, "addShadow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bg_color, form, name=bg_color;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "bgColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bg_image_url, form, name=bg_image_url;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "bgImageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channels, form, name=channels;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "channels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=crop, form, name=crop;" }),
        __metadata("design:type", Boolean)
    ], RemoveBgJson.prototype, "crop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=crop_margin, form, name=crop_margin;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "cropMargin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format, form, name=format;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image_file_b64, form, name=image_file_b64;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "imageFileB64", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image_url, form, name=image_url;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "imageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position, form, name=position;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roi, form, name=roi;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "roi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scale, form, name=scale;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "scale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=semitransparency, form, name=semitransparency;" }),
        __metadata("design:type", Boolean)
    ], RemoveBgJson.prototype, "semitransparency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size, form, name=size;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type, form, name=type;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type_level, form, name=type_level;" }),
        __metadata("design:type", String)
    ], RemoveBgJson.prototype, "typeLevel", void 0);
    return RemoveBgJson;
}(utils_1.SpeakeasyBase));
exports.RemoveBgJson = RemoveBgJson;

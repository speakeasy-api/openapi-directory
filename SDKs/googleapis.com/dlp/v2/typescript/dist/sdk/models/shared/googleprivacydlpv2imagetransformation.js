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
exports.GooglePrivacyDlpV2ImageTransformation = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2color_1 = require("./googleprivacydlpv2color");
var googleprivacydlpv2selectedinfotypes_1 = require("./googleprivacydlpv2selectedinfotypes");
// GooglePrivacyDlpV2ImageTransformation
/**
 * Configuration for determining how redaction of images should occur.
**/
var GooglePrivacyDlpV2ImageTransformation = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2ImageTransformation, _super);
    function GooglePrivacyDlpV2ImageTransformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allInfoTypes" }),
        __metadata("design:type", Object)
    ], GooglePrivacyDlpV2ImageTransformation.prototype, "allInfoTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allText" }),
        __metadata("design:type", Object)
    ], GooglePrivacyDlpV2ImageTransformation.prototype, "allText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redactionColor" }),
        __metadata("design:type", googleprivacydlpv2color_1.GooglePrivacyDlpV2Color)
    ], GooglePrivacyDlpV2ImageTransformation.prototype, "redactionColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selectedInfoTypes" }),
        __metadata("design:type", googleprivacydlpv2selectedinfotypes_1.GooglePrivacyDlpV2SelectedInfoTypes)
    ], GooglePrivacyDlpV2ImageTransformation.prototype, "selectedInfoTypes", void 0);
    return GooglePrivacyDlpV2ImageTransformation;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2ImageTransformation = GooglePrivacyDlpV2ImageTransformation;

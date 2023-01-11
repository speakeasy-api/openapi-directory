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
exports.GoogleCloudRecaptchaenterpriseV1Key = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudrecaptchaenterprisev1androidkeysettings_1 = require("./googlecloudrecaptchaenterprisev1androidkeysettings");
var googlecloudrecaptchaenterprisev1ioskeysettings_1 = require("./googlecloudrecaptchaenterprisev1ioskeysettings");
var googlecloudrecaptchaenterprisev1testingoptions_1 = require("./googlecloudrecaptchaenterprisev1testingoptions");
var googlecloudrecaptchaenterprisev1wafsettings_1 = require("./googlecloudrecaptchaenterprisev1wafsettings");
var googlecloudrecaptchaenterprisev1webkeysettings_1 = require("./googlecloudrecaptchaenterprisev1webkeysettings");
// GoogleCloudRecaptchaenterpriseV1Key
/**
 * A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.
**/
var GoogleCloudRecaptchaenterpriseV1Key = /** @class */ (function (_super) {
    __extends(GoogleCloudRecaptchaenterpriseV1Key, _super);
    function GoogleCloudRecaptchaenterpriseV1Key() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=androidSettings" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1androidkeysettings_1.GoogleCloudRecaptchaenterpriseV1AndroidKeySettings)
    ], GoogleCloudRecaptchaenterpriseV1Key.prototype, "androidSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1Key.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1Key.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iosSettings" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1ioskeysettings_1.GoogleCloudRecaptchaenterpriseV1IosKeySettings)
    ], GoogleCloudRecaptchaenterpriseV1Key.prototype, "iosSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], GoogleCloudRecaptchaenterpriseV1Key.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1Key.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=testingOptions" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1testingoptions_1.GoogleCloudRecaptchaenterpriseV1TestingOptions)
    ], GoogleCloudRecaptchaenterpriseV1Key.prototype, "testingOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wafSettings" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1wafsettings_1.GoogleCloudRecaptchaenterpriseV1WafSettings)
    ], GoogleCloudRecaptchaenterpriseV1Key.prototype, "wafSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webSettings" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1webkeysettings_1.GoogleCloudRecaptchaenterpriseV1WebKeySettings)
    ], GoogleCloudRecaptchaenterpriseV1Key.prototype, "webSettings", void 0);
    return GoogleCloudRecaptchaenterpriseV1Key;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudRecaptchaenterpriseV1Key = GoogleCloudRecaptchaenterpriseV1Key;

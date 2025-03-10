"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.MessagingV1BrandRegistrationsBrandVetting = void 0;
var utils_1 = require("../../../internal/utils");
var brandvettingenumvettingproviderenum_1 = require("./brandvettingenumvettingproviderenum");
var class_transformer_1 = require("class-transformer");
/**
 * Created
 */
var MessagingV1BrandRegistrationsBrandVetting = /** @class */ (function (_super) {
    __extends(MessagingV1BrandRegistrationsBrandVetting, _super);
    function MessagingV1BrandRegistrationsBrandVetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "account_sid" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrationsBrandVetting.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "brand_sid" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrationsBrandVetting.prototype, "brandSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "brand_vetting_sid" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrationsBrandVetting.prototype, "brandVettingSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "date_created" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], MessagingV1BrandRegistrationsBrandVetting.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "date_updated" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], MessagingV1BrandRegistrationsBrandVetting.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrationsBrandVetting.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "vetting_class" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrationsBrandVetting.prototype, "vettingClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "vetting_id" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrationsBrandVetting.prototype, "vettingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "vetting_provider" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrationsBrandVetting.prototype, "vettingProvider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "vetting_status" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrationsBrandVetting.prototype, "vettingStatus", void 0);
    return MessagingV1BrandRegistrationsBrandVetting;
}(utils_1.SpeakeasyBase));
exports.MessagingV1BrandRegistrationsBrandVetting = MessagingV1BrandRegistrationsBrandVetting;

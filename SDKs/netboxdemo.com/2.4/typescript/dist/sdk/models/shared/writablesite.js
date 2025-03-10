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
exports.WritableSiteInput = exports.WritableSiteStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var WritableSiteStatusEnum;
(function (WritableSiteStatusEnum) {
    WritableSiteStatusEnum["One"] = "1";
    WritableSiteStatusEnum["Two"] = "2";
    WritableSiteStatusEnum["Four"] = "4";
})(WritableSiteStatusEnum = exports.WritableSiteStatusEnum || (exports.WritableSiteStatusEnum = {}));
var WritableSiteInput = /** @class */ (function (_super) {
    __extends(WritableSiteInput, _super);
    function WritableSiteInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "asn" }),
        __metadata("design:type", Number)
    ], WritableSiteInput.prototype, "asn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comments" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "contact_email" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "contact_name" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "contact_phone" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "contactPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "custom_fields" }),
        __metadata("design:type", Object)
    ], WritableSiteInput.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "facility" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "facility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "latitude" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "latitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "longitude" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "longitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "physical_address" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "physicalAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "region" }),
        __metadata("design:type", Number)
    ], WritableSiteInput.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "shipping_address" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "shippingAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "slug" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "slug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "tags" }),
        __metadata("design:type", Array)
    ], WritableSiteInput.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "tenant" }),
        __metadata("design:type", Number)
    ], WritableSiteInput.prototype, "tenant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "time_zone" }),
        __metadata("design:type", String)
    ], WritableSiteInput.prototype, "timeZone", void 0);
    return WritableSiteInput;
}(utils_1.SpeakeasyBase));
exports.WritableSiteInput = WritableSiteInput;

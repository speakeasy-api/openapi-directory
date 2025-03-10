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
exports.Subscription = exports.SubscriptionStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var subscriptionaddon_1 = require("./subscriptionaddon");
var subscriptionbilling_1 = require("./subscriptionbilling");
var subscriptionproduct_1 = require("./subscriptionproduct");
var subscriptionrelations_1 = require("./subscriptionrelations");
var class_transformer_1 = require("class-transformer");
/**
 * Whether the Subscription is active or the specific non-active state
 */
var SubscriptionStatusEnum;
(function (SubscriptionStatusEnum) {
    SubscriptionStatusEnum["Active"] = "ACTIVE";
    SubscriptionStatusEnum["Pending"] = "PENDING";
    SubscriptionStatusEnum["Canceled"] = "CANCELED";
})(SubscriptionStatusEnum = exports.SubscriptionStatusEnum || (exports.SubscriptionStatusEnum = {}));
/**
 * Request was successful
 */
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    function Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: subscriptionaddon_1.SubscriptionAddon }),
        (0, class_transformer_1.Expose)({ name: "addons" }),
        (0, class_transformer_1.Type)(function () { return subscriptionaddon_1.SubscriptionAddon; }),
        __metadata("design:type", Array)
    ], Subscription.prototype, "addons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "billing" }),
        (0, class_transformer_1.Type)(function () { return subscriptionbilling_1.SubscriptionBilling; }),
        __metadata("design:type", subscriptionbilling_1.SubscriptionBilling)
    ], Subscription.prototype, "billing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cancelable" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "cancelable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "createdAt" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "expiresAt" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "expiresAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "label" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "launchUrl" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "launchUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "paymentProfileId" }),
        __metadata("design:type", Number)
    ], Subscription.prototype, "paymentProfileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "priceLocked" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "priceLocked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "product" }),
        (0, class_transformer_1.Type)(function () { return subscriptionproduct_1.SubscriptionProduct; }),
        __metadata("design:type", subscriptionproduct_1.SubscriptionProduct)
    ], Subscription.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "relations" }),
        (0, class_transformer_1.Type)(function () { return subscriptionrelations_1.SubscriptionRelations; }),
        __metadata("design:type", subscriptionrelations_1.SubscriptionRelations)
    ], Subscription.prototype, "relations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "renewAuto" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "renewAuto", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "renewable" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "renewable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "subscriptionId" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "upgradeable" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "upgradeable", void 0);
    return Subscription;
}(utils_1.SpeakeasyBase));
exports.Subscription = Subscription;

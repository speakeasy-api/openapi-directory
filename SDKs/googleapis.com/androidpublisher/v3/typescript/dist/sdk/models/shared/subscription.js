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
exports.SubscriptionInput = exports.Subscription = void 0;
var utils_1 = require("../../../internal/utils");
var baseplan_1 = require("./baseplan");
var subscriptionlisting_1 = require("./subscriptionlisting");
var subscriptiontaxandcompliancesettings_1 = require("./subscriptiontaxandcompliancesettings");
var baseplan_2 = require("./baseplan");
// Subscription
/**
 * A single subscription for an app.
**/
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    function Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basePlans", elemType: baseplan_1.BasePlan }),
        __metadata("design:type", Array)
    ], Subscription.prototype, "basePlans", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listings", elemType: subscriptionlisting_1.SubscriptionListing }),
        __metadata("design:type", Array)
    ], Subscription.prototype, "listings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "packageName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "productId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxAndComplianceSettings" }),
        __metadata("design:type", subscriptiontaxandcompliancesettings_1.SubscriptionTaxAndComplianceSettings)
    ], Subscription.prototype, "taxAndComplianceSettings", void 0);
    return Subscription;
}(utils_1.SpeakeasyBase));
exports.Subscription = Subscription;
// SubscriptionInput
/**
 * A single subscription for an app.
**/
var SubscriptionInput = /** @class */ (function (_super) {
    __extends(SubscriptionInput, _super);
    function SubscriptionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basePlans", elemType: baseplan_2.BasePlanInput }),
        __metadata("design:type", Array)
    ], SubscriptionInput.prototype, "basePlans", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listings", elemType: subscriptionlisting_1.SubscriptionListing }),
        __metadata("design:type", Array)
    ], SubscriptionInput.prototype, "listings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], SubscriptionInput.prototype, "packageName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], SubscriptionInput.prototype, "productId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxAndComplianceSettings" }),
        __metadata("design:type", subscriptiontaxandcompliancesettings_1.SubscriptionTaxAndComplianceSettings)
    ], SubscriptionInput.prototype, "taxAndComplianceSettings", void 0);
    return SubscriptionInput;
}(utils_1.SpeakeasyBase));
exports.SubscriptionInput = SubscriptionInput;

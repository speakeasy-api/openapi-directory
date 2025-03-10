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
exports.LoyaltyProgram = void 0;
var utils_1 = require("../../../internal/utils");
var loyaltyprogramaccrualrule_1 = require("./loyaltyprogramaccrualrule");
var loyaltyprogramexpirationpolicy_1 = require("./loyaltyprogramexpirationpolicy");
var loyaltyprogramrewardtier_1 = require("./loyaltyprogramrewardtier");
var loyaltyprogramterminology_1 = require("./loyaltyprogramterminology");
var class_transformer_1 = require("class-transformer");
/**
 * Represents a Square loyalty program. Loyalty programs define how buyers can earn points and redeem points for rewards.
 *
 * @remarks
 * Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard.
 * For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
 */
var LoyaltyProgram = /** @class */ (function (_super) {
    __extends(LoyaltyProgram, _super);
    function LoyaltyProgram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: loyaltyprogramaccrualrule_1.LoyaltyProgramAccrualRule }),
        (0, class_transformer_1.Expose)({ name: "accrual_rules" }),
        (0, class_transformer_1.Type)(function () { return loyaltyprogramaccrualrule_1.LoyaltyProgramAccrualRule; }),
        __metadata("design:type", Array)
    ], LoyaltyProgram.prototype, "accrualRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "created_at" }),
        __metadata("design:type", String)
    ], LoyaltyProgram.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "expiration_policy" }),
        (0, class_transformer_1.Type)(function () { return loyaltyprogramexpirationpolicy_1.LoyaltyProgramExpirationPolicy; }),
        __metadata("design:type", loyaltyprogramexpirationpolicy_1.LoyaltyProgramExpirationPolicy)
    ], LoyaltyProgram.prototype, "expirationPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], LoyaltyProgram.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "location_ids" }),
        __metadata("design:type", Array)
    ], LoyaltyProgram.prototype, "locationIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: loyaltyprogramrewardtier_1.LoyaltyProgramRewardTier }),
        (0, class_transformer_1.Expose)({ name: "reward_tiers" }),
        (0, class_transformer_1.Type)(function () { return loyaltyprogramrewardtier_1.LoyaltyProgramRewardTier; }),
        __metadata("design:type", Array)
    ], LoyaltyProgram.prototype, "rewardTiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], LoyaltyProgram.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "terminology" }),
        (0, class_transformer_1.Type)(function () { return loyaltyprogramterminology_1.LoyaltyProgramTerminology; }),
        __metadata("design:type", loyaltyprogramterminology_1.LoyaltyProgramTerminology)
    ], LoyaltyProgram.prototype, "terminology", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updated_at" }),
        __metadata("design:type", String)
    ], LoyaltyProgram.prototype, "updatedAt", void 0);
    return LoyaltyProgram;
}(utils_1.SpeakeasyBase));
exports.LoyaltyProgram = LoyaltyProgram;

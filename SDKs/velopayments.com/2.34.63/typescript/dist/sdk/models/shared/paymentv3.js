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
exports.PaymentV3 = void 0;
var utils_1 = require("../../../internal/utils");
var payoutpayeev3_1 = require("./payoutpayeev3");
var class_transformer_1 = require("class-transformer");
var PaymentV3 = /** @class */ (function (_super) {
    __extends(PaymentV3, _super);
    function PaymentV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "amount" }),
        __metadata("design:type", Number)
    ], PaymentV3.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "autoWithdrawnReasonCode" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "autoWithdrawnReasonCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "currency" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "payee" }),
        (0, class_transformer_1.Type)(function () { return payoutpayeev3_1.PayoutPayeeV3; }),
        __metadata("design:type", payoutpayeev3_1.PayoutPayeeV3)
    ], PaymentV3.prototype, "payee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "paymentId" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "paymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "paymentMemo" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "paymentMemo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "paymentMetadata" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "paymentMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "payorPaymentId" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "payorPaymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "railsId" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "railsId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "remoteId" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "remoteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "remoteSystemId" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "remoteSystemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sourceAccountName" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "sourceAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "transmissionType" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "transmissionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "withdrawable" }),
        __metadata("design:type", Boolean)
    ], PaymentV3.prototype, "withdrawable", void 0);
    return PaymentV3;
}(utils_1.SpeakeasyBase));
exports.PaymentV3 = PaymentV3;

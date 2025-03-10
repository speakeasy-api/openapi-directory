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
exports.PaymentWriteRequest = exports.PaymentWriteRequestPaymentProductEnum = exports.PaymentWriteRequestDebtorAccount = exports.PaymentWriteRequestDebtorAccountTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var instructedamountrequest_1 = require("./instructedamountrequest");
var periodicpaymentrequest_1 = require("./periodicpaymentrequest");
var class_transformer_1 = require("class-transformer");
/**
 * Debtor account type
 */
var PaymentWriteRequestDebtorAccountTypeEnum;
(function (PaymentWriteRequestDebtorAccountTypeEnum) {
    PaymentWriteRequestDebtorAccountTypeEnum["Iban"] = "IBAN";
    PaymentWriteRequestDebtorAccountTypeEnum["Scan"] = "SCAN";
})(PaymentWriteRequestDebtorAccountTypeEnum = exports.PaymentWriteRequestDebtorAccountTypeEnum || (exports.PaymentWriteRequestDebtorAccountTypeEnum = {}));
/**
 * Debtor account write serializer.
 */
var PaymentWriteRequestDebtorAccount = /** @class */ (function (_super) {
    __extends(PaymentWriteRequestDebtorAccount, _super);
    function PaymentWriteRequestDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "account" }),
        __metadata("design:type", String)
    ], PaymentWriteRequestDebtorAccount.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "address_country" }),
        __metadata("design:type", String)
    ], PaymentWriteRequestDebtorAccount.prototype, "addressCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "address_street" }),
        __metadata("design:type", String)
    ], PaymentWriteRequestDebtorAccount.prototype, "addressStreet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "currency" }),
        __metadata("design:type", String)
    ], PaymentWriteRequestDebtorAccount.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], PaymentWriteRequestDebtorAccount.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "post_code" }),
        __metadata("design:type", String)
    ], PaymentWriteRequestDebtorAccount.prototype, "postCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], PaymentWriteRequestDebtorAccount.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type_number" }),
        __metadata("design:type", String)
    ], PaymentWriteRequestDebtorAccount.prototype, "typeNumber", void 0);
    return PaymentWriteRequestDebtorAccount;
}(utils_1.SpeakeasyBase));
exports.PaymentWriteRequestDebtorAccount = PaymentWriteRequestDebtorAccount;
/**
 * Payment product
 */
var PaymentWriteRequestPaymentProductEnum;
(function (PaymentWriteRequestPaymentProductEnum) {
    PaymentWriteRequestPaymentProductEnum["T2P"] = "T2P";
    PaymentWriteRequestPaymentProductEnum["Sct"] = "SCT";
    PaymentWriteRequestPaymentProductEnum["Isct"] = "ISCT";
    PaymentWriteRequestPaymentProductEnum["Cbct"] = "CBCT";
})(PaymentWriteRequestPaymentProductEnum = exports.PaymentWriteRequestPaymentProductEnum || (exports.PaymentWriteRequestPaymentProductEnum = {}));
/**
 * PaymentWriteSerializer.
 */
var PaymentWriteRequest = /** @class */ (function (_super) {
    __extends(PaymentWriteRequest, _super);
    function PaymentWriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_account" }),
        __metadata("design:type", String)
    ], PaymentWriteRequest.prototype, "creditorAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "custom_payment_id" }),
        __metadata("design:type", String)
    ], PaymentWriteRequest.prototype, "customPaymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "debtor_account" }),
        (0, class_transformer_1.Type)(function () { return PaymentWriteRequestDebtorAccount; }),
        __metadata("design:type", PaymentWriteRequestDebtorAccount)
    ], PaymentWriteRequest.prototype, "debtorAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], PaymentWriteRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "institution_id" }),
        __metadata("design:type", String)
    ], PaymentWriteRequest.prototype, "institutionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "instructed_amount" }),
        (0, class_transformer_1.Type)(function () { return instructedamountrequest_1.InstructedAmountRequest; }),
        __metadata("design:type", instructedamountrequest_1.InstructedAmountRequest)
    ], PaymentWriteRequest.prototype, "instructedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "payment_product" }),
        __metadata("design:type", String)
    ], PaymentWriteRequest.prototype, "paymentProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "periodic_payment" }),
        (0, class_transformer_1.Type)(function () { return periodicpaymentrequest_1.PeriodicPaymentRequest; }),
        __metadata("design:type", periodicpaymentrequest_1.PeriodicPaymentRequest)
    ], PaymentWriteRequest.prototype, "periodicPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "redirect" }),
        __metadata("design:type", String)
    ], PaymentWriteRequest.prototype, "redirect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "requested_execution_date" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], PaymentWriteRequest.prototype, "requestedExecutionDate", void 0);
    return PaymentWriteRequest;
}(utils_1.SpeakeasyBase));
exports.PaymentWriteRequest = PaymentWriteRequest;

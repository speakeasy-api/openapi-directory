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
exports.PaymentResponseV3 = exports.PaymentResponseV3StatusEnum = exports.PaymentResponseV3FundingStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var paymenteventresponsev3_1 = require("./paymenteventresponsev3");
var paymentauditcurrencyv3enum_1 = require("./paymentauditcurrencyv3enum");
var PaymentResponseV3FundingStatusEnum;
(function (PaymentResponseV3FundingStatusEnum) {
    PaymentResponseV3FundingStatusEnum["Funded"] = "FUNDED";
    PaymentResponseV3FundingStatusEnum["Instructed"] = "INSTRUCTED";
    PaymentResponseV3FundingStatusEnum["Unfunded"] = "UNFUNDED";
})(PaymentResponseV3FundingStatusEnum = exports.PaymentResponseV3FundingStatusEnum || (exports.PaymentResponseV3FundingStatusEnum = {}));
var PaymentResponseV3StatusEnum;
(function (PaymentResponseV3StatusEnum) {
    PaymentResponseV3StatusEnum["Accepted"] = "ACCEPTED";
    PaymentResponseV3StatusEnum["AwaitingFunds"] = "AWAITING_FUNDS";
    PaymentResponseV3StatusEnum["Funded"] = "FUNDED";
    PaymentResponseV3StatusEnum["Unfunded"] = "UNFUNDED";
    PaymentResponseV3StatusEnum["BankPaymentRequested"] = "BANK_PAYMENT_REQUESTED";
    PaymentResponseV3StatusEnum["Rejected"] = "REJECTED";
    PaymentResponseV3StatusEnum["AcceptedByRails"] = "ACCEPTED_BY_RAILS";
    PaymentResponseV3StatusEnum["Confirmed"] = "CONFIRMED";
    PaymentResponseV3StatusEnum["Failed"] = "FAILED";
    PaymentResponseV3StatusEnum["Withdrawn"] = "WITHDRAWN";
})(PaymentResponseV3StatusEnum = exports.PaymentResponseV3StatusEnum || (exports.PaymentResponseV3StatusEnum = {}));
var PaymentResponseV3 = /** @class */ (function (_super) {
    __extends(PaymentResponseV3, _super);
    function PaymentResponseV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events", elemType: paymenteventresponsev3_1.PaymentEventResponseV3 }),
        __metadata("design:type", Array)
    ], PaymentResponseV3.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filenameReference" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "filenameReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fundingStatus" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "fundingStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "iban", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=individualIdentificationNumber" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "individualIdentificationNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invertedRate" }),
        __metadata("design:type", Number)
    ], PaymentResponseV3.prototype, "invertedRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payeeId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "payeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentAmount" }),
        __metadata("design:type", Number)
    ], PaymentResponseV3.prototype, "paymentAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentChannelId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "paymentChannelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentChannelName" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "paymentChannelName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentCurrency" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "paymentCurrency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "paymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMemo" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "paymentMemo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payorId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "payorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payorName" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "payorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payorPaymentId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "payorPaymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quoteId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "quoteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=railsBatchId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "railsBatchId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=railsId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "railsId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=railsPaymentId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "railsPaymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], PaymentResponseV3.prototype, "rate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rejectionReason" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "rejectionReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "remoteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=returnCost" }),
        __metadata("design:type", Number)
    ], PaymentResponseV3.prototype, "returnCost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=returnReason" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "returnReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "routingNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceAccountId" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "sourceAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceAccountName" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "sourceAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceAmount" }),
        __metadata("design:type", Number)
    ], PaymentResponseV3.prototype, "sourceAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceCurrency" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "sourceCurrency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submittedDateTime" }),
        __metadata("design:type", Date)
    ], PaymentResponseV3.prototype, "submittedDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=traceNumber" }),
        __metadata("design:type", String)
    ], PaymentResponseV3.prototype, "traceNumber", void 0);
    return PaymentResponseV3;
}(utils_1.SpeakeasyBase));
exports.PaymentResponseV3 = PaymentResponseV3;

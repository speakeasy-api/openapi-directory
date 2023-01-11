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
exports.Transactions = void 0;
var utils_1 = require("../../../internal/utils");
var hreftype_1 = require("./hreftype");
var additionalinformationstructured_1 = require("./additionalinformationstructured");
var balance_1 = require("./balance");
var accountreference16ch_1 = require("./accountreference16ch");
var reportexchangerate_1 = require("./reportexchangerate");
var entrydetailselement_1 = require("./entrydetailselement");
var purposecodeenum_1 = require("./purposecodeenum");
var remittanceinformationstructured_1 = require("./remittanceinformationstructured");
var amount_1 = require("./amount");
// Transactions
/**
 * Transaction details.
**/
var Transactions = /** @class */ (function (_super) {
    __extends(Transactions, _super);
    function Transactions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links", elemType: hreftype_1.HrefType }),
        __metadata("design:type", Object)
    ], Transactions.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalInformation" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "additionalInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalInformationStructured" }),
        __metadata("design:type", additionalinformationstructured_1.AdditionalInformationStructured)
    ], Transactions.prototype, "additionalInformationStructured", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balanceAfterTransaction" }),
        __metadata("design:type", balance_1.Balance)
    ], Transactions.prototype, "balanceAfterTransaction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankTransactionCode" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "bankTransactionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batchIndicator" }),
        __metadata("design:type", Boolean)
    ], Transactions.prototype, "batchIndicator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batchNumberOfTransactions" }),
        __metadata("design:type", Number)
    ], Transactions.prototype, "batchNumberOfTransactions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bookingDate" }),
        __metadata("design:type", Date)
    ], Transactions.prototype, "bookingDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=checkId" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "checkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorAccount" }),
        __metadata("design:type", accountreference16ch_1.AccountReference16Ch)
    ], Transactions.prototype, "creditorAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorAgent" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "creditorAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorId" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "creditorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorName" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "creditorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyExchange", elemType: reportexchangerate_1.ReportExchangeRate }),
        __metadata("design:type", Array)
    ], Transactions.prototype, "currencyExchange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debtorAccount" }),
        __metadata("design:type", accountreference16ch_1.AccountReference16Ch)
    ], Transactions.prototype, "debtorAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debtorAgent" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "debtorAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debtorName" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "debtorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endToEndId" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "endToEndId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entryDetails", elemType: entrydetailselement_1.EntryDetailsElement }),
        __metadata("design:type", Array)
    ], Transactions.prototype, "entryDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entryReference" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "entryReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mandateId" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "mandateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proprietaryBankTransactionCode" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "proprietaryBankTransactionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purposeCode" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "purposeCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationStructured" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "remittanceInformationStructured", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationStructuredArray", elemType: remittanceinformationstructured_1.RemittanceInformationStructured }),
        __metadata("design:type", Array)
    ], Transactions.prototype, "remittanceInformationStructuredArray", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationUnstructured" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "remittanceInformationUnstructured", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationUnstructuredArray" }),
        __metadata("design:type", Array)
    ], Transactions.prototype, "remittanceInformationUnstructuredArray", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionAmount" }),
        __metadata("design:type", amount_1.Amount)
    ], Transactions.prototype, "transactionAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionId" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "transactionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ultimateCreditor" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "ultimateCreditor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ultimateDebtor" }),
        __metadata("design:type", String)
    ], Transactions.prototype, "ultimateDebtor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valueDate" }),
        __metadata("design:type", Date)
    ], Transactions.prototype, "valueDate", void 0);
    return Transactions;
}(utils_1.SpeakeasyBase));
exports.Transactions = Transactions;

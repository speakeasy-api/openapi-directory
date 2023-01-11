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
exports.Invoice = exports.InvoiceTaxSystemEnum = exports.InvoiceTaxExemptReasonEnum = exports.InvoiceThePaymentTerms = exports.InvoicePaymentMeansCodeEnum = exports.InvoiceTypeOfInvoiceEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accountingcustomerparty_1 = require("./accountingcustomerparty");
var accountingsupplierparty_1 = require("./accountingsupplierparty");
var allowancecharge_1 = require("./allowancecharge");
var delivery_1 = require("./delivery");
var currencycodeenum_1 = require("./currencycodeenum");
var invoiceline_1 = require("./invoiceline");
var paymentmeans_1 = require("./paymentmeans");
var taxsubtotal_1 = require("./taxsubtotal");
var InvoiceTypeOfInvoiceEnum;
(function (InvoiceTypeOfInvoiceEnum) {
    InvoiceTypeOfInvoiceEnum["ThreeHundredAndEighty"] = "380";
    InvoiceTypeOfInvoiceEnum["ThreeHundredAndEightyOne"] = "381";
    InvoiceTypeOfInvoiceEnum["ThreeHundredAndEightyFour"] = "384";
})(InvoiceTypeOfInvoiceEnum = exports.InvoiceTypeOfInvoiceEnum || (exports.InvoiceTypeOfInvoiceEnum = {}));
var InvoicePaymentMeansCodeEnum;
(function (InvoicePaymentMeansCodeEnum) {
    InvoicePaymentMeansCodeEnum["OnlinePaymentService"] = "online_payment_service";
    InvoicePaymentMeansCodeEnum["BankCard"] = "bank_card";
    InvoicePaymentMeansCodeEnum["DirectDebit"] = "direct_debit";
    InvoicePaymentMeansCodeEnum["StandingAgreement"] = "standing_agreement";
    InvoicePaymentMeansCodeEnum["CreditTransfer"] = "credit_transfer";
    InvoicePaymentMeansCodeEnum["SeBankgiro"] = "se_bankgiro";
    InvoicePaymentMeansCodeEnum["SePlusgiro"] = "se_plusgiro";
    InvoicePaymentMeansCodeEnum["AunzNpp"] = "aunz_npp";
    InvoicePaymentMeansCodeEnum["Unknown"] = "";
    InvoicePaymentMeansCodeEnum["One"] = "1";
    InvoicePaymentMeansCodeEnum["Thirty"] = "30";
    InvoicePaymentMeansCodeEnum["ThirtyOne"] = "31";
    InvoicePaymentMeansCodeEnum["FortyTwo"] = "42";
    InvoicePaymentMeansCodeEnum["FortyEight"] = "48";
    InvoicePaymentMeansCodeEnum["FortyNine"] = "49";
    InvoicePaymentMeansCodeEnum["FiftySeven"] = "57";
    InvoicePaymentMeansCodeEnum["FiftyEight"] = "58";
})(InvoicePaymentMeansCodeEnum = exports.InvoicePaymentMeansCodeEnum || (exports.InvoicePaymentMeansCodeEnum = {}));
// InvoiceThePaymentTerms
/**
 * The payment terms of the invoice.
**/
var InvoiceThePaymentTerms = /** @class */ (function (_super) {
    __extends(InvoiceThePaymentTerms, _super);
    function InvoiceThePaymentTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], InvoiceThePaymentTerms.prototype, "note", void 0);
    return InvoiceThePaymentTerms;
}(utils_1.SpeakeasyBase));
exports.InvoiceThePaymentTerms = InvoiceThePaymentTerms;
var InvoiceTaxExemptReasonEnum;
(function (InvoiceTaxExemptReasonEnum) {
    InvoiceTaxExemptReasonEnum["Export"] = "export";
    InvoiceTaxExemptReasonEnum["ReverseCharge"] = "reverse_charge";
    InvoiceTaxExemptReasonEnum["ZeroRated"] = "zero_rated";
    InvoiceTaxExemptReasonEnum["Exempt"] = "exempt";
    InvoiceTaxExemptReasonEnum["OutsideScope"] = "outside_scope";
    InvoiceTaxExemptReasonEnum["IntraCommunity"] = "intra_community";
})(InvoiceTaxExemptReasonEnum = exports.InvoiceTaxExemptReasonEnum || (exports.InvoiceTaxExemptReasonEnum = {}));
var InvoiceTaxSystemEnum;
(function (InvoiceTaxSystemEnum) {
    InvoiceTaxSystemEnum["TaxLineAmounts"] = "tax_line_amounts";
    InvoiceTaxSystemEnum["TaxLinePercentages"] = "tax_line_percentages";
    InvoiceTaxSystemEnum["TaxNoTax"] = "tax_no_tax";
})(InvoiceTaxSystemEnum = exports.InvoiceTaxSystemEnum || (exports.InvoiceTaxSystemEnum = {}));
// Invoice
/**
 * The invoice to send.  Provide either invoice, or invoiceData, but not both.
**/
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountingCost" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "accountingCost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountingCustomerParty" }),
        __metadata("design:type", accountingcustomerparty_1.AccountingCustomerParty)
    ], Invoice.prototype, "accountingCustomerParty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountingSupplierParty" }),
        __metadata("design:type", accountingsupplierparty_1.AccountingSupplierParty)
    ], Invoice.prototype, "accountingSupplierParty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowanceCharges", elemType: allowancecharge_1.AllowanceCharge }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "allowanceCharges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountIncludingVat" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "amountIncludingVat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingReference" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "billingReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buyerReference" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "buyerReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consumerTaxMode" }),
        __metadata("design:type", Boolean)
    ], Invoice.prototype, "consumerTaxMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractDocumentReference" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "contractDocumentReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delivery" }),
        __metadata("design:type", delivery_1.Delivery)
    ], Invoice.prototype, "delivery", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentCurrencyCode" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "documentCurrencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dueDate" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceLines", elemType: invoiceline_1.InvoiceLine }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "invoiceLines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceNumber" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "invoiceNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoicePeriod" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "invoicePeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceType" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "invoiceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issueDate" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "issueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "note", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderReference" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "orderReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMeansArray", elemType: paymentmeans_1.PaymentMeans }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "paymentMeansArray", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMeansBic" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "paymentMeansBic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMeansCode" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "paymentMeansCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMeansIban" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "paymentMeansIban", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMeansPaymentId" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "paymentMeansPaymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentTerms" }),
        __metadata("design:type", InvoiceThePaymentTerms)
    ], Invoice.prototype, "paymentTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prepaidAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "prepaidAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projectReference" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "projectReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=salesOrderId" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "salesOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxExemptReason" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "taxExemptReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxPointDate" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "taxPointDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxSubtotals", elemType: taxsubtotal_1.TaxSubtotal }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "taxSubtotals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxSystem" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "taxSystem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ublExtensions" }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "ublExtensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vatReverseCharge" }),
        __metadata("design:type", Boolean)
    ], Invoice.prototype, "vatReverseCharge", void 0);
    return Invoice;
}(utils_1.SpeakeasyBase));
exports.Invoice = Invoice;

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
exports.Invoice = exports.InvoiceTaxes = exports.InvoiceLineItems = exports.InvoiceDiscounts = void 0;
var utils_1 = require("../../../internal/utils");
var InvoiceDiscounts = /** @class */ (function (_super) {
    __extends(InvoiceDiscounts, _super);
    function InvoiceDiscounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], InvoiceDiscounts.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InvoiceDiscounts.prototype, "description", void 0);
    return InvoiceDiscounts;
}(utils_1.SpeakeasyBase));
exports.InvoiceDiscounts = InvoiceDiscounts;
var InvoiceLineItems = /** @class */ (function (_super) {
    __extends(InvoiceLineItems, _super);
    function InvoiceLineItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], InvoiceLineItems.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InvoiceLineItems.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discount_amount" }),
        __metadata("design:type", Number)
    ], InvoiceLineItems.prototype, "discountAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], InvoiceLineItems.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax_amount" }),
        __metadata("design:type", Number)
    ], InvoiceLineItems.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit_amount" }),
        __metadata("design:type", Number)
    ], InvoiceLineItems.prototype, "unitAmount", void 0);
    return InvoiceLineItems;
}(utils_1.SpeakeasyBase));
exports.InvoiceLineItems = InvoiceLineItems;
var InvoiceTaxes = /** @class */ (function (_super) {
    __extends(InvoiceTaxes, _super);
    function InvoiceTaxes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax_amount" }),
        __metadata("design:type", Number)
    ], InvoiceTaxes.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax_name" }),
        __metadata("design:type", String)
    ], InvoiceTaxes.prototype, "taxName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax_rate" }),
        __metadata("design:type", Number)
    ], InvoiceTaxes.prototype, "taxRate", void 0);
    return InvoiceTaxes;
}(utils_1.SpeakeasyBase));
exports.InvoiceTaxes = InvoiceTaxes;
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount_due" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "amountDue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount_paid" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "amountPaid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency_code" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discounts", elemType: InvoiceDiscounts }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "discounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=line_items", elemType: InvoiceLineItems }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "lineItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "plan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_id" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "planId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sub_total" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "subTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxes", elemType: InvoiceTaxes }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "taxes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "total", void 0);
    return Invoice;
}(utils_1.SpeakeasyBase));
exports.Invoice = Invoice;

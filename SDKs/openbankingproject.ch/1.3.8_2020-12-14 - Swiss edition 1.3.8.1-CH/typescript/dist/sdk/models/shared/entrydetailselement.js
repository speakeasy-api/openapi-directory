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
exports.EntryDetailsElement = void 0;
var utils_1 = require("../../../internal/utils");
var accountreference16ch_1 = require("./accountreference16ch");
var reportexchangerate_1 = require("./reportexchangerate");
var purposecodeenum_1 = require("./purposecodeenum");
var remittanceinformationstructured_1 = require("./remittanceinformationstructured");
var amount_1 = require("./amount");
var EntryDetailsElement = /** @class */ (function (_super) {
    __extends(EntryDetailsElement, _super);
    function EntryDetailsElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=checkId" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "checkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorAccount" }),
        __metadata("design:type", accountreference16ch_1.AccountReference16Ch)
    ], EntryDetailsElement.prototype, "creditorAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorAgent" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "creditorAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorId" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "creditorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorName" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "creditorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyExchange", elemType: reportexchangerate_1.ReportExchangeRate }),
        __metadata("design:type", Array)
    ], EntryDetailsElement.prototype, "currencyExchange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debtorAccount" }),
        __metadata("design:type", accountreference16ch_1.AccountReference16Ch)
    ], EntryDetailsElement.prototype, "debtorAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debtorAgent" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "debtorAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debtorName" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "debtorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endToEndId" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "endToEndId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mandateId" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "mandateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purposeCode" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "purposeCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationStructured" }),
        __metadata("design:type", remittanceinformationstructured_1.RemittanceInformationStructured)
    ], EntryDetailsElement.prototype, "remittanceInformationStructured", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationStructuredArray", elemType: remittanceinformationstructured_1.RemittanceInformationStructured }),
        __metadata("design:type", Array)
    ], EntryDetailsElement.prototype, "remittanceInformationStructuredArray", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationUnstructured" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "remittanceInformationUnstructured", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationUnstructuredArray" }),
        __metadata("design:type", Array)
    ], EntryDetailsElement.prototype, "remittanceInformationUnstructuredArray", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionAmount" }),
        __metadata("design:type", amount_1.Amount)
    ], EntryDetailsElement.prototype, "transactionAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ultimateCreditor" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "ultimateCreditor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ultimateDebtor" }),
        __metadata("design:type", String)
    ], EntryDetailsElement.prototype, "ultimateDebtor", void 0);
    return EntryDetailsElement;
}(utils_1.SpeakeasyBase));
exports.EntryDetailsElement = EntryDetailsElement;

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
exports.PaymentInitiationWithStatusResponse = void 0;
var utils_1 = require("../../../internal/utils");
var accountreference16ch_1 = require("./accountreference16ch");
var address_1 = require("./address");
var creditoragent7ch_1 = require("./creditoragent7ch");
var amount_1 = require("./amount");
var purposecodeenum_1 = require("./purposecodeenum");
var remittanceinformationstructured_1 = require("./remittanceinformationstructured");
var transactionstatusenum_1 = require("./transactionstatusenum");
// PaymentInitiationWithStatusResponse
/**
 * Generic JSON response body consistion of the corresponding payment initation JSON body together with an optional transaction status field.
 *
**/
var PaymentInitiationWithStatusResponse = /** @class */ (function (_super) {
    __extends(PaymentInitiationWithStatusResponse, _super);
    function PaymentInitiationWithStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorAccount" }),
        __metadata("design:type", accountreference16ch_1.AccountReference16Ch)
    ], PaymentInitiationWithStatusResponse.prototype, "creditorAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorAddress" }),
        __metadata("design:type", address_1.Address)
    ], PaymentInitiationWithStatusResponse.prototype, "creditorAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorAgent" }),
        __metadata("design:type", creditoragent7ch_1.CreditorAgent7Ch)
    ], PaymentInitiationWithStatusResponse.prototype, "creditorAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditorName" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "creditorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debtorAccount" }),
        __metadata("design:type", accountreference16ch_1.AccountReference16Ch)
    ], PaymentInitiationWithStatusResponse.prototype, "debtorAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endToEndIdentification" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "endToEndIdentification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instructedAmount" }),
        __metadata("design:type", amount_1.Amount)
    ], PaymentInitiationWithStatusResponse.prototype, "instructedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purposeCode" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "purposeCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationStructured" }),
        __metadata("design:type", remittanceinformationstructured_1.RemittanceInformationStructured)
    ], PaymentInitiationWithStatusResponse.prototype, "remittanceInformationStructured", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationUnstructured" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "remittanceInformationUnstructured", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remittanceInformationUnstructuredArray" }),
        __metadata("design:type", Array)
    ], PaymentInitiationWithStatusResponse.prototype, "remittanceInformationUnstructuredArray", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedExecutionDate" }),
        __metadata("design:type", Date)
    ], PaymentInitiationWithStatusResponse.prototype, "requestedExecutionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedExecutionTime" }),
        __metadata("design:type", Date)
    ], PaymentInitiationWithStatusResponse.prototype, "requestedExecutionTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionStatus" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "transactionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ultimateCreditor" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "ultimateCreditor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ultimateDebtor" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "ultimateDebtor", void 0);
    return PaymentInitiationWithStatusResponse;
}(utils_1.SpeakeasyBase));
exports.PaymentInitiationWithStatusResponse = PaymentInitiationWithStatusResponse;

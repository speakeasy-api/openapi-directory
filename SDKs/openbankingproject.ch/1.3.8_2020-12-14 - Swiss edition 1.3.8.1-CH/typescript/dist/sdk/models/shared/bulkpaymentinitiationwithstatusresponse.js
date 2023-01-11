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
exports.BulkPaymentInitiationWithStatusResponse = void 0;
var utils_1 = require("../../../internal/utils");
var accountreference16ch_1 = require("./accountreference16ch");
var paymentinitiationbulkelementjson_1 = require("./paymentinitiationbulkelementjson");
var transactionstatusenum_1 = require("./transactionstatusenum");
// BulkPaymentInitiationWithStatusResponse
/**
 * Generic JSON response body consistion of the corresponding bulk payment initation JSON body together with an optional transaction status field.
 *
**/
var BulkPaymentInitiationWithStatusResponse = /** @class */ (function (_super) {
    __extends(BulkPaymentInitiationWithStatusResponse, _super);
    function BulkPaymentInitiationWithStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=acceptorTransactionDateTime" }),
        __metadata("design:type", Date)
    ], BulkPaymentInitiationWithStatusResponse.prototype, "acceptorTransactionDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batchBookingPreferred" }),
        __metadata("design:type", Boolean)
    ], BulkPaymentInitiationWithStatusResponse.prototype, "batchBookingPreferred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debtorAccount" }),
        __metadata("design:type", accountreference16ch_1.AccountReference16Ch)
    ], BulkPaymentInitiationWithStatusResponse.prototype, "debtorAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentInformationId" }),
        __metadata("design:type", String)
    ], BulkPaymentInitiationWithStatusResponse.prototype, "paymentInformationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payments", elemType: paymentinitiationbulkelementjson_1.PaymentInitiationBulkElementJson }),
        __metadata("design:type", Array)
    ], BulkPaymentInitiationWithStatusResponse.prototype, "payments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedExecutionDate" }),
        __metadata("design:type", Date)
    ], BulkPaymentInitiationWithStatusResponse.prototype, "requestedExecutionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionStatus" }),
        __metadata("design:type", String)
    ], BulkPaymentInitiationWithStatusResponse.prototype, "transactionStatus", void 0);
    return BulkPaymentInitiationWithStatusResponse;
}(utils_1.SpeakeasyBase));
exports.BulkPaymentInitiationWithStatusResponse = BulkPaymentInitiationWithStatusResponse;

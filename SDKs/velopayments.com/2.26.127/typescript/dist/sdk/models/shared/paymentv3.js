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
exports.PaymentV3 = exports.PaymentV3StatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var payoutpayeev3_1 = require("./payoutpayeev3");
var transmissiontypeenum_1 = require("./transmissiontypeenum");
var PaymentV3StatusEnum;
(function (PaymentV3StatusEnum) {
    PaymentV3StatusEnum["Submitted"] = "SUBMITTED";
    PaymentV3StatusEnum["Accepted"] = "ACCEPTED";
    PaymentV3StatusEnum["Rejected"] = "REJECTED";
    PaymentV3StatusEnum["Withdrawn"] = "WITHDRAWN";
    PaymentV3StatusEnum["Returned"] = "RETURNED";
    PaymentV3StatusEnum["AwaitingFunds"] = "AWAITING_FUNDS";
    PaymentV3StatusEnum["Funded"] = "FUNDED";
    PaymentV3StatusEnum["Unfunded"] = "UNFUNDED";
    PaymentV3StatusEnum["Cancelled"] = "CANCELLED";
    PaymentV3StatusEnum["Requested"] = "REQUESTED";
})(PaymentV3StatusEnum = exports.PaymentV3StatusEnum || (exports.PaymentV3StatusEnum = {}));
var PaymentV3 = /** @class */ (function (_super) {
    __extends(PaymentV3, _super);
    function PaymentV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PaymentV3.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payee" }),
        __metadata("design:type", payoutpayeev3_1.PayoutPayeeV3)
    ], PaymentV3.prototype, "payee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentId" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "paymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMemo" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "paymentMemo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMetadata" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "paymentMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payorPaymentId" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "payorPaymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "remoteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remoteSystemId" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "remoteSystemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceAccountName" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "sourceAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transmissionType" }),
        __metadata("design:type", String)
    ], PaymentV3.prototype, "transmissionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=withdrawable" }),
        __metadata("design:type", Boolean)
    ], PaymentV3.prototype, "withdrawable", void 0);
    return PaymentV3;
}(utils_1.SpeakeasyBase));
exports.PaymentV3 = PaymentV3;

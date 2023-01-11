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
exports.PayeeDetailResponse2 = void 0;
var utils_1 = require("../../../internal/utils");
var payeeaddress2_1 = require("./payeeaddress2");
var challenge2_1 = require("./challenge2");
var company2_1 = require("./company2");
var individual2_1 = require("./individual2");
var onboardedstatusenum_1 = require("./onboardedstatusenum");
var payeetypeenum_1 = require("./payeetypeenum");
var payeepayorref_1 = require("./payeepayorref");
var watchliststatus2enum_1 = require("./watchliststatus2enum");
var PayeeDetailResponse2 = /** @class */ (function (_super) {
    __extends(PayeeDetailResponse2, _super);
    function PayeeDetailResponse2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=acceptTermsAndConditionsTimestamp" }),
        __metadata("design:type", Date)
    ], PayeeDetailResponse2.prototype, "acceptTermsAndConditionsTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", payeeaddress2_1.PayeeAddress2)
    ], PayeeDetailResponse2.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cellphoneNumber" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "cellphoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=challenge" }),
        __metadata("design:type", challenge2_1.Challenge2)
    ], PayeeDetailResponse2.prototype, "challenge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company" }),
        __metadata("design:type", company2_1.Company2)
    ], PayeeDetailResponse2.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], PayeeDetailResponse2.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PayeeDetailResponse2.prototype, "disabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabledComment" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "disabledComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabledUpdatedTimestamp" }),
        __metadata("design:type", Date)
    ], PayeeDetailResponse2.prototype, "disabledUpdatedTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enhancedKycCompleted" }),
        __metadata("design:type", Boolean)
    ], PayeeDetailResponse2.prototype, "enhancedKycCompleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gracePeriodEndDate" }),
        __metadata("design:type", Date)
    ], PayeeDetailResponse2.prototype, "gracePeriodEndDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=individual" }),
        __metadata("design:type", individual2_1.Individual2)
    ], PayeeDetailResponse2.prototype, "individual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kycCompletedTimestamp" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "kycCompletedTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketingOptInDecision" }),
        __metadata("design:type", Boolean)
    ], PayeeDetailResponse2.prototype, "marketingOptInDecision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketingOptInTimestamp" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "marketingOptInTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=onboardedStatus" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "onboardedStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pausePayment" }),
        __metadata("design:type", Boolean)
    ], PayeeDetailResponse2.prototype, "pausePayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pausePaymentTimestamp" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "pausePaymentTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payeeId" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "payeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payeeType" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "payeeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payorRefs", elemType: payeepayorref_1.PayeePayorRef }),
        __metadata("design:type", Array)
    ], PayeeDetailResponse2.prototype, "payorRefs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlistOverrideComment" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "watchlistOverrideComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlistOverrideExpiresAtTimestamp" }),
        __metadata("design:type", Date)
    ], PayeeDetailResponse2.prototype, "watchlistOverrideExpiresAtTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlistStatus" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "watchlistStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlistStatusUpdatedTimestamp" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse2.prototype, "watchlistStatusUpdatedTimestamp", void 0);
    return PayeeDetailResponse2;
}(utils_1.SpeakeasyBase));
exports.PayeeDetailResponse2 = PayeeDetailResponse2;

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
exports.GetPayeeListResponse = void 0;
var utils_1 = require("../../../internal/utils");
var getpayeelistresponsecompany_1 = require("./getpayeelistresponsecompany");
var getpayeelistresponseindividual_1 = require("./getpayeelistresponseindividual");
var onboardedstatus2enum_1 = require("./onboardedstatus2enum");
var payeetypeenum_1 = require("./payeetypeenum");
var payeepayorrefv3_1 = require("./payeepayorrefv3");
var watchliststatusenum_1 = require("./watchliststatusenum");
var GetPayeeListResponse = /** @class */ (function (_super) {
    __extends(GetPayeeListResponse, _super);
    function GetPayeeListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company" }),
        __metadata("design:type", getpayeelistresponsecompany_1.GetPayeeListResponseCompany)
    ], GetPayeeListResponse.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], GetPayeeListResponse.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], GetPayeeListResponse.prototype, "disabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabledComment" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "disabledComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabledUpdatedTimestamp" }),
        __metadata("design:type", Date)
    ], GetPayeeListResponse.prototype, "disabledUpdatedTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=individual" }),
        __metadata("design:type", getpayeelistresponseindividual_1.GetPayeeListResponseIndividual)
    ], GetPayeeListResponse.prototype, "individual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=onboardedStatus" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "onboardedStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payeeId" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "payeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payeeType" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "payeeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payorRefs", elemType: payeepayorrefv3_1.PayeePayorRefV3 }),
        __metadata("design:type", Array)
    ], GetPayeeListResponse.prototype, "payorRefs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlistOverrideComment" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "watchlistOverrideComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlistStatus" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "watchlistStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlistStatusUpdatedTimestamp" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse.prototype, "watchlistStatusUpdatedTimestamp", void 0);
    return GetPayeeListResponse;
}(utils_1.SpeakeasyBase));
exports.GetPayeeListResponse = GetPayeeListResponse;

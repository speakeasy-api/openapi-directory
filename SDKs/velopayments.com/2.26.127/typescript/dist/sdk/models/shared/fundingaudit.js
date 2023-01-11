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
exports.FundingAudit = exports.FundingAuditTopupTypeEnum = exports.FundingAuditStatusEnum = exports.FundingAuditFundingTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var fundingevent_1 = require("./fundingevent");
var FundingAuditFundingTypeEnum;
(function (FundingAuditFundingTypeEnum) {
    FundingAuditFundingTypeEnum["Ach"] = "ACH";
    FundingAuditFundingTypeEnum["Wire"] = "WIRE";
    FundingAuditFundingTypeEnum["Embedded"] = "EMBEDDED";
})(FundingAuditFundingTypeEnum = exports.FundingAuditFundingTypeEnum || (exports.FundingAuditFundingTypeEnum = {}));
var FundingAuditStatusEnum;
(function (FundingAuditStatusEnum) {
    FundingAuditStatusEnum["Pending"] = "PENDING";
    FundingAuditStatusEnum["Failed"] = "FAILED";
    FundingAuditStatusEnum["Credit"] = "CREDIT";
    FundingAuditStatusEnum["Debit"] = "DEBIT";
})(FundingAuditStatusEnum = exports.FundingAuditStatusEnum || (exports.FundingAuditStatusEnum = {}));
var FundingAuditTopupTypeEnum;
(function (FundingAuditTopupTypeEnum) {
    FundingAuditTopupTypeEnum["Automatic"] = "AUTOMATIC";
    FundingAuditTopupTypeEnum["Manual"] = "MANUAL";
})(FundingAuditTopupTypeEnum = exports.FundingAuditTopupTypeEnum || (exports.FundingAuditTopupTypeEnum = {}));
var FundingAudit = /** @class */ (function (_super) {
    __extends(FundingAudit, _super);
    function FundingAudit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], FundingAudit.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], FundingAudit.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateTime" }),
        __metadata("design:type", Date)
    ], FundingAudit.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events", elemType: fundingevent_1.FundingEvent }),
        __metadata("design:type", Array)
    ], FundingAudit.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fundingAccountName" }),
        __metadata("design:type", String)
    ], FundingAudit.prototype, "fundingAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fundingType" }),
        __metadata("design:type", String)
    ], FundingAudit.prototype, "fundingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceAccountName" }),
        __metadata("design:type", String)
    ], FundingAudit.prototype, "sourceAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], FundingAudit.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topupType" }),
        __metadata("design:type", String)
    ], FundingAudit.prototype, "topupType", void 0);
    return FundingAudit;
}(utils_1.SpeakeasyBase));
exports.FundingAudit = FundingAudit;

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
exports.JournalLine = exports.JournalLineJournalLine = exports.JournalLineJournalLineSubContractor = exports.JournalLineJournalLinePayRun = exports.JournalLineJournalLinePayFrequencyEnum = exports.JournalLineJournalLineEmployee = void 0;
var utils_1 = require("../../../internal/utils");
// JournalLineJournalLineEmployee
/**
 * The journal lines' employee
**/
var JournalLineJournalLineEmployee = /** @class */ (function (_super) {
    __extends(JournalLineJournalLineEmployee, _super);
    function JournalLineJournalLineEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], JournalLineJournalLineEmployee.prototype, "atHref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], JournalLineJournalLineEmployee.prototype, "atRel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], JournalLineJournalLineEmployee.prototype, "atTitle", void 0);
    return JournalLineJournalLineEmployee;
}(utils_1.SpeakeasyBase));
exports.JournalLineJournalLineEmployee = JournalLineJournalLineEmployee;
var JournalLineJournalLinePayFrequencyEnum;
(function (JournalLineJournalLinePayFrequencyEnum) {
    JournalLineJournalLinePayFrequencyEnum["Weekly"] = "Weekly";
    JournalLineJournalLinePayFrequencyEnum["Monthly"] = "Monthly";
    JournalLineJournalLinePayFrequencyEnum["TwoWeekly"] = "TwoWeekly";
    JournalLineJournalLinePayFrequencyEnum["FourWeekly"] = "FourWeekly";
    JournalLineJournalLinePayFrequencyEnum["Yearly"] = "Yearly";
})(JournalLineJournalLinePayFrequencyEnum = exports.JournalLineJournalLinePayFrequencyEnum || (exports.JournalLineJournalLinePayFrequencyEnum = {}));
// JournalLineJournalLinePayRun
/**
 * The journal lines' pay run
**/
var JournalLineJournalLinePayRun = /** @class */ (function (_super) {
    __extends(JournalLineJournalLinePayRun, _super);
    function JournalLineJournalLinePayRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], JournalLineJournalLinePayRun.prototype, "atHref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], JournalLineJournalLinePayRun.prototype, "atRel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], JournalLineJournalLinePayRun.prototype, "atTitle", void 0);
    return JournalLineJournalLinePayRun;
}(utils_1.SpeakeasyBase));
exports.JournalLineJournalLinePayRun = JournalLineJournalLinePayRun;
// JournalLineJournalLineSubContractor
/**
 * The journal lines' sub contractor
**/
var JournalLineJournalLineSubContractor = /** @class */ (function (_super) {
    __extends(JournalLineJournalLineSubContractor, _super);
    function JournalLineJournalLineSubContractor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], JournalLineJournalLineSubContractor.prototype, "atHref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], JournalLineJournalLineSubContractor.prototype, "atRel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], JournalLineJournalLineSubContractor.prototype, "atTitle", void 0);
    return JournalLineJournalLineSubContractor;
}(utils_1.SpeakeasyBase));
exports.JournalLineJournalLineSubContractor = JournalLineJournalLineSubContractor;
var JournalLineJournalLine = /** @class */ (function (_super) {
    __extends(JournalLineJournalLine, _super);
    function JournalLineJournalLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Credit" }),
        __metadata("design:type", Number)
    ], JournalLineJournalLine.prototype, "credit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Debit" }),
        __metadata("design:type", Number)
    ], JournalLineJournalLine.prototype, "debit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], JournalLineJournalLine.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Employee" }),
        __metadata("design:type", JournalLineJournalLineEmployee)
    ], JournalLineJournalLine.prototype, "employee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Generated" }),
        __metadata("design:type", Date)
    ], JournalLineJournalLine.prototype, "generated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Grouping" }),
        __metadata("design:type", String)
    ], JournalLineJournalLine.prototype, "grouping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LedgerTarget" }),
        __metadata("design:type", String)
    ], JournalLineJournalLine.prototype, "ledgerTarget", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NomCode" }),
        __metadata("design:type", String)
    ], JournalLineJournalLine.prototype, "nomCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PayFrequency" }),
        __metadata("design:type", String)
    ], JournalLineJournalLine.prototype, "payFrequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PayRun" }),
        __metadata("design:type", JournalLineJournalLinePayRun)
    ], JournalLineJournalLine.prototype, "payRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubContractor" }),
        __metadata("design:type", JournalLineJournalLineSubContractor)
    ], JournalLineJournalLine.prototype, "subContractor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubNomCode" }),
        __metadata("design:type", String)
    ], JournalLineJournalLine.prototype, "subNomCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaxPeriod" }),
        __metadata("design:type", Number)
    ], JournalLineJournalLine.prototype, "taxPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaxYear" }),
        __metadata("design:type", Number)
    ], JournalLineJournalLine.prototype, "taxYear", void 0);
    return JournalLineJournalLine;
}(utils_1.SpeakeasyBase));
exports.JournalLineJournalLine = JournalLineJournalLine;
var JournalLine = /** @class */ (function (_super) {
    __extends(JournalLine, _super);
    function JournalLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=JournalLine" }),
        __metadata("design:type", JournalLineJournalLine)
    ], JournalLine.prototype, "journalLine", void 0);
    return JournalLine;
}(utils_1.SpeakeasyBase));
exports.JournalLine = JournalLine;

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
exports.ObCashBalance1 = void 0;
var utils_1 = require("../../../internal/utils");
var obactiveorhistoriccurrencyandamount_1 = require("./obactiveorhistoriccurrencyandamount");
var obcreditdebitcodeenum_1 = require("./obcreditdebitcodeenum");
var obcreditline1_1 = require("./obcreditline1");
var obbalancetype1codeenum_1 = require("./obbalancetype1codeenum");
// ObCashBalance1
/**
 * Set of elements used to define the balance details.
**/
var ObCashBalance1 = /** @class */ (function (_super) {
    __extends(ObCashBalance1, _super);
    function ObCashBalance1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ObCashBalance1.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Amount" }),
        __metadata("design:type", obactiveorhistoriccurrencyandamount_1.ObActiveOrHistoricCurrencyAndAmount)
    ], ObCashBalance1.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditDebitIndicator" }),
        __metadata("design:type", String)
    ], ObCashBalance1.prototype, "creditDebitIndicator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditLine", elemType: obcreditline1_1.ObCreditLine1 }),
        __metadata("design:type", Array)
    ], ObCashBalance1.prototype, "creditLine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DateTime" }),
        __metadata("design:type", Date)
    ], ObCashBalance1.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObCashBalance1.prototype, "type", void 0);
    return ObCashBalance1;
}(utils_1.SpeakeasyBase));
exports.ObCashBalance1 = ObCashBalance1;

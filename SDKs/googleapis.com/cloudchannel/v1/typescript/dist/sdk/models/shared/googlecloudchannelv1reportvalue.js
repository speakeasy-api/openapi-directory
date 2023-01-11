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
exports.GoogleCloudChannelV1ReportValue = void 0;
var utils_1 = require("../../../internal/utils");
var googletypedatetime_1 = require("./googletypedatetime");
var googletypedate_1 = require("./googletypedate");
var googletypedecimal_1 = require("./googletypedecimal");
var googletypemoney_1 = require("./googletypemoney");
// GoogleCloudChannelV1ReportValue
/**
 * A single report value.
**/
var GoogleCloudChannelV1ReportValue = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1ReportValue, _super);
    function GoogleCloudChannelV1ReportValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateTimeValue" }),
        __metadata("design:type", googletypedatetime_1.GoogleTypeDateTime)
    ], GoogleCloudChannelV1ReportValue.prototype, "dateTimeValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateValue" }),
        __metadata("design:type", googletypedate_1.GoogleTypeDate)
    ], GoogleCloudChannelV1ReportValue.prototype, "dateValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=decimalValue" }),
        __metadata("design:type", googletypedecimal_1.GoogleTypeDecimal)
    ], GoogleCloudChannelV1ReportValue.prototype, "decimalValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intValue" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ReportValue.prototype, "intValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moneyValue" }),
        __metadata("design:type", googletypemoney_1.GoogleTypeMoney)
    ], GoogleCloudChannelV1ReportValue.prototype, "moneyValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ReportValue.prototype, "stringValue", void 0);
    return GoogleCloudChannelV1ReportValue;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudChannelV1ReportValue = GoogleCloudChannelV1ReportValue;

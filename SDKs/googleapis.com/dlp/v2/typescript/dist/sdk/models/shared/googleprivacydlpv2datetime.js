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
exports.GooglePrivacyDlpV2DateTime = exports.GooglePrivacyDlpV2DateTimeDayOfWeekEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googletypedate_1 = require("./googletypedate");
var googletypetimeofday_1 = require("./googletypetimeofday");
var googleprivacydlpv2timezone_1 = require("./googleprivacydlpv2timezone");
var GooglePrivacyDlpV2DateTimeDayOfWeekEnum;
(function (GooglePrivacyDlpV2DateTimeDayOfWeekEnum) {
    GooglePrivacyDlpV2DateTimeDayOfWeekEnum["DayOfWeekUnspecified"] = "DAY_OF_WEEK_UNSPECIFIED";
    GooglePrivacyDlpV2DateTimeDayOfWeekEnum["Monday"] = "MONDAY";
    GooglePrivacyDlpV2DateTimeDayOfWeekEnum["Tuesday"] = "TUESDAY";
    GooglePrivacyDlpV2DateTimeDayOfWeekEnum["Wednesday"] = "WEDNESDAY";
    GooglePrivacyDlpV2DateTimeDayOfWeekEnum["Thursday"] = "THURSDAY";
    GooglePrivacyDlpV2DateTimeDayOfWeekEnum["Friday"] = "FRIDAY";
    GooglePrivacyDlpV2DateTimeDayOfWeekEnum["Saturday"] = "SATURDAY";
    GooglePrivacyDlpV2DateTimeDayOfWeekEnum["Sunday"] = "SUNDAY";
})(GooglePrivacyDlpV2DateTimeDayOfWeekEnum = exports.GooglePrivacyDlpV2DateTimeDayOfWeekEnum || (exports.GooglePrivacyDlpV2DateTimeDayOfWeekEnum = {}));
// GooglePrivacyDlpV2DateTime
/**
 * Message for a date time object. e.g. 2018-01-01, 5th August.
**/
var GooglePrivacyDlpV2DateTime = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2DateTime, _super);
    function GooglePrivacyDlpV2DateTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", googletypedate_1.GoogleTypeDate)
    ], GooglePrivacyDlpV2DateTime.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dayOfWeek" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2DateTime.prototype, "dayOfWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", googletypetimeofday_1.GoogleTypeTimeOfDay)
    ], GooglePrivacyDlpV2DateTime.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeZone" }),
        __metadata("design:type", googleprivacydlpv2timezone_1.GooglePrivacyDlpV2TimeZone)
    ], GooglePrivacyDlpV2DateTime.prototype, "timeZone", void 0);
    return GooglePrivacyDlpV2DateTime;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2DateTime = GooglePrivacyDlpV2DateTime;

"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.CalendarBlockViewModel = void 0;
var utils_1 = require("../../../internal/utils");
var repeatviewmodel_1 = require("./repeatviewmodel");
var class_transformer_1 = require("class-transformer");
/**
 * Success
 */
var CalendarBlockViewModel = /** @class */ (function (_super) {
    __extends(CalendarBlockViewModel, _super);
    function CalendarBlockViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "calendarId" }),
        __metadata("design:type", String)
    ], CalendarBlockViewModel.prototype, "calendarId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "deletedStatus" }),
        __metadata("design:type", Boolean)
    ], CalendarBlockViewModel.prototype, "deletedStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "deletedTime" }),
        __metadata("design:type", String)
    ], CalendarBlockViewModel.prototype, "deletedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "endDate" }),
        __metadata("design:type", String)
    ], CalendarBlockViewModel.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "endTime" }),
        __metadata("design:type", Number)
    ], CalendarBlockViewModel.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], CalendarBlockViewModel.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "locationId" }),
        __metadata("design:type", String)
    ], CalendarBlockViewModel.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "object" }),
        __metadata("design:type", String)
    ], CalendarBlockViewModel.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "reason" }),
        __metadata("design:type", String)
    ], CalendarBlockViewModel.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "repeat" }),
        (0, class_transformer_1.Type)(function () { return repeatviewmodel_1.RepeatViewModel; }),
        __metadata("design:type", repeatviewmodel_1.RepeatViewModel)
    ], CalendarBlockViewModel.prototype, "repeat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "repeats" }),
        __metadata("design:type", Boolean)
    ], CalendarBlockViewModel.prototype, "repeats", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "startDate" }),
        __metadata("design:type", String)
    ], CalendarBlockViewModel.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "startTime" }),
        __metadata("design:type", Number)
    ], CalendarBlockViewModel.prototype, "startTime", void 0);
    return CalendarBlockViewModel;
}(utils_1.SpeakeasyBase));
exports.CalendarBlockViewModel = CalendarBlockViewModel;

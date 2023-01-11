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
exports.DeliveryTime = void 0;
var utils_1 = require("../../../internal/utils");
var cutofftime_1 = require("./cutofftime");
var businessdayconfig_1 = require("./businessdayconfig");
var holidaycutoff_1 = require("./holidaycutoff");
var transittable_1 = require("./transittable");
var warehousebaseddeliverytime_1 = require("./warehousebaseddeliverytime");
var DeliveryTime = /** @class */ (function (_super) {
    __extends(DeliveryTime, _super);
    function DeliveryTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cutoffTime" }),
        __metadata("design:type", cutofftime_1.CutoffTime)
    ], DeliveryTime.prototype, "cutoffTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=handlingBusinessDayConfig" }),
        __metadata("design:type", businessdayconfig_1.BusinessDayConfig)
    ], DeliveryTime.prototype, "handlingBusinessDayConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holidayCutoffs", elemType: holidaycutoff_1.HolidayCutoff }),
        __metadata("design:type", Array)
    ], DeliveryTime.prototype, "holidayCutoffs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxHandlingTimeInDays" }),
        __metadata("design:type", Number)
    ], DeliveryTime.prototype, "maxHandlingTimeInDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxTransitTimeInDays" }),
        __metadata("design:type", Number)
    ], DeliveryTime.prototype, "maxTransitTimeInDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minHandlingTimeInDays" }),
        __metadata("design:type", Number)
    ], DeliveryTime.prototype, "minHandlingTimeInDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minTransitTimeInDays" }),
        __metadata("design:type", Number)
    ], DeliveryTime.prototype, "minTransitTimeInDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transitBusinessDayConfig" }),
        __metadata("design:type", businessdayconfig_1.BusinessDayConfig)
    ], DeliveryTime.prototype, "transitBusinessDayConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transitTimeTable" }),
        __metadata("design:type", transittable_1.TransitTable)
    ], DeliveryTime.prototype, "transitTimeTable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouseBasedDeliveryTimes", elemType: warehousebaseddeliverytime_1.WarehouseBasedDeliveryTime }),
        __metadata("design:type", Array)
    ], DeliveryTime.prototype, "warehouseBasedDeliveryTimes", void 0);
    return DeliveryTime;
}(utils_1.SpeakeasyBase));
exports.DeliveryTime = DeliveryTime;

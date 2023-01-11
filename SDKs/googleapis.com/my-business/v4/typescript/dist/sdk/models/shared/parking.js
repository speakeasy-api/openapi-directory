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
exports.Parking = exports.ParkingValetParkingAvailableExceptionEnum = exports.ParkingSelfParkingAvailableExceptionEnum = exports.ParkingParkingAvailableExceptionEnum = exports.ParkingFreeValetParkingExceptionEnum = exports.ParkingFreeSelfParkingExceptionEnum = exports.ParkingFreeParkingExceptionEnum = exports.ParkingElectricCarChargingStationsExceptionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ParkingElectricCarChargingStationsExceptionEnum;
(function (ParkingElectricCarChargingStationsExceptionEnum) {
    ParkingElectricCarChargingStationsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ParkingElectricCarChargingStationsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ParkingElectricCarChargingStationsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ParkingElectricCarChargingStationsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ParkingElectricCarChargingStationsExceptionEnum = exports.ParkingElectricCarChargingStationsExceptionEnum || (exports.ParkingElectricCarChargingStationsExceptionEnum = {}));
var ParkingFreeParkingExceptionEnum;
(function (ParkingFreeParkingExceptionEnum) {
    ParkingFreeParkingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ParkingFreeParkingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ParkingFreeParkingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ParkingFreeParkingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ParkingFreeParkingExceptionEnum = exports.ParkingFreeParkingExceptionEnum || (exports.ParkingFreeParkingExceptionEnum = {}));
var ParkingFreeSelfParkingExceptionEnum;
(function (ParkingFreeSelfParkingExceptionEnum) {
    ParkingFreeSelfParkingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ParkingFreeSelfParkingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ParkingFreeSelfParkingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ParkingFreeSelfParkingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ParkingFreeSelfParkingExceptionEnum = exports.ParkingFreeSelfParkingExceptionEnum || (exports.ParkingFreeSelfParkingExceptionEnum = {}));
var ParkingFreeValetParkingExceptionEnum;
(function (ParkingFreeValetParkingExceptionEnum) {
    ParkingFreeValetParkingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ParkingFreeValetParkingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ParkingFreeValetParkingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ParkingFreeValetParkingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ParkingFreeValetParkingExceptionEnum = exports.ParkingFreeValetParkingExceptionEnum || (exports.ParkingFreeValetParkingExceptionEnum = {}));
var ParkingParkingAvailableExceptionEnum;
(function (ParkingParkingAvailableExceptionEnum) {
    ParkingParkingAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ParkingParkingAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ParkingParkingAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ParkingParkingAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ParkingParkingAvailableExceptionEnum = exports.ParkingParkingAvailableExceptionEnum || (exports.ParkingParkingAvailableExceptionEnum = {}));
var ParkingSelfParkingAvailableExceptionEnum;
(function (ParkingSelfParkingAvailableExceptionEnum) {
    ParkingSelfParkingAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ParkingSelfParkingAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ParkingSelfParkingAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ParkingSelfParkingAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ParkingSelfParkingAvailableExceptionEnum = exports.ParkingSelfParkingAvailableExceptionEnum || (exports.ParkingSelfParkingAvailableExceptionEnum = {}));
var ParkingValetParkingAvailableExceptionEnum;
(function (ParkingValetParkingAvailableExceptionEnum) {
    ParkingValetParkingAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ParkingValetParkingAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ParkingValetParkingAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ParkingValetParkingAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ParkingValetParkingAvailableExceptionEnum = exports.ParkingValetParkingAvailableExceptionEnum || (exports.ParkingValetParkingAvailableExceptionEnum = {}));
// Parking
/**
 * Parking options at the property.
**/
var Parking = /** @class */ (function (_super) {
    __extends(Parking, _super);
    function Parking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=electricCarChargingStations" }),
        __metadata("design:type", Boolean)
    ], Parking.prototype, "electricCarChargingStations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=electricCarChargingStationsException" }),
        __metadata("design:type", String)
    ], Parking.prototype, "electricCarChargingStationsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freeParking" }),
        __metadata("design:type", Boolean)
    ], Parking.prototype, "freeParking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freeParkingException" }),
        __metadata("design:type", String)
    ], Parking.prototype, "freeParkingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freeSelfParking" }),
        __metadata("design:type", Boolean)
    ], Parking.prototype, "freeSelfParking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freeSelfParkingException" }),
        __metadata("design:type", String)
    ], Parking.prototype, "freeSelfParkingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freeValetParking" }),
        __metadata("design:type", Boolean)
    ], Parking.prototype, "freeValetParking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freeValetParkingException" }),
        __metadata("design:type", String)
    ], Parking.prototype, "freeValetParkingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parkingAvailable" }),
        __metadata("design:type", Boolean)
    ], Parking.prototype, "parkingAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parkingAvailableException" }),
        __metadata("design:type", String)
    ], Parking.prototype, "parkingAvailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selfParkingAvailable" }),
        __metadata("design:type", Boolean)
    ], Parking.prototype, "selfParkingAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selfParkingAvailableException" }),
        __metadata("design:type", String)
    ], Parking.prototype, "selfParkingAvailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valetParkingAvailable" }),
        __metadata("design:type", Boolean)
    ], Parking.prototype, "valetParkingAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valetParkingAvailableException" }),
        __metadata("design:type", String)
    ], Parking.prototype, "valetParkingAvailableException", void 0);
    return Parking;
}(utils_1.SpeakeasyBase));
exports.Parking = Parking;

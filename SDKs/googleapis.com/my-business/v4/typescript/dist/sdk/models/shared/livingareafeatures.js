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
exports.LivingAreaFeatures = exports.LivingAreaFeaturesWasherExceptionEnum = exports.LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum = exports.LivingAreaFeaturesTvStreamingExceptionEnum = exports.LivingAreaFeaturesTvExceptionEnum = exports.LivingAreaFeaturesTvCastingExceptionEnum = exports.LivingAreaFeaturesToiletExceptionEnum = exports.LivingAreaFeaturesShowerExceptionEnum = exports.LivingAreaFeaturesPrivateBathroomExceptionEnum = exports.LivingAreaFeaturesPayPerViewMoviesExceptionEnum = exports.LivingAreaFeaturesIroningEquipmentExceptionEnum = exports.LivingAreaFeaturesInunitWifiAvailableExceptionEnum = exports.LivingAreaFeaturesInunitSafeExceptionEnum = exports.LivingAreaFeaturesHeatingExceptionEnum = exports.LivingAreaFeaturesHairdryerExceptionEnum = exports.LivingAreaFeaturesFireplaceExceptionEnum = exports.LivingAreaFeaturesElectronicRoomKeyExceptionEnum = exports.LivingAreaFeaturesDryerExceptionEnum = exports.LivingAreaFeaturesBidetExceptionEnum = exports.LivingAreaFeaturesBathtubExceptionEnum = exports.LivingAreaFeaturesAirConditioningExceptionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var LivingAreaFeaturesAirConditioningExceptionEnum;
(function (LivingAreaFeaturesAirConditioningExceptionEnum) {
    LivingAreaFeaturesAirConditioningExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesAirConditioningExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesAirConditioningExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesAirConditioningExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesAirConditioningExceptionEnum = exports.LivingAreaFeaturesAirConditioningExceptionEnum || (exports.LivingAreaFeaturesAirConditioningExceptionEnum = {}));
var LivingAreaFeaturesBathtubExceptionEnum;
(function (LivingAreaFeaturesBathtubExceptionEnum) {
    LivingAreaFeaturesBathtubExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesBathtubExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesBathtubExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesBathtubExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesBathtubExceptionEnum = exports.LivingAreaFeaturesBathtubExceptionEnum || (exports.LivingAreaFeaturesBathtubExceptionEnum = {}));
var LivingAreaFeaturesBidetExceptionEnum;
(function (LivingAreaFeaturesBidetExceptionEnum) {
    LivingAreaFeaturesBidetExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesBidetExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesBidetExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesBidetExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesBidetExceptionEnum = exports.LivingAreaFeaturesBidetExceptionEnum || (exports.LivingAreaFeaturesBidetExceptionEnum = {}));
var LivingAreaFeaturesDryerExceptionEnum;
(function (LivingAreaFeaturesDryerExceptionEnum) {
    LivingAreaFeaturesDryerExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesDryerExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesDryerExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesDryerExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesDryerExceptionEnum = exports.LivingAreaFeaturesDryerExceptionEnum || (exports.LivingAreaFeaturesDryerExceptionEnum = {}));
var LivingAreaFeaturesElectronicRoomKeyExceptionEnum;
(function (LivingAreaFeaturesElectronicRoomKeyExceptionEnum) {
    LivingAreaFeaturesElectronicRoomKeyExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesElectronicRoomKeyExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesElectronicRoomKeyExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesElectronicRoomKeyExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesElectronicRoomKeyExceptionEnum = exports.LivingAreaFeaturesElectronicRoomKeyExceptionEnum || (exports.LivingAreaFeaturesElectronicRoomKeyExceptionEnum = {}));
var LivingAreaFeaturesFireplaceExceptionEnum;
(function (LivingAreaFeaturesFireplaceExceptionEnum) {
    LivingAreaFeaturesFireplaceExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesFireplaceExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesFireplaceExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesFireplaceExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesFireplaceExceptionEnum = exports.LivingAreaFeaturesFireplaceExceptionEnum || (exports.LivingAreaFeaturesFireplaceExceptionEnum = {}));
var LivingAreaFeaturesHairdryerExceptionEnum;
(function (LivingAreaFeaturesHairdryerExceptionEnum) {
    LivingAreaFeaturesHairdryerExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesHairdryerExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesHairdryerExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesHairdryerExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesHairdryerExceptionEnum = exports.LivingAreaFeaturesHairdryerExceptionEnum || (exports.LivingAreaFeaturesHairdryerExceptionEnum = {}));
var LivingAreaFeaturesHeatingExceptionEnum;
(function (LivingAreaFeaturesHeatingExceptionEnum) {
    LivingAreaFeaturesHeatingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesHeatingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesHeatingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesHeatingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesHeatingExceptionEnum = exports.LivingAreaFeaturesHeatingExceptionEnum || (exports.LivingAreaFeaturesHeatingExceptionEnum = {}));
var LivingAreaFeaturesInunitSafeExceptionEnum;
(function (LivingAreaFeaturesInunitSafeExceptionEnum) {
    LivingAreaFeaturesInunitSafeExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesInunitSafeExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesInunitSafeExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesInunitSafeExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesInunitSafeExceptionEnum = exports.LivingAreaFeaturesInunitSafeExceptionEnum || (exports.LivingAreaFeaturesInunitSafeExceptionEnum = {}));
var LivingAreaFeaturesInunitWifiAvailableExceptionEnum;
(function (LivingAreaFeaturesInunitWifiAvailableExceptionEnum) {
    LivingAreaFeaturesInunitWifiAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesInunitWifiAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesInunitWifiAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesInunitWifiAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesInunitWifiAvailableExceptionEnum = exports.LivingAreaFeaturesInunitWifiAvailableExceptionEnum || (exports.LivingAreaFeaturesInunitWifiAvailableExceptionEnum = {}));
var LivingAreaFeaturesIroningEquipmentExceptionEnum;
(function (LivingAreaFeaturesIroningEquipmentExceptionEnum) {
    LivingAreaFeaturesIroningEquipmentExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesIroningEquipmentExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesIroningEquipmentExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesIroningEquipmentExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesIroningEquipmentExceptionEnum = exports.LivingAreaFeaturesIroningEquipmentExceptionEnum || (exports.LivingAreaFeaturesIroningEquipmentExceptionEnum = {}));
var LivingAreaFeaturesPayPerViewMoviesExceptionEnum;
(function (LivingAreaFeaturesPayPerViewMoviesExceptionEnum) {
    LivingAreaFeaturesPayPerViewMoviesExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesPayPerViewMoviesExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesPayPerViewMoviesExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesPayPerViewMoviesExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesPayPerViewMoviesExceptionEnum = exports.LivingAreaFeaturesPayPerViewMoviesExceptionEnum || (exports.LivingAreaFeaturesPayPerViewMoviesExceptionEnum = {}));
var LivingAreaFeaturesPrivateBathroomExceptionEnum;
(function (LivingAreaFeaturesPrivateBathroomExceptionEnum) {
    LivingAreaFeaturesPrivateBathroomExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesPrivateBathroomExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesPrivateBathroomExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesPrivateBathroomExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesPrivateBathroomExceptionEnum = exports.LivingAreaFeaturesPrivateBathroomExceptionEnum || (exports.LivingAreaFeaturesPrivateBathroomExceptionEnum = {}));
var LivingAreaFeaturesShowerExceptionEnum;
(function (LivingAreaFeaturesShowerExceptionEnum) {
    LivingAreaFeaturesShowerExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesShowerExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesShowerExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesShowerExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesShowerExceptionEnum = exports.LivingAreaFeaturesShowerExceptionEnum || (exports.LivingAreaFeaturesShowerExceptionEnum = {}));
var LivingAreaFeaturesToiletExceptionEnum;
(function (LivingAreaFeaturesToiletExceptionEnum) {
    LivingAreaFeaturesToiletExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesToiletExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesToiletExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesToiletExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesToiletExceptionEnum = exports.LivingAreaFeaturesToiletExceptionEnum || (exports.LivingAreaFeaturesToiletExceptionEnum = {}));
var LivingAreaFeaturesTvCastingExceptionEnum;
(function (LivingAreaFeaturesTvCastingExceptionEnum) {
    LivingAreaFeaturesTvCastingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesTvCastingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesTvCastingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesTvCastingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesTvCastingExceptionEnum = exports.LivingAreaFeaturesTvCastingExceptionEnum || (exports.LivingAreaFeaturesTvCastingExceptionEnum = {}));
var LivingAreaFeaturesTvExceptionEnum;
(function (LivingAreaFeaturesTvExceptionEnum) {
    LivingAreaFeaturesTvExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesTvExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesTvExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesTvExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesTvExceptionEnum = exports.LivingAreaFeaturesTvExceptionEnum || (exports.LivingAreaFeaturesTvExceptionEnum = {}));
var LivingAreaFeaturesTvStreamingExceptionEnum;
(function (LivingAreaFeaturesTvStreamingExceptionEnum) {
    LivingAreaFeaturesTvStreamingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesTvStreamingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesTvStreamingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesTvStreamingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesTvStreamingExceptionEnum = exports.LivingAreaFeaturesTvStreamingExceptionEnum || (exports.LivingAreaFeaturesTvStreamingExceptionEnum = {}));
var LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum;
(function (LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum) {
    LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum = exports.LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum || (exports.LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum = {}));
var LivingAreaFeaturesWasherExceptionEnum;
(function (LivingAreaFeaturesWasherExceptionEnum) {
    LivingAreaFeaturesWasherExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaFeaturesWasherExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaFeaturesWasherExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaFeaturesWasherExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaFeaturesWasherExceptionEnum = exports.LivingAreaFeaturesWasherExceptionEnum || (exports.LivingAreaFeaturesWasherExceptionEnum = {}));
// LivingAreaFeatures
/**
 * Features in the living area.
**/
var LivingAreaFeatures = /** @class */ (function (_super) {
    __extends(LivingAreaFeatures, _super);
    function LivingAreaFeatures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=airConditioning" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "airConditioning", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=airConditioningException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "airConditioningException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bathtub" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "bathtub", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bathtubException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "bathtubException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bidet" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "bidet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bidetException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "bidetException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dryer" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "dryer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dryerException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "dryerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=electronicRoomKey" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "electronicRoomKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=electronicRoomKeyException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "electronicRoomKeyException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fireplace" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "fireplace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fireplaceException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "fireplaceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hairdryer" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "hairdryer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hairdryerException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "hairdryerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=heating" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "heating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=heatingException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "heatingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inunitSafe" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "inunitSafe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inunitSafeException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "inunitSafeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inunitWifiAvailable" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "inunitWifiAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inunitWifiAvailableException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "inunitWifiAvailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ironingEquipment" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "ironingEquipment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ironingEquipmentException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "ironingEquipmentException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payPerViewMovies" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "payPerViewMovies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payPerViewMoviesException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "payPerViewMoviesException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privateBathroom" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "privateBathroom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privateBathroomException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "privateBathroomException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shower" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "shower", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=showerException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "showerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toilet" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "toilet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toiletException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "toiletException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tv" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "tv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tvCasting" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "tvCasting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tvCastingException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "tvCastingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tvException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "tvException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tvStreaming" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "tvStreaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tvStreamingException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "tvStreamingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=universalPowerAdapters" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "universalPowerAdapters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=universalPowerAdaptersException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "universalPowerAdaptersException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=washer" }),
        __metadata("design:type", Boolean)
    ], LivingAreaFeatures.prototype, "washer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=washerException" }),
        __metadata("design:type", String)
    ], LivingAreaFeatures.prototype, "washerException", void 0);
    return LivingAreaFeatures;
}(utils_1.SpeakeasyBase));
exports.LivingAreaFeatures = LivingAreaFeatures;

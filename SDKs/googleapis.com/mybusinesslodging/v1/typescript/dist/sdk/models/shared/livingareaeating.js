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
exports.LivingAreaEating = exports.LivingAreaEatingToasterExceptionEnum = exports.LivingAreaEatingTeaStationExceptionEnum = exports.LivingAreaEatingStoveExceptionEnum = exports.LivingAreaEatingSnackbarExceptionEnum = exports.LivingAreaEatingSinkExceptionEnum = exports.LivingAreaEatingRefrigeratorExceptionEnum = exports.LivingAreaEatingOvenExceptionEnum = exports.LivingAreaEatingOutdoorGrillExceptionEnum = exports.LivingAreaEatingMinibarExceptionEnum = exports.LivingAreaEatingMicrowaveExceptionEnum = exports.LivingAreaEatingKitchenAvailableExceptionEnum = exports.LivingAreaEatingKettleExceptionEnum = exports.LivingAreaEatingIndoorGrillExceptionEnum = exports.LivingAreaEatingDishwasherExceptionEnum = exports.LivingAreaEatingCookwareExceptionEnum = exports.LivingAreaEatingCoffeeMakerExceptionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var LivingAreaEatingCoffeeMakerExceptionEnum;
(function (LivingAreaEatingCoffeeMakerExceptionEnum) {
    LivingAreaEatingCoffeeMakerExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingCoffeeMakerExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingCoffeeMakerExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingCoffeeMakerExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingCoffeeMakerExceptionEnum = exports.LivingAreaEatingCoffeeMakerExceptionEnum || (exports.LivingAreaEatingCoffeeMakerExceptionEnum = {}));
var LivingAreaEatingCookwareExceptionEnum;
(function (LivingAreaEatingCookwareExceptionEnum) {
    LivingAreaEatingCookwareExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingCookwareExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingCookwareExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingCookwareExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingCookwareExceptionEnum = exports.LivingAreaEatingCookwareExceptionEnum || (exports.LivingAreaEatingCookwareExceptionEnum = {}));
var LivingAreaEatingDishwasherExceptionEnum;
(function (LivingAreaEatingDishwasherExceptionEnum) {
    LivingAreaEatingDishwasherExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingDishwasherExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingDishwasherExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingDishwasherExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingDishwasherExceptionEnum = exports.LivingAreaEatingDishwasherExceptionEnum || (exports.LivingAreaEatingDishwasherExceptionEnum = {}));
var LivingAreaEatingIndoorGrillExceptionEnum;
(function (LivingAreaEatingIndoorGrillExceptionEnum) {
    LivingAreaEatingIndoorGrillExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingIndoorGrillExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingIndoorGrillExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingIndoorGrillExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingIndoorGrillExceptionEnum = exports.LivingAreaEatingIndoorGrillExceptionEnum || (exports.LivingAreaEatingIndoorGrillExceptionEnum = {}));
var LivingAreaEatingKettleExceptionEnum;
(function (LivingAreaEatingKettleExceptionEnum) {
    LivingAreaEatingKettleExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingKettleExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingKettleExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingKettleExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingKettleExceptionEnum = exports.LivingAreaEatingKettleExceptionEnum || (exports.LivingAreaEatingKettleExceptionEnum = {}));
var LivingAreaEatingKitchenAvailableExceptionEnum;
(function (LivingAreaEatingKitchenAvailableExceptionEnum) {
    LivingAreaEatingKitchenAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingKitchenAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingKitchenAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingKitchenAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingKitchenAvailableExceptionEnum = exports.LivingAreaEatingKitchenAvailableExceptionEnum || (exports.LivingAreaEatingKitchenAvailableExceptionEnum = {}));
var LivingAreaEatingMicrowaveExceptionEnum;
(function (LivingAreaEatingMicrowaveExceptionEnum) {
    LivingAreaEatingMicrowaveExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingMicrowaveExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingMicrowaveExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingMicrowaveExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingMicrowaveExceptionEnum = exports.LivingAreaEatingMicrowaveExceptionEnum || (exports.LivingAreaEatingMicrowaveExceptionEnum = {}));
var LivingAreaEatingMinibarExceptionEnum;
(function (LivingAreaEatingMinibarExceptionEnum) {
    LivingAreaEatingMinibarExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingMinibarExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingMinibarExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingMinibarExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingMinibarExceptionEnum = exports.LivingAreaEatingMinibarExceptionEnum || (exports.LivingAreaEatingMinibarExceptionEnum = {}));
var LivingAreaEatingOutdoorGrillExceptionEnum;
(function (LivingAreaEatingOutdoorGrillExceptionEnum) {
    LivingAreaEatingOutdoorGrillExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingOutdoorGrillExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingOutdoorGrillExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingOutdoorGrillExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingOutdoorGrillExceptionEnum = exports.LivingAreaEatingOutdoorGrillExceptionEnum || (exports.LivingAreaEatingOutdoorGrillExceptionEnum = {}));
var LivingAreaEatingOvenExceptionEnum;
(function (LivingAreaEatingOvenExceptionEnum) {
    LivingAreaEatingOvenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingOvenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingOvenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingOvenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingOvenExceptionEnum = exports.LivingAreaEatingOvenExceptionEnum || (exports.LivingAreaEatingOvenExceptionEnum = {}));
var LivingAreaEatingRefrigeratorExceptionEnum;
(function (LivingAreaEatingRefrigeratorExceptionEnum) {
    LivingAreaEatingRefrigeratorExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingRefrigeratorExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingRefrigeratorExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingRefrigeratorExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingRefrigeratorExceptionEnum = exports.LivingAreaEatingRefrigeratorExceptionEnum || (exports.LivingAreaEatingRefrigeratorExceptionEnum = {}));
var LivingAreaEatingSinkExceptionEnum;
(function (LivingAreaEatingSinkExceptionEnum) {
    LivingAreaEatingSinkExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingSinkExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingSinkExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingSinkExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingSinkExceptionEnum = exports.LivingAreaEatingSinkExceptionEnum || (exports.LivingAreaEatingSinkExceptionEnum = {}));
var LivingAreaEatingSnackbarExceptionEnum;
(function (LivingAreaEatingSnackbarExceptionEnum) {
    LivingAreaEatingSnackbarExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingSnackbarExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingSnackbarExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingSnackbarExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingSnackbarExceptionEnum = exports.LivingAreaEatingSnackbarExceptionEnum || (exports.LivingAreaEatingSnackbarExceptionEnum = {}));
var LivingAreaEatingStoveExceptionEnum;
(function (LivingAreaEatingStoveExceptionEnum) {
    LivingAreaEatingStoveExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingStoveExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingStoveExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingStoveExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingStoveExceptionEnum = exports.LivingAreaEatingStoveExceptionEnum || (exports.LivingAreaEatingStoveExceptionEnum = {}));
var LivingAreaEatingTeaStationExceptionEnum;
(function (LivingAreaEatingTeaStationExceptionEnum) {
    LivingAreaEatingTeaStationExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingTeaStationExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingTeaStationExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingTeaStationExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingTeaStationExceptionEnum = exports.LivingAreaEatingTeaStationExceptionEnum || (exports.LivingAreaEatingTeaStationExceptionEnum = {}));
var LivingAreaEatingToasterExceptionEnum;
(function (LivingAreaEatingToasterExceptionEnum) {
    LivingAreaEatingToasterExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaEatingToasterExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaEatingToasterExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaEatingToasterExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaEatingToasterExceptionEnum = exports.LivingAreaEatingToasterExceptionEnum || (exports.LivingAreaEatingToasterExceptionEnum = {}));
// LivingAreaEating
/**
 * Information about eating features in the living area.
**/
var LivingAreaEating = /** @class */ (function (_super) {
    __extends(LivingAreaEating, _super);
    function LivingAreaEating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coffeeMaker" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "coffeeMaker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coffeeMakerException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "coffeeMakerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookware" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "cookware", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookwareException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "cookwareException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dishwasher" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "dishwasher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dishwasherException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "dishwasherException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=indoorGrill" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "indoorGrill", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=indoorGrillException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "indoorGrillException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kettle" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "kettle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kettleException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "kettleException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kitchenAvailable" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "kitchenAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kitchenAvailableException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "kitchenAvailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microwave" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "microwave", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microwaveException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "microwaveException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minibar" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "minibar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minibarException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "minibarException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outdoorGrill" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "outdoorGrill", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outdoorGrillException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "outdoorGrillException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oven" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "oven", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ovenException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "ovenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refrigerator" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "refrigerator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refrigeratorException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "refrigeratorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sink" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "sink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sinkException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "sinkException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snackbar" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "snackbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snackbarException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "snackbarException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stove" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "stove", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stoveException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "stoveException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=teaStation" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "teaStation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=teaStationException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "teaStationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toaster" }),
        __metadata("design:type", Boolean)
    ], LivingAreaEating.prototype, "toaster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toasterException" }),
        __metadata("design:type", String)
    ], LivingAreaEating.prototype, "toasterException", void 0);
    return LivingAreaEating;
}(utils_1.SpeakeasyBase));
exports.LivingAreaEating = LivingAreaEating;

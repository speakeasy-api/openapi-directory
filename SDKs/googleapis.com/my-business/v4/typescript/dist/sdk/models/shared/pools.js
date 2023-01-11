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
exports.Pools = exports.PoolsWavePoolExceptionEnum = exports.PoolsWaterslideExceptionEnum = exports.PoolsWaterParkExceptionEnum = exports.PoolsWadingPoolExceptionEnum = exports.PoolsPoolsCountExceptionEnum = exports.PoolsPoolExceptionEnum = exports.PoolsOutdoorPoolsCountExceptionEnum = exports.PoolsOutdoorPoolExceptionEnum = exports.PoolsLifeguardExceptionEnum = exports.PoolsLazyRiverExceptionEnum = exports.PoolsIndoorPoolsCountExceptionEnum = exports.PoolsIndoorPoolExceptionEnum = exports.PoolsHotTubExceptionEnum = exports.PoolsAdultPoolExceptionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PoolsAdultPoolExceptionEnum;
(function (PoolsAdultPoolExceptionEnum) {
    PoolsAdultPoolExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsAdultPoolExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsAdultPoolExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsAdultPoolExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsAdultPoolExceptionEnum = exports.PoolsAdultPoolExceptionEnum || (exports.PoolsAdultPoolExceptionEnum = {}));
var PoolsHotTubExceptionEnum;
(function (PoolsHotTubExceptionEnum) {
    PoolsHotTubExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsHotTubExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsHotTubExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsHotTubExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsHotTubExceptionEnum = exports.PoolsHotTubExceptionEnum || (exports.PoolsHotTubExceptionEnum = {}));
var PoolsIndoorPoolExceptionEnum;
(function (PoolsIndoorPoolExceptionEnum) {
    PoolsIndoorPoolExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsIndoorPoolExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsIndoorPoolExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsIndoorPoolExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsIndoorPoolExceptionEnum = exports.PoolsIndoorPoolExceptionEnum || (exports.PoolsIndoorPoolExceptionEnum = {}));
var PoolsIndoorPoolsCountExceptionEnum;
(function (PoolsIndoorPoolsCountExceptionEnum) {
    PoolsIndoorPoolsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsIndoorPoolsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsIndoorPoolsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsIndoorPoolsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsIndoorPoolsCountExceptionEnum = exports.PoolsIndoorPoolsCountExceptionEnum || (exports.PoolsIndoorPoolsCountExceptionEnum = {}));
var PoolsLazyRiverExceptionEnum;
(function (PoolsLazyRiverExceptionEnum) {
    PoolsLazyRiverExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsLazyRiverExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsLazyRiverExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsLazyRiverExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsLazyRiverExceptionEnum = exports.PoolsLazyRiverExceptionEnum || (exports.PoolsLazyRiverExceptionEnum = {}));
var PoolsLifeguardExceptionEnum;
(function (PoolsLifeguardExceptionEnum) {
    PoolsLifeguardExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsLifeguardExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsLifeguardExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsLifeguardExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsLifeguardExceptionEnum = exports.PoolsLifeguardExceptionEnum || (exports.PoolsLifeguardExceptionEnum = {}));
var PoolsOutdoorPoolExceptionEnum;
(function (PoolsOutdoorPoolExceptionEnum) {
    PoolsOutdoorPoolExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsOutdoorPoolExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsOutdoorPoolExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsOutdoorPoolExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsOutdoorPoolExceptionEnum = exports.PoolsOutdoorPoolExceptionEnum || (exports.PoolsOutdoorPoolExceptionEnum = {}));
var PoolsOutdoorPoolsCountExceptionEnum;
(function (PoolsOutdoorPoolsCountExceptionEnum) {
    PoolsOutdoorPoolsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsOutdoorPoolsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsOutdoorPoolsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsOutdoorPoolsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsOutdoorPoolsCountExceptionEnum = exports.PoolsOutdoorPoolsCountExceptionEnum || (exports.PoolsOutdoorPoolsCountExceptionEnum = {}));
var PoolsPoolExceptionEnum;
(function (PoolsPoolExceptionEnum) {
    PoolsPoolExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsPoolExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsPoolExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsPoolExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsPoolExceptionEnum = exports.PoolsPoolExceptionEnum || (exports.PoolsPoolExceptionEnum = {}));
var PoolsPoolsCountExceptionEnum;
(function (PoolsPoolsCountExceptionEnum) {
    PoolsPoolsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsPoolsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsPoolsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsPoolsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsPoolsCountExceptionEnum = exports.PoolsPoolsCountExceptionEnum || (exports.PoolsPoolsCountExceptionEnum = {}));
var PoolsWadingPoolExceptionEnum;
(function (PoolsWadingPoolExceptionEnum) {
    PoolsWadingPoolExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsWadingPoolExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsWadingPoolExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsWadingPoolExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsWadingPoolExceptionEnum = exports.PoolsWadingPoolExceptionEnum || (exports.PoolsWadingPoolExceptionEnum = {}));
var PoolsWaterParkExceptionEnum;
(function (PoolsWaterParkExceptionEnum) {
    PoolsWaterParkExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsWaterParkExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsWaterParkExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsWaterParkExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsWaterParkExceptionEnum = exports.PoolsWaterParkExceptionEnum || (exports.PoolsWaterParkExceptionEnum = {}));
var PoolsWaterslideExceptionEnum;
(function (PoolsWaterslideExceptionEnum) {
    PoolsWaterslideExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsWaterslideExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsWaterslideExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsWaterslideExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsWaterslideExceptionEnum = exports.PoolsWaterslideExceptionEnum || (exports.PoolsWaterslideExceptionEnum = {}));
var PoolsWavePoolExceptionEnum;
(function (PoolsWavePoolExceptionEnum) {
    PoolsWavePoolExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoolsWavePoolExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoolsWavePoolExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoolsWavePoolExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoolsWavePoolExceptionEnum = exports.PoolsWavePoolExceptionEnum || (exports.PoolsWavePoolExceptionEnum = {}));
// Pools
/**
 * Swimming pool or recreational water facilities available at the hotel.
**/
var Pools = /** @class */ (function (_super) {
    __extends(Pools, _super);
    function Pools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adultPool" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "adultPool", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adultPoolException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "adultPoolException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hotTub" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "hotTub", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hotTubException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "hotTubException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=indoorPool" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "indoorPool", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=indoorPoolException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "indoorPoolException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=indoorPoolsCount" }),
        __metadata("design:type", Number)
    ], Pools.prototype, "indoorPoolsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=indoorPoolsCountException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "indoorPoolsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lazyRiver" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "lazyRiver", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lazyRiverException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "lazyRiverException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifeguard" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "lifeguard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifeguardException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "lifeguardException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outdoorPool" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "outdoorPool", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outdoorPoolException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "outdoorPoolException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outdoorPoolsCount" }),
        __metadata("design:type", Number)
    ], Pools.prototype, "outdoorPoolsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outdoorPoolsCountException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "outdoorPoolsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pool" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "pool", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=poolException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "poolException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=poolsCount" }),
        __metadata("design:type", Number)
    ], Pools.prototype, "poolsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=poolsCountException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "poolsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wadingPool" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "wadingPool", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wadingPoolException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "wadingPoolException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waterPark" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "waterPark", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waterParkException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "waterParkException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waterslide" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "waterslide", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waterslideException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "waterslideException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wavePool" }),
        __metadata("design:type", Boolean)
    ], Pools.prototype, "wavePool", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wavePoolException" }),
        __metadata("design:type", String)
    ], Pools.prototype, "wavePoolException", void 0);
    return Pools;
}(utils_1.SpeakeasyBase));
exports.Pools = Pools;

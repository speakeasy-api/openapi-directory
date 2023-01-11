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
exports.LivingAreaSleeping = exports.LivingAreaSleepingSyntheticPillowsExceptionEnum = exports.LivingAreaSleepingSofaBedsCountExceptionEnum = exports.LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum = exports.LivingAreaSleepingRollAwayBedsCountExceptionEnum = exports.LivingAreaSleepingQueenBedsCountExceptionEnum = exports.LivingAreaSleepingOtherBedsCountExceptionEnum = exports.LivingAreaSleepingMemoryFoamPillowsExceptionEnum = exports.LivingAreaSleepingKingBedsCountExceptionEnum = exports.LivingAreaSleepingHypoallergenicBeddingExceptionEnum = exports.LivingAreaSleepingFeatherPillowsExceptionEnum = exports.LivingAreaSleepingDoubleBedsCountExceptionEnum = exports.LivingAreaSleepingCribsCountExceptionEnum = exports.LivingAreaSleepingBunkBedsCountExceptionEnum = exports.LivingAreaSleepingBedsCountExceptionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var LivingAreaSleepingBedsCountExceptionEnum;
(function (LivingAreaSleepingBedsCountExceptionEnum) {
    LivingAreaSleepingBedsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingBedsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingBedsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingBedsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingBedsCountExceptionEnum = exports.LivingAreaSleepingBedsCountExceptionEnum || (exports.LivingAreaSleepingBedsCountExceptionEnum = {}));
var LivingAreaSleepingBunkBedsCountExceptionEnum;
(function (LivingAreaSleepingBunkBedsCountExceptionEnum) {
    LivingAreaSleepingBunkBedsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingBunkBedsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingBunkBedsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingBunkBedsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingBunkBedsCountExceptionEnum = exports.LivingAreaSleepingBunkBedsCountExceptionEnum || (exports.LivingAreaSleepingBunkBedsCountExceptionEnum = {}));
var LivingAreaSleepingCribsCountExceptionEnum;
(function (LivingAreaSleepingCribsCountExceptionEnum) {
    LivingAreaSleepingCribsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingCribsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingCribsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingCribsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingCribsCountExceptionEnum = exports.LivingAreaSleepingCribsCountExceptionEnum || (exports.LivingAreaSleepingCribsCountExceptionEnum = {}));
var LivingAreaSleepingDoubleBedsCountExceptionEnum;
(function (LivingAreaSleepingDoubleBedsCountExceptionEnum) {
    LivingAreaSleepingDoubleBedsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingDoubleBedsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingDoubleBedsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingDoubleBedsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingDoubleBedsCountExceptionEnum = exports.LivingAreaSleepingDoubleBedsCountExceptionEnum || (exports.LivingAreaSleepingDoubleBedsCountExceptionEnum = {}));
var LivingAreaSleepingFeatherPillowsExceptionEnum;
(function (LivingAreaSleepingFeatherPillowsExceptionEnum) {
    LivingAreaSleepingFeatherPillowsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingFeatherPillowsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingFeatherPillowsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingFeatherPillowsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingFeatherPillowsExceptionEnum = exports.LivingAreaSleepingFeatherPillowsExceptionEnum || (exports.LivingAreaSleepingFeatherPillowsExceptionEnum = {}));
var LivingAreaSleepingHypoallergenicBeddingExceptionEnum;
(function (LivingAreaSleepingHypoallergenicBeddingExceptionEnum) {
    LivingAreaSleepingHypoallergenicBeddingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingHypoallergenicBeddingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingHypoallergenicBeddingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingHypoallergenicBeddingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingHypoallergenicBeddingExceptionEnum = exports.LivingAreaSleepingHypoallergenicBeddingExceptionEnum || (exports.LivingAreaSleepingHypoallergenicBeddingExceptionEnum = {}));
var LivingAreaSleepingKingBedsCountExceptionEnum;
(function (LivingAreaSleepingKingBedsCountExceptionEnum) {
    LivingAreaSleepingKingBedsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingKingBedsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingKingBedsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingKingBedsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingKingBedsCountExceptionEnum = exports.LivingAreaSleepingKingBedsCountExceptionEnum || (exports.LivingAreaSleepingKingBedsCountExceptionEnum = {}));
var LivingAreaSleepingMemoryFoamPillowsExceptionEnum;
(function (LivingAreaSleepingMemoryFoamPillowsExceptionEnum) {
    LivingAreaSleepingMemoryFoamPillowsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingMemoryFoamPillowsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingMemoryFoamPillowsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingMemoryFoamPillowsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingMemoryFoamPillowsExceptionEnum = exports.LivingAreaSleepingMemoryFoamPillowsExceptionEnum || (exports.LivingAreaSleepingMemoryFoamPillowsExceptionEnum = {}));
var LivingAreaSleepingOtherBedsCountExceptionEnum;
(function (LivingAreaSleepingOtherBedsCountExceptionEnum) {
    LivingAreaSleepingOtherBedsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingOtherBedsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingOtherBedsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingOtherBedsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingOtherBedsCountExceptionEnum = exports.LivingAreaSleepingOtherBedsCountExceptionEnum || (exports.LivingAreaSleepingOtherBedsCountExceptionEnum = {}));
var LivingAreaSleepingQueenBedsCountExceptionEnum;
(function (LivingAreaSleepingQueenBedsCountExceptionEnum) {
    LivingAreaSleepingQueenBedsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingQueenBedsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingQueenBedsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingQueenBedsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingQueenBedsCountExceptionEnum = exports.LivingAreaSleepingQueenBedsCountExceptionEnum || (exports.LivingAreaSleepingQueenBedsCountExceptionEnum = {}));
var LivingAreaSleepingRollAwayBedsCountExceptionEnum;
(function (LivingAreaSleepingRollAwayBedsCountExceptionEnum) {
    LivingAreaSleepingRollAwayBedsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingRollAwayBedsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingRollAwayBedsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingRollAwayBedsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingRollAwayBedsCountExceptionEnum = exports.LivingAreaSleepingRollAwayBedsCountExceptionEnum || (exports.LivingAreaSleepingRollAwayBedsCountExceptionEnum = {}));
var LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum;
(function (LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum) {
    LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum = exports.LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum || (exports.LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum = {}));
var LivingAreaSleepingSofaBedsCountExceptionEnum;
(function (LivingAreaSleepingSofaBedsCountExceptionEnum) {
    LivingAreaSleepingSofaBedsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingSofaBedsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingSofaBedsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingSofaBedsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingSofaBedsCountExceptionEnum = exports.LivingAreaSleepingSofaBedsCountExceptionEnum || (exports.LivingAreaSleepingSofaBedsCountExceptionEnum = {}));
var LivingAreaSleepingSyntheticPillowsExceptionEnum;
(function (LivingAreaSleepingSyntheticPillowsExceptionEnum) {
    LivingAreaSleepingSyntheticPillowsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaSleepingSyntheticPillowsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaSleepingSyntheticPillowsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaSleepingSyntheticPillowsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaSleepingSyntheticPillowsExceptionEnum = exports.LivingAreaSleepingSyntheticPillowsExceptionEnum || (exports.LivingAreaSleepingSyntheticPillowsExceptionEnum = {}));
// LivingAreaSleeping
/**
 * Information about sleeping features in the living area.
**/
var LivingAreaSleeping = /** @class */ (function (_super) {
    __extends(LivingAreaSleeping, _super);
    function LivingAreaSleeping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bedsCount" }),
        __metadata("design:type", Number)
    ], LivingAreaSleeping.prototype, "bedsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bedsCountException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "bedsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bunkBedsCount" }),
        __metadata("design:type", Number)
    ], LivingAreaSleeping.prototype, "bunkBedsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bunkBedsCountException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "bunkBedsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cribsCount" }),
        __metadata("design:type", Number)
    ], LivingAreaSleeping.prototype, "cribsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cribsCountException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "cribsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doubleBedsCount" }),
        __metadata("design:type", Number)
    ], LivingAreaSleeping.prototype, "doubleBedsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doubleBedsCountException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "doubleBedsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=featherPillows" }),
        __metadata("design:type", Boolean)
    ], LivingAreaSleeping.prototype, "featherPillows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=featherPillowsException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "featherPillowsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hypoallergenicBedding" }),
        __metadata("design:type", Boolean)
    ], LivingAreaSleeping.prototype, "hypoallergenicBedding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hypoallergenicBeddingException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "hypoallergenicBeddingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kingBedsCount" }),
        __metadata("design:type", Number)
    ], LivingAreaSleeping.prototype, "kingBedsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kingBedsCountException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "kingBedsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memoryFoamPillows" }),
        __metadata("design:type", Boolean)
    ], LivingAreaSleeping.prototype, "memoryFoamPillows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memoryFoamPillowsException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "memoryFoamPillowsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=otherBedsCount" }),
        __metadata("design:type", Number)
    ], LivingAreaSleeping.prototype, "otherBedsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=otherBedsCountException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "otherBedsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queenBedsCount" }),
        __metadata("design:type", Number)
    ], LivingAreaSleeping.prototype, "queenBedsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queenBedsCountException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "queenBedsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollAwayBedsCount" }),
        __metadata("design:type", Number)
    ], LivingAreaSleeping.prototype, "rollAwayBedsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollAwayBedsCountException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "rollAwayBedsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=singleOrTwinBedsCount" }),
        __metadata("design:type", Number)
    ], LivingAreaSleeping.prototype, "singleOrTwinBedsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=singleOrTwinBedsCountException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "singleOrTwinBedsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sofaBedsCount" }),
        __metadata("design:type", Number)
    ], LivingAreaSleeping.prototype, "sofaBedsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sofaBedsCountException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "sofaBedsCountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=syntheticPillows" }),
        __metadata("design:type", Boolean)
    ], LivingAreaSleeping.prototype, "syntheticPillows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=syntheticPillowsException" }),
        __metadata("design:type", String)
    ], LivingAreaSleeping.prototype, "syntheticPillowsException", void 0);
    return LivingAreaSleeping;
}(utils_1.SpeakeasyBase));
exports.LivingAreaSleeping = LivingAreaSleeping;

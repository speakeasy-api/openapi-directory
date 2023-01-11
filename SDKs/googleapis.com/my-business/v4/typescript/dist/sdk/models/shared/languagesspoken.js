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
exports.LanguagesSpoken = exports.LanguagesSpokenVietnameseSpokenExceptionEnum = exports.LanguagesSpokenSpanishSpokenExceptionEnum = exports.LanguagesSpokenRussianSpokenExceptionEnum = exports.LanguagesSpokenPortugueseSpokenExceptionEnum = exports.LanguagesSpokenMandarinSpokenExceptionEnum = exports.LanguagesSpokenKoreanSpokenExceptionEnum = exports.LanguagesSpokenJapaneseSpokenExceptionEnum = exports.LanguagesSpokenItalianSpokenExceptionEnum = exports.LanguagesSpokenIndonesianSpokenExceptionEnum = exports.LanguagesSpokenHindiSpokenExceptionEnum = exports.LanguagesSpokenGermanSpokenExceptionEnum = exports.LanguagesSpokenFrenchSpokenExceptionEnum = exports.LanguagesSpokenFilipinoSpokenExceptionEnum = exports.LanguagesSpokenEnglishSpokenExceptionEnum = exports.LanguagesSpokenDutchSpokenExceptionEnum = exports.LanguagesSpokenCantoneseSpokenExceptionEnum = exports.LanguagesSpokenArabicSpokenExceptionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var LanguagesSpokenArabicSpokenExceptionEnum;
(function (LanguagesSpokenArabicSpokenExceptionEnum) {
    LanguagesSpokenArabicSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenArabicSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenArabicSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenArabicSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenArabicSpokenExceptionEnum = exports.LanguagesSpokenArabicSpokenExceptionEnum || (exports.LanguagesSpokenArabicSpokenExceptionEnum = {}));
var LanguagesSpokenCantoneseSpokenExceptionEnum;
(function (LanguagesSpokenCantoneseSpokenExceptionEnum) {
    LanguagesSpokenCantoneseSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenCantoneseSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenCantoneseSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenCantoneseSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenCantoneseSpokenExceptionEnum = exports.LanguagesSpokenCantoneseSpokenExceptionEnum || (exports.LanguagesSpokenCantoneseSpokenExceptionEnum = {}));
var LanguagesSpokenDutchSpokenExceptionEnum;
(function (LanguagesSpokenDutchSpokenExceptionEnum) {
    LanguagesSpokenDutchSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenDutchSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenDutchSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenDutchSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenDutchSpokenExceptionEnum = exports.LanguagesSpokenDutchSpokenExceptionEnum || (exports.LanguagesSpokenDutchSpokenExceptionEnum = {}));
var LanguagesSpokenEnglishSpokenExceptionEnum;
(function (LanguagesSpokenEnglishSpokenExceptionEnum) {
    LanguagesSpokenEnglishSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenEnglishSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenEnglishSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenEnglishSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenEnglishSpokenExceptionEnum = exports.LanguagesSpokenEnglishSpokenExceptionEnum || (exports.LanguagesSpokenEnglishSpokenExceptionEnum = {}));
var LanguagesSpokenFilipinoSpokenExceptionEnum;
(function (LanguagesSpokenFilipinoSpokenExceptionEnum) {
    LanguagesSpokenFilipinoSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenFilipinoSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenFilipinoSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenFilipinoSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenFilipinoSpokenExceptionEnum = exports.LanguagesSpokenFilipinoSpokenExceptionEnum || (exports.LanguagesSpokenFilipinoSpokenExceptionEnum = {}));
var LanguagesSpokenFrenchSpokenExceptionEnum;
(function (LanguagesSpokenFrenchSpokenExceptionEnum) {
    LanguagesSpokenFrenchSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenFrenchSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenFrenchSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenFrenchSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenFrenchSpokenExceptionEnum = exports.LanguagesSpokenFrenchSpokenExceptionEnum || (exports.LanguagesSpokenFrenchSpokenExceptionEnum = {}));
var LanguagesSpokenGermanSpokenExceptionEnum;
(function (LanguagesSpokenGermanSpokenExceptionEnum) {
    LanguagesSpokenGermanSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenGermanSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenGermanSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenGermanSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenGermanSpokenExceptionEnum = exports.LanguagesSpokenGermanSpokenExceptionEnum || (exports.LanguagesSpokenGermanSpokenExceptionEnum = {}));
var LanguagesSpokenHindiSpokenExceptionEnum;
(function (LanguagesSpokenHindiSpokenExceptionEnum) {
    LanguagesSpokenHindiSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenHindiSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenHindiSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenHindiSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenHindiSpokenExceptionEnum = exports.LanguagesSpokenHindiSpokenExceptionEnum || (exports.LanguagesSpokenHindiSpokenExceptionEnum = {}));
var LanguagesSpokenIndonesianSpokenExceptionEnum;
(function (LanguagesSpokenIndonesianSpokenExceptionEnum) {
    LanguagesSpokenIndonesianSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenIndonesianSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenIndonesianSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenIndonesianSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenIndonesianSpokenExceptionEnum = exports.LanguagesSpokenIndonesianSpokenExceptionEnum || (exports.LanguagesSpokenIndonesianSpokenExceptionEnum = {}));
var LanguagesSpokenItalianSpokenExceptionEnum;
(function (LanguagesSpokenItalianSpokenExceptionEnum) {
    LanguagesSpokenItalianSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenItalianSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenItalianSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenItalianSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenItalianSpokenExceptionEnum = exports.LanguagesSpokenItalianSpokenExceptionEnum || (exports.LanguagesSpokenItalianSpokenExceptionEnum = {}));
var LanguagesSpokenJapaneseSpokenExceptionEnum;
(function (LanguagesSpokenJapaneseSpokenExceptionEnum) {
    LanguagesSpokenJapaneseSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenJapaneseSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenJapaneseSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenJapaneseSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenJapaneseSpokenExceptionEnum = exports.LanguagesSpokenJapaneseSpokenExceptionEnum || (exports.LanguagesSpokenJapaneseSpokenExceptionEnum = {}));
var LanguagesSpokenKoreanSpokenExceptionEnum;
(function (LanguagesSpokenKoreanSpokenExceptionEnum) {
    LanguagesSpokenKoreanSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenKoreanSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenKoreanSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenKoreanSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenKoreanSpokenExceptionEnum = exports.LanguagesSpokenKoreanSpokenExceptionEnum || (exports.LanguagesSpokenKoreanSpokenExceptionEnum = {}));
var LanguagesSpokenMandarinSpokenExceptionEnum;
(function (LanguagesSpokenMandarinSpokenExceptionEnum) {
    LanguagesSpokenMandarinSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenMandarinSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenMandarinSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenMandarinSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenMandarinSpokenExceptionEnum = exports.LanguagesSpokenMandarinSpokenExceptionEnum || (exports.LanguagesSpokenMandarinSpokenExceptionEnum = {}));
var LanguagesSpokenPortugueseSpokenExceptionEnum;
(function (LanguagesSpokenPortugueseSpokenExceptionEnum) {
    LanguagesSpokenPortugueseSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenPortugueseSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenPortugueseSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenPortugueseSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenPortugueseSpokenExceptionEnum = exports.LanguagesSpokenPortugueseSpokenExceptionEnum || (exports.LanguagesSpokenPortugueseSpokenExceptionEnum = {}));
var LanguagesSpokenRussianSpokenExceptionEnum;
(function (LanguagesSpokenRussianSpokenExceptionEnum) {
    LanguagesSpokenRussianSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenRussianSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenRussianSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenRussianSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenRussianSpokenExceptionEnum = exports.LanguagesSpokenRussianSpokenExceptionEnum || (exports.LanguagesSpokenRussianSpokenExceptionEnum = {}));
var LanguagesSpokenSpanishSpokenExceptionEnum;
(function (LanguagesSpokenSpanishSpokenExceptionEnum) {
    LanguagesSpokenSpanishSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenSpanishSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenSpanishSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenSpanishSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenSpanishSpokenExceptionEnum = exports.LanguagesSpokenSpanishSpokenExceptionEnum || (exports.LanguagesSpokenSpanishSpokenExceptionEnum = {}));
var LanguagesSpokenVietnameseSpokenExceptionEnum;
(function (LanguagesSpokenVietnameseSpokenExceptionEnum) {
    LanguagesSpokenVietnameseSpokenExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LanguagesSpokenVietnameseSpokenExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LanguagesSpokenVietnameseSpokenExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LanguagesSpokenVietnameseSpokenExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LanguagesSpokenVietnameseSpokenExceptionEnum = exports.LanguagesSpokenVietnameseSpokenExceptionEnum || (exports.LanguagesSpokenVietnameseSpokenExceptionEnum = {}));
// LanguagesSpoken
/**
 * Languages spoken by at least one staff member.
**/
var LanguagesSpoken = /** @class */ (function (_super) {
    __extends(LanguagesSpoken, _super);
    function LanguagesSpoken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arabicSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "arabicSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arabicSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "arabicSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cantoneseSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "cantoneseSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cantoneseSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "cantoneseSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dutchSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "dutchSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dutchSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "dutchSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=englishSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "englishSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=englishSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "englishSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filipinoSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "filipinoSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filipinoSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "filipinoSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frenchSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "frenchSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frenchSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "frenchSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=germanSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "germanSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=germanSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "germanSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hindiSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "hindiSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hindiSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "hindiSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=indonesianSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "indonesianSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=indonesianSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "indonesianSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=italianSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "italianSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=italianSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "italianSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=japaneseSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "japaneseSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=japaneseSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "japaneseSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=koreanSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "koreanSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=koreanSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "koreanSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mandarinSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "mandarinSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mandarinSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "mandarinSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portugueseSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "portugueseSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portugueseSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "portugueseSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=russianSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "russianSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=russianSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "russianSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spanishSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "spanishSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spanishSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "spanishSpokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vietnameseSpoken" }),
        __metadata("design:type", Boolean)
    ], LanguagesSpoken.prototype, "vietnameseSpoken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vietnameseSpokenException" }),
        __metadata("design:type", String)
    ], LanguagesSpoken.prototype, "vietnameseSpokenException", void 0);
    return LanguagesSpoken;
}(utils_1.SpeakeasyBase));
exports.LanguagesSpoken = LanguagesSpoken;

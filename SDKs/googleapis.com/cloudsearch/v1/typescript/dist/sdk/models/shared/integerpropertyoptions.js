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
exports.IntegerPropertyOptions = exports.IntegerPropertyOptionsOrderedRankingEnum = void 0;
var utils_1 = require("../../../internal/utils");
var integerfacetingoptions_1 = require("./integerfacetingoptions");
var integeroperatoroptions_1 = require("./integeroperatoroptions");
var class_transformer_1 = require("class-transformer");
/**
 * Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false.
 */
var IntegerPropertyOptionsOrderedRankingEnum;
(function (IntegerPropertyOptionsOrderedRankingEnum) {
    IntegerPropertyOptionsOrderedRankingEnum["NoOrder"] = "NO_ORDER";
    IntegerPropertyOptionsOrderedRankingEnum["Ascending"] = "ASCENDING";
    IntegerPropertyOptionsOrderedRankingEnum["Descending"] = "DESCENDING";
})(IntegerPropertyOptionsOrderedRankingEnum = exports.IntegerPropertyOptionsOrderedRankingEnum || (exports.IntegerPropertyOptionsOrderedRankingEnum = {}));
/**
 * The options for integer properties.
 */
var IntegerPropertyOptions = /** @class */ (function (_super) {
    __extends(IntegerPropertyOptions, _super);
    function IntegerPropertyOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "integerFacetingOptions" }),
        (0, class_transformer_1.Type)(function () { return integerfacetingoptions_1.IntegerFacetingOptions; }),
        __metadata("design:type", integerfacetingoptions_1.IntegerFacetingOptions)
    ], IntegerPropertyOptions.prototype, "integerFacetingOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "maximumValue" }),
        __metadata("design:type", String)
    ], IntegerPropertyOptions.prototype, "maximumValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "minimumValue" }),
        __metadata("design:type", String)
    ], IntegerPropertyOptions.prototype, "minimumValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "operatorOptions" }),
        (0, class_transformer_1.Type)(function () { return integeroperatoroptions_1.IntegerOperatorOptions; }),
        __metadata("design:type", integeroperatoroptions_1.IntegerOperatorOptions)
    ], IntegerPropertyOptions.prototype, "operatorOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "orderedRanking" }),
        __metadata("design:type", String)
    ], IntegerPropertyOptions.prototype, "orderedRanking", void 0);
    return IntegerPropertyOptions;
}(utils_1.SpeakeasyBase));
exports.IntegerPropertyOptions = IntegerPropertyOptions;

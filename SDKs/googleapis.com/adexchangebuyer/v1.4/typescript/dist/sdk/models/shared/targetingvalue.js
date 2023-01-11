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
exports.TargetingValue = void 0;
var utils_1 = require("../../../internal/utils");
var targetingvaluecreativesize_1 = require("./targetingvaluecreativesize");
var targetingvaluedayparttargeting_1 = require("./targetingvaluedayparttargeting");
var targetingvaluedemogagecriteria_1 = require("./targetingvaluedemogagecriteria");
var targetingvaluedemoggendercriteria_1 = require("./targetingvaluedemoggendercriteria");
var targetingvaluerequestplatformtargeting_1 = require("./targetingvaluerequestplatformtargeting");
var TargetingValue = /** @class */ (function (_super) {
    __extends(TargetingValue, _super);
    function TargetingValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creativeSizeValue" }),
        __metadata("design:type", targetingvaluecreativesize_1.TargetingValueCreativeSize)
    ], TargetingValue.prototype, "creativeSizeValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dayPartTargetingValue" }),
        __metadata("design:type", targetingvaluedayparttargeting_1.TargetingValueDayPartTargeting)
    ], TargetingValue.prototype, "dayPartTargetingValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=demogAgeCriteriaValue" }),
        __metadata("design:type", targetingvaluedemogagecriteria_1.TargetingValueDemogAgeCriteria)
    ], TargetingValue.prototype, "demogAgeCriteriaValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=demogGenderCriteriaValue" }),
        __metadata("design:type", targetingvaluedemoggendercriteria_1.TargetingValueDemogGenderCriteria)
    ], TargetingValue.prototype, "demogGenderCriteriaValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=longValue" }),
        __metadata("design:type", String)
    ], TargetingValue.prototype, "longValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestPlatformTargetingValue" }),
        __metadata("design:type", targetingvaluerequestplatformtargeting_1.TargetingValueRequestPlatformTargeting)
    ], TargetingValue.prototype, "requestPlatformTargetingValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], TargetingValue.prototype, "stringValue", void 0);
    return TargetingValue;
}(utils_1.SpeakeasyBase));
exports.TargetingValue = TargetingValue;

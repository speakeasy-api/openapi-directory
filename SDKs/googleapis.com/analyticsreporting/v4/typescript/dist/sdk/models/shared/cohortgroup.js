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
exports.CohortGroup = void 0;
var utils_1 = require("../../../internal/utils");
var cohort_1 = require("./cohort");
var class_transformer_1 = require("class-transformer");
/**
 * Defines a cohort group. For example: "cohortGroup": { "cohorts": [{ "name": "cohort 1", "type": "FIRST_VISIT_DATE", "dateRange": { "startDate": "2015-08-01", "endDate": "2015-08-01" } },{ "name": "cohort 2" "type": "FIRST_VISIT_DATE" "dateRange": { "startDate": "2015-07-01", "endDate": "2015-07-01" } }] }
 */
var CohortGroup = /** @class */ (function (_super) {
    __extends(CohortGroup, _super);
    function CohortGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: cohort_1.Cohort }),
        (0, class_transformer_1.Expose)({ name: "cohorts" }),
        (0, class_transformer_1.Type)(function () { return cohort_1.Cohort; }),
        __metadata("design:type", Array)
    ], CohortGroup.prototype, "cohorts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "lifetimeValue" }),
        __metadata("design:type", Boolean)
    ], CohortGroup.prototype, "lifetimeValue", void 0);
    return CohortGroup;
}(utils_1.SpeakeasyBase));
exports.CohortGroup = CohortGroup;

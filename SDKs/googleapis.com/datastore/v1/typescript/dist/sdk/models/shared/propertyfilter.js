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
exports.PropertyFilter = exports.PropertyFilterOpEnum = void 0;
var utils_1 = require("../../../internal/utils");
var propertyreference_1 = require("./propertyreference");
var value_1 = require("./value");
var class_transformer_1 = require("class-transformer");
/**
 * The operator to filter by.
 */
var PropertyFilterOpEnum;
(function (PropertyFilterOpEnum) {
    PropertyFilterOpEnum["OperatorUnspecified"] = "OPERATOR_UNSPECIFIED";
    PropertyFilterOpEnum["LessThan"] = "LESS_THAN";
    PropertyFilterOpEnum["LessThanOrEqual"] = "LESS_THAN_OR_EQUAL";
    PropertyFilterOpEnum["GreaterThan"] = "GREATER_THAN";
    PropertyFilterOpEnum["GreaterThanOrEqual"] = "GREATER_THAN_OR_EQUAL";
    PropertyFilterOpEnum["Equal"] = "EQUAL";
    PropertyFilterOpEnum["In"] = "IN";
    PropertyFilterOpEnum["NotEqual"] = "NOT_EQUAL";
    PropertyFilterOpEnum["HasAncestor"] = "HAS_ANCESTOR";
    PropertyFilterOpEnum["NotIn"] = "NOT_IN";
})(PropertyFilterOpEnum = exports.PropertyFilterOpEnum || (exports.PropertyFilterOpEnum = {}));
/**
 * A filter on a specific property.
 */
var PropertyFilter = /** @class */ (function (_super) {
    __extends(PropertyFilter, _super);
    function PropertyFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "op" }),
        __metadata("design:type", String)
    ], PropertyFilter.prototype, "op", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "property" }),
        (0, class_transformer_1.Type)(function () { return propertyreference_1.PropertyReference; }),
        __metadata("design:type", propertyreference_1.PropertyReference)
    ], PropertyFilter.prototype, "property", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "value" }),
        (0, class_transformer_1.Type)(function () { return value_1.Value; }),
        __metadata("design:type", value_1.Value)
    ], PropertyFilter.prototype, "value", void 0);
    return PropertyFilter;
}(utils_1.SpeakeasyBase));
exports.PropertyFilter = PropertyFilter;

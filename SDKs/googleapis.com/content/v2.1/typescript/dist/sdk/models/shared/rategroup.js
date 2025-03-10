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
exports.RateGroup = void 0;
var utils_1 = require("../../../internal/utils");
var carrierrate_1 = require("./carrierrate");
var table_1 = require("./table");
var value_1 = require("./value");
var class_transformer_1 = require("class-transformer");
var RateGroup = /** @class */ (function (_super) {
    __extends(RateGroup, _super);
    function RateGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "applicableShippingLabels" }),
        __metadata("design:type", Array)
    ], RateGroup.prototype, "applicableShippingLabels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: carrierrate_1.CarrierRate }),
        (0, class_transformer_1.Expose)({ name: "carrierRates" }),
        (0, class_transformer_1.Type)(function () { return carrierrate_1.CarrierRate; }),
        __metadata("design:type", Array)
    ], RateGroup.prototype, "carrierRates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "mainTable" }),
        (0, class_transformer_1.Type)(function () { return table_1.Table; }),
        __metadata("design:type", table_1.Table)
    ], RateGroup.prototype, "mainTable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], RateGroup.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "singleValue" }),
        (0, class_transformer_1.Type)(function () { return value_1.Value; }),
        __metadata("design:type", value_1.Value)
    ], RateGroup.prototype, "singleValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: table_1.Table }),
        (0, class_transformer_1.Expose)({ name: "subtables" }),
        (0, class_transformer_1.Type)(function () { return table_1.Table; }),
        __metadata("design:type", Array)
    ], RateGroup.prototype, "subtables", void 0);
    return RateGroup;
}(utils_1.SpeakeasyBase));
exports.RateGroup = RateGroup;

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
exports.SpotSetTypeAreacode = exports.SpotSetTypeAreacodeInput = exports.SpotSetTypeAreacodeTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * Spot set type `areacode`; Matches Item with the same Area Code as specified by this set
 */
var SpotSetTypeAreacodeTypeEnum;
(function (SpotSetTypeAreacodeTypeEnum) {
    SpotSetTypeAreacodeTypeEnum["Areacode"] = "areacode";
})(SpotSetTypeAreacodeTypeEnum = exports.SpotSetTypeAreacodeTypeEnum || (exports.SpotSetTypeAreacodeTypeEnum = {}));
var SpotSetTypeAreacodeInput = /** @class */ (function (_super) {
    __extends(SpotSetTypeAreacodeInput, _super);
    function SpotSetTypeAreacodeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "area_code" }),
        __metadata("design:type", Number)
    ], SpotSetTypeAreacodeInput.prototype, "areaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "setid" }),
        __metadata("design:type", Number)
    ], SpotSetTypeAreacodeInput.prototype, "setid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], SpotSetTypeAreacodeInput.prototype, "type", void 0);
    return SpotSetTypeAreacodeInput;
}(utils_1.SpeakeasyBase));
exports.SpotSetTypeAreacodeInput = SpotSetTypeAreacodeInput;
var SpotSetTypeAreacode = /** @class */ (function (_super) {
    __extends(SpotSetTypeAreacode, _super);
    function SpotSetTypeAreacode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "area_code" }),
        __metadata("design:type", Number)
    ], SpotSetTypeAreacode.prototype, "areaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "created_by" }),
        __metadata("design:type", String)
    ], SpotSetTypeAreacode.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], SpotSetTypeAreacode.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "setid" }),
        __metadata("design:type", Number)
    ], SpotSetTypeAreacode.prototype, "setid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "spot_id" }),
        __metadata("design:type", String)
    ], SpotSetTypeAreacode.prototype, "spotId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "time_created" }),
        __metadata("design:type", String)
    ], SpotSetTypeAreacode.prototype, "timeCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "time_updated" }),
        __metadata("design:type", String)
    ], SpotSetTypeAreacode.prototype, "timeUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], SpotSetTypeAreacode.prototype, "type", void 0);
    return SpotSetTypeAreacode;
}(utils_1.SpeakeasyBase));
exports.SpotSetTypeAreacode = SpotSetTypeAreacode;

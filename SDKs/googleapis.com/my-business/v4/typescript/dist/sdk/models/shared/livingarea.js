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
exports.LivingArea = void 0;
var utils_1 = require("../../../internal/utils");
var livingareaaccessibility_1 = require("./livingareaaccessibility");
var livingareaeating_1 = require("./livingareaeating");
var livingareafeatures_1 = require("./livingareafeatures");
var livingarealayout_1 = require("./livingarealayout");
var livingareasleeping_1 = require("./livingareasleeping");
// LivingArea
/**
 * An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
**/
var LivingArea = /** @class */ (function (_super) {
    __extends(LivingArea, _super);
    function LivingArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessibility" }),
        __metadata("design:type", livingareaaccessibility_1.LivingAreaAccessibility)
    ], LivingArea.prototype, "accessibility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eating" }),
        __metadata("design:type", livingareaeating_1.LivingAreaEating)
    ], LivingArea.prototype, "eating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=features" }),
        __metadata("design:type", livingareafeatures_1.LivingAreaFeatures)
    ], LivingArea.prototype, "features", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=layout" }),
        __metadata("design:type", livingarealayout_1.LivingAreaLayout)
    ], LivingArea.prototype, "layout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sleeping" }),
        __metadata("design:type", livingareasleeping_1.LivingAreaSleeping)
    ], LivingArea.prototype, "sleeping", void 0);
    return LivingArea;
}(utils_1.SpeakeasyBase));
exports.LivingArea = LivingArea;

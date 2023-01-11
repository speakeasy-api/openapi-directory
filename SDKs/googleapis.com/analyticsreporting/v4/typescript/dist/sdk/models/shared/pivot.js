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
exports.Pivot = void 0;
var utils_1 = require("../../../internal/utils");
var dimensionfilterclause_1 = require("./dimensionfilterclause");
var dimension_1 = require("./dimension");
var metric_1 = require("./metric");
// Pivot
/**
 * The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.
**/
var Pivot = /** @class */ (function (_super) {
    __extends(Pivot, _super);
    function Pivot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensionFilterClauses", elemType: dimensionfilterclause_1.DimensionFilterClause }),
        __metadata("design:type", Array)
    ], Pivot.prototype, "dimensionFilterClauses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensions", elemType: dimension_1.Dimension }),
        __metadata("design:type", Array)
    ], Pivot.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxGroupCount" }),
        __metadata("design:type", Number)
    ], Pivot.prototype, "maxGroupCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metrics", elemType: metric_1.Metric }),
        __metadata("design:type", Array)
    ], Pivot.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startGroup" }),
        __metadata("design:type", Number)
    ], Pivot.prototype, "startGroup", void 0);
    return Pivot;
}(utils_1.SpeakeasyBase));
exports.Pivot = Pivot;

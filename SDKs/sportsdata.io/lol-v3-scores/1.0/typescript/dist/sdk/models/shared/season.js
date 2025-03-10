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
exports.Season = void 0;
var utils_1 = require("../../../internal/utils");
var round_1 = require("./round");
var class_transformer_1 = require("class-transformer");
var Season = /** @class */ (function (_super) {
    __extends(Season, _super);
    function Season() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "CompetitionId" }),
        __metadata("design:type", Number)
    ], Season.prototype, "competitionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "CompetitionName" }),
        __metadata("design:type", String)
    ], Season.prototype, "competitionName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "CurrentSeason" }),
        __metadata("design:type", Boolean)
    ], Season.prototype, "currentSeason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "EndDate" }),
        __metadata("design:type", String)
    ], Season.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Name" }),
        __metadata("design:type", String)
    ], Season.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: round_1.Round }),
        (0, class_transformer_1.Expose)({ name: "Rounds" }),
        (0, class_transformer_1.Type)(function () { return round_1.Round; }),
        __metadata("design:type", Array)
    ], Season.prototype, "rounds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Season" }),
        __metadata("design:type", Number)
    ], Season.prototype, "season", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SeasonId" }),
        __metadata("design:type", Number)
    ], Season.prototype, "seasonId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "StartDate" }),
        __metadata("design:type", String)
    ], Season.prototype, "startDate", void 0);
    return Season;
}(utils_1.SpeakeasyBase));
exports.Season = Season;

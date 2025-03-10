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
exports.Vehicle = void 0;
var utils_1 = require("../../../internal/utils");
var address_1 = require("./address");
var class_transformer_1 = require("class-transformer");
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "break" }),
        __metadata("design:type", Object)
    ], Vehicle.prototype, "break", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "earliest_start" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "earliestStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "end_address" }),
        (0, class_transformer_1.Type)(function () { return address_1.Address; }),
        __metadata("design:type", address_1.Address)
    ], Vehicle.prototype, "endAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "latest_end" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "latestEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "max_activities" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "maxActivities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "max_distance" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "maxDistance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "max_driving_time" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "maxDrivingTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "max_jobs" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "maxJobs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "min_jobs" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "minJobs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "move_to_end_address" }),
        __metadata("design:type", Boolean)
    ], Vehicle.prototype, "moveToEndAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "return_to_depot" }),
        __metadata("design:type", Boolean)
    ], Vehicle.prototype, "returnToDepot", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "skills" }),
        __metadata("design:type", Array)
    ], Vehicle.prototype, "skills", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "start_address" }),
        (0, class_transformer_1.Type)(function () { return address_1.Address; }),
        __metadata("design:type", address_1.Address)
    ], Vehicle.prototype, "startAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type_id" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "typeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "vehicle_id" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "vehicleId", void 0);
    return Vehicle;
}(utils_1.SpeakeasyBase));
exports.Vehicle = Vehicle;

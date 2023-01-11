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
exports.Request = void 0;
var utils_1 = require("../../../internal/utils");
var algorithm_1 = require("./algorithm");
var configuration_1 = require("./configuration");
var costmatrix_1 = require("./costmatrix");
var objective_1 = require("./objective");
var service_1 = require("./service");
var shipment_1 = require("./shipment");
var vehicletype_1 = require("./vehicletype");
var vehicle_1 = require("./vehicle");
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=algorithm" }),
        __metadata("design:type", algorithm_1.Algorithm)
    ], Request.prototype, "algorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configuration" }),
        __metadata("design:type", configuration_1.Configuration)
    ], Request.prototype, "configuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cost_matrices", elemType: costmatrix_1.CostMatrix }),
        __metadata("design:type", Array)
    ], Request.prototype, "costMatrices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=objectives", elemType: objective_1.Objective }),
        __metadata("design:type", Array)
    ], Request.prototype, "objectives", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relations" }),
        __metadata("design:type", Array)
    ], Request.prototype, "relations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=services", elemType: service_1.Service }),
        __metadata("design:type", Array)
    ], Request.prototype, "services", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipments", elemType: shipment_1.Shipment }),
        __metadata("design:type", Array)
    ], Request.prototype, "shipments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vehicle_types", elemType: vehicletype_1.VehicleType }),
        __metadata("design:type", Array)
    ], Request.prototype, "vehicleTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vehicles", elemType: vehicle_1.Vehicle }),
        __metadata("design:type", Array)
    ], Request.prototype, "vehicles", void 0);
    return Request;
}(utils_1.SpeakeasyBase));
exports.Request = Request;

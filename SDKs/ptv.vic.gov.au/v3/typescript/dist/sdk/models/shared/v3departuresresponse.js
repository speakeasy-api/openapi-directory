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
exports.V3DeparturesResponse = void 0;
var utils_1 = require("../../../internal/utils");
var v3departure_1 = require("./v3departure");
var v3direction_1 = require("./v3direction");
var v3disruption_1 = require("./v3disruption");
var v3run_1 = require("./v3run");
var v3status_1 = require("./v3status");
var v3stopmodel_1 = require("./v3stopmodel");
var V3DeparturesResponse = /** @class */ (function (_super) {
    __extends(V3DeparturesResponse, _super);
    function V3DeparturesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=departures", elemType: v3departure_1.V3Departure }),
        __metadata("design:type", Array)
    ], V3DeparturesResponse.prototype, "departures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directions", elemType: v3direction_1.V3Direction }),
        __metadata("design:type", Object)
    ], V3DeparturesResponse.prototype, "directions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disruptions", elemType: v3disruption_1.V3Disruption }),
        __metadata("design:type", Object)
    ], V3DeparturesResponse.prototype, "disruptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=routes" }),
        __metadata("design:type", Object)
    ], V3DeparturesResponse.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runs", elemType: v3run_1.V3Run }),
        __metadata("design:type", Object)
    ], V3DeparturesResponse.prototype, "runs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", v3status_1.V3Status)
    ], V3DeparturesResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stops", elemType: v3stopmodel_1.V3StopModel }),
        __metadata("design:type", Object)
    ], V3DeparturesResponse.prototype, "stops", void 0);
    return V3DeparturesResponse;
}(utils_1.SpeakeasyBase));
exports.V3DeparturesResponse = V3DeparturesResponse;

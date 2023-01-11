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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeparturesGetForStopAndRouteResponse = exports.DeparturesGetForStopAndRouteRequest = exports.DeparturesGetForStopAndRouteQueryParams = exports.DeparturesGetForStopAndRouteExpandEnum = exports.DeparturesGetForStopAndRoutePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeparturesGetForStopAndRoutePathParams = /** @class */ (function (_super) {
    __extends(DeparturesGetForStopAndRoutePathParams, _super);
    function DeparturesGetForStopAndRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=route_id" }),
        __metadata("design:type", String)
    ], DeparturesGetForStopAndRoutePathParams.prototype, "routeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=route_type" }),
        __metadata("design:type", Number)
    ], DeparturesGetForStopAndRoutePathParams.prototype, "routeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=stop_id" }),
        __metadata("design:type", Number)
    ], DeparturesGetForStopAndRoutePathParams.prototype, "stopId", void 0);
    return DeparturesGetForStopAndRoutePathParams;
}(utils_1.SpeakeasyBase));
exports.DeparturesGetForStopAndRoutePathParams = DeparturesGetForStopAndRoutePathParams;
var DeparturesGetForStopAndRouteExpandEnum;
(function (DeparturesGetForStopAndRouteExpandEnum) {
    DeparturesGetForStopAndRouteExpandEnum["All"] = "All";
    DeparturesGetForStopAndRouteExpandEnum["Stop"] = "Stop";
    DeparturesGetForStopAndRouteExpandEnum["Route"] = "Route";
    DeparturesGetForStopAndRouteExpandEnum["Run"] = "Run";
    DeparturesGetForStopAndRouteExpandEnum["Direction"] = "Direction";
    DeparturesGetForStopAndRouteExpandEnum["Disruption"] = "Disruption";
    DeparturesGetForStopAndRouteExpandEnum["VehicleDescriptor"] = "VehicleDescriptor";
    DeparturesGetForStopAndRouteExpandEnum["VehiclePosition"] = "VehiclePosition";
    DeparturesGetForStopAndRouteExpandEnum["None"] = "None";
})(DeparturesGetForStopAndRouteExpandEnum = exports.DeparturesGetForStopAndRouteExpandEnum || (exports.DeparturesGetForStopAndRouteExpandEnum = {}));
var DeparturesGetForStopAndRouteQueryParams = /** @class */ (function (_super) {
    __extends(DeparturesGetForStopAndRouteQueryParams, _super);
    function DeparturesGetForStopAndRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_utc" }),
        __metadata("design:type", Date)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "dateUtc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "devid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction_id" }),
        __metadata("design:type", Number)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "directionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "expand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=gtfs" }),
        __metadata("design:type", Boolean)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "gtfs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_cancelled" }),
        __metadata("design:type", Boolean)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "includeCancelled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_geopath" }),
        __metadata("design:type", Boolean)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "includeGeopath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=look_backwards" }),
        __metadata("design:type", Boolean)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "lookBackwards", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_results" }),
        __metadata("design:type", Number)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], DeparturesGetForStopAndRouteQueryParams.prototype, "token", void 0);
    return DeparturesGetForStopAndRouteQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeparturesGetForStopAndRouteQueryParams = DeparturesGetForStopAndRouteQueryParams;
var DeparturesGetForStopAndRouteRequest = /** @class */ (function (_super) {
    __extends(DeparturesGetForStopAndRouteRequest, _super);
    function DeparturesGetForStopAndRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeparturesGetForStopAndRoutePathParams)
    ], DeparturesGetForStopAndRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeparturesGetForStopAndRouteQueryParams)
    ], DeparturesGetForStopAndRouteRequest.prototype, "queryParams", void 0);
    return DeparturesGetForStopAndRouteRequest;
}(utils_1.SpeakeasyBase));
exports.DeparturesGetForStopAndRouteRequest = DeparturesGetForStopAndRouteRequest;
var DeparturesGetForStopAndRouteResponse = /** @class */ (function (_super) {
    __extends(DeparturesGetForStopAndRouteResponse, _super);
    function DeparturesGetForStopAndRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DeparturesGetForStopAndRouteResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeparturesGetForStopAndRouteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeparturesGetForStopAndRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.V3DeparturesResponse)
    ], DeparturesGetForStopAndRouteResponse.prototype, "v3DeparturesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], DeparturesGetForStopAndRouteResponse.prototype, "v3ErrorResponse", void 0);
    return DeparturesGetForStopAndRouteResponse;
}(utils_1.SpeakeasyBase));
exports.DeparturesGetForStopAndRouteResponse = DeparturesGetForStopAndRouteResponse;

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
exports.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = exports.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest = exports.GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams = exports.GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams = /** @class */ (function (_super) {
    __extends(GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams, _super);
    function GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=contentType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=locations" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams.prototype, "locations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams.prototype, "versionNumber", void 0);
    return GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams;
}(utils_1.SpeakeasyBase));
exports.GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams = GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams;
var GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams = /** @class */ (function (_super) {
    __extends(GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams, _super);
    function GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=accelerationEfficiency" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "accelerationEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alternativeType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "alternativeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=arriveAt" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "arriveAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=auxiliaryPowerInLitersPerHour" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "auxiliaryPowerInLitersPerHour", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=avoid" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "avoid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=computeBestOrder" }),
        __metadata("design:type", Boolean)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "computeBestOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=computeTravelTimeFor" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "computeTravelTimeFor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInLitersPerHundredkm" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "constantSpeedConsumptionInLitersPerHundredkm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInkWhPerHundredkm" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "constantSpeedConsumptionInkWhPerHundredkm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=currentFuelInLiters" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "currentFuelInLiters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=decelerationEfficiency" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "decelerationEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=departAt" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "departAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=downhillEfficiency" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "downhillEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fuelEnergyDensityInMJoulesPerLiter" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "fuelEnergyDensityInMJoulesPerLiter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hilliness" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "hilliness", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=instructionsType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "instructionsType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxAlternatives" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "maxAlternatives", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=minDeviationDistance" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "minDeviationDistance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=minDeviationTime" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "minDeviationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=report" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "report", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeRepresentation" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "routeRepresentation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "routeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sectionType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "sectionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=traffic" }),
        __metadata("design:type", Boolean)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "traffic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=travelMode" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "travelMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uphillEfficiency" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "uphillEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleAxleWeight" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleAxleWeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleCommercial" }),
        __metadata("design:type", Boolean)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleCommercial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleEngineType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleEngineType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleHeading" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleHeading", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleHeight" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleLength" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleLoadType" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleLoadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleMaxSpeed" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleMaxSpeed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleWeight" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleWeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleWidth" }),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=windingness" }),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "windingness", void 0);
    return GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams = GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams;
var GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest = /** @class */ (function (_super) {
    __extends(GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest, _super);
    function GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest.prototype, "queryParams", void 0);
    return GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest;
}(utils_1.SpeakeasyBase));
exports.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest = GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest;
var GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = /** @class */ (function (_super) {
    __extends(GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse, _super);
    function GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse.prototype, "statusCode", void 0);
    return GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse;
}(utils_1.SpeakeasyBase));
exports.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse;

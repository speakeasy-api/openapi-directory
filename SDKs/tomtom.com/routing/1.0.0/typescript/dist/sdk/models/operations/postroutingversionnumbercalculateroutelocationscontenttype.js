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
exports.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = exports.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest = exports.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests = exports.PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams = exports.PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams = /** @class */ (function (_super) {
    __extends(PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams, _super);
    function PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=contentType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=locations" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams.prototype, "locations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams.prototype, "versionNumber", void 0);
    return PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams;
}(utils_1.SpeakeasyBase));
exports.PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams = PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams;
var PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams = /** @class */ (function (_super) {
    __extends(PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams, _super);
    function PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=accelerationEfficiency" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "accelerationEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alternativeType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "alternativeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=arriveAt" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "arriveAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=auxiliaryPowerInLitersPerHour" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "auxiliaryPowerInLitersPerHour", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=avoid" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "avoid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=computeBestOrder" }),
        __metadata("design:type", Boolean)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "computeBestOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=computeTravelTimeFor" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "computeTravelTimeFor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInLitersPerHundredkm" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "constantSpeedConsumptionInLitersPerHundredkm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInkWhPerHundredkm" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "constantSpeedConsumptionInkWhPerHundredkm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=currentFuelInLiters" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "currentFuelInLiters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=decelerationEfficiency" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "decelerationEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=departAt" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "departAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=downhillEfficiency" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "downhillEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fuelEnergyDensityInMJoulesPerLiter" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "fuelEnergyDensityInMJoulesPerLiter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hilliness" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "hilliness", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=instructionsType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "instructionsType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxAlternatives" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "maxAlternatives", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=minDeviationDistance" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "minDeviationDistance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=minDeviationTime" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "minDeviationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=report" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "report", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeRepresentation" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "routeRepresentation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "routeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sectionType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "sectionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=traffic" }),
        __metadata("design:type", Boolean)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "traffic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=travelMode" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "travelMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uphillEfficiency" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "uphillEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleAxleWeight" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleAxleWeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleCommercial" }),
        __metadata("design:type", Boolean)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleCommercial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleEngineType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleEngineType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleHeading" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleHeading", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleHeight" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleLength" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleLoadType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleLoadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleMaxSpeed" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleMaxSpeed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleWeight" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleWeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleWidth" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "vehicleWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=windingness" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams.prototype, "windingness", void 0);
    return PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams = PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams;
var PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests = /** @class */ (function (_super) {
    __extends(PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests, _super);
    function PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests.prototype, "applicationXML", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CalculateRoutePostDataParameters)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests.prototype, "calculateRoutePostDataParameters", void 0);
    return PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests;
}(utils_1.SpeakeasyBase));
exports.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests = PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests;
var PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest = /** @class */ (function (_super) {
    __extends(PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest, _super);
    function PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRoutingVersionNumberCalculateRouteLocationsContentTypePathParams)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest.prototype, "request", void 0);
    return PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest;
}(utils_1.SpeakeasyBase));
exports.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest = PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest;
var PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = /** @class */ (function (_super) {
    __extends(PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse, _super);
    function PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse.prototype, "statusCode", void 0);
    return PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse;
}(utils_1.SpeakeasyBase));
exports.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse;

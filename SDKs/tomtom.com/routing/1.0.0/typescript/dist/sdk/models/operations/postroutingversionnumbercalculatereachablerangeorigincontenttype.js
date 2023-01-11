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
exports.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse = exports.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest = exports.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests = exports.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams = exports.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams = /** @class */ (function (_super) {
    __extends(PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams, _super);
    function PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=contentType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=origin" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams.prototype, "versionNumber", void 0);
    return PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams;
}(utils_1.SpeakeasyBase));
exports.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams = PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams;
var PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams = /** @class */ (function (_super) {
    __extends(PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams, _super);
    function PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=accelerationEfficiency" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "accelerationEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=arriveAt" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "arriveAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=auxiliaryPowerInLitersPerHour" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "auxiliaryPowerInLitersPerHour", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=avoid" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "avoid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInLitersPerHundredkm" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "constantSpeedConsumptionInLitersPerHundredkm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=constantSpeedConsumptionInkWhPerHundredkm" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "constantSpeedConsumptionInkWhPerHundredkm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=currentFuelInLiters" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "currentFuelInLiters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=decelerationEfficiency" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "decelerationEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=departAt" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "departAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=downhillEfficiency" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "downhillEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=energyBudgetInkWh" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "energyBudgetInkWh", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fuelBudgetInLiters" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "fuelBudgetInLiters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fuelEnergyDensityInMJoulesPerLiter" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "fuelEnergyDensityInMJoulesPerLiter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hilliness" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "hilliness", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=report" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "report", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "routeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeBudgetInSec" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "timeBudgetInSec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=traffic" }),
        __metadata("design:type", Boolean)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "traffic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=travelMode" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "travelMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uphillEfficiency" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "uphillEfficiency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleAxleWeight" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleAxleWeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleCommercial" }),
        __metadata("design:type", Boolean)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleCommercial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleEngineType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleEngineType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleHeight" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleLength" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleLoadType" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleLoadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleMaxSpeed" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleMaxSpeed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleWeight" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleWeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleWidth" }),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "vehicleWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=windingness" }),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams.prototype, "windingness", void 0);
    return PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams = PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams;
var PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests = /** @class */ (function (_super) {
    __extends(PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests, _super);
    function PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests.prototype, "applicationXML", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CalculateReachableRangePostDataParameters)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests.prototype, "calculateReachableRangePostDataParameters", void 0);
    return PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests;
}(utils_1.SpeakeasyBase));
exports.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests = PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests;
var PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest = /** @class */ (function (_super) {
    __extends(PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest, _super);
    function PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest.prototype, "request", void 0);
    return PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest;
}(utils_1.SpeakeasyBase));
exports.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest = PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest;
var PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse = /** @class */ (function (_super) {
    __extends(PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse, _super);
    function PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse.prototype, "statusCode", void 0);
    return PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse;
}(utils_1.SpeakeasyBase));
exports.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse = PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse;

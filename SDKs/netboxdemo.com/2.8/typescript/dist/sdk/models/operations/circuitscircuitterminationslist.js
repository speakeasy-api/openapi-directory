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
exports.CircuitsCircuitTerminationsListResponse = exports.CircuitsCircuitTerminationsListRequest = exports.CircuitsCircuitTerminationsList200ApplicationJson = exports.CircuitsCircuitTerminationsListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CircuitsCircuitTerminationsListQueryParams = /** @class */ (function (_super) {
    __extends(CircuitsCircuitTerminationsListQueryParams, _super);
    function CircuitsCircuitTerminationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=circuit_id" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "circuitId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=circuit_id__n" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "circuitIdN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=port_speed" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "portSpeed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=port_speed__gt" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "portSpeedGt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=port_speed__gte" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "portSpeedGte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=port_speed__lt" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "portSpeedLt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=port_speed__lte" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "portSpeedLte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=port_speed__n" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "portSpeedN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site__n" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "siteN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site_id__n" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "siteIdN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=term_side" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "termSide", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=term_side__n" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "termSideN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upstream_speed" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "upstreamSpeed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upstream_speed__gt" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "upstreamSpeedGt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upstream_speed__gte" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "upstreamSpeedGte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upstream_speed__lt" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "upstreamSpeedLt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upstream_speed__lte" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "upstreamSpeedLte", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upstream_speed__n" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "upstreamSpeedN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=xconnect_id" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=xconnect_id__ic" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectIdIc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=xconnect_id__ie" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectIdIe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=xconnect_id__iew" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectIdIew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=xconnect_id__isw" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectIdIsw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=xconnect_id__n" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectIdN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=xconnect_id__nic" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectIdNic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=xconnect_id__nie" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectIdNie", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=xconnect_id__niew" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectIdNiew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=xconnect_id__nisw" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectIdNisw", void 0);
    return CircuitsCircuitTerminationsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.CircuitsCircuitTerminationsListQueryParams = CircuitsCircuitTerminationsListQueryParams;
var CircuitsCircuitTerminationsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(CircuitsCircuitTerminationsList200ApplicationJson, _super);
    function CircuitsCircuitTerminationsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], CircuitsCircuitTerminationsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.CircuitTermination }),
        __metadata("design:type", Array)
    ], CircuitsCircuitTerminationsList200ApplicationJson.prototype, "results", void 0);
    return CircuitsCircuitTerminationsList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CircuitsCircuitTerminationsList200ApplicationJson = CircuitsCircuitTerminationsList200ApplicationJson;
var CircuitsCircuitTerminationsListRequest = /** @class */ (function (_super) {
    __extends(CircuitsCircuitTerminationsListRequest, _super);
    function CircuitsCircuitTerminationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CircuitsCircuitTerminationsListQueryParams)
    ], CircuitsCircuitTerminationsListRequest.prototype, "queryParams", void 0);
    return CircuitsCircuitTerminationsListRequest;
}(utils_1.SpeakeasyBase));
exports.CircuitsCircuitTerminationsListRequest = CircuitsCircuitTerminationsListRequest;
var CircuitsCircuitTerminationsListResponse = /** @class */ (function (_super) {
    __extends(CircuitsCircuitTerminationsListResponse, _super);
    function CircuitsCircuitTerminationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CircuitsCircuitTerminationsListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CircuitsCircuitTerminationsList200ApplicationJson)
    ], CircuitsCircuitTerminationsListResponse.prototype, "circuitsCircuitTerminationsList200ApplicationJSONObject", void 0);
    return CircuitsCircuitTerminationsListResponse;
}(utils_1.SpeakeasyBase));
exports.CircuitsCircuitTerminationsListResponse = CircuitsCircuitTerminationsListResponse;

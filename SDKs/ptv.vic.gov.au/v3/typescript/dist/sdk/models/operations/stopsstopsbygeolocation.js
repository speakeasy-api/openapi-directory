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
exports.StopsStopsByGeolocationResponse = exports.StopsStopsByGeolocationRequest = exports.StopsStopsByGeolocationQueryParams = exports.StopsStopsByGeolocationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StopsStopsByGeolocationPathParams = /** @class */ (function (_super) {
    __extends(StopsStopsByGeolocationPathParams, _super);
    function StopsStopsByGeolocationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=latitude" }),
        __metadata("design:type", Number)
    ], StopsStopsByGeolocationPathParams.prototype, "latitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=longitude" }),
        __metadata("design:type", Number)
    ], StopsStopsByGeolocationPathParams.prototype, "longitude", void 0);
    return StopsStopsByGeolocationPathParams;
}(utils_1.SpeakeasyBase));
exports.StopsStopsByGeolocationPathParams = StopsStopsByGeolocationPathParams;
var StopsStopsByGeolocationQueryParams = /** @class */ (function (_super) {
    __extends(StopsStopsByGeolocationQueryParams, _super);
    function StopsStopsByGeolocationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], StopsStopsByGeolocationQueryParams.prototype, "devid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_distance" }),
        __metadata("design:type", Number)
    ], StopsStopsByGeolocationQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_results" }),
        __metadata("design:type", Number)
    ], StopsStopsByGeolocationQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=route_types" }),
        __metadata("design:type", Array)
    ], StopsStopsByGeolocationQueryParams.prototype, "routeTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], StopsStopsByGeolocationQueryParams.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=stop_disruptions" }),
        __metadata("design:type", Boolean)
    ], StopsStopsByGeolocationQueryParams.prototype, "stopDisruptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], StopsStopsByGeolocationQueryParams.prototype, "token", void 0);
    return StopsStopsByGeolocationQueryParams;
}(utils_1.SpeakeasyBase));
exports.StopsStopsByGeolocationQueryParams = StopsStopsByGeolocationQueryParams;
var StopsStopsByGeolocationRequest = /** @class */ (function (_super) {
    __extends(StopsStopsByGeolocationRequest, _super);
    function StopsStopsByGeolocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StopsStopsByGeolocationPathParams)
    ], StopsStopsByGeolocationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StopsStopsByGeolocationQueryParams)
    ], StopsStopsByGeolocationRequest.prototype, "queryParams", void 0);
    return StopsStopsByGeolocationRequest;
}(utils_1.SpeakeasyBase));
exports.StopsStopsByGeolocationRequest = StopsStopsByGeolocationRequest;
var StopsStopsByGeolocationResponse = /** @class */ (function (_super) {
    __extends(StopsStopsByGeolocationResponse, _super);
    function StopsStopsByGeolocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], StopsStopsByGeolocationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StopsStopsByGeolocationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StopsStopsByGeolocationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], StopsStopsByGeolocationResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.V3StopsByDistanceResponse)
    ], StopsStopsByGeolocationResponse.prototype, "v3StopsByDistanceResponse", void 0);
    return StopsStopsByGeolocationResponse;
}(utils_1.SpeakeasyBase));
exports.StopsStopsByGeolocationResponse = StopsStopsByGeolocationResponse;

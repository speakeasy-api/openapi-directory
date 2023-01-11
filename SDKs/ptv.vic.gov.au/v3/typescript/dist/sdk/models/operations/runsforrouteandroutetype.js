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
exports.RunsForRouteAndRouteTypeResponse = exports.RunsForRouteAndRouteTypeRequest = exports.RunsForRouteAndRouteTypeQueryParams = exports.RunsForRouteAndRouteTypeExpandEnum = exports.RunsForRouteAndRouteTypePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RunsForRouteAndRouteTypePathParams = /** @class */ (function (_super) {
    __extends(RunsForRouteAndRouteTypePathParams, _super);
    function RunsForRouteAndRouteTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=route_id" }),
        __metadata("design:type", Number)
    ], RunsForRouteAndRouteTypePathParams.prototype, "routeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=route_type" }),
        __metadata("design:type", Number)
    ], RunsForRouteAndRouteTypePathParams.prototype, "routeType", void 0);
    return RunsForRouteAndRouteTypePathParams;
}(utils_1.SpeakeasyBase));
exports.RunsForRouteAndRouteTypePathParams = RunsForRouteAndRouteTypePathParams;
var RunsForRouteAndRouteTypeExpandEnum;
(function (RunsForRouteAndRouteTypeExpandEnum) {
    RunsForRouteAndRouteTypeExpandEnum["All"] = "All";
    RunsForRouteAndRouteTypeExpandEnum["VehicleDescriptor"] = "VehicleDescriptor";
    RunsForRouteAndRouteTypeExpandEnum["VehiclePosition"] = "VehiclePosition";
    RunsForRouteAndRouteTypeExpandEnum["None"] = "None";
})(RunsForRouteAndRouteTypeExpandEnum = exports.RunsForRouteAndRouteTypeExpandEnum || (exports.RunsForRouteAndRouteTypeExpandEnum = {}));
var RunsForRouteAndRouteTypeQueryParams = /** @class */ (function (_super) {
    __extends(RunsForRouteAndRouteTypeQueryParams, _super);
    function RunsForRouteAndRouteTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_utc" }),
        __metadata("design:type", Date)
    ], RunsForRouteAndRouteTypeQueryParams.prototype, "dateUtc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], RunsForRouteAndRouteTypeQueryParams.prototype, "devid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], RunsForRouteAndRouteTypeQueryParams.prototype, "expand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], RunsForRouteAndRouteTypeQueryParams.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], RunsForRouteAndRouteTypeQueryParams.prototype, "token", void 0);
    return RunsForRouteAndRouteTypeQueryParams;
}(utils_1.SpeakeasyBase));
exports.RunsForRouteAndRouteTypeQueryParams = RunsForRouteAndRouteTypeQueryParams;
var RunsForRouteAndRouteTypeRequest = /** @class */ (function (_super) {
    __extends(RunsForRouteAndRouteTypeRequest, _super);
    function RunsForRouteAndRouteTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RunsForRouteAndRouteTypePathParams)
    ], RunsForRouteAndRouteTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RunsForRouteAndRouteTypeQueryParams)
    ], RunsForRouteAndRouteTypeRequest.prototype, "queryParams", void 0);
    return RunsForRouteAndRouteTypeRequest;
}(utils_1.SpeakeasyBase));
exports.RunsForRouteAndRouteTypeRequest = RunsForRouteAndRouteTypeRequest;
var RunsForRouteAndRouteTypeResponse = /** @class */ (function (_super) {
    __extends(RunsForRouteAndRouteTypeResponse, _super);
    function RunsForRouteAndRouteTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], RunsForRouteAndRouteTypeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RunsForRouteAndRouteTypeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RunsForRouteAndRouteTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], RunsForRouteAndRouteTypeResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.V3RunsResponse)
    ], RunsForRouteAndRouteTypeResponse.prototype, "v3RunsResponse", void 0);
    return RunsForRouteAndRouteTypeResponse;
}(utils_1.SpeakeasyBase));
exports.RunsForRouteAndRouteTypeResponse = RunsForRouteAndRouteTypeResponse;

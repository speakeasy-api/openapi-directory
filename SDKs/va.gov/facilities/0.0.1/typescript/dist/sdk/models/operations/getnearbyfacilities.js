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
exports.GetNearbyFacilitiesResponse = exports.GetNearbyFacilitiesRequest = exports.GetNearbyFacilitiesSecurity = exports.GetNearbyFacilitiesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetNearbyFacilitiesQueryParams = /** @class */ (function (_super) {
    __extends(GetNearbyFacilitiesQueryParams, _super);
    function GetNearbyFacilitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetNearbyFacilitiesQueryParams.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=drive_time" }),
        __metadata("design:type", Number)
    ], GetNearbyFacilitiesQueryParams.prototype, "driveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], GetNearbyFacilitiesQueryParams.prototype, "lat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lng" }),
        __metadata("design:type", Number)
    ], GetNearbyFacilitiesQueryParams.prototype, "lng", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetNearbyFacilitiesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetNearbyFacilitiesQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=services[]" }),
        __metadata("design:type", Array)
    ], GetNearbyFacilitiesQueryParams.prototype, "services", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetNearbyFacilitiesQueryParams.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=street_address" }),
        __metadata("design:type", String)
    ], GetNearbyFacilitiesQueryParams.prototype, "streetAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GetNearbyFacilitiesQueryParams.prototype, "zip", void 0);
    return GetNearbyFacilitiesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNearbyFacilitiesQueryParams = GetNearbyFacilitiesQueryParams;
var GetNearbyFacilitiesSecurity = /** @class */ (function (_super) {
    __extends(GetNearbyFacilitiesSecurity, _super);
    function GetNearbyFacilitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], GetNearbyFacilitiesSecurity.prototype, "apikey", void 0);
    return GetNearbyFacilitiesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetNearbyFacilitiesSecurity = GetNearbyFacilitiesSecurity;
var GetNearbyFacilitiesRequest = /** @class */ (function (_super) {
    __extends(GetNearbyFacilitiesRequest, _super);
    function GetNearbyFacilitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNearbyFacilitiesQueryParams)
    ], GetNearbyFacilitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNearbyFacilitiesSecurity)
    ], GetNearbyFacilitiesRequest.prototype, "security", void 0);
    return GetNearbyFacilitiesRequest;
}(utils_1.SpeakeasyBase));
exports.GetNearbyFacilitiesRequest = GetNearbyFacilitiesRequest;
var GetNearbyFacilitiesResponse = /** @class */ (function (_super) {
    __extends(GetNearbyFacilitiesResponse, _super);
    function GetNearbyFacilitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiError)
    ], GetNearbyFacilitiesResponse.prototype, "apiError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNearbyFacilitiesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GenericError)
    ], GetNearbyFacilitiesResponse.prototype, "genericError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NearbyResponse)
    ], GetNearbyFacilitiesResponse.prototype, "nearbyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNearbyFacilitiesResponse.prototype, "statusCode", void 0);
    return GetNearbyFacilitiesResponse;
}(utils_1.SpeakeasyBase));
exports.GetNearbyFacilitiesResponse = GetNearbyFacilitiesResponse;

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
exports.GetIsochroneResponse = exports.GetIsochroneRequest = exports.GetIsochroneQueryParams = exports.GetIsochroneWeightingEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetIsochroneWeightingEnum;
(function (GetIsochroneWeightingEnum) {
    GetIsochroneWeightingEnum["Fastest"] = "fastest";
    GetIsochroneWeightingEnum["Shortest"] = "shortest";
})(GetIsochroneWeightingEnum = exports.GetIsochroneWeightingEnum || (exports.GetIsochroneWeightingEnum = {}));
var GetIsochroneQueryParams = /** @class */ (function (_super) {
    __extends(GetIsochroneQueryParams, _super);
    function GetIsochroneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=buckets" }),
        __metadata("design:type", Number)
    ], GetIsochroneQueryParams.prototype, "buckets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distance_limit" }),
        __metadata("design:type", Number)
    ], GetIsochroneQueryParams.prototype, "distanceLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=point" }),
        __metadata("design:type", String)
    ], GetIsochroneQueryParams.prototype, "point", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=reverse_flow" }),
        __metadata("design:type", Boolean)
    ], GetIsochroneQueryParams.prototype, "reverseFlow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=time_limit" }),
        __metadata("design:type", Number)
    ], GetIsochroneQueryParams.prototype, "timeLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicle" }),
        __metadata("design:type", String)
    ], GetIsochroneQueryParams.prototype, "vehicle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=weighting" }),
        __metadata("design:type", String)
    ], GetIsochroneQueryParams.prototype, "weighting", void 0);
    return GetIsochroneQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetIsochroneQueryParams = GetIsochroneQueryParams;
var GetIsochroneRequest = /** @class */ (function (_super) {
    __extends(GetIsochroneRequest, _super);
    function GetIsochroneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIsochroneQueryParams)
    ], GetIsochroneRequest.prototype, "queryParams", void 0);
    return GetIsochroneRequest;
}(utils_1.SpeakeasyBase));
exports.GetIsochroneRequest = GetIsochroneRequest;
var GetIsochroneResponse = /** @class */ (function (_super) {
    __extends(GetIsochroneResponse, _super);
    function GetIsochroneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetIsochroneResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GhError)
    ], GetIsochroneResponse.prototype, "ghError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.IsochroneResponse)
    ], GetIsochroneResponse.prototype, "isochroneResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetIsochroneResponse.prototype, "statusCode", void 0);
    return GetIsochroneResponse;
}(utils_1.SpeakeasyBase));
exports.GetIsochroneResponse = GetIsochroneResponse;

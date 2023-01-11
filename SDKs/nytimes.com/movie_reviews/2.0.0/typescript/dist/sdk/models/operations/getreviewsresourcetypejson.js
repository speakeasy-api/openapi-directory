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
exports.GetReviewsResourceTypeJsonResponse = exports.GetReviewsResourceTypeJsonRequest = exports.GetReviewsResourceTypeJson200ApplicationJson = exports.GetReviewsResourceTypeJsonQueryParams = exports.GetReviewsResourceTypeJsonOrderEnum = exports.GetReviewsResourceTypeJsonPathParams = exports.GetReviewsResourceTypeJsonResourceTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetReviewsResourceTypeJsonResourceTypeEnum;
(function (GetReviewsResourceTypeJsonResourceTypeEnum) {
    GetReviewsResourceTypeJsonResourceTypeEnum["All"] = "all";
    GetReviewsResourceTypeJsonResourceTypeEnum["Picks"] = "picks";
})(GetReviewsResourceTypeJsonResourceTypeEnum = exports.GetReviewsResourceTypeJsonResourceTypeEnum || (exports.GetReviewsResourceTypeJsonResourceTypeEnum = {}));
var GetReviewsResourceTypeJsonPathParams = /** @class */ (function (_super) {
    __extends(GetReviewsResourceTypeJsonPathParams, _super);
    function GetReviewsResourceTypeJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resource-type" }),
        __metadata("design:type", String)
    ], GetReviewsResourceTypeJsonPathParams.prototype, "resourceType", void 0);
    return GetReviewsResourceTypeJsonPathParams;
}(utils_1.SpeakeasyBase));
exports.GetReviewsResourceTypeJsonPathParams = GetReviewsResourceTypeJsonPathParams;
var GetReviewsResourceTypeJsonOrderEnum;
(function (GetReviewsResourceTypeJsonOrderEnum) {
    GetReviewsResourceTypeJsonOrderEnum["ByTitle"] = "by-title";
    GetReviewsResourceTypeJsonOrderEnum["ByPublicationDate"] = "by-publication-date";
    GetReviewsResourceTypeJsonOrderEnum["ByOpeningDate"] = "by-opening-date";
})(GetReviewsResourceTypeJsonOrderEnum = exports.GetReviewsResourceTypeJsonOrderEnum || (exports.GetReviewsResourceTypeJsonOrderEnum = {}));
var GetReviewsResourceTypeJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetReviewsResourceTypeJsonQueryParams, _super);
    function GetReviewsResourceTypeJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetReviewsResourceTypeJsonQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetReviewsResourceTypeJsonQueryParams.prototype, "order", void 0);
    return GetReviewsResourceTypeJsonQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetReviewsResourceTypeJsonQueryParams = GetReviewsResourceTypeJsonQueryParams;
var GetReviewsResourceTypeJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReviewsResourceTypeJson200ApplicationJson, _super);
    function GetReviewsResourceTypeJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetReviewsResourceTypeJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetReviewsResourceTypeJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Movie }),
        __metadata("design:type", Array)
    ], GetReviewsResourceTypeJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetReviewsResourceTypeJson200ApplicationJson.prototype, "status", void 0);
    return GetReviewsResourceTypeJson200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetReviewsResourceTypeJson200ApplicationJson = GetReviewsResourceTypeJson200ApplicationJson;
var GetReviewsResourceTypeJsonRequest = /** @class */ (function (_super) {
    __extends(GetReviewsResourceTypeJsonRequest, _super);
    function GetReviewsResourceTypeJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReviewsResourceTypeJsonPathParams)
    ], GetReviewsResourceTypeJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReviewsResourceTypeJsonQueryParams)
    ], GetReviewsResourceTypeJsonRequest.prototype, "queryParams", void 0);
    return GetReviewsResourceTypeJsonRequest;
}(utils_1.SpeakeasyBase));
exports.GetReviewsResourceTypeJsonRequest = GetReviewsResourceTypeJsonRequest;
var GetReviewsResourceTypeJsonResponse = /** @class */ (function (_super) {
    __extends(GetReviewsResourceTypeJsonResponse, _super);
    function GetReviewsResourceTypeJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetReviewsResourceTypeJsonResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetReviewsResourceTypeJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReviewsResourceTypeJson200ApplicationJson)
    ], GetReviewsResourceTypeJsonResponse.prototype, "getReviewsResourceTypeJSON200ApplicationJSONObject", void 0);
    return GetReviewsResourceTypeJsonResponse;
}(utils_1.SpeakeasyBase));
exports.GetReviewsResourceTypeJsonResponse = GetReviewsResourceTypeJsonResponse;

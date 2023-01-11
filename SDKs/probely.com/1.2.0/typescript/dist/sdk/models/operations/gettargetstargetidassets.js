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
exports.GetTargetsTargetIdAssetsResponse = exports.GetTargetsTargetIdAssetsRequest = exports.GetTargetsTargetIdAssets404ApplicationJson = exports.GetTargetsTargetIdAssets401ApplicationJson = exports.GetTargetsTargetIdAssets200ApplicationJson = exports.GetTargetsTargetIdAssetsQueryParams = exports.GetTargetsTargetIdAssetsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTargetsTargetIdAssetsPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssetsPathParams, _super);
    function GetTargetsTargetIdAssetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssetsPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdAssetsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssetsPathParams = GetTargetsTargetIdAssetsPathParams;
var GetTargetsTargetIdAssetsQueryParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssetsQueryParams, _super);
    function GetTargetsTargetIdAssetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAssetsQueryParams.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssetsQueryParams.prototype, "ordering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAssetsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssetsQueryParams.prototype, "search", void 0);
    return GetTargetsTargetIdAssetsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssetsQueryParams = GetTargetsTargetIdAssetsQueryParams;
var GetTargetsTargetIdAssets200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssets200ApplicationJson, _super);
    function GetTargetsTargetIdAssets200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAssets200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAssets200ApplicationJson.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAssets200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_total" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAssets200ApplicationJson.prototype, "pageTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Asset }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdAssets200ApplicationJson.prototype, "results", void 0);
    return GetTargetsTargetIdAssets200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssets200ApplicationJson = GetTargetsTargetIdAssets200ApplicationJson;
var GetTargetsTargetIdAssets401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssets401ApplicationJson, _super);
    function GetTargetsTargetIdAssets401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssets401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdAssets401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssets401ApplicationJson = GetTargetsTargetIdAssets401ApplicationJson;
var GetTargetsTargetIdAssets404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssets404ApplicationJson, _super);
    function GetTargetsTargetIdAssets404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssets404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdAssets404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssets404ApplicationJson = GetTargetsTargetIdAssets404ApplicationJson;
var GetTargetsTargetIdAssetsRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssetsRequest, _super);
    function GetTargetsTargetIdAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAssetsPathParams)
    ], GetTargetsTargetIdAssetsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAssetsQueryParams)
    ], GetTargetsTargetIdAssetsRequest.prototype, "queryParams", void 0);
    return GetTargetsTargetIdAssetsRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssetsRequest = GetTargetsTargetIdAssetsRequest;
var GetTargetsTargetIdAssetsResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssetsResponse, _super);
    function GetTargetsTargetIdAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAssetsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAssets200ApplicationJson)
    ], GetTargetsTargetIdAssetsResponse.prototype, "getTargetsTargetIdAssets200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAssets401ApplicationJson)
    ], GetTargetsTargetIdAssetsResponse.prototype, "getTargetsTargetIdAssets401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAssets404ApplicationJson)
    ], GetTargetsTargetIdAssetsResponse.prototype, "getTargetsTargetIdAssets404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdAssetsResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssetsResponse = GetTargetsTargetIdAssetsResponse;

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
exports.GetTargetsTargetIdKeysResponse = exports.GetTargetsTargetIdKeysRequest = exports.GetTargetsTargetIdKeys404ApplicationJson = exports.GetTargetsTargetIdKeys401ApplicationJson = exports.GetTargetsTargetIdKeys200ApplicationJson = exports.GetTargetsTargetIdKeysQueryParams = exports.GetTargetsTargetIdKeysPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTargetsTargetIdKeysPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdKeysPathParams, _super);
    function GetTargetsTargetIdKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdKeysPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdKeysPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdKeysPathParams = GetTargetsTargetIdKeysPathParams;
var GetTargetsTargetIdKeysQueryParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdKeysQueryParams, _super);
    function GetTargetsTargetIdKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdKeysQueryParams.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdKeysQueryParams.prototype, "ordering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdKeysQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdKeysQueryParams.prototype, "search", void 0);
    return GetTargetsTargetIdKeysQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdKeysQueryParams = GetTargetsTargetIdKeysQueryParams;
var GetTargetsTargetIdKeys200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdKeys200ApplicationJson, _super);
    function GetTargetsTargetIdKeys200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdKeys200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdKeys200ApplicationJson.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdKeys200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_total" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdKeys200ApplicationJson.prototype, "pageTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Key }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdKeys200ApplicationJson.prototype, "results", void 0);
    return GetTargetsTargetIdKeys200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdKeys200ApplicationJson = GetTargetsTargetIdKeys200ApplicationJson;
var GetTargetsTargetIdKeys401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdKeys401ApplicationJson, _super);
    function GetTargetsTargetIdKeys401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdKeys401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdKeys401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdKeys401ApplicationJson = GetTargetsTargetIdKeys401ApplicationJson;
var GetTargetsTargetIdKeys404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdKeys404ApplicationJson, _super);
    function GetTargetsTargetIdKeys404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdKeys404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdKeys404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdKeys404ApplicationJson = GetTargetsTargetIdKeys404ApplicationJson;
var GetTargetsTargetIdKeysRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdKeysRequest, _super);
    function GetTargetsTargetIdKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdKeysPathParams)
    ], GetTargetsTargetIdKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdKeysQueryParams)
    ], GetTargetsTargetIdKeysRequest.prototype, "queryParams", void 0);
    return GetTargetsTargetIdKeysRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdKeysRequest = GetTargetsTargetIdKeysRequest;
var GetTargetsTargetIdKeysResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdKeysResponse, _super);
    function GetTargetsTargetIdKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdKeysResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdKeys200ApplicationJson)
    ], GetTargetsTargetIdKeysResponse.prototype, "getTargetsTargetIdKeys200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdKeys401ApplicationJson)
    ], GetTargetsTargetIdKeysResponse.prototype, "getTargetsTargetIdKeys401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdKeys404ApplicationJson)
    ], GetTargetsTargetIdKeysResponse.prototype, "getTargetsTargetIdKeys404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdKeysResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdKeysResponse = GetTargetsTargetIdKeysResponse;

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
exports.GetTargetsTargetIdScheduledscansResponse = exports.GetTargetsTargetIdScheduledscansRequest = exports.GetTargetsTargetIdScheduledscans404ApplicationJson = exports.GetTargetsTargetIdScheduledscans401ApplicationJson = exports.GetTargetsTargetIdScheduledscans200ApplicationJson = exports.GetTargetsTargetIdScheduledscansQueryParams = exports.GetTargetsTargetIdScheduledscansPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTargetsTargetIdScheduledscansPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscansPathParams, _super);
    function GetTargetsTargetIdScheduledscansPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscansPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdScheduledscansPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscansPathParams = GetTargetsTargetIdScheduledscansPathParams;
var GetTargetsTargetIdScheduledscansQueryParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscansQueryParams, _super);
    function GetTargetsTargetIdScheduledscansQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScheduledscansQueryParams.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscansQueryParams.prototype, "ordering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScheduledscansQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscansQueryParams.prototype, "search", void 0);
    return GetTargetsTargetIdScheduledscansQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscansQueryParams = GetTargetsTargetIdScheduledscansQueryParams;
var GetTargetsTargetIdScheduledscans200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscans200ApplicationJson, _super);
    function GetTargetsTargetIdScheduledscans200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScheduledscans200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScheduledscans200ApplicationJson.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScheduledscans200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_total" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScheduledscans200ApplicationJson.prototype, "pageTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Scheduled }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdScheduledscans200ApplicationJson.prototype, "results", void 0);
    return GetTargetsTargetIdScheduledscans200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscans200ApplicationJson = GetTargetsTargetIdScheduledscans200ApplicationJson;
var GetTargetsTargetIdScheduledscans401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscans401ApplicationJson, _super);
    function GetTargetsTargetIdScheduledscans401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscans401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScheduledscans401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscans401ApplicationJson = GetTargetsTargetIdScheduledscans401ApplicationJson;
var GetTargetsTargetIdScheduledscans404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscans404ApplicationJson, _super);
    function GetTargetsTargetIdScheduledscans404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscans404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScheduledscans404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscans404ApplicationJson = GetTargetsTargetIdScheduledscans404ApplicationJson;
var GetTargetsTargetIdScheduledscansRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscansRequest, _super);
    function GetTargetsTargetIdScheduledscansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScheduledscansPathParams)
    ], GetTargetsTargetIdScheduledscansRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScheduledscansQueryParams)
    ], GetTargetsTargetIdScheduledscansRequest.prototype, "queryParams", void 0);
    return GetTargetsTargetIdScheduledscansRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscansRequest = GetTargetsTargetIdScheduledscansRequest;
var GetTargetsTargetIdScheduledscansResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscansResponse, _super);
    function GetTargetsTargetIdScheduledscansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscansResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScheduledscansResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScheduledscans200ApplicationJson)
    ], GetTargetsTargetIdScheduledscansResponse.prototype, "getTargetsTargetIdScheduledscans200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScheduledscans401ApplicationJson)
    ], GetTargetsTargetIdScheduledscansResponse.prototype, "getTargetsTargetIdScheduledscans401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScheduledscans404ApplicationJson)
    ], GetTargetsTargetIdScheduledscansResponse.prototype, "getTargetsTargetIdScheduledscans404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdScheduledscansResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscansResponse = GetTargetsTargetIdScheduledscansResponse;

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
exports.GetTargetsTargetIdScansResponse = exports.GetTargetsTargetIdScansRequest = exports.GetTargetsTargetIdScans404ApplicationJson = exports.GetTargetsTargetIdScans401ApplicationJson = exports.GetTargetsTargetIdScans200ApplicationJson = exports.GetTargetsTargetIdScansQueryParams = exports.GetTargetsTargetIdScansPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTargetsTargetIdScansPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansPathParams, _super);
    function GetTargetsTargetIdScansPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdScansPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansPathParams = GetTargetsTargetIdScansPathParams;
var GetTargetsTargetIdScansQueryParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansQueryParams, _super);
    function GetTargetsTargetIdScansQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansQueryParams.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansQueryParams.prototype, "ordering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansQueryParams.prototype, "search", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=started" }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdScansQueryParams.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansQueryParams.prototype, "status", void 0);
    return GetTargetsTargetIdScansQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansQueryParams = GetTargetsTargetIdScansQueryParams;
var GetTargetsTargetIdScans200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScans200ApplicationJson, _super);
    function GetTargetsTargetIdScans200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScans200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScans200ApplicationJson.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScans200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_total" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScans200ApplicationJson.prototype, "pageTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Scan }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdScans200ApplicationJson.prototype, "results", void 0);
    return GetTargetsTargetIdScans200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScans200ApplicationJson = GetTargetsTargetIdScans200ApplicationJson;
var GetTargetsTargetIdScans401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScans401ApplicationJson, _super);
    function GetTargetsTargetIdScans401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScans401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScans401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScans401ApplicationJson = GetTargetsTargetIdScans401ApplicationJson;
var GetTargetsTargetIdScans404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScans404ApplicationJson, _super);
    function GetTargetsTargetIdScans404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScans404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScans404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScans404ApplicationJson = GetTargetsTargetIdScans404ApplicationJson;
var GetTargetsTargetIdScansRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansRequest, _super);
    function GetTargetsTargetIdScansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansPathParams)
    ], GetTargetsTargetIdScansRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansQueryParams)
    ], GetTargetsTargetIdScansRequest.prototype, "queryParams", void 0);
    return GetTargetsTargetIdScansRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansRequest = GetTargetsTargetIdScansRequest;
var GetTargetsTargetIdScansResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansResponse, _super);
    function GetTargetsTargetIdScansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScans200ApplicationJson)
    ], GetTargetsTargetIdScansResponse.prototype, "getTargetsTargetIdScans200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScans401ApplicationJson)
    ], GetTargetsTargetIdScansResponse.prototype, "getTargetsTargetIdScans401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScans404ApplicationJson)
    ], GetTargetsTargetIdScansResponse.prototype, "getTargetsTargetIdScans404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdScansResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansResponse = GetTargetsTargetIdScansResponse;

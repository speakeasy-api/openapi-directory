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
exports.GetTargetsTargetIdFindingsResponse = exports.GetTargetsTargetIdFindingsRequest = exports.GetTargetsTargetIdFindings404ApplicationJson = exports.GetTargetsTargetIdFindings401ApplicationJson = exports.GetTargetsTargetIdFindings200ApplicationJson = exports.GetTargetsTargetIdFindingsQueryParams = exports.GetTargetsTargetIdFindingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTargetsTargetIdFindingsPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsPathParams, _super);
    function GetTargetsTargetIdFindingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdFindingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsPathParams = GetTargetsTargetIdFindingsPathParams;
var GetTargetsTargetIdFindingsQueryParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsQueryParams, _super);
    function GetTargetsTargetIdFindingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=assignee" }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdFindingsQueryParams.prototype, "assignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=label" }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdFindingsQueryParams.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdFindingsQueryParams.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsQueryParams.prototype, "ordering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdFindingsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=scan" }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdFindingsQueryParams.prototype, "scan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsQueryParams.prototype, "search", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=severity" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsQueryParams.prototype, "severity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsQueryParams.prototype, "state", void 0);
    return GetTargetsTargetIdFindingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsQueryParams = GetTargetsTargetIdFindingsQueryParams;
var GetTargetsTargetIdFindings200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindings200ApplicationJson, _super);
    function GetTargetsTargetIdFindings200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdFindings200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdFindings200ApplicationJson.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdFindings200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_total" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdFindings200ApplicationJson.prototype, "pageTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Finding }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdFindings200ApplicationJson.prototype, "results", void 0);
    return GetTargetsTargetIdFindings200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindings200ApplicationJson = GetTargetsTargetIdFindings200ApplicationJson;
var GetTargetsTargetIdFindings401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindings401ApplicationJson, _super);
    function GetTargetsTargetIdFindings401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindings401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdFindings401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindings401ApplicationJson = GetTargetsTargetIdFindings401ApplicationJson;
var GetTargetsTargetIdFindings404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindings404ApplicationJson, _super);
    function GetTargetsTargetIdFindings404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindings404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdFindings404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindings404ApplicationJson = GetTargetsTargetIdFindings404ApplicationJson;
var GetTargetsTargetIdFindingsRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsRequest, _super);
    function GetTargetsTargetIdFindingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdFindingsPathParams)
    ], GetTargetsTargetIdFindingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdFindingsQueryParams)
    ], GetTargetsTargetIdFindingsRequest.prototype, "queryParams", void 0);
    return GetTargetsTargetIdFindingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsRequest = GetTargetsTargetIdFindingsRequest;
var GetTargetsTargetIdFindingsResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsResponse, _super);
    function GetTargetsTargetIdFindingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdFindingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdFindings200ApplicationJson)
    ], GetTargetsTargetIdFindingsResponse.prototype, "getTargetsTargetIdFindings200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdFindings401ApplicationJson)
    ], GetTargetsTargetIdFindingsResponse.prototype, "getTargetsTargetIdFindings401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdFindings404ApplicationJson)
    ], GetTargetsTargetIdFindingsResponse.prototype, "getTargetsTargetIdFindings404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdFindingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsResponse = GetTargetsTargetIdFindingsResponse;

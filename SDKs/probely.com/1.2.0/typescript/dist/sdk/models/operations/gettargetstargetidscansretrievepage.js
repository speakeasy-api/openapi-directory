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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTargetsTargetIdScansRetrievePageResponse = exports.GetTargetsTargetIdScansRetrievePageRequest = exports.GetTargetsTargetIdScansRetrievePage404ApplicationJson = exports.GetTargetsTargetIdScansRetrievePage401ApplicationJson = exports.GetTargetsTargetIdScansRetrievePage400ApplicationJson = exports.GetTargetsTargetIdScansRetrievePage200ApplicationJson = exports.GetTargetsTargetIdScansRetrievePageQueryParams = exports.GetTargetsTargetIdScansRetrievePagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdScansRetrievePagePathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansRetrievePagePathParams, _super);
    function GetTargetsTargetIdScansRetrievePagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansRetrievePagePathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdScansRetrievePagePathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansRetrievePagePathParams = GetTargetsTargetIdScansRetrievePagePathParams;
var GetTargetsTargetIdScansRetrievePageQueryParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansRetrievePageQueryParams, _super);
    function GetTargetsTargetIdScansRetrievePageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", Date)
    ], GetTargetsTargetIdScansRetrievePageQueryParams.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansRetrievePageQueryParams.prototype, "length", void 0);
    return GetTargetsTargetIdScansRetrievePageQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansRetrievePageQueryParams = GetTargetsTargetIdScansRetrievePageQueryParams;
var GetTargetsTargetIdScansRetrievePage200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansRetrievePage200ApplicationJson, _super);
    function GetTargetsTargetIdScansRetrievePage200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansRetrievePage200ApplicationJson.prototype, "page", void 0);
    return GetTargetsTargetIdScansRetrievePage200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansRetrievePage200ApplicationJson = GetTargetsTargetIdScansRetrievePage200ApplicationJson;
var GetTargetsTargetIdScansRetrievePage400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansRetrievePage400ApplicationJson, _super);
    function GetTargetsTargetIdScansRetrievePage400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansRetrievePage400ApplicationJson.prototype, "error", void 0);
    return GetTargetsTargetIdScansRetrievePage400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansRetrievePage400ApplicationJson = GetTargetsTargetIdScansRetrievePage400ApplicationJson;
var GetTargetsTargetIdScansRetrievePage401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansRetrievePage401ApplicationJson, _super);
    function GetTargetsTargetIdScansRetrievePage401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansRetrievePage401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansRetrievePage401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansRetrievePage401ApplicationJson = GetTargetsTargetIdScansRetrievePage401ApplicationJson;
var GetTargetsTargetIdScansRetrievePage404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansRetrievePage404ApplicationJson, _super);
    function GetTargetsTargetIdScansRetrievePage404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansRetrievePage404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansRetrievePage404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansRetrievePage404ApplicationJson = GetTargetsTargetIdScansRetrievePage404ApplicationJson;
var GetTargetsTargetIdScansRetrievePageRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansRetrievePageRequest, _super);
    function GetTargetsTargetIdScansRetrievePageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansRetrievePagePathParams)
    ], GetTargetsTargetIdScansRetrievePageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansRetrievePageQueryParams)
    ], GetTargetsTargetIdScansRetrievePageRequest.prototype, "queryParams", void 0);
    return GetTargetsTargetIdScansRetrievePageRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansRetrievePageRequest = GetTargetsTargetIdScansRetrievePageRequest;
var GetTargetsTargetIdScansRetrievePageResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansRetrievePageResponse, _super);
    function GetTargetsTargetIdScansRetrievePageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansRetrievePageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansRetrievePageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansRetrievePage200ApplicationJson)
    ], GetTargetsTargetIdScansRetrievePageResponse.prototype, "getTargetsTargetIdScansRetrievePage200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansRetrievePage400ApplicationJson)
    ], GetTargetsTargetIdScansRetrievePageResponse.prototype, "getTargetsTargetIdScansRetrievePage400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansRetrievePage401ApplicationJson)
    ], GetTargetsTargetIdScansRetrievePageResponse.prototype, "getTargetsTargetIdScansRetrievePage401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansRetrievePage404ApplicationJson)
    ], GetTargetsTargetIdScansRetrievePageResponse.prototype, "getTargetsTargetIdScansRetrievePage404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdScansRetrievePageResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansRetrievePageResponse = GetTargetsTargetIdScansRetrievePageResponse;

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
exports.GetCapabilitiesResponse = exports.GetCapabilitiesRequest = exports.GetCapabilitiesQueryParams = exports.GetCapabilitiesVersionEnum = exports.GetCapabilitiesServiceEnum = exports.GetCapabilitiesRequestEnum = exports.GetCapabilitiesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetCapabilitiesPathParams = /** @class */ (function (_super) {
    __extends(GetCapabilitiesPathParams, _super);
    function GetCapabilitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetCapabilitiesPathParams.prototype, "versionNumber", void 0);
    return GetCapabilitiesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCapabilitiesPathParams = GetCapabilitiesPathParams;
var GetCapabilitiesRequestEnum;
(function (GetCapabilitiesRequestEnum) {
    GetCapabilitiesRequestEnum["GetCapabilities"] = "GetCapabilities";
})(GetCapabilitiesRequestEnum = exports.GetCapabilitiesRequestEnum || (exports.GetCapabilitiesRequestEnum = {}));
var GetCapabilitiesServiceEnum;
(function (GetCapabilitiesServiceEnum) {
    GetCapabilitiesServiceEnum["Wms"] = "WMS";
})(GetCapabilitiesServiceEnum = exports.GetCapabilitiesServiceEnum || (exports.GetCapabilitiesServiceEnum = {}));
var GetCapabilitiesVersionEnum;
(function (GetCapabilitiesVersionEnum) {
    GetCapabilitiesVersionEnum["One11"] = "1.1.1";
})(GetCapabilitiesVersionEnum = exports.GetCapabilitiesVersionEnum || (exports.GetCapabilitiesVersionEnum = {}));
var GetCapabilitiesQueryParams = /** @class */ (function (_super) {
    __extends(GetCapabilitiesQueryParams, _super);
    function GetCapabilitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=request" }),
        __metadata("design:type", String)
    ], GetCapabilitiesQueryParams.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=service" }),
        __metadata("design:type", String)
    ], GetCapabilitiesQueryParams.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], GetCapabilitiesQueryParams.prototype, "version", void 0);
    return GetCapabilitiesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCapabilitiesQueryParams = GetCapabilitiesQueryParams;
var GetCapabilitiesRequest = /** @class */ (function (_super) {
    __extends(GetCapabilitiesRequest, _super);
    function GetCapabilitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCapabilitiesPathParams)
    ], GetCapabilitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCapabilitiesQueryParams)
    ], GetCapabilitiesRequest.prototype, "queryParams", void 0);
    return GetCapabilitiesRequest;
}(utils_1.SpeakeasyBase));
exports.GetCapabilitiesRequest = GetCapabilitiesRequest;
var GetCapabilitiesResponse = /** @class */ (function (_super) {
    __extends(GetCapabilitiesResponse, _super);
    function GetCapabilitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCapabilitiesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCapabilitiesResponse.prototype, "statusCode", void 0);
    return GetCapabilitiesResponse;
}(utils_1.SpeakeasyBase));
exports.GetCapabilitiesResponse = GetCapabilitiesResponse;

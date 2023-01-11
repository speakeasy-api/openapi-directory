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
exports.GetDiscoveryV2VenuesIdResponse = exports.GetDiscoveryV2VenuesIdRequest = exports.GetDiscoveryV2VenuesIdQueryParams = exports.GetDiscoveryV2VenuesIdIncludeLicensedContentEnum = exports.GetDiscoveryV2VenuesIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetDiscoveryV2VenuesIdPathParams = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2VenuesIdPathParams, _super);
    function GetDiscoveryV2VenuesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesIdPathParams.prototype, "id", void 0);
    return GetDiscoveryV2VenuesIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2VenuesIdPathParams = GetDiscoveryV2VenuesIdPathParams;
var GetDiscoveryV2VenuesIdIncludeLicensedContentEnum;
(function (GetDiscoveryV2VenuesIdIncludeLicensedContentEnum) {
    GetDiscoveryV2VenuesIdIncludeLicensedContentEnum["Yes"] = "yes";
    GetDiscoveryV2VenuesIdIncludeLicensedContentEnum["No"] = " no";
})(GetDiscoveryV2VenuesIdIncludeLicensedContentEnum = exports.GetDiscoveryV2VenuesIdIncludeLicensedContentEnum || (exports.GetDiscoveryV2VenuesIdIncludeLicensedContentEnum = {}));
var GetDiscoveryV2VenuesIdQueryParams = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2VenuesIdQueryParams, _super);
    function GetDiscoveryV2VenuesIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesIdQueryParams.prototype, "includeLicensedContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesIdQueryParams.prototype, "locale", void 0);
    return GetDiscoveryV2VenuesIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2VenuesIdQueryParams = GetDiscoveryV2VenuesIdQueryParams;
var GetDiscoveryV2VenuesIdRequest = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2VenuesIdRequest, _super);
    function GetDiscoveryV2VenuesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDiscoveryV2VenuesIdPathParams)
    ], GetDiscoveryV2VenuesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDiscoveryV2VenuesIdQueryParams)
    ], GetDiscoveryV2VenuesIdRequest.prototype, "queryParams", void 0);
    return GetDiscoveryV2VenuesIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2VenuesIdRequest = GetDiscoveryV2VenuesIdRequest;
var GetDiscoveryV2VenuesIdResponse = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2VenuesIdResponse, _super);
    function GetDiscoveryV2VenuesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDiscoveryV2VenuesIdResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDiscoveryV2VenuesIdResponse.prototype, "statusCode", void 0);
    return GetDiscoveryV2VenuesIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2VenuesIdResponse = GetDiscoveryV2VenuesIdResponse;

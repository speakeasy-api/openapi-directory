"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GetOrganizationSmVppAccountResponse = exports.GetOrganizationSmVppAccount200ApplicationJSON = exports.GetOrganizationSmVppAccountRequest = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var GetOrganizationSmVppAccountRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationSmVppAccountRequest, _super);
    function GetOrganizationSmVppAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=organizationId",
        }),
        __metadata("design:type", String)
    ], GetOrganizationSmVppAccountRequest.prototype, "organizationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=vppAccountId",
        }),
        __metadata("design:type", String)
    ], GetOrganizationSmVppAccountRequest.prototype, "vppAccountId", void 0);
    return GetOrganizationSmVppAccountRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationSmVppAccountRequest = GetOrganizationSmVppAccountRequest;
/**
 * Successful operation
 */
var GetOrganizationSmVppAccount200ApplicationJSON = /** @class */ (function (_super) {
    __extends(GetOrganizationSmVppAccount200ApplicationJSON, _super);
    function GetOrganizationSmVppAccount200ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], GetOrganizationSmVppAccount200ApplicationJSON.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "vppServiceToken" }),
        __metadata("design:type", String)
    ], GetOrganizationSmVppAccount200ApplicationJSON.prototype, "vppServiceToken", void 0);
    return GetOrganizationSmVppAccount200ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationSmVppAccount200ApplicationJSON = GetOrganizationSmVppAccount200ApplicationJSON;
var GetOrganizationSmVppAccountResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationSmVppAccountResponse, _super);
    function GetOrganizationSmVppAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrganizationSmVppAccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrganizationSmVppAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationSmVppAccountResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationSmVppAccount200ApplicationJSON)
    ], GetOrganizationSmVppAccountResponse.prototype, "getOrganizationSmVppAccount200ApplicationJSONObject", void 0);
    return GetOrganizationSmVppAccountResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationSmVppAccountResponse = GetOrganizationSmVppAccountResponse;

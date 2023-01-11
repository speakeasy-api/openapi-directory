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
exports.GetUsersIdNotificationsResponse = exports.GetUsersIdNotificationsRequest = exports.GetUsersIdNotificationsQueryParams = exports.GetUsersIdNotificationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetUsersIdNotificationsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdNotificationsPathParams, _super);
    function GetUsersIdNotificationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetUsersIdNotificationsPathParams.prototype, "id", void 0);
    return GetUsersIdNotificationsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdNotificationsPathParams = GetUsersIdNotificationsPathParams;
var GetUsersIdNotificationsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdNotificationsQueryParams, _super);
    function GetUsersIdNotificationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdNotificationsQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdNotificationsQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdNotificationsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdNotificationsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdNotificationsQueryParams.prototype, "site", void 0);
    return GetUsersIdNotificationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdNotificationsQueryParams = GetUsersIdNotificationsQueryParams;
var GetUsersIdNotificationsRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdNotificationsRequest, _super);
    function GetUsersIdNotificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersIdNotificationsPathParams)
    ], GetUsersIdNotificationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersIdNotificationsQueryParams)
    ], GetUsersIdNotificationsRequest.prototype, "queryParams", void 0);
    return GetUsersIdNotificationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdNotificationsRequest = GetUsersIdNotificationsRequest;
var GetUsersIdNotificationsResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdNotificationsResponse, _super);
    function GetUsersIdNotificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdNotificationsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersIdNotificationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersIdNotificationsResponse.prototype, "statusCode", void 0);
    return GetUsersIdNotificationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdNotificationsResponse = GetUsersIdNotificationsResponse;

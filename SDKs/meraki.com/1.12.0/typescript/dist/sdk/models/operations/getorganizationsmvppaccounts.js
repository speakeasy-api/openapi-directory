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
exports.GetOrganizationSmVppAccountsResponse = exports.GetOrganizationSmVppAccountsRequest = exports.GetOrganizationSmVppAccountsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetOrganizationSmVppAccountsPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationSmVppAccountsPathParams, _super);
    function GetOrganizationSmVppAccountsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationSmVppAccountsPathParams.prototype, "organizationId", void 0);
    return GetOrganizationSmVppAccountsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationSmVppAccountsPathParams = GetOrganizationSmVppAccountsPathParams;
var GetOrganizationSmVppAccountsRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationSmVppAccountsRequest, _super);
    function GetOrganizationSmVppAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationSmVppAccountsPathParams)
    ], GetOrganizationSmVppAccountsRequest.prototype, "pathParams", void 0);
    return GetOrganizationSmVppAccountsRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationSmVppAccountsRequest = GetOrganizationSmVppAccountsRequest;
var GetOrganizationSmVppAccountsResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationSmVppAccountsResponse, _super);
    function GetOrganizationSmVppAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrganizationSmVppAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrganizationSmVppAccountsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationSmVppAccountsResponse.prototype, "getOrganizationSmVppAccounts200ApplicationJSONObject", void 0);
    return GetOrganizationSmVppAccountsResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationSmVppAccountsResponse = GetOrganizationSmVppAccountsResponse;

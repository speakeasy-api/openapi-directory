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
exports.GetOrganizationActionBatchesResponse = exports.GetOrganizationActionBatchesRequest = exports.GetOrganizationActionBatchesQueryParams = exports.GetOrganizationActionBatchesStatusEnum = exports.GetOrganizationActionBatchesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetOrganizationActionBatchesPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationActionBatchesPathParams, _super);
    function GetOrganizationActionBatchesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationActionBatchesPathParams.prototype, "organizationId", void 0);
    return GetOrganizationActionBatchesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationActionBatchesPathParams = GetOrganizationActionBatchesPathParams;
var GetOrganizationActionBatchesStatusEnum;
(function (GetOrganizationActionBatchesStatusEnum) {
    GetOrganizationActionBatchesStatusEnum["Pending"] = "pending";
    GetOrganizationActionBatchesStatusEnum["Completed"] = "completed";
    GetOrganizationActionBatchesStatusEnum["Failed"] = "failed";
})(GetOrganizationActionBatchesStatusEnum = exports.GetOrganizationActionBatchesStatusEnum || (exports.GetOrganizationActionBatchesStatusEnum = {}));
var GetOrganizationActionBatchesQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationActionBatchesQueryParams, _super);
    function GetOrganizationActionBatchesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetOrganizationActionBatchesQueryParams.prototype, "status", void 0);
    return GetOrganizationActionBatchesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationActionBatchesQueryParams = GetOrganizationActionBatchesQueryParams;
var GetOrganizationActionBatchesRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationActionBatchesRequest, _super);
    function GetOrganizationActionBatchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationActionBatchesPathParams)
    ], GetOrganizationActionBatchesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationActionBatchesQueryParams)
    ], GetOrganizationActionBatchesRequest.prototype, "queryParams", void 0);
    return GetOrganizationActionBatchesRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationActionBatchesRequest = GetOrganizationActionBatchesRequest;
var GetOrganizationActionBatchesResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationActionBatchesResponse, _super);
    function GetOrganizationActionBatchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrganizationActionBatchesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrganizationActionBatchesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationActionBatchesResponse.prototype, "getOrganizationActionBatches200ApplicationJSONObject", void 0);
    return GetOrganizationActionBatchesResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationActionBatchesResponse = GetOrganizationActionBatchesResponse;

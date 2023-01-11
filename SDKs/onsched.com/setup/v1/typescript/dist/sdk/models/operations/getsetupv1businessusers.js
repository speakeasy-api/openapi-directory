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
exports.GetSetupV1BusinessusersResponse = exports.GetSetupV1BusinessusersRequest = exports.GetSetupV1BusinessusersQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetSetupV1BusinessusersQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1BusinessusersQueryParams, _super);
    function GetSetupV1BusinessusersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetSetupV1BusinessusersQueryParams.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1BusinessusersQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetSetupV1BusinessusersQueryParams.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1BusinessusersQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], GetSetupV1BusinessusersQueryParams.prototype, "role", void 0);
    return GetSetupV1BusinessusersQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSetupV1BusinessusersQueryParams = GetSetupV1BusinessusersQueryParams;
var GetSetupV1BusinessusersRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1BusinessusersRequest, _super);
    function GetSetupV1BusinessusersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSetupV1BusinessusersQueryParams)
    ], GetSetupV1BusinessusersRequest.prototype, "queryParams", void 0);
    return GetSetupV1BusinessusersRequest;
}(utils_1.SpeakeasyBase));
exports.GetSetupV1BusinessusersRequest = GetSetupV1BusinessusersRequest;
var GetSetupV1BusinessusersResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1BusinessusersResponse, _super);
    function GetSetupV1BusinessusersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSetupV1BusinessusersResponse.prototype, "businessUserListViewModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSetupV1BusinessusersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSetupV1BusinessusersResponse.prototype, "statusCode", void 0);
    return GetSetupV1BusinessusersResponse;
}(utils_1.SpeakeasyBase));
exports.GetSetupV1BusinessusersResponse = GetSetupV1BusinessusersResponse;

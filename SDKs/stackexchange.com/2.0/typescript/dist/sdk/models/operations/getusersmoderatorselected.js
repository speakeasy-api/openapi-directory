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
exports.GetUsersModeratorsElectedResponse = exports.GetUsersModeratorsElectedRequest = exports.GetUsersModeratorsElectedQueryParams = exports.GetUsersModeratorsElectedSortEnum = exports.GetUsersModeratorsElectedOrderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetUsersModeratorsElectedOrderEnum;
(function (GetUsersModeratorsElectedOrderEnum) {
    GetUsersModeratorsElectedOrderEnum["Desc"] = "desc";
    GetUsersModeratorsElectedOrderEnum["Asc"] = "asc";
})(GetUsersModeratorsElectedOrderEnum = exports.GetUsersModeratorsElectedOrderEnum || (exports.GetUsersModeratorsElectedOrderEnum = {}));
var GetUsersModeratorsElectedSortEnum;
(function (GetUsersModeratorsElectedSortEnum) {
    GetUsersModeratorsElectedSortEnum["Reputation"] = "reputation";
    GetUsersModeratorsElectedSortEnum["Creation"] = "creation";
    GetUsersModeratorsElectedSortEnum["Name"] = "name";
    GetUsersModeratorsElectedSortEnum["Modified"] = "modified";
})(GetUsersModeratorsElectedSortEnum = exports.GetUsersModeratorsElectedSortEnum || (exports.GetUsersModeratorsElectedSortEnum = {}));
var GetUsersModeratorsElectedQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersModeratorsElectedQueryParams, _super);
    function GetUsersModeratorsElectedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsElectedQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsElectedQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersModeratorsElectedQueryParams.prototype, "fromdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsElectedQueryParams.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsElectedQueryParams.prototype, "min", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsElectedQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersModeratorsElectedQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersModeratorsElectedQueryParams.prototype, "pagesize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsElectedQueryParams.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsElectedQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersModeratorsElectedQueryParams.prototype, "todate", void 0);
    return GetUsersModeratorsElectedQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersModeratorsElectedQueryParams = GetUsersModeratorsElectedQueryParams;
var GetUsersModeratorsElectedRequest = /** @class */ (function (_super) {
    __extends(GetUsersModeratorsElectedRequest, _super);
    function GetUsersModeratorsElectedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersModeratorsElectedQueryParams)
    ], GetUsersModeratorsElectedRequest.prototype, "queryParams", void 0);
    return GetUsersModeratorsElectedRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsersModeratorsElectedRequest = GetUsersModeratorsElectedRequest;
var GetUsersModeratorsElectedResponse = /** @class */ (function (_super) {
    __extends(GetUsersModeratorsElectedResponse, _super);
    function GetUsersModeratorsElectedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUsersModeratorsElectedResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersModeratorsElectedResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersModeratorsElectedResponse.prototype, "statusCode", void 0);
    return GetUsersModeratorsElectedResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersModeratorsElectedResponse = GetUsersModeratorsElectedResponse;

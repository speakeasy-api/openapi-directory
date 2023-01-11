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
exports.GetActionPackageActivityListHtmlResponse = exports.GetActionPackageActivityListHtmlRequest = exports.GetActionPackageActivityListHtmlQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetActionPackageActivityListHtmlQueryParams = /** @class */ (function (_super) {
    __extends(GetActionPackageActivityListHtmlQueryParams, _super);
    function GetActionPackageActivityListHtmlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetActionPackageActivityListHtmlQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetActionPackageActivityListHtmlQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetActionPackageActivityListHtmlQueryParams.prototype, "offset", void 0);
    return GetActionPackageActivityListHtmlQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetActionPackageActivityListHtmlQueryParams = GetActionPackageActivityListHtmlQueryParams;
var GetActionPackageActivityListHtmlRequest = /** @class */ (function (_super) {
    __extends(GetActionPackageActivityListHtmlRequest, _super);
    function GetActionPackageActivityListHtmlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetActionPackageActivityListHtmlQueryParams)
    ], GetActionPackageActivityListHtmlRequest.prototype, "queryParams", void 0);
    return GetActionPackageActivityListHtmlRequest;
}(utils_1.SpeakeasyBase));
exports.GetActionPackageActivityListHtmlRequest = GetActionPackageActivityListHtmlRequest;
var GetActionPackageActivityListHtmlResponse = /** @class */ (function (_super) {
    __extends(GetActionPackageActivityListHtmlResponse, _super);
    function GetActionPackageActivityListHtmlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetActionPackageActivityListHtmlResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetActionPackageActivityListHtmlResponse.prototype, "statusCode", void 0);
    return GetActionPackageActivityListHtmlResponse;
}(utils_1.SpeakeasyBase));
exports.GetActionPackageActivityListHtmlResponse = GetActionPackageActivityListHtmlResponse;

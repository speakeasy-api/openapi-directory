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
exports.GetEntitySetPhenotypeSlimmerResponse = exports.GetEntitySetPhenotypeSlimmerRequest = exports.GetEntitySetPhenotypeSlimmerQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetEntitySetPhenotypeSlimmerQueryParams = /** @class */ (function (_super) {
    __extends(GetEntitySetPhenotypeSlimmerQueryParams, _super);
    function GetEntitySetPhenotypeSlimmerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" }),
        __metadata("design:type", Boolean)
    ], GetEntitySetPhenotypeSlimmerQueryParams.prototype, "excludeAutomaticAssertions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetEntitySetPhenotypeSlimmerQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slim" }),
        __metadata("design:type", Array)
    ], GetEntitySetPhenotypeSlimmerQueryParams.prototype, "slim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetEntitySetPhenotypeSlimmerQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subject" }),
        __metadata("design:type", Array)
    ], GetEntitySetPhenotypeSlimmerQueryParams.prototype, "subject", void 0);
    return GetEntitySetPhenotypeSlimmerQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetEntitySetPhenotypeSlimmerQueryParams = GetEntitySetPhenotypeSlimmerQueryParams;
var GetEntitySetPhenotypeSlimmerRequest = /** @class */ (function (_super) {
    __extends(GetEntitySetPhenotypeSlimmerRequest, _super);
    function GetEntitySetPhenotypeSlimmerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEntitySetPhenotypeSlimmerQueryParams)
    ], GetEntitySetPhenotypeSlimmerRequest.prototype, "queryParams", void 0);
    return GetEntitySetPhenotypeSlimmerRequest;
}(utils_1.SpeakeasyBase));
exports.GetEntitySetPhenotypeSlimmerRequest = GetEntitySetPhenotypeSlimmerRequest;
var GetEntitySetPhenotypeSlimmerResponse = /** @class */ (function (_super) {
    __extends(GetEntitySetPhenotypeSlimmerResponse, _super);
    function GetEntitySetPhenotypeSlimmerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEntitySetPhenotypeSlimmerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEntitySetPhenotypeSlimmerResponse.prototype, "statusCode", void 0);
    return GetEntitySetPhenotypeSlimmerResponse;
}(utils_1.SpeakeasyBase));
exports.GetEntitySetPhenotypeSlimmerResponse = GetEntitySetPhenotypeSlimmerResponse;

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
exports.GetEntitySetAnatomySlimmerResponse = exports.GetEntitySetAnatomySlimmerRequest = exports.GetEntitySetAnatomySlimmerQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetEntitySetAnatomySlimmerQueryParams = /** @class */ (function (_super) {
    __extends(GetEntitySetAnatomySlimmerQueryParams, _super);
    function GetEntitySetAnatomySlimmerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" }),
        __metadata("design:type", Boolean)
    ], GetEntitySetAnatomySlimmerQueryParams.prototype, "excludeAutomaticAssertions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetEntitySetAnatomySlimmerQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slim" }),
        __metadata("design:type", Array)
    ], GetEntitySetAnatomySlimmerQueryParams.prototype, "slim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetEntitySetAnatomySlimmerQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subject" }),
        __metadata("design:type", Array)
    ], GetEntitySetAnatomySlimmerQueryParams.prototype, "subject", void 0);
    return GetEntitySetAnatomySlimmerQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetEntitySetAnatomySlimmerQueryParams = GetEntitySetAnatomySlimmerQueryParams;
var GetEntitySetAnatomySlimmerRequest = /** @class */ (function (_super) {
    __extends(GetEntitySetAnatomySlimmerRequest, _super);
    function GetEntitySetAnatomySlimmerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEntitySetAnatomySlimmerQueryParams)
    ], GetEntitySetAnatomySlimmerRequest.prototype, "queryParams", void 0);
    return GetEntitySetAnatomySlimmerRequest;
}(utils_1.SpeakeasyBase));
exports.GetEntitySetAnatomySlimmerRequest = GetEntitySetAnatomySlimmerRequest;
var GetEntitySetAnatomySlimmerResponse = /** @class */ (function (_super) {
    __extends(GetEntitySetAnatomySlimmerResponse, _super);
    function GetEntitySetAnatomySlimmerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEntitySetAnatomySlimmerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEntitySetAnatomySlimmerResponse.prototype, "statusCode", void 0);
    return GetEntitySetAnatomySlimmerResponse;
}(utils_1.SpeakeasyBase));
exports.GetEntitySetAnatomySlimmerResponse = GetEntitySetAnatomySlimmerResponse;

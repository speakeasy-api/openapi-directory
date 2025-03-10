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
exports.GetcompanymatchResponse = exports.Getcompanymatch200ApplicationJSON = exports.GetcompanymatchRequest = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var GetcompanymatchRequest = /** @class */ (function (_super) {
    __extends(GetcompanymatchRequest, _super);
    function GetcompanymatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=company",
        }),
        __metadata("design:type", String)
    ], GetcompanymatchRequest.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=license",
        }),
        __metadata("design:type", String)
    ], GetcompanymatchRequest.prototype, "license", void 0);
    return GetcompanymatchRequest;
}(utils_1.SpeakeasyBase));
exports.GetcompanymatchRequest = GetcompanymatchRequest;
/**
 * Generated similarity key for company name data
 */
var Getcompanymatch200ApplicationJSON = /** @class */ (function (_super) {
    __extends(Getcompanymatch200ApplicationJSON, _super);
    function Getcompanymatch200ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Code" }),
        __metadata("design:type", String)
    ], Getcompanymatch200ApplicationJSON.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Credits" }),
        __metadata("design:type", String)
    ], Getcompanymatch200ApplicationJSON.prototype, "credits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Simkey" }),
        __metadata("design:type", String)
    ], Getcompanymatch200ApplicationJSON.prototype, "simkey", void 0);
    return Getcompanymatch200ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Getcompanymatch200ApplicationJSON = Getcompanymatch200ApplicationJSON;
var GetcompanymatchResponse = /** @class */ (function (_super) {
    __extends(GetcompanymatchResponse, _super);
    function GetcompanymatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetcompanymatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetcompanymatchResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetcompanymatchResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Getcompanymatch200ApplicationJSON)
    ], GetcompanymatchResponse.prototype, "getcompanymatch200ApplicationJSONObject", void 0);
    return GetcompanymatchResponse;
}(utils_1.SpeakeasyBase));
exports.GetcompanymatchResponse = GetcompanymatchResponse;

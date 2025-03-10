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
exports.GetzipcodeinfoResponse = exports.Getzipcodeinfo200ApplicationJSON = exports.GetzipcodeinfoRequest = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var GetzipcodeinfoRequest = /** @class */ (function (_super) {
    __extends(GetzipcodeinfoRequest, _super);
    function GetzipcodeinfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=license",
        }),
        __metadata("design:type", String)
    ], GetzipcodeinfoRequest.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GetzipcodeinfoRequest.prototype, "zip", void 0);
    return GetzipcodeinfoRequest;
}(utils_1.SpeakeasyBase));
exports.GetzipcodeinfoRequest = GetzipcodeinfoRequest;
/**
 * Zip code detailed code information
 */
var Getzipcodeinfo200ApplicationJSON = /** @class */ (function (_super) {
    __extends(Getzipcodeinfo200ApplicationJSON, _super);
    function Getzipcodeinfo200ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AreaSquareMiles" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "areaSquareMiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "City" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Code" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Credits" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "credits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ElderlyHouseholdPercent" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "elderlyHouseholdPercent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FarmerHouseholdPercent" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "farmerHouseholdPercent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "IncomePercent100k" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "incomePercent100k", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "IncomePercent200k" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "incomePercent200k", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "IncomePercent50k" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "incomePercent50k", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Latitude" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "latitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Longitude" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "longitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "MarriedHouseholdPercent" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "marriedHouseholdPercent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Population" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "population", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "State" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ZipCode" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJSON.prototype, "zipCode", void 0);
    return Getzipcodeinfo200ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Getzipcodeinfo200ApplicationJSON = Getzipcodeinfo200ApplicationJSON;
var GetzipcodeinfoResponse = /** @class */ (function (_super) {
    __extends(GetzipcodeinfoResponse, _super);
    function GetzipcodeinfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetzipcodeinfoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetzipcodeinfoResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetzipcodeinfoResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Getzipcodeinfo200ApplicationJSON)
    ], GetzipcodeinfoResponse.prototype, "getzipcodeinfo200ApplicationJSONObject", void 0);
    return GetzipcodeinfoResponse;
}(utils_1.SpeakeasyBase));
exports.GetzipcodeinfoResponse = GetzipcodeinfoResponse;

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
exports.OpenAqCitiesResult = exports.OpenAqCitiesResultMeta = void 0;
var utils_1 = require("../../../internal/utils");
var citiesrow_1 = require("./citiesrow");
var OpenAqCitiesResultMeta = /** @class */ (function (_super) {
    __extends(OpenAqCitiesResultMeta, _super);
    function OpenAqCitiesResultMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=found" }),
        __metadata("design:type", Number)
    ], OpenAqCitiesResultMeta.prototype, "found", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], OpenAqCitiesResultMeta.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], OpenAqCitiesResultMeta.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OpenAqCitiesResultMeta.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], OpenAqCitiesResultMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], OpenAqCitiesResultMeta.prototype, "website", void 0);
    return OpenAqCitiesResultMeta;
}(utils_1.SpeakeasyBase));
exports.OpenAqCitiesResultMeta = OpenAqCitiesResultMeta;
var OpenAqCitiesResult = /** @class */ (function (_super) {
    __extends(OpenAqCitiesResult, _super);
    function OpenAqCitiesResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", OpenAqCitiesResultMeta)
    ], OpenAqCitiesResult.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: citiesrow_1.CitiesRow }),
        __metadata("design:type", Array)
    ], OpenAqCitiesResult.prototype, "results", void 0);
    return OpenAqCitiesResult;
}(utils_1.SpeakeasyBase));
exports.OpenAqCitiesResult = OpenAqCitiesResult;

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
exports.CurrentSeasonResponse = exports.CurrentSeasonRequest = exports.CurrentSeasonPathParams = exports.CurrentSeasonFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var CurrentSeasonFormatEnum;
(function (CurrentSeasonFormatEnum) {
    CurrentSeasonFormatEnum["Xml"] = "XML";
    CurrentSeasonFormatEnum["Json"] = "JSON";
})(CurrentSeasonFormatEnum = exports.CurrentSeasonFormatEnum || (exports.CurrentSeasonFormatEnum = {}));
var CurrentSeasonPathParams = /** @class */ (function (_super) {
    __extends(CurrentSeasonPathParams, _super);
    function CurrentSeasonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], CurrentSeasonPathParams.prototype, "format", void 0);
    return CurrentSeasonPathParams;
}(utils_1.SpeakeasyBase));
exports.CurrentSeasonPathParams = CurrentSeasonPathParams;
var CurrentSeasonRequest = /** @class */ (function (_super) {
    __extends(CurrentSeasonRequest, _super);
    function CurrentSeasonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CurrentSeasonPathParams)
    ], CurrentSeasonRequest.prototype, "pathParams", void 0);
    return CurrentSeasonRequest;
}(utils_1.SpeakeasyBase));
exports.CurrentSeasonRequest = CurrentSeasonRequest;
var CurrentSeasonResponse = /** @class */ (function (_super) {
    __extends(CurrentSeasonResponse, _super);
    function CurrentSeasonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CurrentSeasonResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CurrentSeasonResponse.prototype, "currentSeason200ApplicationJSONInteger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CurrentSeasonResponse.prototype, "statusCode", void 0);
    return CurrentSeasonResponse;
}(utils_1.SpeakeasyBase));
exports.CurrentSeasonResponse = CurrentSeasonResponse;

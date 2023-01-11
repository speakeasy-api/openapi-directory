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
exports.GetReportsCustomInsertResponse = exports.GetReportsCustomInsertRequest = exports.GetReportsCustomInsertQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetReportsCustomInsertQueryParams = /** @class */ (function (_super) {
    __extends(GetReportsCustomInsertQueryParams, _super);
    function GetReportsCustomInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], GetReportsCustomInsertQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_hash" }),
        __metadata("design:type", String)
    ], GetReportsCustomInsertQueryParams.prototype, "uploadHash", void 0);
    return GetReportsCustomInsertQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetReportsCustomInsertQueryParams = GetReportsCustomInsertQueryParams;
var GetReportsCustomInsertRequest = /** @class */ (function (_super) {
    __extends(GetReportsCustomInsertRequest, _super);
    function GetReportsCustomInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReportsCustomInsertQueryParams)
    ], GetReportsCustomInsertRequest.prototype, "queryParams", void 0);
    return GetReportsCustomInsertRequest;
}(utils_1.SpeakeasyBase));
exports.GetReportsCustomInsertRequest = GetReportsCustomInsertRequest;
var GetReportsCustomInsertResponse = /** @class */ (function (_super) {
    __extends(GetReportsCustomInsertResponse, _super);
    function GetReportsCustomInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsCustomInsertResponse.prototype, "fourHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsCustomInsertResponse.prototype, "fourHundredAndOneError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsCustomInsertResponse.prototype, "fourHundredAndThreeError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsCustomInsertResponse.prototype, "fourHundredAndFourError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsCustomInsertResponse.prototype, "fiveHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetReportsCustomInsertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsCustomInsertResponse.prototype, "customInsert", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetReportsCustomInsertResponse.prototype, "statusCode", void 0);
    return GetReportsCustomInsertResponse;
}(utils_1.SpeakeasyBase));
exports.GetReportsCustomInsertResponse = GetReportsCustomInsertResponse;

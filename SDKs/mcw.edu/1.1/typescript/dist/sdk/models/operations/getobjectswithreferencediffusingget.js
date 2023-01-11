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
exports.GetObjectsWithReferenceDiffUsingGetResponse = exports.GetObjectsWithReferenceDiffUsingGetRequest = exports.GetObjectsWithReferenceDiffUsingGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetObjectsWithReferenceDiffUsingGetPathParams = /** @class */ (function (_super) {
    __extends(GetObjectsWithReferenceDiffUsingGetPathParams, _super);
    function GetObjectsWithReferenceDiffUsingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" }),
        __metadata("design:type", String)
    ], GetObjectsWithReferenceDiffUsingGetPathParams.prototype, "dateFromYYYYMMDD", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" }),
        __metadata("design:type", String)
    ], GetObjectsWithReferenceDiffUsingGetPathParams.prototype, "dateToYYYYMMDD", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" }),
        __metadata("design:type", Number)
    ], GetObjectsWithReferenceDiffUsingGetPathParams.prototype, "speciesTypeKey", void 0);
    return GetObjectsWithReferenceDiffUsingGetPathParams;
}(utils_1.SpeakeasyBase));
exports.GetObjectsWithReferenceDiffUsingGetPathParams = GetObjectsWithReferenceDiffUsingGetPathParams;
var GetObjectsWithReferenceDiffUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetObjectsWithReferenceDiffUsingGetRequest, _super);
    function GetObjectsWithReferenceDiffUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetObjectsWithReferenceDiffUsingGetPathParams)
    ], GetObjectsWithReferenceDiffUsingGetRequest.prototype, "pathParams", void 0);
    return GetObjectsWithReferenceDiffUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.GetObjectsWithReferenceDiffUsingGetRequest = GetObjectsWithReferenceDiffUsingGetRequest;
var GetObjectsWithReferenceDiffUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetObjectsWithReferenceDiffUsingGetResponse, _super);
    function GetObjectsWithReferenceDiffUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetObjectsWithReferenceDiffUsingGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetObjectsWithReferenceDiffUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetObjectsWithReferenceDiffUsingGetResponse.prototype, "statusCode", void 0);
    return GetObjectsWithReferenceDiffUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetObjectsWithReferenceDiffUsingGetResponse = GetObjectsWithReferenceDiffUsingGetResponse;

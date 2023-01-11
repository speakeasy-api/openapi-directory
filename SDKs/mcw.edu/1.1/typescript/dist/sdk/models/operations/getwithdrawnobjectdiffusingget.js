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
exports.GetWithdrawnObjectDiffUsingGetResponse = exports.GetWithdrawnObjectDiffUsingGetRequest = exports.GetWithdrawnObjectDiffUsingGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetWithdrawnObjectDiffUsingGetPathParams = /** @class */ (function (_super) {
    __extends(GetWithdrawnObjectDiffUsingGetPathParams, _super);
    function GetWithdrawnObjectDiffUsingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" }),
        __metadata("design:type", String)
    ], GetWithdrawnObjectDiffUsingGetPathParams.prototype, "dateFromYYYYMMDD", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" }),
        __metadata("design:type", String)
    ], GetWithdrawnObjectDiffUsingGetPathParams.prototype, "dateToYYYYMMDD", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" }),
        __metadata("design:type", Number)
    ], GetWithdrawnObjectDiffUsingGetPathParams.prototype, "speciesTypeKey", void 0);
    return GetWithdrawnObjectDiffUsingGetPathParams;
}(utils_1.SpeakeasyBase));
exports.GetWithdrawnObjectDiffUsingGetPathParams = GetWithdrawnObjectDiffUsingGetPathParams;
var GetWithdrawnObjectDiffUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetWithdrawnObjectDiffUsingGetRequest, _super);
    function GetWithdrawnObjectDiffUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetWithdrawnObjectDiffUsingGetPathParams)
    ], GetWithdrawnObjectDiffUsingGetRequest.prototype, "pathParams", void 0);
    return GetWithdrawnObjectDiffUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.GetWithdrawnObjectDiffUsingGetRequest = GetWithdrawnObjectDiffUsingGetRequest;
var GetWithdrawnObjectDiffUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetWithdrawnObjectDiffUsingGetResponse, _super);
    function GetWithdrawnObjectDiffUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetWithdrawnObjectDiffUsingGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetWithdrawnObjectDiffUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetWithdrawnObjectDiffUsingGetResponse.prototype, "statusCode", void 0);
    return GetWithdrawnObjectDiffUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetWithdrawnObjectDiffUsingGetResponse = GetWithdrawnObjectDiffUsingGetResponse;

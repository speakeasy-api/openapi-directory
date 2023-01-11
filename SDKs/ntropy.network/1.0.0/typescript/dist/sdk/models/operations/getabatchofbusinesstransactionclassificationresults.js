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
exports.GetABatchOfBusinessTransactionClassificationResultsResponse = exports.GetABatchOfBusinessTransactionClassificationResultsRequest = exports.GetABatchOfBusinessTransactionClassificationResults200ApplicationJson = exports.GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults = exports.GetABatchOfBusinessTransactionClassificationResultsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetABatchOfBusinessTransactionClassificationResultsPathParams = /** @class */ (function (_super) {
    __extends(GetABatchOfBusinessTransactionClassificationResultsPathParams, _super);
    function GetABatchOfBusinessTransactionClassificationResultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetABatchOfBusinessTransactionClassificationResultsPathParams.prototype, "id", void 0);
    return GetABatchOfBusinessTransactionClassificationResultsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetABatchOfBusinessTransactionClassificationResultsPathParams = GetABatchOfBusinessTransactionClassificationResultsPathParams;
var GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults, _super);
    function GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults.prototype, "logo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchant" }),
        __metadata("design:type", String)
    ], GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults.prototype, "merchant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults.prototype, "transactionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults.prototype, "website", void 0);
    return GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults = GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults;
var GetABatchOfBusinessTransactionClassificationResults200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetABatchOfBusinessTransactionClassificationResults200ApplicationJson, _super);
    function GetABatchOfBusinessTransactionClassificationResults200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetABatchOfBusinessTransactionClassificationResults200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetABatchOfBusinessTransactionClassificationResults200ApplicationJson.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetABatchOfBusinessTransactionClassificationResults200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetABatchOfBusinessTransactionClassificationResults200ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], GetABatchOfBusinessTransactionClassificationResults200ApplicationJson.prototype, "updatedAt", void 0);
    return GetABatchOfBusinessTransactionClassificationResults200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetABatchOfBusinessTransactionClassificationResults200ApplicationJson = GetABatchOfBusinessTransactionClassificationResults200ApplicationJson;
var GetABatchOfBusinessTransactionClassificationResultsRequest = /** @class */ (function (_super) {
    __extends(GetABatchOfBusinessTransactionClassificationResultsRequest, _super);
    function GetABatchOfBusinessTransactionClassificationResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetABatchOfBusinessTransactionClassificationResultsPathParams)
    ], GetABatchOfBusinessTransactionClassificationResultsRequest.prototype, "pathParams", void 0);
    return GetABatchOfBusinessTransactionClassificationResultsRequest;
}(utils_1.SpeakeasyBase));
exports.GetABatchOfBusinessTransactionClassificationResultsRequest = GetABatchOfBusinessTransactionClassificationResultsRequest;
var GetABatchOfBusinessTransactionClassificationResultsResponse = /** @class */ (function (_super) {
    __extends(GetABatchOfBusinessTransactionClassificationResultsResponse, _super);
    function GetABatchOfBusinessTransactionClassificationResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetABatchOfBusinessTransactionClassificationResultsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetABatchOfBusinessTransactionClassificationResultsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetABatchOfBusinessTransactionClassificationResults200ApplicationJson)
    ], GetABatchOfBusinessTransactionClassificationResultsResponse.prototype, "getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject", void 0);
    return GetABatchOfBusinessTransactionClassificationResultsResponse;
}(utils_1.SpeakeasyBase));
exports.GetABatchOfBusinessTransactionClassificationResultsResponse = GetABatchOfBusinessTransactionClassificationResultsResponse;

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
exports.UpdateNetworkSmDevicesTagsResponse = exports.UpdateNetworkSmDevicesTagsRequest = exports.UpdateNetworkSmDevicesTagsRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var UpdateNetworkSmDevicesTagsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmDevicesTagsRequestBody, _super);
    function UpdateNetworkSmDevicesTagsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ids" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesTagsRequestBody.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "scope" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesTagsRequestBody.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "serials" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesTagsRequestBody.prototype, "serials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "tags" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesTagsRequestBody.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updateAction" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesTagsRequestBody.prototype, "updateAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "wifiMacs" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesTagsRequestBody.prototype, "wifiMacs", void 0);
    return UpdateNetworkSmDevicesTagsRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSmDevicesTagsRequestBody = UpdateNetworkSmDevicesTagsRequestBody;
var UpdateNetworkSmDevicesTagsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmDevicesTagsRequest, _super);
    function UpdateNetworkSmDevicesTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSmDevicesTagsRequestBody)
    ], UpdateNetworkSmDevicesTagsRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=networkId",
        }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesTagsRequest.prototype, "networkId", void 0);
    return UpdateNetworkSmDevicesTagsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSmDevicesTagsRequest = UpdateNetworkSmDevicesTagsRequest;
var UpdateNetworkSmDevicesTagsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmDevicesTagsResponse, _super);
    function UpdateNetworkSmDevicesTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesTagsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkSmDevicesTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkSmDevicesTagsResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkSmDevicesTagsResponse.prototype, "updateNetworkSmDevicesTags200ApplicationJSONObject", void 0);
    return UpdateNetworkSmDevicesTagsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSmDevicesTagsResponse = UpdateNetworkSmDevicesTagsResponse;

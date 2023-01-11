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
exports.UpdateNetworkWebhooksHttpServerResponse = exports.UpdateNetworkWebhooksHttpServerRequest = exports.UpdateNetworkWebhooksHttpServerRequestBody = exports.UpdateNetworkWebhooksHttpServerPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkWebhooksHttpServerPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWebhooksHttpServerPathParams, _super);
    function UpdateNetworkWebhooksHttpServerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=httpServerId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWebhooksHttpServerPathParams.prototype, "httpServerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWebhooksHttpServerPathParams.prototype, "networkId", void 0);
    return UpdateNetworkWebhooksHttpServerPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWebhooksHttpServerPathParams = UpdateNetworkWebhooksHttpServerPathParams;
var UpdateNetworkWebhooksHttpServerRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWebhooksHttpServerRequestBody, _super);
    function UpdateNetworkWebhooksHttpServerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkWebhooksHttpServerRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sharedSecret" }),
        __metadata("design:type", String)
    ], UpdateNetworkWebhooksHttpServerRequestBody.prototype, "sharedSecret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], UpdateNetworkWebhooksHttpServerRequestBody.prototype, "url", void 0);
    return UpdateNetworkWebhooksHttpServerRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWebhooksHttpServerRequestBody = UpdateNetworkWebhooksHttpServerRequestBody;
var UpdateNetworkWebhooksHttpServerRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWebhooksHttpServerRequest, _super);
    function UpdateNetworkWebhooksHttpServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkWebhooksHttpServerPathParams)
    ], UpdateNetworkWebhooksHttpServerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWebhooksHttpServerRequestBody)
    ], UpdateNetworkWebhooksHttpServerRequest.prototype, "request", void 0);
    return UpdateNetworkWebhooksHttpServerRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWebhooksHttpServerRequest = UpdateNetworkWebhooksHttpServerRequest;
var UpdateNetworkWebhooksHttpServerResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWebhooksHttpServerResponse, _super);
    function UpdateNetworkWebhooksHttpServerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkWebhooksHttpServerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkWebhooksHttpServerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkWebhooksHttpServerResponse.prototype, "updateNetworkWebhooksHttpServer200ApplicationJSONObject", void 0);
    return UpdateNetworkWebhooksHttpServerResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWebhooksHttpServerResponse = UpdateNetworkWebhooksHttpServerResponse;

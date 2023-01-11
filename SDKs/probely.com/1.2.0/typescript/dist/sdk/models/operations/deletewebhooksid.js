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
exports.DeleteWebhooksIdResponse = exports.DeleteWebhooksIdRequest = exports.DeleteWebhooksId404ApplicationJson = exports.DeleteWebhooksId403ApplicationJson = exports.DeleteWebhooksId401ApplicationJson = exports.DeleteWebhooksIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteWebhooksIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteWebhooksIdPathParams, _super);
    function DeleteWebhooksIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteWebhooksIdPathParams.prototype, "id", void 0);
    return DeleteWebhooksIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteWebhooksIdPathParams = DeleteWebhooksIdPathParams;
var DeleteWebhooksId401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteWebhooksId401ApplicationJson, _super);
    function DeleteWebhooksId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteWebhooksId401ApplicationJson.prototype, "detail", void 0);
    return DeleteWebhooksId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteWebhooksId401ApplicationJson = DeleteWebhooksId401ApplicationJson;
var DeleteWebhooksId403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteWebhooksId403ApplicationJson, _super);
    function DeleteWebhooksId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteWebhooksId403ApplicationJson.prototype, "detail", void 0);
    return DeleteWebhooksId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteWebhooksId403ApplicationJson = DeleteWebhooksId403ApplicationJson;
var DeleteWebhooksId404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteWebhooksId404ApplicationJson, _super);
    function DeleteWebhooksId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteWebhooksId404ApplicationJson.prototype, "detail", void 0);
    return DeleteWebhooksId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteWebhooksId404ApplicationJson = DeleteWebhooksId404ApplicationJson;
var DeleteWebhooksIdRequest = /** @class */ (function (_super) {
    __extends(DeleteWebhooksIdRequest, _super);
    function DeleteWebhooksIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteWebhooksIdPathParams)
    ], DeleteWebhooksIdRequest.prototype, "pathParams", void 0);
    return DeleteWebhooksIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteWebhooksIdRequest = DeleteWebhooksIdRequest;
var DeleteWebhooksIdResponse = /** @class */ (function (_super) {
    __extends(DeleteWebhooksIdResponse, _super);
    function DeleteWebhooksIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteWebhooksIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteWebhooksIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteWebhooksId401ApplicationJson)
    ], DeleteWebhooksIdResponse.prototype, "deleteWebhooksId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteWebhooksId403ApplicationJson)
    ], DeleteWebhooksIdResponse.prototype, "deleteWebhooksId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteWebhooksId404ApplicationJson)
    ], DeleteWebhooksIdResponse.prototype, "deleteWebhooksId404ApplicationJSONObject", void 0);
    return DeleteWebhooksIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteWebhooksIdResponse = DeleteWebhooksIdResponse;

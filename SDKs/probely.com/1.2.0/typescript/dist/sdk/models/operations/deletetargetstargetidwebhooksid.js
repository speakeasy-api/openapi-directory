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
exports.DeleteTargetsTargetIdWebhooksIdResponse = exports.DeleteTargetsTargetIdWebhooksIdRequest = exports.DeleteTargetsTargetIdWebhooksId404ApplicationJson = exports.DeleteTargetsTargetIdWebhooksId403ApplicationJson = exports.DeleteTargetsTargetIdWebhooksId401ApplicationJson = exports.DeleteTargetsTargetIdWebhooksIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteTargetsTargetIdWebhooksIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdWebhooksIdPathParams, _super);
    function DeleteTargetsTargetIdWebhooksIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdWebhooksIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdWebhooksIdPathParams.prototype, "targetId", void 0);
    return DeleteTargetsTargetIdWebhooksIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdWebhooksIdPathParams = DeleteTargetsTargetIdWebhooksIdPathParams;
var DeleteTargetsTargetIdWebhooksId401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdWebhooksId401ApplicationJson, _super);
    function DeleteTargetsTargetIdWebhooksId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdWebhooksId401ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsTargetIdWebhooksId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdWebhooksId401ApplicationJson = DeleteTargetsTargetIdWebhooksId401ApplicationJson;
var DeleteTargetsTargetIdWebhooksId403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdWebhooksId403ApplicationJson, _super);
    function DeleteTargetsTargetIdWebhooksId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdWebhooksId403ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsTargetIdWebhooksId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdWebhooksId403ApplicationJson = DeleteTargetsTargetIdWebhooksId403ApplicationJson;
var DeleteTargetsTargetIdWebhooksId404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdWebhooksId404ApplicationJson, _super);
    function DeleteTargetsTargetIdWebhooksId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdWebhooksId404ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsTargetIdWebhooksId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdWebhooksId404ApplicationJson = DeleteTargetsTargetIdWebhooksId404ApplicationJson;
var DeleteTargetsTargetIdWebhooksIdRequest = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdWebhooksIdRequest, _super);
    function DeleteTargetsTargetIdWebhooksIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdWebhooksIdPathParams)
    ], DeleteTargetsTargetIdWebhooksIdRequest.prototype, "pathParams", void 0);
    return DeleteTargetsTargetIdWebhooksIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdWebhooksIdRequest = DeleteTargetsTargetIdWebhooksIdRequest;
var DeleteTargetsTargetIdWebhooksIdResponse = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdWebhooksIdResponse, _super);
    function DeleteTargetsTargetIdWebhooksIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdWebhooksIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteTargetsTargetIdWebhooksIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdWebhooksId401ApplicationJson)
    ], DeleteTargetsTargetIdWebhooksIdResponse.prototype, "deleteTargetsTargetIdWebhooksId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdWebhooksId403ApplicationJson)
    ], DeleteTargetsTargetIdWebhooksIdResponse.prototype, "deleteTargetsTargetIdWebhooksId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdWebhooksId404ApplicationJson)
    ], DeleteTargetsTargetIdWebhooksIdResponse.prototype, "deleteTargetsTargetIdWebhooksId404ApplicationJSONObject", void 0);
    return DeleteTargetsTargetIdWebhooksIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdWebhooksIdResponse = DeleteTargetsTargetIdWebhooksIdResponse;

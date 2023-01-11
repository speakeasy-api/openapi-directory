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
exports.DeleteTargetsTargetIdAssetsIdResponse = exports.DeleteTargetsTargetIdAssetsIdRequest = exports.DeleteTargetsTargetIdAssetsId404ApplicationJson = exports.DeleteTargetsTargetIdAssetsId403ApplicationJson = exports.DeleteTargetsTargetIdAssetsId401ApplicationJson = exports.DeleteTargetsTargetIdAssetsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteTargetsTargetIdAssetsIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdAssetsIdPathParams, _super);
    function DeleteTargetsTargetIdAssetsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdAssetsIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdAssetsIdPathParams.prototype, "targetId", void 0);
    return DeleteTargetsTargetIdAssetsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdAssetsIdPathParams = DeleteTargetsTargetIdAssetsIdPathParams;
var DeleteTargetsTargetIdAssetsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdAssetsId401ApplicationJson, _super);
    function DeleteTargetsTargetIdAssetsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdAssetsId401ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsTargetIdAssetsId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdAssetsId401ApplicationJson = DeleteTargetsTargetIdAssetsId401ApplicationJson;
var DeleteTargetsTargetIdAssetsId403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdAssetsId403ApplicationJson, _super);
    function DeleteTargetsTargetIdAssetsId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdAssetsId403ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsTargetIdAssetsId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdAssetsId403ApplicationJson = DeleteTargetsTargetIdAssetsId403ApplicationJson;
var DeleteTargetsTargetIdAssetsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdAssetsId404ApplicationJson, _super);
    function DeleteTargetsTargetIdAssetsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdAssetsId404ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsTargetIdAssetsId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdAssetsId404ApplicationJson = DeleteTargetsTargetIdAssetsId404ApplicationJson;
var DeleteTargetsTargetIdAssetsIdRequest = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdAssetsIdRequest, _super);
    function DeleteTargetsTargetIdAssetsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdAssetsIdPathParams)
    ], DeleteTargetsTargetIdAssetsIdRequest.prototype, "pathParams", void 0);
    return DeleteTargetsTargetIdAssetsIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdAssetsIdRequest = DeleteTargetsTargetIdAssetsIdRequest;
var DeleteTargetsTargetIdAssetsIdResponse = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdAssetsIdResponse, _super);
    function DeleteTargetsTargetIdAssetsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdAssetsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteTargetsTargetIdAssetsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdAssetsId401ApplicationJson)
    ], DeleteTargetsTargetIdAssetsIdResponse.prototype, "deleteTargetsTargetIdAssetsId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdAssetsId403ApplicationJson)
    ], DeleteTargetsTargetIdAssetsIdResponse.prototype, "deleteTargetsTargetIdAssetsId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdAssetsId404ApplicationJson)
    ], DeleteTargetsTargetIdAssetsIdResponse.prototype, "deleteTargetsTargetIdAssetsId404ApplicationJSONObject", void 0);
    return DeleteTargetsTargetIdAssetsIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdAssetsIdResponse = DeleteTargetsTargetIdAssetsIdResponse;

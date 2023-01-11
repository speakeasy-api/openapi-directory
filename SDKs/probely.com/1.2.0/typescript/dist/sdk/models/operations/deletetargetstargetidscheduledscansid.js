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
exports.DeleteTargetsTargetIdScheduledscansIdResponse = exports.DeleteTargetsTargetIdScheduledscansIdRequest = exports.DeleteTargetsTargetIdScheduledscansId403ApplicationJson = exports.DeleteTargetsTargetIdScheduledscansId401ApplicationJson = exports.DeleteTargetsTargetIdScheduledscansIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteTargetsTargetIdScheduledscansIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdScheduledscansIdPathParams, _super);
    function DeleteTargetsTargetIdScheduledscansIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdScheduledscansIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdScheduledscansIdPathParams.prototype, "targetId", void 0);
    return DeleteTargetsTargetIdScheduledscansIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdScheduledscansIdPathParams = DeleteTargetsTargetIdScheduledscansIdPathParams;
var DeleteTargetsTargetIdScheduledscansId401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdScheduledscansId401ApplicationJson, _super);
    function DeleteTargetsTargetIdScheduledscansId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdScheduledscansId401ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsTargetIdScheduledscansId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdScheduledscansId401ApplicationJson = DeleteTargetsTargetIdScheduledscansId401ApplicationJson;
var DeleteTargetsTargetIdScheduledscansId403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdScheduledscansId403ApplicationJson, _super);
    function DeleteTargetsTargetIdScheduledscansId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdScheduledscansId403ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsTargetIdScheduledscansId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdScheduledscansId403ApplicationJson = DeleteTargetsTargetIdScheduledscansId403ApplicationJson;
var DeleteTargetsTargetIdScheduledscansIdRequest = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdScheduledscansIdRequest, _super);
    function DeleteTargetsTargetIdScheduledscansIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdScheduledscansIdPathParams)
    ], DeleteTargetsTargetIdScheduledscansIdRequest.prototype, "pathParams", void 0);
    return DeleteTargetsTargetIdScheduledscansIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdScheduledscansIdRequest = DeleteTargetsTargetIdScheduledscansIdRequest;
var DeleteTargetsTargetIdScheduledscansIdResponse = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdScheduledscansIdResponse, _super);
    function DeleteTargetsTargetIdScheduledscansIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdScheduledscansIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteTargetsTargetIdScheduledscansIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdScheduledscansId401ApplicationJson)
    ], DeleteTargetsTargetIdScheduledscansIdResponse.prototype, "deleteTargetsTargetIdScheduledscansId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdScheduledscansId403ApplicationJson)
    ], DeleteTargetsTargetIdScheduledscansIdResponse.prototype, "deleteTargetsTargetIdScheduledscansId403ApplicationJSONObject", void 0);
    return DeleteTargetsTargetIdScheduledscansIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdScheduledscansIdResponse = DeleteTargetsTargetIdScheduledscansIdResponse;

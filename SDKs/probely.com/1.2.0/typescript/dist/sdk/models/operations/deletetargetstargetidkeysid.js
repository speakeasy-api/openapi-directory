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
exports.DeleteTargetsTargetIdKeysIdResponse = exports.DeleteTargetsTargetIdKeysIdRequest = exports.DeleteTargetsTargetIdKeysId404ApplicationJson = exports.DeleteTargetsTargetIdKeysId403ApplicationJson = exports.DeleteTargetsTargetIdKeysIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteTargetsTargetIdKeysIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdKeysIdPathParams, _super);
    function DeleteTargetsTargetIdKeysIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdKeysIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdKeysIdPathParams.prototype, "targetId", void 0);
    return DeleteTargetsTargetIdKeysIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdKeysIdPathParams = DeleteTargetsTargetIdKeysIdPathParams;
var DeleteTargetsTargetIdKeysId403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdKeysId403ApplicationJson, _super);
    function DeleteTargetsTargetIdKeysId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdKeysId403ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsTargetIdKeysId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdKeysId403ApplicationJson = DeleteTargetsTargetIdKeysId403ApplicationJson;
var DeleteTargetsTargetIdKeysId404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdKeysId404ApplicationJson, _super);
    function DeleteTargetsTargetIdKeysId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdKeysId404ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsTargetIdKeysId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdKeysId404ApplicationJson = DeleteTargetsTargetIdKeysId404ApplicationJson;
var DeleteTargetsTargetIdKeysIdRequest = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdKeysIdRequest, _super);
    function DeleteTargetsTargetIdKeysIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdKeysIdPathParams)
    ], DeleteTargetsTargetIdKeysIdRequest.prototype, "pathParams", void 0);
    return DeleteTargetsTargetIdKeysIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdKeysIdRequest = DeleteTargetsTargetIdKeysIdRequest;
var DeleteTargetsTargetIdKeysIdResponse = /** @class */ (function (_super) {
    __extends(DeleteTargetsTargetIdKeysIdResponse, _super);
    function DeleteTargetsTargetIdKeysIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteTargetsTargetIdKeysIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteTargetsTargetIdKeysIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdKeysId403ApplicationJson)
    ], DeleteTargetsTargetIdKeysIdResponse.prototype, "deleteTargetsTargetIdKeysId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsTargetIdKeysId404ApplicationJson)
    ], DeleteTargetsTargetIdKeysIdResponse.prototype, "deleteTargetsTargetIdKeysId404ApplicationJSONObject", void 0);
    return DeleteTargetsTargetIdKeysIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsTargetIdKeysIdResponse = DeleteTargetsTargetIdKeysIdResponse;

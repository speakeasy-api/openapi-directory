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
exports.DeleteTargetsIdResponse = exports.DeleteTargetsIdRequest = exports.DeleteTargetsId404ApplicationJson = exports.DeleteTargetsId403ApplicationJson = exports.DeleteTargetsId401ApplicationJson = exports.DeleteTargetsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteTargetsIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteTargetsIdPathParams, _super);
    function DeleteTargetsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteTargetsIdPathParams.prototype, "id", void 0);
    return DeleteTargetsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsIdPathParams = DeleteTargetsIdPathParams;
var DeleteTargetsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsId401ApplicationJson, _super);
    function DeleteTargetsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsId401ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsId401ApplicationJson = DeleteTargetsId401ApplicationJson;
var DeleteTargetsId403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsId403ApplicationJson, _super);
    function DeleteTargetsId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsId403ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsId403ApplicationJson = DeleteTargetsId403ApplicationJson;
var DeleteTargetsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTargetsId404ApplicationJson, _super);
    function DeleteTargetsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteTargetsId404ApplicationJson.prototype, "detail", void 0);
    return DeleteTargetsId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsId404ApplicationJson = DeleteTargetsId404ApplicationJson;
var DeleteTargetsIdRequest = /** @class */ (function (_super) {
    __extends(DeleteTargetsIdRequest, _super);
    function DeleteTargetsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsIdPathParams)
    ], DeleteTargetsIdRequest.prototype, "pathParams", void 0);
    return DeleteTargetsIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsIdRequest = DeleteTargetsIdRequest;
var DeleteTargetsIdResponse = /** @class */ (function (_super) {
    __extends(DeleteTargetsIdResponse, _super);
    function DeleteTargetsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteTargetsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteTargetsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsId401ApplicationJson)
    ], DeleteTargetsIdResponse.prototype, "deleteTargetsId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsId403ApplicationJson)
    ], DeleteTargetsIdResponse.prototype, "deleteTargetsId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTargetsId404ApplicationJson)
    ], DeleteTargetsIdResponse.prototype, "deleteTargetsId404ApplicationJSONObject", void 0);
    return DeleteTargetsIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteTargetsIdResponse = DeleteTargetsIdResponse;

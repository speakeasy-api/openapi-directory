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
exports.DeleteUsersIdResponse = exports.DeleteUsersIdRequest = exports.DeleteUsersId404ApplicationJson = exports.DeleteUsersId403ApplicationJson = exports.DeleteUsersId401ApplicationJson = exports.DeleteUsersIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteUsersIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteUsersIdPathParams, _super);
    function DeleteUsersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteUsersIdPathParams.prototype, "id", void 0);
    return DeleteUsersIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteUsersIdPathParams = DeleteUsersIdPathParams;
var DeleteUsersId401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteUsersId401ApplicationJson, _super);
    function DeleteUsersId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteUsersId401ApplicationJson.prototype, "detail", void 0);
    return DeleteUsersId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteUsersId401ApplicationJson = DeleteUsersId401ApplicationJson;
var DeleteUsersId403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteUsersId403ApplicationJson, _super);
    function DeleteUsersId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteUsersId403ApplicationJson.prototype, "detail", void 0);
    return DeleteUsersId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteUsersId403ApplicationJson = DeleteUsersId403ApplicationJson;
var DeleteUsersId404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteUsersId404ApplicationJson, _super);
    function DeleteUsersId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteUsersId404ApplicationJson.prototype, "detail", void 0);
    return DeleteUsersId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteUsersId404ApplicationJson = DeleteUsersId404ApplicationJson;
var DeleteUsersIdRequest = /** @class */ (function (_super) {
    __extends(DeleteUsersIdRequest, _super);
    function DeleteUsersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteUsersIdPathParams)
    ], DeleteUsersIdRequest.prototype, "pathParams", void 0);
    return DeleteUsersIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteUsersIdRequest = DeleteUsersIdRequest;
var DeleteUsersIdResponse = /** @class */ (function (_super) {
    __extends(DeleteUsersIdResponse, _super);
    function DeleteUsersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteUsersIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteUsersIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteUsersId401ApplicationJson)
    ], DeleteUsersIdResponse.prototype, "deleteUsersId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteUsersId403ApplicationJson)
    ], DeleteUsersIdResponse.prototype, "deleteUsersId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteUsersId404ApplicationJson)
    ], DeleteUsersIdResponse.prototype, "deleteUsersId404ApplicationJSONObject", void 0);
    return DeleteUsersIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteUsersIdResponse = DeleteUsersIdResponse;

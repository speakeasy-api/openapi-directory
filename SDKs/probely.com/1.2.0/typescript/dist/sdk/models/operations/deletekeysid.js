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
exports.DeleteKeysIdResponse = exports.DeleteKeysIdRequest = exports.DeleteKeysId403ApplicationJson = exports.DeleteKeysId401ApplicationJson = exports.DeleteKeysIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteKeysIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteKeysIdPathParams, _super);
    function DeleteKeysIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteKeysIdPathParams.prototype, "id", void 0);
    return DeleteKeysIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteKeysIdPathParams = DeleteKeysIdPathParams;
var DeleteKeysId401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteKeysId401ApplicationJson, _super);
    function DeleteKeysId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteKeysId401ApplicationJson.prototype, "detail", void 0);
    return DeleteKeysId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteKeysId401ApplicationJson = DeleteKeysId401ApplicationJson;
var DeleteKeysId403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteKeysId403ApplicationJson, _super);
    function DeleteKeysId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteKeysId403ApplicationJson.prototype, "detail", void 0);
    return DeleteKeysId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteKeysId403ApplicationJson = DeleteKeysId403ApplicationJson;
var DeleteKeysIdRequest = /** @class */ (function (_super) {
    __extends(DeleteKeysIdRequest, _super);
    function DeleteKeysIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteKeysIdPathParams)
    ], DeleteKeysIdRequest.prototype, "pathParams", void 0);
    return DeleteKeysIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteKeysIdRequest = DeleteKeysIdRequest;
var DeleteKeysIdResponse = /** @class */ (function (_super) {
    __extends(DeleteKeysIdResponse, _super);
    function DeleteKeysIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteKeysIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteKeysIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteKeysId401ApplicationJson)
    ], DeleteKeysIdResponse.prototype, "deleteKeysId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteKeysId403ApplicationJson)
    ], DeleteKeysIdResponse.prototype, "deleteKeysId403ApplicationJSONObject", void 0);
    return DeleteKeysIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteKeysIdResponse = DeleteKeysIdResponse;

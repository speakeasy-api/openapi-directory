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
exports.PostAuthVerifyResponse = exports.PostAuthVerifyRequest = exports.PostAuthVerify500ApplicationJson = exports.PostAuthVerify400ApplicationJson = exports.PostAuthVerify200ApplicationJson = exports.PostAuthVerifyRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostAuthVerifyRequestBody = /** @class */ (function (_super) {
    __extends(PostAuthVerifyRequestBody, _super);
    function PostAuthVerifyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostAuthVerifyRequestBody.prototype, "token", void 0);
    return PostAuthVerifyRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostAuthVerifyRequestBody = PostAuthVerifyRequestBody;
var PostAuthVerify200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthVerify200ApplicationJson, _super);
    function PostAuthVerify200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostAuthVerify200ApplicationJson.prototype, "token", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], PostAuthVerify200ApplicationJson.prototype, "ttl", void 0);
    return PostAuthVerify200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAuthVerify200ApplicationJson = PostAuthVerify200ApplicationJson;
var PostAuthVerify400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthVerify400ApplicationJson, _super);
    function PostAuthVerify400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostAuthVerify400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostAuthVerify400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostAuthVerify400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAuthVerify400ApplicationJson = PostAuthVerify400ApplicationJson;
var PostAuthVerify500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthVerify500ApplicationJson, _super);
    function PostAuthVerify500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostAuthVerify500ApplicationJson.prototype, "detail", void 0);
    return PostAuthVerify500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAuthVerify500ApplicationJson = PostAuthVerify500ApplicationJson;
var PostAuthVerifyRequest = /** @class */ (function (_super) {
    __extends(PostAuthVerifyRequest, _super);
    function PostAuthVerifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAuthVerifyRequestBody)
    ], PostAuthVerifyRequest.prototype, "request", void 0);
    return PostAuthVerifyRequest;
}(utils_1.SpeakeasyBase));
exports.PostAuthVerifyRequest = PostAuthVerifyRequest;
var PostAuthVerifyResponse = /** @class */ (function (_super) {
    __extends(PostAuthVerifyResponse, _super);
    function PostAuthVerifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAuthVerifyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAuthVerifyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthVerify200ApplicationJson)
    ], PostAuthVerifyResponse.prototype, "postAuthVerify200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthVerify400ApplicationJson)
    ], PostAuthVerifyResponse.prototype, "postAuthVerify400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthVerify500ApplicationJson)
    ], PostAuthVerifyResponse.prototype, "postAuthVerify500ApplicationJSONObject", void 0);
    return PostAuthVerifyResponse;
}(utils_1.SpeakeasyBase));
exports.PostAuthVerifyResponse = PostAuthVerifyResponse;

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
exports.PostEnterpriseAuthVerifyResponse = exports.PostEnterpriseAuthVerifyRequest = exports.PostEnterpriseAuthVerify500ApplicationJson = exports.PostEnterpriseAuthVerify400ApplicationJson = exports.PostEnterpriseAuthVerify200ApplicationJson = exports.PostEnterpriseAuthVerifyRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostEnterpriseAuthVerifyRequestBody = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthVerifyRequestBody, _super);
    function PostEnterpriseAuthVerifyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostEnterpriseAuthVerifyRequestBody.prototype, "token", void 0);
    return PostEnterpriseAuthVerifyRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthVerifyRequestBody = PostEnterpriseAuthVerifyRequestBody;
var PostEnterpriseAuthVerify200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthVerify200ApplicationJson, _super);
    function PostEnterpriseAuthVerify200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostEnterpriseAuthVerify200ApplicationJson.prototype, "token", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], PostEnterpriseAuthVerify200ApplicationJson.prototype, "ttl", void 0);
    return PostEnterpriseAuthVerify200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthVerify200ApplicationJson = PostEnterpriseAuthVerify200ApplicationJson;
var PostEnterpriseAuthVerify400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthVerify400ApplicationJson, _super);
    function PostEnterpriseAuthVerify400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostEnterpriseAuthVerify400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostEnterpriseAuthVerify400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostEnterpriseAuthVerify400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthVerify400ApplicationJson = PostEnterpriseAuthVerify400ApplicationJson;
var PostEnterpriseAuthVerify500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthVerify500ApplicationJson, _super);
    function PostEnterpriseAuthVerify500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostEnterpriseAuthVerify500ApplicationJson.prototype, "detail", void 0);
    return PostEnterpriseAuthVerify500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthVerify500ApplicationJson = PostEnterpriseAuthVerify500ApplicationJson;
var PostEnterpriseAuthVerifyRequest = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthVerifyRequest, _super);
    function PostEnterpriseAuthVerifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostEnterpriseAuthVerifyRequestBody)
    ], PostEnterpriseAuthVerifyRequest.prototype, "request", void 0);
    return PostEnterpriseAuthVerifyRequest;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthVerifyRequest = PostEnterpriseAuthVerifyRequest;
var PostEnterpriseAuthVerifyResponse = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthVerifyResponse, _super);
    function PostEnterpriseAuthVerifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostEnterpriseAuthVerifyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostEnterpriseAuthVerifyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnterpriseAuthVerify200ApplicationJson)
    ], PostEnterpriseAuthVerifyResponse.prototype, "postEnterpriseAuthVerify200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnterpriseAuthVerify400ApplicationJson)
    ], PostEnterpriseAuthVerifyResponse.prototype, "postEnterpriseAuthVerify400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnterpriseAuthVerify500ApplicationJson)
    ], PostEnterpriseAuthVerifyResponse.prototype, "postEnterpriseAuthVerify500ApplicationJSONObject", void 0);
    return PostEnterpriseAuthVerifyResponse;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthVerifyResponse = PostEnterpriseAuthVerifyResponse;

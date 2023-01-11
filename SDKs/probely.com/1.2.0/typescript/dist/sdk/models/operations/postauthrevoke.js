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
exports.PostAuthRevokeResponse = exports.PostAuthRevokeRequest = exports.PostAuthRevoke500ApplicationJson = exports.PostAuthRevoke400ApplicationJson = exports.PostAuthRevoke200ApplicationJson = exports.PostAuthRevokeRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostAuthRevokeRequestBody = /** @class */ (function (_super) {
    __extends(PostAuthRevokeRequestBody, _super);
    function PostAuthRevokeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostAuthRevokeRequestBody.prototype, "token", void 0);
    return PostAuthRevokeRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostAuthRevokeRequestBody = PostAuthRevokeRequestBody;
var PostAuthRevoke200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthRevoke200ApplicationJson, _super);
    function PostAuthRevoke200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostAuthRevoke200ApplicationJson.prototype, "token", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], PostAuthRevoke200ApplicationJson.prototype, "ttl", void 0);
    return PostAuthRevoke200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAuthRevoke200ApplicationJson = PostAuthRevoke200ApplicationJson;
var PostAuthRevoke400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthRevoke400ApplicationJson, _super);
    function PostAuthRevoke400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostAuthRevoke400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostAuthRevoke400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostAuthRevoke400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAuthRevoke400ApplicationJson = PostAuthRevoke400ApplicationJson;
var PostAuthRevoke500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthRevoke500ApplicationJson, _super);
    function PostAuthRevoke500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostAuthRevoke500ApplicationJson.prototype, "detail", void 0);
    return PostAuthRevoke500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAuthRevoke500ApplicationJson = PostAuthRevoke500ApplicationJson;
var PostAuthRevokeRequest = /** @class */ (function (_super) {
    __extends(PostAuthRevokeRequest, _super);
    function PostAuthRevokeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAuthRevokeRequestBody)
    ], PostAuthRevokeRequest.prototype, "request", void 0);
    return PostAuthRevokeRequest;
}(utils_1.SpeakeasyBase));
exports.PostAuthRevokeRequest = PostAuthRevokeRequest;
var PostAuthRevokeResponse = /** @class */ (function (_super) {
    __extends(PostAuthRevokeResponse, _super);
    function PostAuthRevokeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAuthRevokeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAuthRevokeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthRevoke200ApplicationJson)
    ], PostAuthRevokeResponse.prototype, "postAuthRevoke200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthRevoke400ApplicationJson)
    ], PostAuthRevokeResponse.prototype, "postAuthRevoke400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthRevoke500ApplicationJson)
    ], PostAuthRevokeResponse.prototype, "postAuthRevoke500ApplicationJSONObject", void 0);
    return PostAuthRevokeResponse;
}(utils_1.SpeakeasyBase));
exports.PostAuthRevokeResponse = PostAuthRevokeResponse;

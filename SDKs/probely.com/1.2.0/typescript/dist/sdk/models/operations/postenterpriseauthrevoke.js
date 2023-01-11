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
exports.PostEnterpriseAuthRevokeResponse = exports.PostEnterpriseAuthRevokeRequest = exports.PostEnterpriseAuthRevoke500ApplicationJson = exports.PostEnterpriseAuthRevoke400ApplicationJson = exports.PostEnterpriseAuthRevoke200ApplicationJson = exports.PostEnterpriseAuthRevokeRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostEnterpriseAuthRevokeRequestBody = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRevokeRequestBody, _super);
    function PostEnterpriseAuthRevokeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostEnterpriseAuthRevokeRequestBody.prototype, "token", void 0);
    return PostEnterpriseAuthRevokeRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRevokeRequestBody = PostEnterpriseAuthRevokeRequestBody;
var PostEnterpriseAuthRevoke200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRevoke200ApplicationJson, _super);
    function PostEnterpriseAuthRevoke200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostEnterpriseAuthRevoke200ApplicationJson.prototype, "token", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], PostEnterpriseAuthRevoke200ApplicationJson.prototype, "ttl", void 0);
    return PostEnterpriseAuthRevoke200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRevoke200ApplicationJson = PostEnterpriseAuthRevoke200ApplicationJson;
var PostEnterpriseAuthRevoke400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRevoke400ApplicationJson, _super);
    function PostEnterpriseAuthRevoke400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostEnterpriseAuthRevoke400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostEnterpriseAuthRevoke400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostEnterpriseAuthRevoke400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRevoke400ApplicationJson = PostEnterpriseAuthRevoke400ApplicationJson;
var PostEnterpriseAuthRevoke500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRevoke500ApplicationJson, _super);
    function PostEnterpriseAuthRevoke500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostEnterpriseAuthRevoke500ApplicationJson.prototype, "detail", void 0);
    return PostEnterpriseAuthRevoke500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRevoke500ApplicationJson = PostEnterpriseAuthRevoke500ApplicationJson;
var PostEnterpriseAuthRevokeRequest = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRevokeRequest, _super);
    function PostEnterpriseAuthRevokeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostEnterpriseAuthRevokeRequestBody)
    ], PostEnterpriseAuthRevokeRequest.prototype, "request", void 0);
    return PostEnterpriseAuthRevokeRequest;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRevokeRequest = PostEnterpriseAuthRevokeRequest;
var PostEnterpriseAuthRevokeResponse = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRevokeResponse, _super);
    function PostEnterpriseAuthRevokeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostEnterpriseAuthRevokeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostEnterpriseAuthRevokeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnterpriseAuthRevoke200ApplicationJson)
    ], PostEnterpriseAuthRevokeResponse.prototype, "postEnterpriseAuthRevoke200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnterpriseAuthRevoke400ApplicationJson)
    ], PostEnterpriseAuthRevokeResponse.prototype, "postEnterpriseAuthRevoke400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnterpriseAuthRevoke500ApplicationJson)
    ], PostEnterpriseAuthRevokeResponse.prototype, "postEnterpriseAuthRevoke500ApplicationJSONObject", void 0);
    return PostEnterpriseAuthRevokeResponse;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRevokeResponse = PostEnterpriseAuthRevokeResponse;

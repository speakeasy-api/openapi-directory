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
exports.PostEnterpriseAuthRefreshResponse = exports.PostEnterpriseAuthRefreshRequest = exports.PostEnterpriseAuthRefresh500ApplicationJson = exports.PostEnterpriseAuthRefresh400ApplicationJson = exports.PostEnterpriseAuthRefresh200ApplicationJson = exports.PostEnterpriseAuthRefreshRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostEnterpriseAuthRefreshRequestBody = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRefreshRequestBody, _super);
    function PostEnterpriseAuthRefreshRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostEnterpriseAuthRefreshRequestBody.prototype, "token", void 0);
    return PostEnterpriseAuthRefreshRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRefreshRequestBody = PostEnterpriseAuthRefreshRequestBody;
var PostEnterpriseAuthRefresh200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRefresh200ApplicationJson, _super);
    function PostEnterpriseAuthRefresh200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostEnterpriseAuthRefresh200ApplicationJson.prototype, "token", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], PostEnterpriseAuthRefresh200ApplicationJson.prototype, "ttl", void 0);
    return PostEnterpriseAuthRefresh200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRefresh200ApplicationJson = PostEnterpriseAuthRefresh200ApplicationJson;
var PostEnterpriseAuthRefresh400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRefresh400ApplicationJson, _super);
    function PostEnterpriseAuthRefresh400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostEnterpriseAuthRefresh400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostEnterpriseAuthRefresh400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostEnterpriseAuthRefresh400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRefresh400ApplicationJson = PostEnterpriseAuthRefresh400ApplicationJson;
var PostEnterpriseAuthRefresh500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRefresh500ApplicationJson, _super);
    function PostEnterpriseAuthRefresh500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostEnterpriseAuthRefresh500ApplicationJson.prototype, "detail", void 0);
    return PostEnterpriseAuthRefresh500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRefresh500ApplicationJson = PostEnterpriseAuthRefresh500ApplicationJson;
var PostEnterpriseAuthRefreshRequest = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRefreshRequest, _super);
    function PostEnterpriseAuthRefreshRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostEnterpriseAuthRefreshRequestBody)
    ], PostEnterpriseAuthRefreshRequest.prototype, "request", void 0);
    return PostEnterpriseAuthRefreshRequest;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRefreshRequest = PostEnterpriseAuthRefreshRequest;
var PostEnterpriseAuthRefreshResponse = /** @class */ (function (_super) {
    __extends(PostEnterpriseAuthRefreshResponse, _super);
    function PostEnterpriseAuthRefreshResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostEnterpriseAuthRefreshResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostEnterpriseAuthRefreshResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnterpriseAuthRefresh200ApplicationJson)
    ], PostEnterpriseAuthRefreshResponse.prototype, "postEnterpriseAuthRefresh200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnterpriseAuthRefresh400ApplicationJson)
    ], PostEnterpriseAuthRefreshResponse.prototype, "postEnterpriseAuthRefresh400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnterpriseAuthRefresh500ApplicationJson)
    ], PostEnterpriseAuthRefreshResponse.prototype, "postEnterpriseAuthRefresh500ApplicationJSONObject", void 0);
    return PostEnterpriseAuthRefreshResponse;
}(utils_1.SpeakeasyBase));
exports.PostEnterpriseAuthRefreshResponse = PostEnterpriseAuthRefreshResponse;

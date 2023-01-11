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
exports.PostProfileChangePasswordResponse = exports.PostProfileChangePasswordRequest = exports.PostProfileChangePassword401ApplicationJson = exports.PostProfileChangePassword400ApplicationJson = exports.PostProfileChangePassword200ApplicationJson = exports.PostProfileChangePasswordRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostProfileChangePasswordRequestBody = /** @class */ (function (_super) {
    __extends(PostProfileChangePasswordRequestBody, _super);
    function PostProfileChangePasswordRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confpassword" }),
        __metadata("design:type", Object)
    ], PostProfileChangePasswordRequestBody.prototype, "confpassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_password" }),
        __metadata("design:type", Object)
    ], PostProfileChangePasswordRequestBody.prototype, "currentPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", Object)
    ], PostProfileChangePasswordRequestBody.prototype, "password", void 0);
    return PostProfileChangePasswordRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostProfileChangePasswordRequestBody = PostProfileChangePasswordRequestBody;
var PostProfileChangePassword200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostProfileChangePassword200ApplicationJson, _super);
    function PostProfileChangePassword200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostProfileChangePassword200ApplicationJson.prototype, "message", void 0);
    return PostProfileChangePassword200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostProfileChangePassword200ApplicationJson = PostProfileChangePassword200ApplicationJson;
var PostProfileChangePassword400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostProfileChangePassword400ApplicationJson, _super);
    function PostProfileChangePassword400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostProfileChangePassword400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostProfileChangePassword400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostProfileChangePassword400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostProfileChangePassword400ApplicationJson = PostProfileChangePassword400ApplicationJson;
var PostProfileChangePassword401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostProfileChangePassword401ApplicationJson, _super);
    function PostProfileChangePassword401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostProfileChangePassword401ApplicationJson.prototype, "detail", void 0);
    return PostProfileChangePassword401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostProfileChangePassword401ApplicationJson = PostProfileChangePassword401ApplicationJson;
var PostProfileChangePasswordRequest = /** @class */ (function (_super) {
    __extends(PostProfileChangePasswordRequest, _super);
    function PostProfileChangePasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostProfileChangePasswordRequestBody)
    ], PostProfileChangePasswordRequest.prototype, "request", void 0);
    return PostProfileChangePasswordRequest;
}(utils_1.SpeakeasyBase));
exports.PostProfileChangePasswordRequest = PostProfileChangePasswordRequest;
var PostProfileChangePasswordResponse = /** @class */ (function (_super) {
    __extends(PostProfileChangePasswordResponse, _super);
    function PostProfileChangePasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostProfileChangePasswordResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostProfileChangePasswordResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostProfileChangePassword200ApplicationJson)
    ], PostProfileChangePasswordResponse.prototype, "postProfileChangePassword200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostProfileChangePassword400ApplicationJson)
    ], PostProfileChangePasswordResponse.prototype, "postProfileChangePassword400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostProfileChangePassword401ApplicationJson)
    ], PostProfileChangePasswordResponse.prototype, "postProfileChangePassword401ApplicationJSONObject", void 0);
    return PostProfileChangePasswordResponse;
}(utils_1.SpeakeasyBase));
exports.PostProfileChangePasswordResponse = PostProfileChangePasswordResponse;

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
exports.PostResetResponse = exports.PostResetRequest = exports.PostReset400ApplicationJson = exports.PostReset200ApplicationJson = exports.PostResetRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostResetRequestBody = /** @class */ (function (_super) {
    __extends(PostResetRequestBody, _super);
    function PostResetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostResetRequestBody.prototype, "email", void 0);
    return PostResetRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostResetRequestBody = PostResetRequestBody;
var PostReset200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostReset200ApplicationJson, _super);
    function PostReset200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostReset200ApplicationJson.prototype, "message", void 0);
    return PostReset200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostReset200ApplicationJson = PostReset200ApplicationJson;
var PostReset400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostReset400ApplicationJson, _super);
    function PostReset400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PostReset400ApplicationJson.prototype, "error", void 0);
    return PostReset400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostReset400ApplicationJson = PostReset400ApplicationJson;
var PostResetRequest = /** @class */ (function (_super) {
    __extends(PostResetRequest, _super);
    function PostResetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostResetRequestBody)
    ], PostResetRequest.prototype, "request", void 0);
    return PostResetRequest;
}(utils_1.SpeakeasyBase));
exports.PostResetRequest = PostResetRequest;
var PostResetResponse = /** @class */ (function (_super) {
    __extends(PostResetResponse, _super);
    function PostResetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostResetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostResetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostReset200ApplicationJson)
    ], PostResetResponse.prototype, "postReset200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostReset400ApplicationJson)
    ], PostResetResponse.prototype, "postReset400ApplicationJSONObject", void 0);
    return PostResetResponse;
}(utils_1.SpeakeasyBase));
exports.PostResetResponse = PostResetResponse;

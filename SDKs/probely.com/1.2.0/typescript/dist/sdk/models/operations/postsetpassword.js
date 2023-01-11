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
exports.PostSetpasswordResponse = exports.PostSetpasswordRequest = exports.PostSetpassword400ApplicationJson = exports.PostSetpassword200ApplicationJson = exports.PostSetpasswordRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostSetpasswordRequestBody = /** @class */ (function (_super) {
    __extends(PostSetpasswordRequestBody, _super);
    function PostSetpasswordRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confpassword" }),
        __metadata("design:type", Object)
    ], PostSetpasswordRequestBody.prototype, "confpassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", Object)
    ], PostSetpasswordRequestBody.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostSetpasswordRequestBody.prototype, "token", void 0);
    return PostSetpasswordRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostSetpasswordRequestBody = PostSetpasswordRequestBody;
var PostSetpassword200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSetpassword200ApplicationJson, _super);
    function PostSetpassword200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSetpassword200ApplicationJson.prototype, "message", void 0);
    return PostSetpassword200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostSetpassword200ApplicationJson = PostSetpassword200ApplicationJson;
var PostSetpassword400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSetpassword400ApplicationJson, _super);
    function PostSetpassword400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PostSetpassword400ApplicationJson.prototype, "error", void 0);
    return PostSetpassword400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostSetpassword400ApplicationJson = PostSetpassword400ApplicationJson;
var PostSetpasswordRequest = /** @class */ (function (_super) {
    __extends(PostSetpasswordRequest, _super);
    function PostSetpasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostSetpasswordRequestBody)
    ], PostSetpasswordRequest.prototype, "request", void 0);
    return PostSetpasswordRequest;
}(utils_1.SpeakeasyBase));
exports.PostSetpasswordRequest = PostSetpasswordRequest;
var PostSetpasswordResponse = /** @class */ (function (_super) {
    __extends(PostSetpasswordResponse, _super);
    function PostSetpasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSetpasswordResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSetpasswordResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSetpassword200ApplicationJson)
    ], PostSetpasswordResponse.prototype, "postSetpassword200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSetpassword400ApplicationJson)
    ], PostSetpasswordResponse.prototype, "postSetpassword400ApplicationJSONObject", void 0);
    return PostSetpasswordResponse;
}(utils_1.SpeakeasyBase));
exports.PostSetpasswordResponse = PostSetpasswordResponse;

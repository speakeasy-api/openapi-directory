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
exports.PostCheckResponse = exports.PostCheckRequest = exports.PostCheck400ApplicationJson = exports.PostCheck200ApplicationJson = exports.PostCheckRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostCheckRequestBody = /** @class */ (function (_super) {
    __extends(PostCheckRequestBody, _super);
    function PostCheckRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostCheckRequestBody.prototype, "token", void 0);
    return PostCheckRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostCheckRequestBody = PostCheckRequestBody;
var PostCheck200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCheck200ApplicationJson, _super);
    function PostCheck200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostCheck200ApplicationJson.prototype, "message", void 0);
    return PostCheck200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostCheck200ApplicationJson = PostCheck200ApplicationJson;
var PostCheck400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCheck400ApplicationJson, _super);
    function PostCheck400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PostCheck400ApplicationJson.prototype, "error", void 0);
    return PostCheck400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostCheck400ApplicationJson = PostCheck400ApplicationJson;
var PostCheckRequest = /** @class */ (function (_super) {
    __extends(PostCheckRequest, _super);
    function PostCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostCheckRequestBody)
    ], PostCheckRequest.prototype, "request", void 0);
    return PostCheckRequest;
}(utils_1.SpeakeasyBase));
exports.PostCheckRequest = PostCheckRequest;
var PostCheckResponse = /** @class */ (function (_super) {
    __extends(PostCheckResponse, _super);
    function PostCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCheckResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCheckResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCheck200ApplicationJson)
    ], PostCheckResponse.prototype, "postCheck200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCheck400ApplicationJson)
    ], PostCheckResponse.prototype, "postCheck400ApplicationJSONObject", void 0);
    return PostCheckResponse;
}(utils_1.SpeakeasyBase));
exports.PostCheckResponse = PostCheckResponse;

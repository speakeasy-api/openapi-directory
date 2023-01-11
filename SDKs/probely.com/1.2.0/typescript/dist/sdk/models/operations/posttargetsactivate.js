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
exports.PostTargetsActivateResponse = exports.PostTargetsActivateRequest = exports.PostTargetsActivate403ApplicationJson = exports.PostTargetsActivate401ApplicationJson = exports.PostTargetsActivate400ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var PostTargetsActivate400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsActivate400ApplicationJson, _super);
    function PostTargetsActivate400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostTargetsActivate400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostTargetsActivate400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostTargetsActivate400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsActivate400ApplicationJson = PostTargetsActivate400ApplicationJson;
var PostTargetsActivate401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsActivate401ApplicationJson, _super);
    function PostTargetsActivate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsActivate401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsActivate401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsActivate401ApplicationJson = PostTargetsActivate401ApplicationJson;
var PostTargetsActivate403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsActivate403ApplicationJson, _super);
    function PostTargetsActivate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsActivate403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsActivate403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsActivate403ApplicationJson = PostTargetsActivate403ApplicationJson;
var PostTargetsActivateRequest = /** @class */ (function (_super) {
    __extends(PostTargetsActivateRequest, _super);
    function PostTargetsActivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Array)
    ], PostTargetsActivateRequest.prototype, "request", void 0);
    return PostTargetsActivateRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsActivateRequest = PostTargetsActivateRequest;
var PostTargetsActivateResponse = /** @class */ (function (_super) {
    __extends(PostTargetsActivateResponse, _super);
    function PostTargetsActivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsActivateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsActivateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsActivate400ApplicationJson)
    ], PostTargetsActivateResponse.prototype, "postTargetsActivate400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsActivate401ApplicationJson)
    ], PostTargetsActivateResponse.prototype, "postTargetsActivate401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsActivate403ApplicationJson)
    ], PostTargetsActivateResponse.prototype, "postTargetsActivate403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], PostTargetsActivateResponse.prototype, "targetIds", void 0);
    return PostTargetsActivateResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsActivateResponse = PostTargetsActivateResponse;

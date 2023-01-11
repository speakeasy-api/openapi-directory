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
exports.PostTargetsArchiveResponse = exports.PostTargetsArchiveRequest = exports.PostTargetsArchive403ApplicationJson = exports.PostTargetsArchive401ApplicationJson = exports.PostTargetsArchive400ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var PostTargetsArchive400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsArchive400ApplicationJson, _super);
    function PostTargetsArchive400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostTargetsArchive400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostTargetsArchive400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostTargetsArchive400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchive400ApplicationJson = PostTargetsArchive400ApplicationJson;
var PostTargetsArchive401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsArchive401ApplicationJson, _super);
    function PostTargetsArchive401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsArchive401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsArchive401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchive401ApplicationJson = PostTargetsArchive401ApplicationJson;
var PostTargetsArchive403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsArchive403ApplicationJson, _super);
    function PostTargetsArchive403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsArchive403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsArchive403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchive403ApplicationJson = PostTargetsArchive403ApplicationJson;
var PostTargetsArchiveRequest = /** @class */ (function (_super) {
    __extends(PostTargetsArchiveRequest, _super);
    function PostTargetsArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Array)
    ], PostTargetsArchiveRequest.prototype, "request", void 0);
    return PostTargetsArchiveRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchiveRequest = PostTargetsArchiveRequest;
var PostTargetsArchiveResponse = /** @class */ (function (_super) {
    __extends(PostTargetsArchiveResponse, _super);
    function PostTargetsArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsArchiveResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsArchive400ApplicationJson)
    ], PostTargetsArchiveResponse.prototype, "postTargetsArchive400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsArchive401ApplicationJson)
    ], PostTargetsArchiveResponse.prototype, "postTargetsArchive401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsArchive403ApplicationJson)
    ], PostTargetsArchiveResponse.prototype, "postTargetsArchive403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], PostTargetsArchiveResponse.prototype, "targetIds", void 0);
    return PostTargetsArchiveResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchiveResponse = PostTargetsArchiveResponse;

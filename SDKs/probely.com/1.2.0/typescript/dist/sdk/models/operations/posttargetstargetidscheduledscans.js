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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTargetsTargetIdScheduledscansResponse = exports.PostTargetsTargetIdScheduledscansRequest = exports.PostTargetsTargetIdScheduledscans404ApplicationJson = exports.PostTargetsTargetIdScheduledscans403ApplicationJson = exports.PostTargetsTargetIdScheduledscans401ApplicationJson = exports.PostTargetsTargetIdScheduledscans400ApplicationJson = exports.PostTargetsTargetIdScheduledscansRequestBody = exports.PostTargetsTargetIdScheduledscansPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargetsTargetIdScheduledscansPathParams = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScheduledscansPathParams, _super);
    function PostTargetsTargetIdScheduledscansPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScheduledscansPathParams.prototype, "targetId", void 0);
    return PostTargetsTargetIdScheduledscansPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScheduledscansPathParams = PostTargetsTargetIdScheduledscansPathParams;
var PostTargetsTargetIdScheduledscansRequestBody = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScheduledscansRequestBody, _super);
    function PostTargetsTargetIdScheduledscansRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], PostTargetsTargetIdScheduledscansRequestBody.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScheduledscansRequestBody.prototype, "recurrence", void 0);
    return PostTargetsTargetIdScheduledscansRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScheduledscansRequestBody = PostTargetsTargetIdScheduledscansRequestBody;
var PostTargetsTargetIdScheduledscans400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScheduledscans400ApplicationJson, _super);
    function PostTargetsTargetIdScheduledscans400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostTargetsTargetIdScheduledscans400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostTargetsTargetIdScheduledscans400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostTargetsTargetIdScheduledscans400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScheduledscans400ApplicationJson = PostTargetsTargetIdScheduledscans400ApplicationJson;
var PostTargetsTargetIdScheduledscans401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScheduledscans401ApplicationJson, _super);
    function PostTargetsTargetIdScheduledscans401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScheduledscans401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdScheduledscans401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScheduledscans401ApplicationJson = PostTargetsTargetIdScheduledscans401ApplicationJson;
var PostTargetsTargetIdScheduledscans403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScheduledscans403ApplicationJson, _super);
    function PostTargetsTargetIdScheduledscans403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScheduledscans403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdScheduledscans403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScheduledscans403ApplicationJson = PostTargetsTargetIdScheduledscans403ApplicationJson;
var PostTargetsTargetIdScheduledscans404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScheduledscans404ApplicationJson, _super);
    function PostTargetsTargetIdScheduledscans404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScheduledscans404ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdScheduledscans404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScheduledscans404ApplicationJson = PostTargetsTargetIdScheduledscans404ApplicationJson;
var PostTargetsTargetIdScheduledscansRequest = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScheduledscansRequest, _super);
    function PostTargetsTargetIdScheduledscansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScheduledscansPathParams)
    ], PostTargetsTargetIdScheduledscansRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTargetsTargetIdScheduledscansRequestBody)
    ], PostTargetsTargetIdScheduledscansRequest.prototype, "request", void 0);
    return PostTargetsTargetIdScheduledscansRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScheduledscansRequest = PostTargetsTargetIdScheduledscansRequest;
var PostTargetsTargetIdScheduledscansResponse = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScheduledscansResponse, _super);
    function PostTargetsTargetIdScheduledscansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScheduledscansResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Scheduled)
    ], PostTargetsTargetIdScheduledscansResponse.prototype, "scheduled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsTargetIdScheduledscansResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScheduledscans400ApplicationJson)
    ], PostTargetsTargetIdScheduledscansResponse.prototype, "postTargetsTargetIdScheduledscans400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScheduledscans401ApplicationJson)
    ], PostTargetsTargetIdScheduledscansResponse.prototype, "postTargetsTargetIdScheduledscans401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScheduledscans403ApplicationJson)
    ], PostTargetsTargetIdScheduledscansResponse.prototype, "postTargetsTargetIdScheduledscans403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScheduledscans404ApplicationJson)
    ], PostTargetsTargetIdScheduledscansResponse.prototype, "postTargetsTargetIdScheduledscans404ApplicationJSONObject", void 0);
    return PostTargetsTargetIdScheduledscansResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScheduledscansResponse = PostTargetsTargetIdScheduledscansResponse;

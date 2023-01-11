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
exports.PostTargetsTargetIdKeysResponse = exports.PostTargetsTargetIdKeysRequest = exports.PostTargetsTargetIdKeys404ApplicationJson = exports.PostTargetsTargetIdKeys403ApplicationJson = exports.PostTargetsTargetIdKeys401ApplicationJson = exports.PostTargetsTargetIdKeys400ApplicationJson = exports.PostTargetsTargetIdKeysPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargetsTargetIdKeysPathParams = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdKeysPathParams, _super);
    function PostTargetsTargetIdKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdKeysPathParams.prototype, "targetId", void 0);
    return PostTargetsTargetIdKeysPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdKeysPathParams = PostTargetsTargetIdKeysPathParams;
var PostTargetsTargetIdKeys400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdKeys400ApplicationJson, _super);
    function PostTargetsTargetIdKeys400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostTargetsTargetIdKeys400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostTargetsTargetIdKeys400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostTargetsTargetIdKeys400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdKeys400ApplicationJson = PostTargetsTargetIdKeys400ApplicationJson;
var PostTargetsTargetIdKeys401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdKeys401ApplicationJson, _super);
    function PostTargetsTargetIdKeys401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdKeys401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdKeys401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdKeys401ApplicationJson = PostTargetsTargetIdKeys401ApplicationJson;
var PostTargetsTargetIdKeys403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdKeys403ApplicationJson, _super);
    function PostTargetsTargetIdKeys403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdKeys403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdKeys403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdKeys403ApplicationJson = PostTargetsTargetIdKeys403ApplicationJson;
var PostTargetsTargetIdKeys404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdKeys404ApplicationJson, _super);
    function PostTargetsTargetIdKeys404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdKeys404ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdKeys404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdKeys404ApplicationJson = PostTargetsTargetIdKeys404ApplicationJson;
var PostTargetsTargetIdKeysRequest = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdKeysRequest, _super);
    function PostTargetsTargetIdKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdKeysPathParams)
    ], PostTargetsTargetIdKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiKeyInput)
    ], PostTargetsTargetIdKeysRequest.prototype, "request", void 0);
    return PostTargetsTargetIdKeysRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdKeysRequest = PostTargetsTargetIdKeysRequest;
var PostTargetsTargetIdKeysResponse = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdKeysResponse, _super);
    function PostTargetsTargetIdKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiKey)
    ], PostTargetsTargetIdKeysResponse.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsTargetIdKeysResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsTargetIdKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdKeys400ApplicationJson)
    ], PostTargetsTargetIdKeysResponse.prototype, "postTargetsTargetIdKeys400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdKeys401ApplicationJson)
    ], PostTargetsTargetIdKeysResponse.prototype, "postTargetsTargetIdKeys401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdKeys403ApplicationJson)
    ], PostTargetsTargetIdKeysResponse.prototype, "postTargetsTargetIdKeys403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdKeys404ApplicationJson)
    ], PostTargetsTargetIdKeysResponse.prototype, "postTargetsTargetIdKeys404ApplicationJSONObject", void 0);
    return PostTargetsTargetIdKeysResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdKeysResponse = PostTargetsTargetIdKeysResponse;

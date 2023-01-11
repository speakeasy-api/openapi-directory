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
exports.PostTargetsTargetIdAssetsResponse = exports.PostTargetsTargetIdAssetsRequest = exports.PostTargetsTargetIdAssets404ApplicationJson = exports.PostTargetsTargetIdAssets403ApplicationJson = exports.PostTargetsTargetIdAssets401ApplicationJson = exports.PostTargetsTargetIdAssets400ApplicationJson = exports.PostTargetsTargetIdAssetsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargetsTargetIdAssetsPathParams = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsPathParams, _super);
    function PostTargetsTargetIdAssetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsPathParams.prototype, "targetId", void 0);
    return PostTargetsTargetIdAssetsPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsPathParams = PostTargetsTargetIdAssetsPathParams;
var PostTargetsTargetIdAssets400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssets400ApplicationJson, _super);
    function PostTargetsTargetIdAssets400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostTargetsTargetIdAssets400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostTargetsTargetIdAssets400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostTargetsTargetIdAssets400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssets400ApplicationJson = PostTargetsTargetIdAssets400ApplicationJson;
var PostTargetsTargetIdAssets401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssets401ApplicationJson, _super);
    function PostTargetsTargetIdAssets401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssets401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdAssets401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssets401ApplicationJson = PostTargetsTargetIdAssets401ApplicationJson;
var PostTargetsTargetIdAssets403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssets403ApplicationJson, _super);
    function PostTargetsTargetIdAssets403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssets403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdAssets403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssets403ApplicationJson = PostTargetsTargetIdAssets403ApplicationJson;
var PostTargetsTargetIdAssets404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssets404ApplicationJson, _super);
    function PostTargetsTargetIdAssets404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssets404ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdAssets404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssets404ApplicationJson = PostTargetsTargetIdAssets404ApplicationJson;
var PostTargetsTargetIdAssetsRequest = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsRequest, _super);
    function PostTargetsTargetIdAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssetsPathParams)
    ], PostTargetsTargetIdAssetsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssetInput)
    ], PostTargetsTargetIdAssetsRequest.prototype, "request", void 0);
    return PostTargetsTargetIdAssetsRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsRequest = PostTargetsTargetIdAssetsRequest;
var PostTargetsTargetIdAssetsResponse = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsResponse, _super);
    function PostTargetsTargetIdAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Asset)
    ], PostTargetsTargetIdAssetsResponse.prototype, "asset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsTargetIdAssetsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssets400ApplicationJson)
    ], PostTargetsTargetIdAssetsResponse.prototype, "postTargetsTargetIdAssets400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssets401ApplicationJson)
    ], PostTargetsTargetIdAssetsResponse.prototype, "postTargetsTargetIdAssets401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssets403ApplicationJson)
    ], PostTargetsTargetIdAssetsResponse.prototype, "postTargetsTargetIdAssets403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssets404ApplicationJson)
    ], PostTargetsTargetIdAssetsResponse.prototype, "postTargetsTargetIdAssets404ApplicationJSONObject", void 0);
    return PostTargetsTargetIdAssetsResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsResponse = PostTargetsTargetIdAssetsResponse;

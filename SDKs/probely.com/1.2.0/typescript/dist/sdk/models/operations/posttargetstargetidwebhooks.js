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
exports.PostTargetsTargetIdWebhooksResponse = exports.PostTargetsTargetIdWebhooksRequest = exports.PostTargetsTargetIdWebhooks404ApplicationJson = exports.PostTargetsTargetIdWebhooks403ApplicationJson = exports.PostTargetsTargetIdWebhooks401ApplicationJson = exports.PostTargetsTargetIdWebhooks400ApplicationJson = exports.PostTargetsTargetIdWebhooksPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargetsTargetIdWebhooksPathParams = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdWebhooksPathParams, _super);
    function PostTargetsTargetIdWebhooksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdWebhooksPathParams.prototype, "targetId", void 0);
    return PostTargetsTargetIdWebhooksPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdWebhooksPathParams = PostTargetsTargetIdWebhooksPathParams;
var PostTargetsTargetIdWebhooks400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdWebhooks400ApplicationJson, _super);
    function PostTargetsTargetIdWebhooks400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostTargetsTargetIdWebhooks400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostTargetsTargetIdWebhooks400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostTargetsTargetIdWebhooks400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdWebhooks400ApplicationJson = PostTargetsTargetIdWebhooks400ApplicationJson;
var PostTargetsTargetIdWebhooks401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdWebhooks401ApplicationJson, _super);
    function PostTargetsTargetIdWebhooks401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdWebhooks401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdWebhooks401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdWebhooks401ApplicationJson = PostTargetsTargetIdWebhooks401ApplicationJson;
var PostTargetsTargetIdWebhooks403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdWebhooks403ApplicationJson, _super);
    function PostTargetsTargetIdWebhooks403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdWebhooks403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdWebhooks403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdWebhooks403ApplicationJson = PostTargetsTargetIdWebhooks403ApplicationJson;
var PostTargetsTargetIdWebhooks404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdWebhooks404ApplicationJson, _super);
    function PostTargetsTargetIdWebhooks404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdWebhooks404ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdWebhooks404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdWebhooks404ApplicationJson = PostTargetsTargetIdWebhooks404ApplicationJson;
var PostTargetsTargetIdWebhooksRequest = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdWebhooksRequest, _super);
    function PostTargetsTargetIdWebhooksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdWebhooksPathParams)
    ], PostTargetsTargetIdWebhooksRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebhookInput)
    ], PostTargetsTargetIdWebhooksRequest.prototype, "request", void 0);
    return PostTargetsTargetIdWebhooksRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdWebhooksRequest = PostTargetsTargetIdWebhooksRequest;
var PostTargetsTargetIdWebhooksResponse = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdWebhooksResponse, _super);
    function PostTargetsTargetIdWebhooksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsTargetIdWebhooksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsTargetIdWebhooksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Webhook)
    ], PostTargetsTargetIdWebhooksResponse.prototype, "webhook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdWebhooks400ApplicationJson)
    ], PostTargetsTargetIdWebhooksResponse.prototype, "postTargetsTargetIdWebhooks400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdWebhooks401ApplicationJson)
    ], PostTargetsTargetIdWebhooksResponse.prototype, "postTargetsTargetIdWebhooks401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdWebhooks403ApplicationJson)
    ], PostTargetsTargetIdWebhooksResponse.prototype, "postTargetsTargetIdWebhooks403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdWebhooks404ApplicationJson)
    ], PostTargetsTargetIdWebhooksResponse.prototype, "postTargetsTargetIdWebhooks404ApplicationJSONObject", void 0);
    return PostTargetsTargetIdWebhooksResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdWebhooksResponse = PostTargetsTargetIdWebhooksResponse;

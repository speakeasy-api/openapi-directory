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
exports.PostTargetsTargetIdSiteVerifyResponse = exports.PostTargetsTargetIdSiteVerifyRequest = exports.PostTargetsTargetIdSiteVerify404ApplicationJson = exports.PostTargetsTargetIdSiteVerify403ApplicationJson = exports.PostTargetsTargetIdSiteVerify401ApplicationJson = exports.PostTargetsTargetIdSiteVerify400ApplicationJson = exports.PostTargetsTargetIdSiteVerify200ApplicationJson = exports.PostTargetsTargetIdSiteVerifyRequestBody = exports.PostTargetsTargetIdSiteVerifyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargetsTargetIdSiteVerifyPathParams = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdSiteVerifyPathParams, _super);
    function PostTargetsTargetIdSiteVerifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdSiteVerifyPathParams.prototype, "targetId", void 0);
    return PostTargetsTargetIdSiteVerifyPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdSiteVerifyPathParams = PostTargetsTargetIdSiteVerifyPathParams;
var PostTargetsTargetIdSiteVerifyRequestBody = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdSiteVerifyRequestBody, _super);
    function PostTargetsTargetIdSiteVerifyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdSiteVerifyRequestBody.prototype, "type", void 0);
    return PostTargetsTargetIdSiteVerifyRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdSiteVerifyRequestBody = PostTargetsTargetIdSiteVerifyRequestBody;
var PostTargetsTargetIdSiteVerify200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdSiteVerify200ApplicationJson, _super);
    function PostTargetsTargetIdSiteVerify200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdSiteVerify200ApplicationJson.prototype, "message", void 0);
    return PostTargetsTargetIdSiteVerify200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdSiteVerify200ApplicationJson = PostTargetsTargetIdSiteVerify200ApplicationJson;
var PostTargetsTargetIdSiteVerify400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdSiteVerify400ApplicationJson, _super);
    function PostTargetsTargetIdSiteVerify400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdSiteVerify400ApplicationJson.prototype, "error", void 0);
    return PostTargetsTargetIdSiteVerify400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdSiteVerify400ApplicationJson = PostTargetsTargetIdSiteVerify400ApplicationJson;
var PostTargetsTargetIdSiteVerify401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdSiteVerify401ApplicationJson, _super);
    function PostTargetsTargetIdSiteVerify401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdSiteVerify401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdSiteVerify401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdSiteVerify401ApplicationJson = PostTargetsTargetIdSiteVerify401ApplicationJson;
var PostTargetsTargetIdSiteVerify403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdSiteVerify403ApplicationJson, _super);
    function PostTargetsTargetIdSiteVerify403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdSiteVerify403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdSiteVerify403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdSiteVerify403ApplicationJson = PostTargetsTargetIdSiteVerify403ApplicationJson;
var PostTargetsTargetIdSiteVerify404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdSiteVerify404ApplicationJson, _super);
    function PostTargetsTargetIdSiteVerify404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdSiteVerify404ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdSiteVerify404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdSiteVerify404ApplicationJson = PostTargetsTargetIdSiteVerify404ApplicationJson;
var PostTargetsTargetIdSiteVerifyRequest = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdSiteVerifyRequest, _super);
    function PostTargetsTargetIdSiteVerifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdSiteVerifyPathParams)
    ], PostTargetsTargetIdSiteVerifyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTargetsTargetIdSiteVerifyRequestBody)
    ], PostTargetsTargetIdSiteVerifyRequest.prototype, "request", void 0);
    return PostTargetsTargetIdSiteVerifyRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdSiteVerifyRequest = PostTargetsTargetIdSiteVerifyRequest;
var PostTargetsTargetIdSiteVerifyResponse = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdSiteVerifyResponse, _super);
    function PostTargetsTargetIdSiteVerifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsTargetIdSiteVerifyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsTargetIdSiteVerifyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdSiteVerify200ApplicationJson)
    ], PostTargetsTargetIdSiteVerifyResponse.prototype, "postTargetsTargetIdSiteVerify200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdSiteVerify400ApplicationJson)
    ], PostTargetsTargetIdSiteVerifyResponse.prototype, "postTargetsTargetIdSiteVerify400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdSiteVerify401ApplicationJson)
    ], PostTargetsTargetIdSiteVerifyResponse.prototype, "postTargetsTargetIdSiteVerify401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdSiteVerify403ApplicationJson)
    ], PostTargetsTargetIdSiteVerifyResponse.prototype, "postTargetsTargetIdSiteVerify403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdSiteVerify404ApplicationJson)
    ], PostTargetsTargetIdSiteVerifyResponse.prototype, "postTargetsTargetIdSiteVerify404ApplicationJSONObject", void 0);
    return PostTargetsTargetIdSiteVerifyResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdSiteVerifyResponse = PostTargetsTargetIdSiteVerifyResponse;

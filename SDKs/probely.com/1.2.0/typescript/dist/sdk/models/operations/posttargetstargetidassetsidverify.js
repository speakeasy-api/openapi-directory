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
exports.PostTargetsTargetIdAssetsIdVerifyResponse = exports.PostTargetsTargetIdAssetsIdVerifyRequest = exports.PostTargetsTargetIdAssetsIdVerify404ApplicationJson = exports.PostTargetsTargetIdAssetsIdVerify403ApplicationJson = exports.PostTargetsTargetIdAssetsIdVerify401ApplicationJson = exports.PostTargetsTargetIdAssetsIdVerify400ApplicationJson = exports.PostTargetsTargetIdAssetsIdVerify200ApplicationJson = exports.PostTargetsTargetIdAssetsIdVerifyRequestBody = exports.PostTargetsTargetIdAssetsIdVerifyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargetsTargetIdAssetsIdVerifyPathParams = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsIdVerifyPathParams, _super);
    function PostTargetsTargetIdAssetsIdVerifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsIdVerifyPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsIdVerifyPathParams.prototype, "targetId", void 0);
    return PostTargetsTargetIdAssetsIdVerifyPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsIdVerifyPathParams = PostTargetsTargetIdAssetsIdVerifyPathParams;
var PostTargetsTargetIdAssetsIdVerifyRequestBody = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsIdVerifyRequestBody, _super);
    function PostTargetsTargetIdAssetsIdVerifyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsIdVerifyRequestBody.prototype, "type", void 0);
    return PostTargetsTargetIdAssetsIdVerifyRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsIdVerifyRequestBody = PostTargetsTargetIdAssetsIdVerifyRequestBody;
var PostTargetsTargetIdAssetsIdVerify200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsIdVerify200ApplicationJson, _super);
    function PostTargetsTargetIdAssetsIdVerify200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsIdVerify200ApplicationJson.prototype, "message", void 0);
    return PostTargetsTargetIdAssetsIdVerify200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsIdVerify200ApplicationJson = PostTargetsTargetIdAssetsIdVerify200ApplicationJson;
var PostTargetsTargetIdAssetsIdVerify400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsIdVerify400ApplicationJson, _super);
    function PostTargetsTargetIdAssetsIdVerify400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsIdVerify400ApplicationJson.prototype, "error", void 0);
    return PostTargetsTargetIdAssetsIdVerify400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsIdVerify400ApplicationJson = PostTargetsTargetIdAssetsIdVerify400ApplicationJson;
var PostTargetsTargetIdAssetsIdVerify401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsIdVerify401ApplicationJson, _super);
    function PostTargetsTargetIdAssetsIdVerify401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsIdVerify401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdAssetsIdVerify401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsIdVerify401ApplicationJson = PostTargetsTargetIdAssetsIdVerify401ApplicationJson;
var PostTargetsTargetIdAssetsIdVerify403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsIdVerify403ApplicationJson, _super);
    function PostTargetsTargetIdAssetsIdVerify403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsIdVerify403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdAssetsIdVerify403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsIdVerify403ApplicationJson = PostTargetsTargetIdAssetsIdVerify403ApplicationJson;
var PostTargetsTargetIdAssetsIdVerify404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsIdVerify404ApplicationJson, _super);
    function PostTargetsTargetIdAssetsIdVerify404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsIdVerify404ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdAssetsIdVerify404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsIdVerify404ApplicationJson = PostTargetsTargetIdAssetsIdVerify404ApplicationJson;
var PostTargetsTargetIdAssetsIdVerifyRequest = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsIdVerifyRequest, _super);
    function PostTargetsTargetIdAssetsIdVerifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssetsIdVerifyPathParams)
    ], PostTargetsTargetIdAssetsIdVerifyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTargetsTargetIdAssetsIdVerifyRequestBody)
    ], PostTargetsTargetIdAssetsIdVerifyRequest.prototype, "request", void 0);
    return PostTargetsTargetIdAssetsIdVerifyRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsIdVerifyRequest = PostTargetsTargetIdAssetsIdVerifyRequest;
var PostTargetsTargetIdAssetsIdVerifyResponse = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdAssetsIdVerifyResponse, _super);
    function PostTargetsTargetIdAssetsIdVerifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsTargetIdAssetsIdVerifyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsTargetIdAssetsIdVerifyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssetsIdVerify200ApplicationJson)
    ], PostTargetsTargetIdAssetsIdVerifyResponse.prototype, "postTargetsTargetIdAssetsIdVerify200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssetsIdVerify400ApplicationJson)
    ], PostTargetsTargetIdAssetsIdVerifyResponse.prototype, "postTargetsTargetIdAssetsIdVerify400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssetsIdVerify401ApplicationJson)
    ], PostTargetsTargetIdAssetsIdVerifyResponse.prototype, "postTargetsTargetIdAssetsIdVerify401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssetsIdVerify403ApplicationJson)
    ], PostTargetsTargetIdAssetsIdVerifyResponse.prototype, "postTargetsTargetIdAssetsIdVerify403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdAssetsIdVerify404ApplicationJson)
    ], PostTargetsTargetIdAssetsIdVerifyResponse.prototype, "postTargetsTargetIdAssetsIdVerify404ApplicationJSONObject", void 0);
    return PostTargetsTargetIdAssetsIdVerifyResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdAssetsIdVerifyResponse = PostTargetsTargetIdAssetsIdVerifyResponse;

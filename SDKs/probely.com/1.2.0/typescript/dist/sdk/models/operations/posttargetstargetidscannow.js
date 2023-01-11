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
exports.PostTargetsTargetIdScanNowResponse = exports.PostTargetsTargetIdScanNowRequest = exports.PostTargetsTargetIdScanNow404ApplicationJson = exports.PostTargetsTargetIdScanNow403ApplicationJson = exports.PostTargetsTargetIdScanNow401ApplicationJson = exports.PostTargetsTargetIdScanNow400ApplicationJson = exports.PostTargetsTargetIdScanNowRequestBody = exports.PostTargetsTargetIdScanNowRequestBodyScanProfileEnum = exports.PostTargetsTargetIdScanNowPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargetsTargetIdScanNowPathParams = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScanNowPathParams, _super);
    function PostTargetsTargetIdScanNowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScanNowPathParams.prototype, "targetId", void 0);
    return PostTargetsTargetIdScanNowPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScanNowPathParams = PostTargetsTargetIdScanNowPathParams;
var PostTargetsTargetIdScanNowRequestBodyScanProfileEnum;
(function (PostTargetsTargetIdScanNowRequestBodyScanProfileEnum) {
    PostTargetsTargetIdScanNowRequestBodyScanProfileEnum["Safe"] = "safe";
    PostTargetsTargetIdScanNowRequestBodyScanProfileEnum["Normal"] = "normal";
    PostTargetsTargetIdScanNowRequestBodyScanProfileEnum["Full"] = "full";
    PostTargetsTargetIdScanNowRequestBodyScanProfileEnum["Lightning"] = "lightning";
})(PostTargetsTargetIdScanNowRequestBodyScanProfileEnum = exports.PostTargetsTargetIdScanNowRequestBodyScanProfileEnum || (exports.PostTargetsTargetIdScanNowRequestBodyScanProfileEnum = {}));
var PostTargetsTargetIdScanNowRequestBody = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScanNowRequestBody, _super);
    function PostTargetsTargetIdScanNowRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scan_profile" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScanNowRequestBody.prototype, "scanProfile", void 0);
    return PostTargetsTargetIdScanNowRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScanNowRequestBody = PostTargetsTargetIdScanNowRequestBody;
var PostTargetsTargetIdScanNow400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScanNow400ApplicationJson, _super);
    function PostTargetsTargetIdScanNow400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScanNow400ApplicationJson.prototype, "error", void 0);
    return PostTargetsTargetIdScanNow400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScanNow400ApplicationJson = PostTargetsTargetIdScanNow400ApplicationJson;
var PostTargetsTargetIdScanNow401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScanNow401ApplicationJson, _super);
    function PostTargetsTargetIdScanNow401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScanNow401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdScanNow401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScanNow401ApplicationJson = PostTargetsTargetIdScanNow401ApplicationJson;
var PostTargetsTargetIdScanNow403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScanNow403ApplicationJson, _super);
    function PostTargetsTargetIdScanNow403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScanNow403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdScanNow403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScanNow403ApplicationJson = PostTargetsTargetIdScanNow403ApplicationJson;
var PostTargetsTargetIdScanNow404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScanNow404ApplicationJson, _super);
    function PostTargetsTargetIdScanNow404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScanNow404ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdScanNow404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScanNow404ApplicationJson = PostTargetsTargetIdScanNow404ApplicationJson;
var PostTargetsTargetIdScanNowRequest = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScanNowRequest, _super);
    function PostTargetsTargetIdScanNowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScanNowPathParams)
    ], PostTargetsTargetIdScanNowRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTargetsTargetIdScanNowRequestBody)
    ], PostTargetsTargetIdScanNowRequest.prototype, "request", void 0);
    return PostTargetsTargetIdScanNowRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScanNowRequest = PostTargetsTargetIdScanNowRequest;
var PostTargetsTargetIdScanNowResponse = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScanNowResponse, _super);
    function PostTargetsTargetIdScanNowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScanNowResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Scan)
    ], PostTargetsTargetIdScanNowResponse.prototype, "scan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsTargetIdScanNowResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScanNow400ApplicationJson)
    ], PostTargetsTargetIdScanNowResponse.prototype, "postTargetsTargetIdScanNow400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScanNow401ApplicationJson)
    ], PostTargetsTargetIdScanNowResponse.prototype, "postTargetsTargetIdScanNow401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScanNow403ApplicationJson)
    ], PostTargetsTargetIdScanNowResponse.prototype, "postTargetsTargetIdScanNow403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScanNow404ApplicationJson)
    ], PostTargetsTargetIdScanNowResponse.prototype, "postTargetsTargetIdScanNow404ApplicationJSONObject", void 0);
    return PostTargetsTargetIdScanNowResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScanNowResponse = PostTargetsTargetIdScanNowResponse;

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
exports.PostAuthObtainResponse = exports.PostAuthObtainRequest = exports.PostAuthObtain500ApplicationJson = exports.PostAuthObtain400ApplicationJson = exports.PostAuthObtain200ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostAuthObtain200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthObtain200ApplicationJson, _super);
    function PostAuthObtain200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostAuthObtain200ApplicationJson.prototype, "token", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], PostAuthObtain200ApplicationJson.prototype, "ttl", void 0);
    return PostAuthObtain200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAuthObtain200ApplicationJson = PostAuthObtain200ApplicationJson;
var PostAuthObtain400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthObtain400ApplicationJson, _super);
    function PostAuthObtain400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostAuthObtain400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostAuthObtain400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostAuthObtain400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAuthObtain400ApplicationJson = PostAuthObtain400ApplicationJson;
var PostAuthObtain500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthObtain500ApplicationJson, _super);
    function PostAuthObtain500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostAuthObtain500ApplicationJson.prototype, "detail", void 0);
    return PostAuthObtain500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAuthObtain500ApplicationJson = PostAuthObtain500ApplicationJson;
var PostAuthObtainRequest = /** @class */ (function (_super) {
    __extends(PostAuthObtainRequest, _super);
    function PostAuthObtainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Login)
    ], PostAuthObtainRequest.prototype, "request", void 0);
    return PostAuthObtainRequest;
}(utils_1.SpeakeasyBase));
exports.PostAuthObtainRequest = PostAuthObtainRequest;
var PostAuthObtainResponse = /** @class */ (function (_super) {
    __extends(PostAuthObtainResponse, _super);
    function PostAuthObtainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAuthObtainResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAuthObtainResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthObtain200ApplicationJson)
    ], PostAuthObtainResponse.prototype, "postAuthObtain200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthObtain400ApplicationJson)
    ], PostAuthObtainResponse.prototype, "postAuthObtain400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthObtain500ApplicationJson)
    ], PostAuthObtainResponse.prototype, "postAuthObtain500ApplicationJSONObject", void 0);
    return PostAuthObtainResponse;
}(utils_1.SpeakeasyBase));
exports.PostAuthObtainResponse = PostAuthObtainResponse;

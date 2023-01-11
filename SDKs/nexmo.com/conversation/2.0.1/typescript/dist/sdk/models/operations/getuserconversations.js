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
exports.GetuserConversationsResponse = exports.GetuserConversationsRequest = exports.GetuserConversations200ApplicationJson = exports.GetuserConversations200ApplicationJsonTimestamp = exports.GetuserConversationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetuserConversationsPathParams = /** @class */ (function (_super) {
    __extends(GetuserConversationsPathParams, _super);
    function GetuserConversationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], GetuserConversationsPathParams.prototype, "userId", void 0);
    return GetuserConversationsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetuserConversationsPathParams = GetuserConversationsPathParams;
var GetuserConversations200ApplicationJsonTimestamp = /** @class */ (function (_super) {
    __extends(GetuserConversations200ApplicationJsonTimestamp, _super);
    function GetuserConversations200ApplicationJsonTimestamp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetuserConversations200ApplicationJsonTimestamp.prototype, "created", void 0);
    return GetuserConversations200ApplicationJsonTimestamp;
}(utils_1.SpeakeasyBase));
exports.GetuserConversations200ApplicationJsonTimestamp = GetuserConversations200ApplicationJsonTimestamp;
var GetuserConversations200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetuserConversations200ApplicationJson, _super);
    function GetuserConversations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetuserConversations200ApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetuserConversations200ApplicationJson.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetuserConversations200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], GetuserConversations200ApplicationJson.prototype, "imageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=member_id" }),
        __metadata("design:type", String)
    ], GetuserConversations200ApplicationJson.prototype, "memberId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetuserConversations200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sequence_number" }),
        __metadata("design:type", Number)
    ], GetuserConversations200ApplicationJson.prototype, "sequenceNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GetuserConversations200ApplicationJson.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", GetuserConversations200ApplicationJsonTimestamp)
    ], GetuserConversations200ApplicationJson.prototype, "timestamp", void 0);
    return GetuserConversations200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetuserConversations200ApplicationJson = GetuserConversations200ApplicationJson;
var GetuserConversationsRequest = /** @class */ (function (_super) {
    __extends(GetuserConversationsRequest, _super);
    function GetuserConversationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetuserConversationsPathParams)
    ], GetuserConversationsRequest.prototype, "pathParams", void 0);
    return GetuserConversationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetuserConversationsRequest = GetuserConversationsRequest;
var GetuserConversationsResponse = /** @class */ (function (_super) {
    __extends(GetuserConversationsResponse, _super);
    function GetuserConversationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetuserConversationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetuserConversationsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: GetuserConversations200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetuserConversationsResponse.prototype, "getuserConversations200ApplicationJSONObjects", void 0);
    return GetuserConversationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetuserConversationsResponse = GetuserConversationsResponse;

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
exports.RetrieveConversationResponse = exports.RetrieveConversationRequest = exports.RetrieveConversation200ApplicationJson = exports.RetrieveConversation200ApplicationJsonProperties = exports.RetrieveConversation200ApplicationJsonMembers = exports.RetrieveConversationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RetrieveConversationPathParams = /** @class */ (function (_super) {
    __extends(RetrieveConversationPathParams, _super);
    function RetrieveConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=conversation_id" }),
        __metadata("design:type", String)
    ], RetrieveConversationPathParams.prototype, "conversationId", void 0);
    return RetrieveConversationPathParams;
}(utils_1.SpeakeasyBase));
exports.RetrieveConversationPathParams = RetrieveConversationPathParams;
var RetrieveConversation200ApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(RetrieveConversation200ApplicationJsonMembers, _super);
    function RetrieveConversation200ApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", shared.Channel)
    ], RetrieveConversation200ApplicationJsonMembers.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=initiator" }),
        __metadata("design:type", shared.Initiator)
    ], RetrieveConversation200ApplicationJsonMembers.prototype, "initiator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=member_id" }),
        __metadata("design:type", String)
    ], RetrieveConversation200ApplicationJsonMembers.prototype, "memberId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveConversation200ApplicationJsonMembers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], RetrieveConversation200ApplicationJsonMembers.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", shared.TimestampResMember)
    ], RetrieveConversation200ApplicationJsonMembers.prototype, "timestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], RetrieveConversation200ApplicationJsonMembers.prototype, "userId", void 0);
    return RetrieveConversation200ApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.RetrieveConversation200ApplicationJsonMembers = RetrieveConversation200ApplicationJsonMembers;
var RetrieveConversation200ApplicationJsonProperties = /** @class */ (function (_super) {
    __extends(RetrieveConversation200ApplicationJsonProperties, _super);
    function RetrieveConversation200ApplicationJsonProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video" }),
        __metadata("design:type", Boolean)
    ], RetrieveConversation200ApplicationJsonProperties.prototype, "video", void 0);
    return RetrieveConversation200ApplicationJsonProperties;
}(utils_1.SpeakeasyBase));
exports.RetrieveConversation200ApplicationJsonProperties = RetrieveConversation200ApplicationJsonProperties;
// RetrieveConversation200ApplicationJson
/**
 * Conversation Object
**/
var RetrieveConversation200ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveConversation200ApplicationJson, _super);
    function RetrieveConversation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", shared.LinksConversation)
    ], RetrieveConversation200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_key" }),
        __metadata("design:type", String)
    ], RetrieveConversation200ApplicationJson.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], RetrieveConversation200ApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: RetrieveConversation200ApplicationJsonMembers }),
        __metadata("design:type", Array)
    ], RetrieveConversation200ApplicationJson.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveConversation200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numbers" }),
        __metadata("design:type", Object)
    ], RetrieveConversation200ApplicationJson.prototype, "numbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", RetrieveConversation200ApplicationJsonProperties)
    ], RetrieveConversation200ApplicationJson.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sequence_number" }),
        __metadata("design:type", String)
    ], RetrieveConversation200ApplicationJson.prototype, "sequenceNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", shared.TimestampResConversation)
    ], RetrieveConversation200ApplicationJson.prototype, "timestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], RetrieveConversation200ApplicationJson.prototype, "uuid", void 0);
    return RetrieveConversation200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RetrieveConversation200ApplicationJson = RetrieveConversation200ApplicationJson;
var RetrieveConversationRequest = /** @class */ (function (_super) {
    __extends(RetrieveConversationRequest, _super);
    function RetrieveConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveConversationPathParams)
    ], RetrieveConversationRequest.prototype, "pathParams", void 0);
    return RetrieveConversationRequest;
}(utils_1.SpeakeasyBase));
exports.RetrieveConversationRequest = RetrieveConversationRequest;
var RetrieveConversationResponse = /** @class */ (function (_super) {
    __extends(RetrieveConversationResponse, _super);
    function RetrieveConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RetrieveConversationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RetrieveConversationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveConversation200ApplicationJson)
    ], RetrieveConversationResponse.prototype, "retrieveConversation200ApplicationJSONObject", void 0);
    return RetrieveConversationResponse;
}(utils_1.SpeakeasyBase));
exports.RetrieveConversationResponse = RetrieveConversationResponse;

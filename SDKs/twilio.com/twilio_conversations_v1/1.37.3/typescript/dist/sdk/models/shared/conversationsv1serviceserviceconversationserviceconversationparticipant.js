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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var ConversationsV1ServiceServiceConversationServiceConversationParticipant = /** @class */ (function (_super) {
    __extends(ConversationsV1ServiceServiceConversationServiceConversationParticipant, _super);
    function ConversationsV1ServiceServiceConversationServiceConversationParticipant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chat_service_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "chatServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "conversationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_read_message_index" }),
        __metadata("design:type", Number)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "lastReadMessageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_read_timestamp" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "lastReadTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messaging_binding" }),
        __metadata("design:type", Object)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "messagingBinding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "roleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConversationServiceConversationParticipant.prototype, "url", void 0);
    return ConversationsV1ServiceServiceConversationServiceConversationParticipant;
}(SpeakeasyBase));
export { ConversationsV1ServiceServiceConversationServiceConversationParticipant };

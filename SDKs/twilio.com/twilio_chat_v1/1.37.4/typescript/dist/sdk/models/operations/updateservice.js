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
exports.UpdateServiceResponse = exports.UpdateServiceRequest = exports.UpdateServiceSecurity = exports.UpdateServiceUpdateServiceRequest = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhookMethodEnum = exports.UpdateServicePathParams = exports.UpdateServiceServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateServiceServerList = [
    "https://chat.twilio.com",
];
var UpdateServicePathParams = /** @class */ (function (_super) {
    __extends(UpdateServicePathParams, _super);
    function UpdateServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateServicePathParams.prototype, "sid", void 0);
    return UpdateServicePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateServicePathParams = UpdateServicePathParams;
var UpdateServiceUpdateServiceRequestWebhookMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhookMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhookMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhookMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhookMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum = {}));
var UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum = exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum || (exports.UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum = {}));
var UpdateServiceUpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceUpdateServiceRequest, _super);
    function UpdateServiceUpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ConsumptionReportInterval;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "consumptionReportInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DefaultChannelCreatorRoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultChannelCreatorRoleSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DefaultChannelRoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultChannelRoleSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DefaultServiceRoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultServiceRoleSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Limits.ChannelMembers;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "limitsChannelMembers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Limits.UserChannels;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "limitsUserChannels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Notifications.AddedToChannel.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsAddedToChannelEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Notifications.AddedToChannel.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsAddedToChannelTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Notifications.InvitedToChannel.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsInvitedToChannelEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Notifications.InvitedToChannel.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsInvitedToChannelTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Notifications.NewMessage.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsNewMessageEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Notifications.NewMessage.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsNewMessageTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Notifications.RemovedFromChannel.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsRemovedFromChannelEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Notifications.RemovedFromChannel.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsRemovedFromChannelTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=PostWebhookUrl;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "postWebhookUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=PreWebhookUrl;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "preWebhookUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ReachabilityEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "reachabilityEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ReadStatusEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "readStatusEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=TypingIndicatorTimeout;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "typingIndicatorTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=WebhookFilters;" }),
        __metadata("design:type", Array)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhookFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=WebhookMethod;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhookMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelAdd.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelAddMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelAdd.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelAddUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelAdded.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelAddedMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelAdded.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelAddedUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelDestroy.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelDestroyMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelDestroy.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelDestroyUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelDestroyed.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelDestroyedMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelDestroyed.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelDestroyedUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelUpdate.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelUpdateMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelUpdate.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelUpdateUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelUpdated.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelUpdatedMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnChannelUpdated.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnChannelUpdatedUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMemberAdd.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMemberAddMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMemberAdd.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMemberAddUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMemberAdded.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMemberAddedMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMemberAdded.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMemberAddedUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMemberRemove.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMemberRemoveMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMemberRemove.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMemberRemoveUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMemberRemoved.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMemberRemovedMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMemberRemoved.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMemberRemovedUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageRemove.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageRemoveMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageRemove.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageRemoveUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageRemoved.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageRemovedMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageRemoved.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageRemovedUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageSend.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageSendMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageSend.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageSendUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageSent.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageSentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageSent.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageSentUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageUpdate.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageUpdateMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageUpdate.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageUpdateUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageUpdated.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageUpdatedMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhooks.OnMessageUpdated.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhooksOnMessageUpdatedUrl", void 0);
    return UpdateServiceUpdateServiceRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateServiceUpdateServiceRequest = UpdateServiceUpdateServiceRequest;
var UpdateServiceSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceSecurity, _super);
    function UpdateServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateServiceSecurity = UpdateServiceSecurity;
var UpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceRequest, _super);
    function UpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateServiceRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateServicePathParams)
    ], UpdateServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceUpdateServiceRequest)
    ], UpdateServiceRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateServiceSecurity)
    ], UpdateServiceRequest.prototype, "security", void 0);
    return UpdateServiceRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateServiceRequest = UpdateServiceRequest;
var UpdateServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceResponse, _super);
    function UpdateServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateServiceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ChatV1Service)
    ], UpdateServiceResponse.prototype, "chatV1Service", void 0);
    return UpdateServiceResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateServiceResponse = UpdateServiceResponse;

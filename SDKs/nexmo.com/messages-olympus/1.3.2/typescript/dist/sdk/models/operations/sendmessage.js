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
exports.SendMessageRequestBody4ImageMessageTypeEnum = exports.SendMessageRequestBody4ImageChannelEnum = exports.SendMessageRequestBody4Text = exports.SendMessageRequestBody4TextMessenger = exports.SendMessageRequestBody4TextMessengerCategoryEnum = exports.SendMessageRequestBody4TextMessageTypeEnum = exports.SendMessageRequestBody4TextChannelEnum = exports.SendMessageRequestBody3Custom = exports.SendMessageRequestBody3CustomMessageTypeEnum = exports.SendMessageRequestBody3CustomChannelEnum = exports.SendMessageRequestBody3Template = exports.SendMessageRequestBody3TemplateWhatsapp = exports.SendMessageRequestBody3TemplateWhatsappPolicyEnum = exports.SendMessageRequestBody3TemplateTemplate = exports.SendMessageRequestBody3TemplateMessageTypeEnum = exports.SendMessageRequestBody3TemplateChannelEnum = exports.SendMessageRequestBody3File = exports.SendMessageRequestBody3FileMessageTypeEnum = exports.SendMessageRequestBody3FileChannelEnum = exports.SendMessageRequestBody3Video = exports.SendMessageRequestBody3VideoMessageTypeEnum = exports.SendMessageRequestBody3VideoChannelEnum = exports.SendMessageRequestBody3Audio = exports.SendMessageRequestBody3AudioMessageTypeEnum = exports.SendMessageRequestBody3AudioChannelEnum = exports.SendMessageRequestBody3Image = exports.SendMessageRequestBody3ImageMessageTypeEnum = exports.SendMessageRequestBody3ImageChannelEnum = exports.SendMessageRequestBody3Location = exports.SendMessageRequestBody3LocationMessageTypeEnum = exports.SendMessageRequestBody3LocationLocation = exports.SendMessageRequestBody3LocationChannelEnum = exports.SendMessageRequestBody3Text = exports.SendMessageRequestBody3TextMessageTypeEnum = exports.SendMessageRequestBody3TextChannelEnum = exports.SendMessageRequestBody2Video = exports.SendMessageRequestBody2VideoMessageTypeEnum = exports.SendMessageRequestBody2VideoChannelEnum = exports.SendMessageRequestBody2Audio = exports.SendMessageRequestBody2AudioMessageTypeEnum = exports.SendMessageRequestBody2AudioChannelEnum = exports.SendMessageRequestBody2VCard = exports.SendMessageRequestBody2VCardMessageTypeEnum = exports.SendMessageRequestBody2VCardChannelEnum = exports.SendMessageRequestBody2Image = exports.SendMessageRequestBody2ImageMessageTypeEnum = exports.SendMessageRequestBody2ImageChannelEnum = exports.SendMessageRequestBody1Text = exports.SendMessageRequestBody1TextMessageTypeEnum = exports.SendMessageRequestBody1TextChannelEnum = void 0;
exports.SendMessageResponse = exports.SendMessageRequest = exports.SendMessageSecurity = exports.SendMessageRequestBody5Image = exports.SendMessageRequestBody5ImageViberService = exports.SendMessageRequestBody5ImageViberServiceCategoryEnum = exports.SendMessageRequestBody5ImageMessageTypeEnum = exports.SendMessageRequestBody5ImageChannelEnum = exports.SendMessageRequestBody5Text = exports.SendMessageRequestBody5TextViberService = exports.SendMessageRequestBody5TextViberServiceCategoryEnum = exports.SendMessageRequestBody5TextMessageTypeEnum = exports.SendMessageRequestBody5TextChannelEnum = exports.SendMessageRequestBody4File = exports.SendMessageRequestBody4FileMessenger = exports.SendMessageRequestBody4FileMessengerCategoryEnum = exports.SendMessageRequestBody4FileMessageTypeEnum = exports.SendMessageRequestBody4FileChannelEnum = exports.SendMessageRequestBody4Video = exports.SendMessageRequestBody4VideoMessenger = exports.SendMessageRequestBody4VideoMessengerCategoryEnum = exports.SendMessageRequestBody4VideoMessageTypeEnum = exports.SendMessageRequestBody4VideoChannelEnum = exports.SendMessageRequestBody4Audio = exports.SendMessageRequestBody4AudioMessenger = exports.SendMessageRequestBody4AudioMessengerCategoryEnum = exports.SendMessageRequestBody4AudioMessageTypeEnum = exports.SendMessageRequestBody4AudioChannelEnum = exports.SendMessageRequestBody4Image = exports.SendMessageRequestBody4ImageMessenger = exports.SendMessageRequestBody4ImageMessengerCategoryEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SendMessageRequestBody1TextChannelEnum;
(function (SendMessageRequestBody1TextChannelEnum) {
    SendMessageRequestBody1TextChannelEnum["Sms"] = "sms";
})(SendMessageRequestBody1TextChannelEnum = exports.SendMessageRequestBody1TextChannelEnum || (exports.SendMessageRequestBody1TextChannelEnum = {}));
var SendMessageRequestBody1TextMessageTypeEnum;
(function (SendMessageRequestBody1TextMessageTypeEnum) {
    SendMessageRequestBody1TextMessageTypeEnum["Text"] = "text";
})(SendMessageRequestBody1TextMessageTypeEnum = exports.SendMessageRequestBody1TextMessageTypeEnum || (exports.SendMessageRequestBody1TextMessageTypeEnum = {}));
// SendMessageRequestBody1Text
/**
 * The text of message to send.
**/
var SendMessageRequestBody1Text = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody1Text, _super);
    function SendMessageRequestBody1Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody1Text.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody1Text.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody1Text.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody1Text.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody1Text.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody1Text.prototype, "to", void 0);
    return SendMessageRequestBody1Text;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody1Text = SendMessageRequestBody1Text;
var SendMessageRequestBody2ImageChannelEnum;
(function (SendMessageRequestBody2ImageChannelEnum) {
    SendMessageRequestBody2ImageChannelEnum["Mms"] = "mms";
})(SendMessageRequestBody2ImageChannelEnum = exports.SendMessageRequestBody2ImageChannelEnum || (exports.SendMessageRequestBody2ImageChannelEnum = {}));
var SendMessageRequestBody2ImageMessageTypeEnum;
(function (SendMessageRequestBody2ImageMessageTypeEnum) {
    SendMessageRequestBody2ImageMessageTypeEnum["Image"] = "image";
})(SendMessageRequestBody2ImageMessageTypeEnum = exports.SendMessageRequestBody2ImageMessageTypeEnum || (exports.SendMessageRequestBody2ImageMessageTypeEnum = {}));
var SendMessageRequestBody2Image = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody2Image, _super);
    function SendMessageRequestBody2Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Image.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Image.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Image.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody2Image.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Image.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Image.prototype, "to", void 0);
    return SendMessageRequestBody2Image;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody2Image = SendMessageRequestBody2Image;
var SendMessageRequestBody2VCardChannelEnum;
(function (SendMessageRequestBody2VCardChannelEnum) {
    SendMessageRequestBody2VCardChannelEnum["Mms"] = "mms";
})(SendMessageRequestBody2VCardChannelEnum = exports.SendMessageRequestBody2VCardChannelEnum || (exports.SendMessageRequestBody2VCardChannelEnum = {}));
var SendMessageRequestBody2VCardMessageTypeEnum;
(function (SendMessageRequestBody2VCardMessageTypeEnum) {
    SendMessageRequestBody2VCardMessageTypeEnum["Vcard"] = "vcard";
})(SendMessageRequestBody2VCardMessageTypeEnum = exports.SendMessageRequestBody2VCardMessageTypeEnum || (exports.SendMessageRequestBody2VCardMessageTypeEnum = {}));
var SendMessageRequestBody2VCard = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody2VCard, _super);
    function SendMessageRequestBody2VCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2VCard.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2VCard.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2VCard.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2VCard.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2VCard.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vcard" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody2VCard.prototype, "vcard", void 0);
    return SendMessageRequestBody2VCard;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody2VCard = SendMessageRequestBody2VCard;
var SendMessageRequestBody2AudioChannelEnum;
(function (SendMessageRequestBody2AudioChannelEnum) {
    SendMessageRequestBody2AudioChannelEnum["Mms"] = "mms";
})(SendMessageRequestBody2AudioChannelEnum = exports.SendMessageRequestBody2AudioChannelEnum || (exports.SendMessageRequestBody2AudioChannelEnum = {}));
var SendMessageRequestBody2AudioMessageTypeEnum;
(function (SendMessageRequestBody2AudioMessageTypeEnum) {
    SendMessageRequestBody2AudioMessageTypeEnum["Audio"] = "audio";
})(SendMessageRequestBody2AudioMessageTypeEnum = exports.SendMessageRequestBody2AudioMessageTypeEnum || (exports.SendMessageRequestBody2AudioMessageTypeEnum = {}));
var SendMessageRequestBody2Audio = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody2Audio, _super);
    function SendMessageRequestBody2Audio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody2Audio.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Audio.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Audio.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Audio.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Audio.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Audio.prototype, "to", void 0);
    return SendMessageRequestBody2Audio;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody2Audio = SendMessageRequestBody2Audio;
var SendMessageRequestBody2VideoChannelEnum;
(function (SendMessageRequestBody2VideoChannelEnum) {
    SendMessageRequestBody2VideoChannelEnum["Mms"] = "mms";
})(SendMessageRequestBody2VideoChannelEnum = exports.SendMessageRequestBody2VideoChannelEnum || (exports.SendMessageRequestBody2VideoChannelEnum = {}));
var SendMessageRequestBody2VideoMessageTypeEnum;
(function (SendMessageRequestBody2VideoMessageTypeEnum) {
    SendMessageRequestBody2VideoMessageTypeEnum["Video"] = "video";
})(SendMessageRequestBody2VideoMessageTypeEnum = exports.SendMessageRequestBody2VideoMessageTypeEnum || (exports.SendMessageRequestBody2VideoMessageTypeEnum = {}));
var SendMessageRequestBody2Video = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody2Video, _super);
    function SendMessageRequestBody2Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Video.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Video.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Video.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Video.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody2Video.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody2Video.prototype, "video", void 0);
    return SendMessageRequestBody2Video;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody2Video = SendMessageRequestBody2Video;
var SendMessageRequestBody3TextChannelEnum;
(function (SendMessageRequestBody3TextChannelEnum) {
    SendMessageRequestBody3TextChannelEnum["Whatsapp"] = "whatsapp";
})(SendMessageRequestBody3TextChannelEnum = exports.SendMessageRequestBody3TextChannelEnum || (exports.SendMessageRequestBody3TextChannelEnum = {}));
var SendMessageRequestBody3TextMessageTypeEnum;
(function (SendMessageRequestBody3TextMessageTypeEnum) {
    SendMessageRequestBody3TextMessageTypeEnum["Text"] = "text";
})(SendMessageRequestBody3TextMessageTypeEnum = exports.SendMessageRequestBody3TextMessageTypeEnum || (exports.SendMessageRequestBody3TextMessageTypeEnum = {}));
// SendMessageRequestBody3Text
/**
 * The text of message to send.
**/
var SendMessageRequestBody3Text = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3Text, _super);
    function SendMessageRequestBody3Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Text.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Text.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Text.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Text.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody3Text.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Text.prototype, "to", void 0);
    return SendMessageRequestBody3Text;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3Text = SendMessageRequestBody3Text;
var SendMessageRequestBody3LocationChannelEnum;
(function (SendMessageRequestBody3LocationChannelEnum) {
    SendMessageRequestBody3LocationChannelEnum["Whatsapp"] = "whatsapp";
})(SendMessageRequestBody3LocationChannelEnum = exports.SendMessageRequestBody3LocationChannelEnum || (exports.SendMessageRequestBody3LocationChannelEnum = {}));
var SendMessageRequestBody3LocationLocation = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3LocationLocation, _super);
    function SendMessageRequestBody3LocationLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3LocationLocation.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], SendMessageRequestBody3LocationLocation.prototype, "lat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=long" }),
        __metadata("design:type", Number)
    ], SendMessageRequestBody3LocationLocation.prototype, "long", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3LocationLocation.prototype, "name", void 0);
    return SendMessageRequestBody3LocationLocation;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3LocationLocation = SendMessageRequestBody3LocationLocation;
var SendMessageRequestBody3LocationMessageTypeEnum;
(function (SendMessageRequestBody3LocationMessageTypeEnum) {
    SendMessageRequestBody3LocationMessageTypeEnum["Location"] = "location";
})(SendMessageRequestBody3LocationMessageTypeEnum = exports.SendMessageRequestBody3LocationMessageTypeEnum || (exports.SendMessageRequestBody3LocationMessageTypeEnum = {}));
var SendMessageRequestBody3Location = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3Location, _super);
    function SendMessageRequestBody3Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Location.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Location.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Location.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", SendMessageRequestBody3LocationLocation)
    ], SendMessageRequestBody3Location.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Location.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody3Location.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Location.prototype, "to", void 0);
    return SendMessageRequestBody3Location;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3Location = SendMessageRequestBody3Location;
var SendMessageRequestBody3ImageChannelEnum;
(function (SendMessageRequestBody3ImageChannelEnum) {
    SendMessageRequestBody3ImageChannelEnum["Whatsapp"] = "whatsapp";
})(SendMessageRequestBody3ImageChannelEnum = exports.SendMessageRequestBody3ImageChannelEnum || (exports.SendMessageRequestBody3ImageChannelEnum = {}));
var SendMessageRequestBody3ImageMessageTypeEnum;
(function (SendMessageRequestBody3ImageMessageTypeEnum) {
    SendMessageRequestBody3ImageMessageTypeEnum["Image"] = "image";
})(SendMessageRequestBody3ImageMessageTypeEnum = exports.SendMessageRequestBody3ImageMessageTypeEnum || (exports.SendMessageRequestBody3ImageMessageTypeEnum = {}));
var SendMessageRequestBody3Image = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3Image, _super);
    function SendMessageRequestBody3Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Image.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Image.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Image.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody3Image.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Image.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Image.prototype, "to", void 0);
    return SendMessageRequestBody3Image;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3Image = SendMessageRequestBody3Image;
var SendMessageRequestBody3AudioChannelEnum;
(function (SendMessageRequestBody3AudioChannelEnum) {
    SendMessageRequestBody3AudioChannelEnum["Whatsapp"] = "whatsapp";
})(SendMessageRequestBody3AudioChannelEnum = exports.SendMessageRequestBody3AudioChannelEnum || (exports.SendMessageRequestBody3AudioChannelEnum = {}));
var SendMessageRequestBody3AudioMessageTypeEnum;
(function (SendMessageRequestBody3AudioMessageTypeEnum) {
    SendMessageRequestBody3AudioMessageTypeEnum["Audio"] = "audio";
})(SendMessageRequestBody3AudioMessageTypeEnum = exports.SendMessageRequestBody3AudioMessageTypeEnum || (exports.SendMessageRequestBody3AudioMessageTypeEnum = {}));
var SendMessageRequestBody3Audio = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3Audio, _super);
    function SendMessageRequestBody3Audio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody3Audio.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Audio.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Audio.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Audio.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Audio.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Audio.prototype, "to", void 0);
    return SendMessageRequestBody3Audio;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3Audio = SendMessageRequestBody3Audio;
var SendMessageRequestBody3VideoChannelEnum;
(function (SendMessageRequestBody3VideoChannelEnum) {
    SendMessageRequestBody3VideoChannelEnum["Whatsapp"] = "whatsapp";
})(SendMessageRequestBody3VideoChannelEnum = exports.SendMessageRequestBody3VideoChannelEnum || (exports.SendMessageRequestBody3VideoChannelEnum = {}));
var SendMessageRequestBody3VideoMessageTypeEnum;
(function (SendMessageRequestBody3VideoMessageTypeEnum) {
    SendMessageRequestBody3VideoMessageTypeEnum["Video"] = "video";
})(SendMessageRequestBody3VideoMessageTypeEnum = exports.SendMessageRequestBody3VideoMessageTypeEnum || (exports.SendMessageRequestBody3VideoMessageTypeEnum = {}));
var SendMessageRequestBody3Video = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3Video, _super);
    function SendMessageRequestBody3Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Video.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Video.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Video.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Video.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Video.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody3Video.prototype, "video", void 0);
    return SendMessageRequestBody3Video;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3Video = SendMessageRequestBody3Video;
var SendMessageRequestBody3FileChannelEnum;
(function (SendMessageRequestBody3FileChannelEnum) {
    SendMessageRequestBody3FileChannelEnum["Whatsapp"] = "whatsapp";
})(SendMessageRequestBody3FileChannelEnum = exports.SendMessageRequestBody3FileChannelEnum || (exports.SendMessageRequestBody3FileChannelEnum = {}));
var SendMessageRequestBody3FileMessageTypeEnum;
(function (SendMessageRequestBody3FileMessageTypeEnum) {
    SendMessageRequestBody3FileMessageTypeEnum["File"] = "file";
})(SendMessageRequestBody3FileMessageTypeEnum = exports.SendMessageRequestBody3FileMessageTypeEnum || (exports.SendMessageRequestBody3FileMessageTypeEnum = {}));
var SendMessageRequestBody3File = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3File, _super);
    function SendMessageRequestBody3File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3File.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3File.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody3File.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3File.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3File.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3File.prototype, "to", void 0);
    return SendMessageRequestBody3File;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3File = SendMessageRequestBody3File;
var SendMessageRequestBody3TemplateChannelEnum;
(function (SendMessageRequestBody3TemplateChannelEnum) {
    SendMessageRequestBody3TemplateChannelEnum["Whatsapp"] = "whatsapp";
})(SendMessageRequestBody3TemplateChannelEnum = exports.SendMessageRequestBody3TemplateChannelEnum || (exports.SendMessageRequestBody3TemplateChannelEnum = {}));
var SendMessageRequestBody3TemplateMessageTypeEnum;
(function (SendMessageRequestBody3TemplateMessageTypeEnum) {
    SendMessageRequestBody3TemplateMessageTypeEnum["Template"] = "template";
})(SendMessageRequestBody3TemplateMessageTypeEnum = exports.SendMessageRequestBody3TemplateMessageTypeEnum || (exports.SendMessageRequestBody3TemplateMessageTypeEnum = {}));
var SendMessageRequestBody3TemplateTemplate = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3TemplateTemplate, _super);
    function SendMessageRequestBody3TemplateTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3TemplateTemplate.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters" }),
        __metadata("design:type", Array)
    ], SendMessageRequestBody3TemplateTemplate.prototype, "parameters", void 0);
    return SendMessageRequestBody3TemplateTemplate;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3TemplateTemplate = SendMessageRequestBody3TemplateTemplate;
var SendMessageRequestBody3TemplateWhatsappPolicyEnum;
(function (SendMessageRequestBody3TemplateWhatsappPolicyEnum) {
    SendMessageRequestBody3TemplateWhatsappPolicyEnum["Deterministic"] = "deterministic";
})(SendMessageRequestBody3TemplateWhatsappPolicyEnum = exports.SendMessageRequestBody3TemplateWhatsappPolicyEnum || (exports.SendMessageRequestBody3TemplateWhatsappPolicyEnum = {}));
var SendMessageRequestBody3TemplateWhatsapp = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3TemplateWhatsapp, _super);
    function SendMessageRequestBody3TemplateWhatsapp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3TemplateWhatsapp.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3TemplateWhatsapp.prototype, "policy", void 0);
    return SendMessageRequestBody3TemplateWhatsapp;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3TemplateWhatsapp = SendMessageRequestBody3TemplateWhatsapp;
var SendMessageRequestBody3Template = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3Template, _super);
    function SendMessageRequestBody3Template() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Template.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Template.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Template.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Template.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=template" }),
        __metadata("design:type", SendMessageRequestBody3TemplateTemplate)
    ], SendMessageRequestBody3Template.prototype, "template", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Template.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whatsapp" }),
        __metadata("design:type", SendMessageRequestBody3TemplateWhatsapp)
    ], SendMessageRequestBody3Template.prototype, "whatsapp", void 0);
    return SendMessageRequestBody3Template;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3Template = SendMessageRequestBody3Template;
var SendMessageRequestBody3CustomChannelEnum;
(function (SendMessageRequestBody3CustomChannelEnum) {
    SendMessageRequestBody3CustomChannelEnum["Whatsapp"] = "whatsapp";
})(SendMessageRequestBody3CustomChannelEnum = exports.SendMessageRequestBody3CustomChannelEnum || (exports.SendMessageRequestBody3CustomChannelEnum = {}));
var SendMessageRequestBody3CustomMessageTypeEnum;
(function (SendMessageRequestBody3CustomMessageTypeEnum) {
    SendMessageRequestBody3CustomMessageTypeEnum["Custom"] = "custom";
})(SendMessageRequestBody3CustomMessageTypeEnum = exports.SendMessageRequestBody3CustomMessageTypeEnum || (exports.SendMessageRequestBody3CustomMessageTypeEnum = {}));
var SendMessageRequestBody3Custom = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody3Custom, _super);
    function SendMessageRequestBody3Custom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Custom.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Custom.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody3Custom.prototype, "custom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Custom.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Custom.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody3Custom.prototype, "to", void 0);
    return SendMessageRequestBody3Custom;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody3Custom = SendMessageRequestBody3Custom;
var SendMessageRequestBody4TextChannelEnum;
(function (SendMessageRequestBody4TextChannelEnum) {
    SendMessageRequestBody4TextChannelEnum["Messenger"] = "messenger";
})(SendMessageRequestBody4TextChannelEnum = exports.SendMessageRequestBody4TextChannelEnum || (exports.SendMessageRequestBody4TextChannelEnum = {}));
var SendMessageRequestBody4TextMessageTypeEnum;
(function (SendMessageRequestBody4TextMessageTypeEnum) {
    SendMessageRequestBody4TextMessageTypeEnum["Text"] = "text";
})(SendMessageRequestBody4TextMessageTypeEnum = exports.SendMessageRequestBody4TextMessageTypeEnum || (exports.SendMessageRequestBody4TextMessageTypeEnum = {}));
var SendMessageRequestBody4TextMessengerCategoryEnum;
(function (SendMessageRequestBody4TextMessengerCategoryEnum) {
    SendMessageRequestBody4TextMessengerCategoryEnum["Response"] = "response";
    SendMessageRequestBody4TextMessengerCategoryEnum["Update"] = "update";
    SendMessageRequestBody4TextMessengerCategoryEnum["MessageTag"] = "message_tag";
})(SendMessageRequestBody4TextMessengerCategoryEnum = exports.SendMessageRequestBody4TextMessengerCategoryEnum || (exports.SendMessageRequestBody4TextMessengerCategoryEnum = {}));
var SendMessageRequestBody4TextMessenger = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody4TextMessenger, _super);
    function SendMessageRequestBody4TextMessenger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4TextMessenger.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4TextMessenger.prototype, "tag", void 0);
    return SendMessageRequestBody4TextMessenger;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody4TextMessenger = SendMessageRequestBody4TextMessenger;
// SendMessageRequestBody4Text
/**
 * The text of message to send.
**/
var SendMessageRequestBody4Text = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody4Text, _super);
    function SendMessageRequestBody4Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Text.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Text.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Text.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Text.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messenger" }),
        __metadata("design:type", SendMessageRequestBody4TextMessenger)
    ], SendMessageRequestBody4Text.prototype, "messenger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody4Text.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Text.prototype, "to", void 0);
    return SendMessageRequestBody4Text;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody4Text = SendMessageRequestBody4Text;
var SendMessageRequestBody4ImageChannelEnum;
(function (SendMessageRequestBody4ImageChannelEnum) {
    SendMessageRequestBody4ImageChannelEnum["Messenger"] = "messenger";
})(SendMessageRequestBody4ImageChannelEnum = exports.SendMessageRequestBody4ImageChannelEnum || (exports.SendMessageRequestBody4ImageChannelEnum = {}));
var SendMessageRequestBody4ImageMessageTypeEnum;
(function (SendMessageRequestBody4ImageMessageTypeEnum) {
    SendMessageRequestBody4ImageMessageTypeEnum["Image"] = "image";
})(SendMessageRequestBody4ImageMessageTypeEnum = exports.SendMessageRequestBody4ImageMessageTypeEnum || (exports.SendMessageRequestBody4ImageMessageTypeEnum = {}));
var SendMessageRequestBody4ImageMessengerCategoryEnum;
(function (SendMessageRequestBody4ImageMessengerCategoryEnum) {
    SendMessageRequestBody4ImageMessengerCategoryEnum["Response"] = "response";
    SendMessageRequestBody4ImageMessengerCategoryEnum["Update"] = "update";
    SendMessageRequestBody4ImageMessengerCategoryEnum["MessageTag"] = "message_tag";
})(SendMessageRequestBody4ImageMessengerCategoryEnum = exports.SendMessageRequestBody4ImageMessengerCategoryEnum || (exports.SendMessageRequestBody4ImageMessengerCategoryEnum = {}));
var SendMessageRequestBody4ImageMessenger = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody4ImageMessenger, _super);
    function SendMessageRequestBody4ImageMessenger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4ImageMessenger.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4ImageMessenger.prototype, "tag", void 0);
    return SendMessageRequestBody4ImageMessenger;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody4ImageMessenger = SendMessageRequestBody4ImageMessenger;
var SendMessageRequestBody4Image = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody4Image, _super);
    function SendMessageRequestBody4Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Image.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Image.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Image.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody4Image.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Image.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messenger" }),
        __metadata("design:type", SendMessageRequestBody4ImageMessenger)
    ], SendMessageRequestBody4Image.prototype, "messenger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Image.prototype, "to", void 0);
    return SendMessageRequestBody4Image;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody4Image = SendMessageRequestBody4Image;
var SendMessageRequestBody4AudioChannelEnum;
(function (SendMessageRequestBody4AudioChannelEnum) {
    SendMessageRequestBody4AudioChannelEnum["Messenger"] = "messenger";
})(SendMessageRequestBody4AudioChannelEnum = exports.SendMessageRequestBody4AudioChannelEnum || (exports.SendMessageRequestBody4AudioChannelEnum = {}));
var SendMessageRequestBody4AudioMessageTypeEnum;
(function (SendMessageRequestBody4AudioMessageTypeEnum) {
    SendMessageRequestBody4AudioMessageTypeEnum["Audio"] = "audio";
})(SendMessageRequestBody4AudioMessageTypeEnum = exports.SendMessageRequestBody4AudioMessageTypeEnum || (exports.SendMessageRequestBody4AudioMessageTypeEnum = {}));
var SendMessageRequestBody4AudioMessengerCategoryEnum;
(function (SendMessageRequestBody4AudioMessengerCategoryEnum) {
    SendMessageRequestBody4AudioMessengerCategoryEnum["Response"] = "response";
    SendMessageRequestBody4AudioMessengerCategoryEnum["Update"] = "update";
    SendMessageRequestBody4AudioMessengerCategoryEnum["MessageTag"] = "message_tag";
})(SendMessageRequestBody4AudioMessengerCategoryEnum = exports.SendMessageRequestBody4AudioMessengerCategoryEnum || (exports.SendMessageRequestBody4AudioMessengerCategoryEnum = {}));
var SendMessageRequestBody4AudioMessenger = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody4AudioMessenger, _super);
    function SendMessageRequestBody4AudioMessenger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4AudioMessenger.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4AudioMessenger.prototype, "tag", void 0);
    return SendMessageRequestBody4AudioMessenger;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody4AudioMessenger = SendMessageRequestBody4AudioMessenger;
var SendMessageRequestBody4Audio = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody4Audio, _super);
    function SendMessageRequestBody4Audio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody4Audio.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Audio.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Audio.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Audio.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Audio.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messenger" }),
        __metadata("design:type", SendMessageRequestBody4AudioMessenger)
    ], SendMessageRequestBody4Audio.prototype, "messenger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Audio.prototype, "to", void 0);
    return SendMessageRequestBody4Audio;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody4Audio = SendMessageRequestBody4Audio;
var SendMessageRequestBody4VideoChannelEnum;
(function (SendMessageRequestBody4VideoChannelEnum) {
    SendMessageRequestBody4VideoChannelEnum["Messenger"] = "messenger";
})(SendMessageRequestBody4VideoChannelEnum = exports.SendMessageRequestBody4VideoChannelEnum || (exports.SendMessageRequestBody4VideoChannelEnum = {}));
var SendMessageRequestBody4VideoMessageTypeEnum;
(function (SendMessageRequestBody4VideoMessageTypeEnum) {
    SendMessageRequestBody4VideoMessageTypeEnum["Video"] = "video";
})(SendMessageRequestBody4VideoMessageTypeEnum = exports.SendMessageRequestBody4VideoMessageTypeEnum || (exports.SendMessageRequestBody4VideoMessageTypeEnum = {}));
var SendMessageRequestBody4VideoMessengerCategoryEnum;
(function (SendMessageRequestBody4VideoMessengerCategoryEnum) {
    SendMessageRequestBody4VideoMessengerCategoryEnum["Response"] = "response";
    SendMessageRequestBody4VideoMessengerCategoryEnum["Update"] = "update";
    SendMessageRequestBody4VideoMessengerCategoryEnum["MessageTag"] = "message_tag";
})(SendMessageRequestBody4VideoMessengerCategoryEnum = exports.SendMessageRequestBody4VideoMessengerCategoryEnum || (exports.SendMessageRequestBody4VideoMessengerCategoryEnum = {}));
var SendMessageRequestBody4VideoMessenger = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody4VideoMessenger, _super);
    function SendMessageRequestBody4VideoMessenger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4VideoMessenger.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4VideoMessenger.prototype, "tag", void 0);
    return SendMessageRequestBody4VideoMessenger;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody4VideoMessenger = SendMessageRequestBody4VideoMessenger;
var SendMessageRequestBody4Video = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody4Video, _super);
    function SendMessageRequestBody4Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Video.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Video.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Video.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Video.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messenger" }),
        __metadata("design:type", SendMessageRequestBody4VideoMessenger)
    ], SendMessageRequestBody4Video.prototype, "messenger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4Video.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody4Video.prototype, "video", void 0);
    return SendMessageRequestBody4Video;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody4Video = SendMessageRequestBody4Video;
var SendMessageRequestBody4FileChannelEnum;
(function (SendMessageRequestBody4FileChannelEnum) {
    SendMessageRequestBody4FileChannelEnum["Messenger"] = "messenger";
})(SendMessageRequestBody4FileChannelEnum = exports.SendMessageRequestBody4FileChannelEnum || (exports.SendMessageRequestBody4FileChannelEnum = {}));
var SendMessageRequestBody4FileMessageTypeEnum;
(function (SendMessageRequestBody4FileMessageTypeEnum) {
    SendMessageRequestBody4FileMessageTypeEnum["File"] = "file";
})(SendMessageRequestBody4FileMessageTypeEnum = exports.SendMessageRequestBody4FileMessageTypeEnum || (exports.SendMessageRequestBody4FileMessageTypeEnum = {}));
var SendMessageRequestBody4FileMessengerCategoryEnum;
(function (SendMessageRequestBody4FileMessengerCategoryEnum) {
    SendMessageRequestBody4FileMessengerCategoryEnum["Response"] = "response";
    SendMessageRequestBody4FileMessengerCategoryEnum["Update"] = "update";
    SendMessageRequestBody4FileMessengerCategoryEnum["MessageTag"] = "message_tag";
})(SendMessageRequestBody4FileMessengerCategoryEnum = exports.SendMessageRequestBody4FileMessengerCategoryEnum || (exports.SendMessageRequestBody4FileMessengerCategoryEnum = {}));
var SendMessageRequestBody4FileMessenger = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody4FileMessenger, _super);
    function SendMessageRequestBody4FileMessenger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4FileMessenger.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4FileMessenger.prototype, "tag", void 0);
    return SendMessageRequestBody4FileMessenger;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody4FileMessenger = SendMessageRequestBody4FileMessenger;
var SendMessageRequestBody4File = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody4File, _super);
    function SendMessageRequestBody4File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4File.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4File.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody4File.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4File.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4File.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messenger" }),
        __metadata("design:type", SendMessageRequestBody4FileMessenger)
    ], SendMessageRequestBody4File.prototype, "messenger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody4File.prototype, "to", void 0);
    return SendMessageRequestBody4File;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody4File = SendMessageRequestBody4File;
var SendMessageRequestBody5TextChannelEnum;
(function (SendMessageRequestBody5TextChannelEnum) {
    SendMessageRequestBody5TextChannelEnum["ViberService"] = "viber_service";
})(SendMessageRequestBody5TextChannelEnum = exports.SendMessageRequestBody5TextChannelEnum || (exports.SendMessageRequestBody5TextChannelEnum = {}));
var SendMessageRequestBody5TextMessageTypeEnum;
(function (SendMessageRequestBody5TextMessageTypeEnum) {
    SendMessageRequestBody5TextMessageTypeEnum["Text"] = "text";
})(SendMessageRequestBody5TextMessageTypeEnum = exports.SendMessageRequestBody5TextMessageTypeEnum || (exports.SendMessageRequestBody5TextMessageTypeEnum = {}));
var SendMessageRequestBody5TextViberServiceCategoryEnum;
(function (SendMessageRequestBody5TextViberServiceCategoryEnum) {
    SendMessageRequestBody5TextViberServiceCategoryEnum["Transaction"] = "transaction";
    SendMessageRequestBody5TextViberServiceCategoryEnum["Promotion"] = "promotion";
})(SendMessageRequestBody5TextViberServiceCategoryEnum = exports.SendMessageRequestBody5TextViberServiceCategoryEnum || (exports.SendMessageRequestBody5TextViberServiceCategoryEnum = {}));
var SendMessageRequestBody5TextViberService = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody5TextViberService, _super);
    function SendMessageRequestBody5TextViberService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5TextViberService.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], SendMessageRequestBody5TextViberService.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5TextViberService.prototype, "type", void 0);
    return SendMessageRequestBody5TextViberService;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody5TextViberService = SendMessageRequestBody5TextViberService;
// SendMessageRequestBody5Text
/**
 * The text of message to send.
**/
var SendMessageRequestBody5Text = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody5Text, _super);
    function SendMessageRequestBody5Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5Text.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5Text.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5Text.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5Text.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody5Text.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5Text.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=viber_service" }),
        __metadata("design:type", SendMessageRequestBody5TextViberService)
    ], SendMessageRequestBody5Text.prototype, "viberService", void 0);
    return SendMessageRequestBody5Text;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody5Text = SendMessageRequestBody5Text;
var SendMessageRequestBody5ImageChannelEnum;
(function (SendMessageRequestBody5ImageChannelEnum) {
    SendMessageRequestBody5ImageChannelEnum["ViberService"] = "viber_service";
})(SendMessageRequestBody5ImageChannelEnum = exports.SendMessageRequestBody5ImageChannelEnum || (exports.SendMessageRequestBody5ImageChannelEnum = {}));
var SendMessageRequestBody5ImageMessageTypeEnum;
(function (SendMessageRequestBody5ImageMessageTypeEnum) {
    SendMessageRequestBody5ImageMessageTypeEnum["Image"] = "image";
})(SendMessageRequestBody5ImageMessageTypeEnum = exports.SendMessageRequestBody5ImageMessageTypeEnum || (exports.SendMessageRequestBody5ImageMessageTypeEnum = {}));
var SendMessageRequestBody5ImageViberServiceCategoryEnum;
(function (SendMessageRequestBody5ImageViberServiceCategoryEnum) {
    SendMessageRequestBody5ImageViberServiceCategoryEnum["Transaction"] = "transaction";
    SendMessageRequestBody5ImageViberServiceCategoryEnum["Promotion"] = "promotion";
})(SendMessageRequestBody5ImageViberServiceCategoryEnum = exports.SendMessageRequestBody5ImageViberServiceCategoryEnum || (exports.SendMessageRequestBody5ImageViberServiceCategoryEnum = {}));
var SendMessageRequestBody5ImageViberService = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody5ImageViberService, _super);
    function SendMessageRequestBody5ImageViberService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5ImageViberService.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], SendMessageRequestBody5ImageViberService.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5ImageViberService.prototype, "type", void 0);
    return SendMessageRequestBody5ImageViberService;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody5ImageViberService = SendMessageRequestBody5ImageViberService;
var SendMessageRequestBody5Image = /** @class */ (function (_super) {
    __extends(SendMessageRequestBody5Image, _super);
    function SendMessageRequestBody5Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5Image.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_ref" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5Image.prototype, "clientRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5Image.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", Object)
    ], SendMessageRequestBody5Image.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_type" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5Image.prototype, "messageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], SendMessageRequestBody5Image.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=viber_service" }),
        __metadata("design:type", SendMessageRequestBody5ImageViberService)
    ], SendMessageRequestBody5Image.prototype, "viberService", void 0);
    return SendMessageRequestBody5Image;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequestBody5Image = SendMessageRequestBody5Image;
var SendMessageSecurity = /** @class */ (function (_super) {
    __extends(SendMessageSecurity, _super);
    function SendMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], SendMessageSecurity.prototype, "bearerAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], SendMessageSecurity.prototype, "basicAuth", void 0);
    return SendMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.SendMessageSecurity = SendMessageSecurity;
var SendMessageRequest = /** @class */ (function (_super) {
    __extends(SendMessageRequest, _super);
    function SendMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], SendMessageRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendMessageSecurity)
    ], SendMessageRequest.prototype, "security", void 0);
    return SendMessageRequest;
}(utils_1.SpeakeasyBase));
exports.SendMessageRequest = SendMessageRequest;
var SendMessageResponse = /** @class */ (function (_super) {
    __extends(SendMessageResponse, _super);
    function SendMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SendMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorInternal)
    ], SendMessageResponse.prototype, "errorInternal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorPaymentRequired)
    ], SendMessageResponse.prototype, "errorPaymentRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorThrottled)
    ], SendMessageResponse.prototype, "errorThrottled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendMessageResponse.prototype, "sendMessage202ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendMessageResponse.prototype, "sendMessage401ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendMessageResponse.prototype, "sendMessage422ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SendMessageResponse.prototype, "statusCode", void 0);
    return SendMessageResponse;
}(utils_1.SpeakeasyBase));
exports.SendMessageResponse = SendMessageResponse;

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProperty = exports.MessagePropertyWhatsapp = exports.MessagePropertyWhatsappPolicyEnum = exports.MessagePropertyViberServiceMsg = exports.MessagePropertyViberServiceMsgCategoryEnum = exports.MessagePropertyMessenger = exports.MessagePropertyMessengerCategoryEnum = exports.MessagePropertyContent = exports.MessagePropertyContentTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var audioproperty_1 = require("./audioproperty");
var fileproperty_1 = require("./fileproperty");
var imageproperty_1 = require("./imageproperty");
var templateproperty_1 = require("./templateproperty");
var videoproperty_1 = require("./videoproperty");
var MessagePropertyContentTypeEnum;
(function (MessagePropertyContentTypeEnum) {
    MessagePropertyContentTypeEnum["Text"] = "text";
    MessagePropertyContentTypeEnum["Image"] = "image";
    MessagePropertyContentTypeEnum["Audio"] = "audio";
    MessagePropertyContentTypeEnum["Video"] = "video";
    MessagePropertyContentTypeEnum["File"] = "file";
    MessagePropertyContentTypeEnum["Template"] = "template";
    MessagePropertyContentTypeEnum["Custom"] = "custom";
})(MessagePropertyContentTypeEnum = exports.MessagePropertyContentTypeEnum || (exports.MessagePropertyContentTypeEnum = {}));
var MessagePropertyContent = /** @class */ (function (_super) {
    __extends(MessagePropertyContent, _super);
    function MessagePropertyContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", audioproperty_1.AudioProperty)
    ], MessagePropertyContent.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file" }),
        __metadata("design:type", fileproperty_1.FileProperty)
    ], MessagePropertyContent.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", imageproperty_1.ImageProperty)
    ], MessagePropertyContent.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=template" }),
        __metadata("design:type", templateproperty_1.TemplateProperty)
    ], MessagePropertyContent.prototype, "template", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], MessagePropertyContent.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MessagePropertyContent.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video" }),
        __metadata("design:type", videoproperty_1.VideoProperty)
    ], MessagePropertyContent.prototype, "video", void 0);
    return MessagePropertyContent;
}(utils_1.SpeakeasyBase));
exports.MessagePropertyContent = MessagePropertyContent;
var MessagePropertyMessengerCategoryEnum;
(function (MessagePropertyMessengerCategoryEnum) {
    MessagePropertyMessengerCategoryEnum["Response"] = "response";
    MessagePropertyMessengerCategoryEnum["Update"] = "update";
    MessagePropertyMessengerCategoryEnum["MessageTag"] = "message_tag";
})(MessagePropertyMessengerCategoryEnum = exports.MessagePropertyMessengerCategoryEnum || (exports.MessagePropertyMessengerCategoryEnum = {}));
var MessagePropertyMessenger = /** @class */ (function (_super) {
    __extends(MessagePropertyMessenger, _super);
    function MessagePropertyMessenger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], MessagePropertyMessenger.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], MessagePropertyMessenger.prototype, "tag", void 0);
    return MessagePropertyMessenger;
}(utils_1.SpeakeasyBase));
exports.MessagePropertyMessenger = MessagePropertyMessenger;
var MessagePropertyViberServiceMsgCategoryEnum;
(function (MessagePropertyViberServiceMsgCategoryEnum) {
    MessagePropertyViberServiceMsgCategoryEnum["Transaction"] = "transaction";
    MessagePropertyViberServiceMsgCategoryEnum["Promotion"] = "promotion";
})(MessagePropertyViberServiceMsgCategoryEnum = exports.MessagePropertyViberServiceMsgCategoryEnum || (exports.MessagePropertyViberServiceMsgCategoryEnum = {}));
var MessagePropertyViberServiceMsg = /** @class */ (function (_super) {
    __extends(MessagePropertyViberServiceMsg, _super);
    function MessagePropertyViberServiceMsg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], MessagePropertyViberServiceMsg.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], MessagePropertyViberServiceMsg.prototype, "ttl", void 0);
    return MessagePropertyViberServiceMsg;
}(utils_1.SpeakeasyBase));
exports.MessagePropertyViberServiceMsg = MessagePropertyViberServiceMsg;
var MessagePropertyWhatsappPolicyEnum;
(function (MessagePropertyWhatsappPolicyEnum) {
    MessagePropertyWhatsappPolicyEnum["Fallback"] = "fallback";
    MessagePropertyWhatsappPolicyEnum["Deterministic"] = "deterministic";
})(MessagePropertyWhatsappPolicyEnum = exports.MessagePropertyWhatsappPolicyEnum || (exports.MessagePropertyWhatsappPolicyEnum = {}));
var MessagePropertyWhatsapp = /** @class */ (function (_super) {
    __extends(MessagePropertyWhatsapp, _super);
    function MessagePropertyWhatsapp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], MessagePropertyWhatsapp.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], MessagePropertyWhatsapp.prototype, "policy", void 0);
    return MessagePropertyWhatsapp;
}(utils_1.SpeakeasyBase));
exports.MessagePropertyWhatsapp = MessagePropertyWhatsapp;
var MessageProperty = /** @class */ (function (_super) {
    __extends(MessageProperty, _super);
    function MessageProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", MessagePropertyContent)
    ], MessageProperty.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messenger" }),
        __metadata("design:type", MessagePropertyMessenger)
    ], MessageProperty.prototype, "messenger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=viber_service_msg" }),
        __metadata("design:type", MessagePropertyViberServiceMsg)
    ], MessageProperty.prototype, "viberServiceMsg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whatsapp" }),
        __metadata("design:type", MessagePropertyWhatsapp)
    ], MessageProperty.prototype, "whatsapp", void 0);
    return MessageProperty;
}(utils_1.SpeakeasyBase));
exports.MessageProperty = MessageProperty;

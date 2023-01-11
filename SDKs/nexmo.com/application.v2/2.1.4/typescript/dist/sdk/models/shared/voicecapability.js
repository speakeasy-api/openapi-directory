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
exports.VoiceCapability = exports.VoiceCapabilityWebhooks = exports.VoiceCapabilityWebhooksFallbackAnswerUrl = exports.VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum = exports.VoiceCapabilityWebhooksEventUrl = exports.VoiceCapabilityWebhooksEventUrlHttpMethodEnum = exports.VoiceCapabilityWebhooksAnswerUrl = exports.VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum = exports.VoiceCapabilityPayments = exports.VoiceCapabilityPaymentsGateways = exports.VoiceCapabilityPaymentsGatewaysModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var VoiceCapabilityPaymentsGatewaysModeEnum;
(function (VoiceCapabilityPaymentsGatewaysModeEnum) {
    VoiceCapabilityPaymentsGatewaysModeEnum["Test"] = "test";
    VoiceCapabilityPaymentsGatewaysModeEnum["Live"] = "live";
})(VoiceCapabilityPaymentsGatewaysModeEnum = exports.VoiceCapabilityPaymentsGatewaysModeEnum || (exports.VoiceCapabilityPaymentsGatewaysModeEnum = {}));
var VoiceCapabilityPaymentsGateways = /** @class */ (function (_super) {
    __extends(VoiceCapabilityPaymentsGateways, _super);
    function VoiceCapabilityPaymentsGateways() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=credential" }),
        __metadata("design:type", String)
    ], VoiceCapabilityPaymentsGateways.prototype, "credential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], VoiceCapabilityPaymentsGateways.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VoiceCapabilityPaymentsGateways.prototype, "type", void 0);
    return VoiceCapabilityPaymentsGateways;
}(utils_1.SpeakeasyBase));
exports.VoiceCapabilityPaymentsGateways = VoiceCapabilityPaymentsGateways;
// VoiceCapabilityPayments
/**
 * encompass all the payment related fields
**/
var VoiceCapabilityPayments = /** @class */ (function (_super) {
    __extends(VoiceCapabilityPayments, _super);
    function VoiceCapabilityPayments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateways", elemType: VoiceCapabilityPaymentsGateways }),
        __metadata("design:type", Array)
    ], VoiceCapabilityPayments.prototype, "gateways", void 0);
    return VoiceCapabilityPayments;
}(utils_1.SpeakeasyBase));
exports.VoiceCapabilityPayments = VoiceCapabilityPayments;
var VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum;
(function (VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum) {
    VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum["Get"] = "GET";
    VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum["Post"] = "POST";
})(VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum = exports.VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum || (exports.VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum = {}));
var VoiceCapabilityWebhooksAnswerUrl = /** @class */ (function (_super) {
    __extends(VoiceCapabilityWebhooksAnswerUrl, _super);
    function VoiceCapabilityWebhooksAnswerUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], VoiceCapabilityWebhooksAnswerUrl.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection_timeout" }),
        __metadata("design:type", Number)
    ], VoiceCapabilityWebhooksAnswerUrl.prototype, "connectionTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], VoiceCapabilityWebhooksAnswerUrl.prototype, "httpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=socket_timeout" }),
        __metadata("design:type", Number)
    ], VoiceCapabilityWebhooksAnswerUrl.prototype, "socketTimeout", void 0);
    return VoiceCapabilityWebhooksAnswerUrl;
}(utils_1.SpeakeasyBase));
exports.VoiceCapabilityWebhooksAnswerUrl = VoiceCapabilityWebhooksAnswerUrl;
var VoiceCapabilityWebhooksEventUrlHttpMethodEnum;
(function (VoiceCapabilityWebhooksEventUrlHttpMethodEnum) {
    VoiceCapabilityWebhooksEventUrlHttpMethodEnum["Get"] = "GET";
    VoiceCapabilityWebhooksEventUrlHttpMethodEnum["Post"] = "POST";
})(VoiceCapabilityWebhooksEventUrlHttpMethodEnum = exports.VoiceCapabilityWebhooksEventUrlHttpMethodEnum || (exports.VoiceCapabilityWebhooksEventUrlHttpMethodEnum = {}));
// VoiceCapabilityWebhooksEventUrl
/**
 * Vonage will send call events (e.g. `ringing`, `answered`) to this URL
**/
var VoiceCapabilityWebhooksEventUrl = /** @class */ (function (_super) {
    __extends(VoiceCapabilityWebhooksEventUrl, _super);
    function VoiceCapabilityWebhooksEventUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], VoiceCapabilityWebhooksEventUrl.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection_timeout" }),
        __metadata("design:type", Number)
    ], VoiceCapabilityWebhooksEventUrl.prototype, "connectionTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], VoiceCapabilityWebhooksEventUrl.prototype, "httpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=socket_timeout" }),
        __metadata("design:type", Number)
    ], VoiceCapabilityWebhooksEventUrl.prototype, "socketTimeout", void 0);
    return VoiceCapabilityWebhooksEventUrl;
}(utils_1.SpeakeasyBase));
exports.VoiceCapabilityWebhooksEventUrl = VoiceCapabilityWebhooksEventUrl;
var VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum;
(function (VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum) {
    VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum["Get"] = "GET";
    VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum["Post"] = "POST";
})(VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum = exports.VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum || (exports.VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum = {}));
var VoiceCapabilityWebhooksFallbackAnswerUrl = /** @class */ (function (_super) {
    __extends(VoiceCapabilityWebhooksFallbackAnswerUrl, _super);
    function VoiceCapabilityWebhooksFallbackAnswerUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], VoiceCapabilityWebhooksFallbackAnswerUrl.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection_timeout" }),
        __metadata("design:type", Number)
    ], VoiceCapabilityWebhooksFallbackAnswerUrl.prototype, "connectionTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], VoiceCapabilityWebhooksFallbackAnswerUrl.prototype, "httpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=socket_timeout" }),
        __metadata("design:type", Number)
    ], VoiceCapabilityWebhooksFallbackAnswerUrl.prototype, "socketTimeout", void 0);
    return VoiceCapabilityWebhooksFallbackAnswerUrl;
}(utils_1.SpeakeasyBase));
exports.VoiceCapabilityWebhooksFallbackAnswerUrl = VoiceCapabilityWebhooksFallbackAnswerUrl;
var VoiceCapabilityWebhooks = /** @class */ (function (_super) {
    __extends(VoiceCapabilityWebhooks, _super);
    function VoiceCapabilityWebhooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer_url" }),
        __metadata("design:type", VoiceCapabilityWebhooksAnswerUrl)
    ], VoiceCapabilityWebhooks.prototype, "answerUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event_url" }),
        __metadata("design:type", VoiceCapabilityWebhooksEventUrl)
    ], VoiceCapabilityWebhooks.prototype, "eventUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fallback_answer_url" }),
        __metadata("design:type", VoiceCapabilityWebhooksFallbackAnswerUrl)
    ], VoiceCapabilityWebhooks.prototype, "fallbackAnswerUrl", void 0);
    return VoiceCapabilityWebhooks;
}(utils_1.SpeakeasyBase));
exports.VoiceCapabilityWebhooks = VoiceCapabilityWebhooks;
// VoiceCapability
/**
 * Voice related configuration
**/
var VoiceCapability = /** @class */ (function (_super) {
    __extends(VoiceCapability, _super);
    function VoiceCapability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversation_ttl" }),
        __metadata("design:type", Number)
    ], VoiceCapability.prototype, "conversationTtl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payments" }),
        __metadata("design:type", VoiceCapabilityPayments)
    ], VoiceCapability.prototype, "payments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signed_callbacks" }),
        __metadata("design:type", Boolean)
    ], VoiceCapability.prototype, "signedCallbacks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhooks" }),
        __metadata("design:type", VoiceCapabilityWebhooks)
    ], VoiceCapability.prototype, "webhooks", void 0);
    return VoiceCapability;
}(utils_1.SpeakeasyBase));
exports.VoiceCapability = VoiceCapability;

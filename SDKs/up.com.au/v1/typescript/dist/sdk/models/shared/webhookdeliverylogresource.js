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
exports.WebhookDeliveryLogResource = exports.WebhookDeliveryLogResourceRelationships = exports.WebhookDeliveryLogResourceRelationshipsWebhookEvent = exports.WebhookDeliveryLogResourceRelationshipsWebhookEventData = exports.WebhookDeliveryLogResourceAttributes = exports.WebhookDeliveryLogResourceAttributesResponse = exports.WebhookDeliveryLogResourceAttributesRequest = void 0;
var utils_1 = require("../../../internal/utils");
// WebhookDeliveryLogResourceAttributesRequest
/**
 * Information about the request that was sent to the webhook URL.
 *
**/
var WebhookDeliveryLogResourceAttributesRequest = /** @class */ (function (_super) {
    __extends(WebhookDeliveryLogResourceAttributesRequest, _super);
    function WebhookDeliveryLogResourceAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], WebhookDeliveryLogResourceAttributesRequest.prototype, "body", void 0);
    return WebhookDeliveryLogResourceAttributesRequest;
}(utils_1.SpeakeasyBase));
exports.WebhookDeliveryLogResourceAttributesRequest = WebhookDeliveryLogResourceAttributesRequest;
// WebhookDeliveryLogResourceAttributesResponse
/**
 * Information about the response that was received from the webhook URL.
 *
**/
var WebhookDeliveryLogResourceAttributesResponse = /** @class */ (function (_super) {
    __extends(WebhookDeliveryLogResourceAttributesResponse, _super);
    function WebhookDeliveryLogResourceAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], WebhookDeliveryLogResourceAttributesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusCode" }),
        __metadata("design:type", Number)
    ], WebhookDeliveryLogResourceAttributesResponse.prototype, "statusCode", void 0);
    return WebhookDeliveryLogResourceAttributesResponse;
}(utils_1.SpeakeasyBase));
exports.WebhookDeliveryLogResourceAttributesResponse = WebhookDeliveryLogResourceAttributesResponse;
var WebhookDeliveryLogResourceAttributes = /** @class */ (function (_super) {
    __extends(WebhookDeliveryLogResourceAttributes, _super);
    function WebhookDeliveryLogResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], WebhookDeliveryLogResourceAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deliveryStatus" }),
        __metadata("design:type", Object)
    ], WebhookDeliveryLogResourceAttributes.prototype, "deliveryStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request" }),
        __metadata("design:type", WebhookDeliveryLogResourceAttributesRequest)
    ], WebhookDeliveryLogResourceAttributes.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", WebhookDeliveryLogResourceAttributesResponse)
    ], WebhookDeliveryLogResourceAttributes.prototype, "response", void 0);
    return WebhookDeliveryLogResourceAttributes;
}(utils_1.SpeakeasyBase));
exports.WebhookDeliveryLogResourceAttributes = WebhookDeliveryLogResourceAttributes;
var WebhookDeliveryLogResourceRelationshipsWebhookEventData = /** @class */ (function (_super) {
    __extends(WebhookDeliveryLogResourceRelationshipsWebhookEventData, _super);
    function WebhookDeliveryLogResourceRelationshipsWebhookEventData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebhookDeliveryLogResourceRelationshipsWebhookEventData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebhookDeliveryLogResourceRelationshipsWebhookEventData.prototype, "type", void 0);
    return WebhookDeliveryLogResourceRelationshipsWebhookEventData;
}(utils_1.SpeakeasyBase));
exports.WebhookDeliveryLogResourceRelationshipsWebhookEventData = WebhookDeliveryLogResourceRelationshipsWebhookEventData;
var WebhookDeliveryLogResourceRelationshipsWebhookEvent = /** @class */ (function (_super) {
    __extends(WebhookDeliveryLogResourceRelationshipsWebhookEvent, _super);
    function WebhookDeliveryLogResourceRelationshipsWebhookEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", WebhookDeliveryLogResourceRelationshipsWebhookEventData)
    ], WebhookDeliveryLogResourceRelationshipsWebhookEvent.prototype, "data", void 0);
    return WebhookDeliveryLogResourceRelationshipsWebhookEvent;
}(utils_1.SpeakeasyBase));
exports.WebhookDeliveryLogResourceRelationshipsWebhookEvent = WebhookDeliveryLogResourceRelationshipsWebhookEvent;
var WebhookDeliveryLogResourceRelationships = /** @class */ (function (_super) {
    __extends(WebhookDeliveryLogResourceRelationships, _super);
    function WebhookDeliveryLogResourceRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhookEvent" }),
        __metadata("design:type", WebhookDeliveryLogResourceRelationshipsWebhookEvent)
    ], WebhookDeliveryLogResourceRelationships.prototype, "webhookEvent", void 0);
    return WebhookDeliveryLogResourceRelationships;
}(utils_1.SpeakeasyBase));
exports.WebhookDeliveryLogResourceRelationships = WebhookDeliveryLogResourceRelationships;
// WebhookDeliveryLogResource
/**
 * Provides historical webhook event delivery information for analysis and
 * debugging purposes.
 *
**/
var WebhookDeliveryLogResource = /** @class */ (function (_super) {
    __extends(WebhookDeliveryLogResource, _super);
    function WebhookDeliveryLogResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", WebhookDeliveryLogResourceAttributes)
    ], WebhookDeliveryLogResource.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebhookDeliveryLogResource.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", WebhookDeliveryLogResourceRelationships)
    ], WebhookDeliveryLogResource.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebhookDeliveryLogResource.prototype, "type", void 0);
    return WebhookDeliveryLogResource;
}(utils_1.SpeakeasyBase));
exports.WebhookDeliveryLogResource = WebhookDeliveryLogResource;

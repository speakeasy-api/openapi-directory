"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.SendMessagesResponse = exports.SendMessagesResponseData = void 0;
var utils_1 = require("../../../internal/utils");
var contact_1 = require("./contact");
var message_1 = require("./message");
var class_transformer_1 = require("class-transformer");
var SendMessagesResponseData = /** @class */ (function (_super) {
    __extends(SendMessagesResponseData, _super);
    function SendMessagesResponseData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "estimatedPrice" }),
        __metadata("design:type", Number)
    ], SendMessagesResponseData.prototype, "estimatedPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: contact_1.Contact }),
        (0, class_transformer_1.Expose)({ name: "invalid" }),
        (0, class_transformer_1.Type)(function () { return contact_1.Contact; }),
        __metadata("design:type", Array)
    ], SendMessagesResponseData.prototype, "invalid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "jobId" }),
        __metadata("design:type", String)
    ], SendMessagesResponseData.prototype, "jobId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: message_1.Message }),
        (0, class_transformer_1.Expose)({ name: "messages" }),
        (0, class_transformer_1.Type)(function () { return message_1.Message; }),
        __metadata("design:type", Array)
    ], SendMessagesResponseData.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "requested" }),
        __metadata("design:type", Number)
    ], SendMessagesResponseData.prototype, "requested", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "valid" }),
        __metadata("design:type", Number)
    ], SendMessagesResponseData.prototype, "valid", void 0);
    return SendMessagesResponseData;
}(utils_1.SpeakeasyBase));
exports.SendMessagesResponseData = SendMessagesResponseData;
/**
 * successful operation
 */
var SendMessagesResponse = /** @class */ (function (_super) {
    __extends(SendMessagesResponse, _super);
    function SendMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "data" }),
        (0, class_transformer_1.Type)(function () { return SendMessagesResponseData; }),
        __metadata("design:type", SendMessagesResponseData)
    ], SendMessagesResponse.prototype, "data", void 0);
    return SendMessagesResponse;
}(utils_1.SpeakeasyBase));
exports.SendMessagesResponse = SendMessagesResponse;

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
exports.CreatePlayerStreamerResponse = exports.CreatePlayerStreamerCreatePlayerStreamerRequest = exports.CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum = exports.CreatePlayerStreamerSecurity = exports.CreatePlayerStreamerServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreatePlayerStreamerServerList = [
    "https://media.twilio.com",
];
var CreatePlayerStreamerSecurity = /** @class */ (function (_super) {
    __extends(CreatePlayerStreamerSecurity, _super);
    function CreatePlayerStreamerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=http;subtype=basic;name=password",
        }),
        __metadata("design:type", String)
    ], CreatePlayerStreamerSecurity.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=http;subtype=basic;name=username",
        }),
        __metadata("design:type", String)
    ], CreatePlayerStreamerSecurity.prototype, "username", void 0);
    return CreatePlayerStreamerSecurity;
}(utils_1.SpeakeasyBase));
exports.CreatePlayerStreamerSecurity = CreatePlayerStreamerSecurity;
/**
 * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
 */
var CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum;
(function (CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum) {
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum = exports.CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum || (exports.CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum = {}));
var CreatePlayerStreamerCreatePlayerStreamerRequest = /** @class */ (function (_super) {
    __extends(CreatePlayerStreamerCreatePlayerStreamerRequest, _super);
    function CreatePlayerStreamerCreatePlayerStreamerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MaxDuration" }),
        __metadata("design:type", Number)
    ], CreatePlayerStreamerCreatePlayerStreamerRequest.prototype, "maxDuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallback" }),
        __metadata("design:type", String)
    ], CreatePlayerStreamerCreatePlayerStreamerRequest.prototype, "statusCallback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallbackMethod" }),
        __metadata("design:type", String)
    ], CreatePlayerStreamerCreatePlayerStreamerRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Video" }),
        __metadata("design:type", Boolean)
    ], CreatePlayerStreamerCreatePlayerStreamerRequest.prototype, "video", void 0);
    return CreatePlayerStreamerCreatePlayerStreamerRequest;
}(utils_1.SpeakeasyBase));
exports.CreatePlayerStreamerCreatePlayerStreamerRequest = CreatePlayerStreamerCreatePlayerStreamerRequest;
var CreatePlayerStreamerResponse = /** @class */ (function (_super) {
    __extends(CreatePlayerStreamerResponse, _super);
    function CreatePlayerStreamerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreatePlayerStreamerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreatePlayerStreamerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreatePlayerStreamerResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.MediaV1PlayerStreamer)
    ], CreatePlayerStreamerResponse.prototype, "mediaV1PlayerStreamer", void 0);
    return CreatePlayerStreamerResponse;
}(utils_1.SpeakeasyBase));
exports.CreatePlayerStreamerResponse = CreatePlayerStreamerResponse;

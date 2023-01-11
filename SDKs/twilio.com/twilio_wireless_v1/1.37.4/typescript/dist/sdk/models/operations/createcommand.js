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
exports.CreateCommandResponse = exports.CreateCommandRequest = exports.CreateCommandSecurity = exports.CreateCommandCreateCommandRequest = exports.CreateCommandCreateCommandRequestCallbackMethodEnum = exports.CreateCommandServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateCommandServerList = [
    "https://wireless.twilio.com",
];
var CreateCommandCreateCommandRequestCallbackMethodEnum;
(function (CreateCommandCreateCommandRequestCallbackMethodEnum) {
    CreateCommandCreateCommandRequestCallbackMethodEnum["Head"] = "HEAD";
    CreateCommandCreateCommandRequestCallbackMethodEnum["Get"] = "GET";
    CreateCommandCreateCommandRequestCallbackMethodEnum["Post"] = "POST";
    CreateCommandCreateCommandRequestCallbackMethodEnum["Patch"] = "PATCH";
    CreateCommandCreateCommandRequestCallbackMethodEnum["Put"] = "PUT";
    CreateCommandCreateCommandRequestCallbackMethodEnum["Delete"] = "DELETE";
})(CreateCommandCreateCommandRequestCallbackMethodEnum = exports.CreateCommandCreateCommandRequestCallbackMethodEnum || (exports.CreateCommandCreateCommandRequestCallbackMethodEnum = {}));
var CreateCommandCreateCommandRequest = /** @class */ (function (_super) {
    __extends(CreateCommandCreateCommandRequest, _super);
    function CreateCommandCreateCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "callbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "callbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Command;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CommandMode;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "commandMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DeliveryReceiptRequested;" }),
        __metadata("design:type", Boolean)
    ], CreateCommandCreateCommandRequest.prototype, "deliveryReceiptRequested", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=IncludeSid;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "includeSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Sim;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "sim", void 0);
    return CreateCommandCreateCommandRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCommandCreateCommandRequest = CreateCommandCreateCommandRequest;
var CreateCommandSecurity = /** @class */ (function (_super) {
    __extends(CreateCommandSecurity, _super);
    function CreateCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCommandSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateCommandSecurity = CreateCommandSecurity;
var CreateCommandRequest = /** @class */ (function (_super) {
    __extends(CreateCommandRequest, _super);
    function CreateCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateCommandRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCommandCreateCommandRequest)
    ], CreateCommandRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCommandSecurity)
    ], CreateCommandRequest.prototype, "security", void 0);
    return CreateCommandRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCommandRequest = CreateCommandRequest;
var CreateCommandResponse = /** @class */ (function (_super) {
    __extends(CreateCommandResponse, _super);
    function CreateCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateCommandResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateCommandResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.WirelessV1Command)
    ], CreateCommandResponse.prototype, "wirelessV1Command", void 0);
    return CreateCommandResponse;
}(utils_1.SpeakeasyBase));
exports.CreateCommandResponse = CreateCommandResponse;

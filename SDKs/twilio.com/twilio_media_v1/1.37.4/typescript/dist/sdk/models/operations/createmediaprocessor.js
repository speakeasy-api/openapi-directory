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
exports.CreateMediaProcessorResponse = exports.CreateMediaProcessorRequest = exports.CreateMediaProcessorSecurity = exports.CreateMediaProcessorCreateMediaProcessorRequest = exports.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = exports.CreateMediaProcessorServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateMediaProcessorServerList = [
    "https://media.twilio.com",
];
var CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
(function (CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum) {
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = exports.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum || (exports.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = {}));
var CreateMediaProcessorCreateMediaProcessorRequest = /** @class */ (function (_super) {
    __extends(CreateMediaProcessorCreateMediaProcessorRequest, _super);
    function CreateMediaProcessorCreateMediaProcessorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Extension;" }),
        __metadata("design:type", String)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "extension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ExtensionContext;" }),
        __metadata("design:type", String)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "extensionContext", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ExtensionEnvironment;" }),
        __metadata("design:type", Object)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "extensionEnvironment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MaxDuration;" }),
        __metadata("design:type", Number)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "maxDuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "statusCallback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "statusCallbackMethod", void 0);
    return CreateMediaProcessorCreateMediaProcessorRequest;
}(utils_1.SpeakeasyBase));
exports.CreateMediaProcessorCreateMediaProcessorRequest = CreateMediaProcessorCreateMediaProcessorRequest;
var CreateMediaProcessorSecurity = /** @class */ (function (_super) {
    __extends(CreateMediaProcessorSecurity, _super);
    function CreateMediaProcessorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateMediaProcessorSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateMediaProcessorSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateMediaProcessorSecurity = CreateMediaProcessorSecurity;
var CreateMediaProcessorRequest = /** @class */ (function (_super) {
    __extends(CreateMediaProcessorRequest, _super);
    function CreateMediaProcessorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateMediaProcessorRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateMediaProcessorCreateMediaProcessorRequest)
    ], CreateMediaProcessorRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateMediaProcessorSecurity)
    ], CreateMediaProcessorRequest.prototype, "security", void 0);
    return CreateMediaProcessorRequest;
}(utils_1.SpeakeasyBase));
exports.CreateMediaProcessorRequest = CreateMediaProcessorRequest;
var CreateMediaProcessorResponse = /** @class */ (function (_super) {
    __extends(CreateMediaProcessorResponse, _super);
    function CreateMediaProcessorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateMediaProcessorResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateMediaProcessorResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.MediaV1MediaProcessor)
    ], CreateMediaProcessorResponse.prototype, "mediaV1MediaProcessor", void 0);
    return CreateMediaProcessorResponse;
}(utils_1.SpeakeasyBase));
exports.CreateMediaProcessorResponse = CreateMediaProcessorResponse;

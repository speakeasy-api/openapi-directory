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
exports.CreateUnderstandAssistantResponse = exports.CreateUnderstandAssistantRequest = exports.CreateUnderstandAssistantSecurity = exports.CreateUnderstandAssistantCreateUnderstandAssistantRequest = exports.CreateUnderstandAssistantServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateUnderstandAssistantServerList = [
    "https://preview.twilio.com",
];
var CreateUnderstandAssistantCreateUnderstandAssistantRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandAssistantCreateUnderstandAssistantRequest, _super);
    function CreateUnderstandAssistantCreateUnderstandAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CallbackEvents;" }),
        __metadata("design:type", String)
    ], CreateUnderstandAssistantCreateUnderstandAssistantRequest.prototype, "callbackEvents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateUnderstandAssistantCreateUnderstandAssistantRequest.prototype, "callbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FallbackActions;" }),
        __metadata("design:type", Object)
    ], CreateUnderstandAssistantCreateUnderstandAssistantRequest.prototype, "fallbackActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateUnderstandAssistantCreateUnderstandAssistantRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=InitiationActions;" }),
        __metadata("design:type", Object)
    ], CreateUnderstandAssistantCreateUnderstandAssistantRequest.prototype, "initiationActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=LogQueries;" }),
        __metadata("design:type", Boolean)
    ], CreateUnderstandAssistantCreateUnderstandAssistantRequest.prototype, "logQueries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StyleSheet;" }),
        __metadata("design:type", Object)
    ], CreateUnderstandAssistantCreateUnderstandAssistantRequest.prototype, "styleSheet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateUnderstandAssistantCreateUnderstandAssistantRequest.prototype, "uniqueName", void 0);
    return CreateUnderstandAssistantCreateUnderstandAssistantRequest;
}(utils_1.SpeakeasyBase));
exports.CreateUnderstandAssistantCreateUnderstandAssistantRequest = CreateUnderstandAssistantCreateUnderstandAssistantRequest;
var CreateUnderstandAssistantSecurity = /** @class */ (function (_super) {
    __extends(CreateUnderstandAssistantSecurity, _super);
    function CreateUnderstandAssistantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUnderstandAssistantSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUnderstandAssistantSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateUnderstandAssistantSecurity = CreateUnderstandAssistantSecurity;
var CreateUnderstandAssistantRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandAssistantRequest, _super);
    function CreateUnderstandAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateUnderstandAssistantRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUnderstandAssistantCreateUnderstandAssistantRequest)
    ], CreateUnderstandAssistantRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUnderstandAssistantSecurity)
    ], CreateUnderstandAssistantRequest.prototype, "security", void 0);
    return CreateUnderstandAssistantRequest;
}(utils_1.SpeakeasyBase));
exports.CreateUnderstandAssistantRequest = CreateUnderstandAssistantRequest;
var CreateUnderstandAssistantResponse = /** @class */ (function (_super) {
    __extends(CreateUnderstandAssistantResponse, _super);
    function CreateUnderstandAssistantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateUnderstandAssistantResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateUnderstandAssistantResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreviewUnderstandAssistant)
    ], CreateUnderstandAssistantResponse.prototype, "previewUnderstandAssistant", void 0);
    return CreateUnderstandAssistantResponse;
}(utils_1.SpeakeasyBase));
exports.CreateUnderstandAssistantResponse = CreateUnderstandAssistantResponse;

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
exports.CreateCompositionHookResponse = exports.CreateCompositionHookRequest = exports.CreateCompositionHookSecurity = exports.CreateCompositionHookCreateCompositionHookRequest = exports.CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum = exports.CreateCompositionHookServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateCompositionHookServerList = [
    "https://video.twilio.com",
];
var CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum;
(function (CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum) {
    CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum = exports.CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum || (exports.CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum = {}));
var CreateCompositionHookCreateCompositionHookRequest = /** @class */ (function (_super) {
    __extends(CreateCompositionHookCreateCompositionHookRequest, _super);
    function CreateCompositionHookCreateCompositionHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=AudioSources;" }),
        __metadata("design:type", Array)
    ], CreateCompositionHookCreateCompositionHookRequest.prototype, "audioSources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=AudioSourcesExcluded;" }),
        __metadata("design:type", Array)
    ], CreateCompositionHookCreateCompositionHookRequest.prototype, "audioSourcesExcluded", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], CreateCompositionHookCreateCompositionHookRequest.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Format;" }),
        __metadata("design:type", String)
    ], CreateCompositionHookCreateCompositionHookRequest.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateCompositionHookCreateCompositionHookRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Resolution;" }),
        __metadata("design:type", String)
    ], CreateCompositionHookCreateCompositionHookRequest.prototype, "resolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateCompositionHookCreateCompositionHookRequest.prototype, "statusCallback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateCompositionHookCreateCompositionHookRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Trim;" }),
        __metadata("design:type", Boolean)
    ], CreateCompositionHookCreateCompositionHookRequest.prototype, "trim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VideoLayout;" }),
        __metadata("design:type", Object)
    ], CreateCompositionHookCreateCompositionHookRequest.prototype, "videoLayout", void 0);
    return CreateCompositionHookCreateCompositionHookRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCompositionHookCreateCompositionHookRequest = CreateCompositionHookCreateCompositionHookRequest;
var CreateCompositionHookSecurity = /** @class */ (function (_super) {
    __extends(CreateCompositionHookSecurity, _super);
    function CreateCompositionHookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCompositionHookSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCompositionHookSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateCompositionHookSecurity = CreateCompositionHookSecurity;
var CreateCompositionHookRequest = /** @class */ (function (_super) {
    __extends(CreateCompositionHookRequest, _super);
    function CreateCompositionHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateCompositionHookRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCompositionHookCreateCompositionHookRequest)
    ], CreateCompositionHookRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCompositionHookSecurity)
    ], CreateCompositionHookRequest.prototype, "security", void 0);
    return CreateCompositionHookRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCompositionHookRequest = CreateCompositionHookRequest;
var CreateCompositionHookResponse = /** @class */ (function (_super) {
    __extends(CreateCompositionHookResponse, _super);
    function CreateCompositionHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateCompositionHookResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateCompositionHookResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VideoV1CompositionHook)
    ], CreateCompositionHookResponse.prototype, "videoV1CompositionHook", void 0);
    return CreateCompositionHookResponse;
}(utils_1.SpeakeasyBase));
exports.CreateCompositionHookResponse = CreateCompositionHookResponse;

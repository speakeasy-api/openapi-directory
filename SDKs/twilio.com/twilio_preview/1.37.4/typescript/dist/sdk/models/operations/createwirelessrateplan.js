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
exports.CreateWirelessRatePlanResponse = exports.CreateWirelessRatePlanRequest = exports.CreateWirelessRatePlanSecurity = exports.CreateWirelessRatePlanCreateWirelessRatePlanRequest = exports.CreateWirelessRatePlanServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateWirelessRatePlanServerList = [
    "https://preview.twilio.com",
];
var CreateWirelessRatePlanCreateWirelessRatePlanRequest = /** @class */ (function (_super) {
    __extends(CreateWirelessRatePlanCreateWirelessRatePlanRequest, _super);
    function CreateWirelessRatePlanCreateWirelessRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CommandsEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "commandsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DataEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "dataEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DataLimit;" }),
        __metadata("design:type", Number)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "dataLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DataMetering;" }),
        __metadata("design:type", String)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "dataMetering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=InternationalRoaming;" }),
        __metadata("design:type", Array)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "internationalRoaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "messagingEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=NationalRoamingEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "nationalRoamingEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "uniqueName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "voiceEnabled", void 0);
    return CreateWirelessRatePlanCreateWirelessRatePlanRequest;
}(utils_1.SpeakeasyBase));
exports.CreateWirelessRatePlanCreateWirelessRatePlanRequest = CreateWirelessRatePlanCreateWirelessRatePlanRequest;
var CreateWirelessRatePlanSecurity = /** @class */ (function (_super) {
    __extends(CreateWirelessRatePlanSecurity, _super);
    function CreateWirelessRatePlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateWirelessRatePlanSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateWirelessRatePlanSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateWirelessRatePlanSecurity = CreateWirelessRatePlanSecurity;
var CreateWirelessRatePlanRequest = /** @class */ (function (_super) {
    __extends(CreateWirelessRatePlanRequest, _super);
    function CreateWirelessRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateWirelessRatePlanRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateWirelessRatePlanCreateWirelessRatePlanRequest)
    ], CreateWirelessRatePlanRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateWirelessRatePlanSecurity)
    ], CreateWirelessRatePlanRequest.prototype, "security", void 0);
    return CreateWirelessRatePlanRequest;
}(utils_1.SpeakeasyBase));
exports.CreateWirelessRatePlanRequest = CreateWirelessRatePlanRequest;
var CreateWirelessRatePlanResponse = /** @class */ (function (_super) {
    __extends(CreateWirelessRatePlanResponse, _super);
    function CreateWirelessRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateWirelessRatePlanResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateWirelessRatePlanResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreviewWirelessRatePlan)
    ], CreateWirelessRatePlanResponse.prototype, "previewWirelessRatePlan", void 0);
    return CreateWirelessRatePlanResponse;
}(utils_1.SpeakeasyBase));
exports.CreateWirelessRatePlanResponse = CreateWirelessRatePlanResponse;

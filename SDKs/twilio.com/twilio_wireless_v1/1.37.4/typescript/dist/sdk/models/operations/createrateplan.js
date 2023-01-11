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
exports.CreateRatePlanResponse = exports.CreateRatePlanRequest = exports.CreateRatePlanSecurity = exports.CreateRatePlanCreateRatePlanRequest = exports.CreateRatePlanServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateRatePlanServerList = [
    "https://wireless.twilio.com",
];
var CreateRatePlanCreateRatePlanRequest = /** @class */ (function (_super) {
    __extends(CreateRatePlanCreateRatePlanRequest, _super);
    function CreateRatePlanCreateRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DataEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "dataEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DataLimit;" }),
        __metadata("design:type", Number)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "dataLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DataMetering;" }),
        __metadata("design:type", String)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "dataMetering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=InternationalRoaming;" }),
        __metadata("design:type", Array)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "internationalRoaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=InternationalRoamingDataLimit;" }),
        __metadata("design:type", Number)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "internationalRoamingDataLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "messagingEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=NationalRoamingDataLimit;" }),
        __metadata("design:type", Number)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "nationalRoamingDataLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=NationalRoamingEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "nationalRoamingEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "uniqueName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "voiceEnabled", void 0);
    return CreateRatePlanCreateRatePlanRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRatePlanCreateRatePlanRequest = CreateRatePlanCreateRatePlanRequest;
var CreateRatePlanSecurity = /** @class */ (function (_super) {
    __extends(CreateRatePlanSecurity, _super);
    function CreateRatePlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateRatePlanSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateRatePlanSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateRatePlanSecurity = CreateRatePlanSecurity;
var CreateRatePlanRequest = /** @class */ (function (_super) {
    __extends(CreateRatePlanRequest, _super);
    function CreateRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateRatePlanRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateRatePlanCreateRatePlanRequest)
    ], CreateRatePlanRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateRatePlanSecurity)
    ], CreateRatePlanRequest.prototype, "security", void 0);
    return CreateRatePlanRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRatePlanRequest = CreateRatePlanRequest;
var CreateRatePlanResponse = /** @class */ (function (_super) {
    __extends(CreateRatePlanResponse, _super);
    function CreateRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateRatePlanResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateRatePlanResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.WirelessV1RatePlan)
    ], CreateRatePlanResponse.prototype, "wirelessV1RatePlan", void 0);
    return CreateRatePlanResponse;
}(utils_1.SpeakeasyBase));
exports.CreateRatePlanResponse = CreateRatePlanResponse;

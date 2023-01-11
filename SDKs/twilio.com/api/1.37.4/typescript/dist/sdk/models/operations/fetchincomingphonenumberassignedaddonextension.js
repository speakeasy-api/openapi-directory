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
exports.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse = exports.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest = exports.FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity = exports.FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams = exports.FetchIncomingPhoneNumberAssignedAddOnExtensionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.FetchIncomingPhoneNumberAssignedAddOnExtensionServerList = [
    "https://api.twilio.com",
];
var FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams, _super);
    function FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AssignedAddOnSid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "assignedAddOnSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ResourceSid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "resourceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "sid", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams;
}(utils_1.SpeakeasyBase));
exports.FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams = FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams;
var FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity, _super);
    function FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity;
}(utils_1.SpeakeasyBase));
exports.FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity = FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity;
var FetchIncomingPhoneNumberAssignedAddOnExtensionRequest = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnExtensionRequest, _super);
    function FetchIncomingPhoneNumberAssignedAddOnExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionRequest.prototype, "security", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnExtensionRequest;
}(utils_1.SpeakeasyBase));
exports.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest = FetchIncomingPhoneNumberAssignedAddOnExtensionRequest;
var FetchIncomingPhoneNumberAssignedAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnExtensionResponse, _super);
    function FetchIncomingPhoneNumberAssignedAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnExtensionResponse;
}(utils_1.SpeakeasyBase));
exports.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse = FetchIncomingPhoneNumberAssignedAddOnExtensionResponse;

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
exports.CreateIpRecordResponse = exports.CreateIpRecordRequest = exports.CreateIpRecordSecurity = exports.CreateIpRecordCreateIpRecordRequest = exports.CreateIpRecordServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateIpRecordServerList = [
    "https://voice.twilio.com",
];
var CreateIpRecordCreateIpRecordRequest = /** @class */ (function (_super) {
    __extends(CreateIpRecordCreateIpRecordRequest, _super);
    function CreateIpRecordCreateIpRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CidrPrefixLength;" }),
        __metadata("design:type", Number)
    ], CreateIpRecordCreateIpRecordRequest.prototype, "cidrPrefixLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateIpRecordCreateIpRecordRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=IpAddress;" }),
        __metadata("design:type", String)
    ], CreateIpRecordCreateIpRecordRequest.prototype, "ipAddress", void 0);
    return CreateIpRecordCreateIpRecordRequest;
}(utils_1.SpeakeasyBase));
exports.CreateIpRecordCreateIpRecordRequest = CreateIpRecordCreateIpRecordRequest;
var CreateIpRecordSecurity = /** @class */ (function (_super) {
    __extends(CreateIpRecordSecurity, _super);
    function CreateIpRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateIpRecordSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateIpRecordSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateIpRecordSecurity = CreateIpRecordSecurity;
var CreateIpRecordRequest = /** @class */ (function (_super) {
    __extends(CreateIpRecordRequest, _super);
    function CreateIpRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateIpRecordRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateIpRecordCreateIpRecordRequest)
    ], CreateIpRecordRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateIpRecordSecurity)
    ], CreateIpRecordRequest.prototype, "security", void 0);
    return CreateIpRecordRequest;
}(utils_1.SpeakeasyBase));
exports.CreateIpRecordRequest = CreateIpRecordRequest;
var CreateIpRecordResponse = /** @class */ (function (_super) {
    __extends(CreateIpRecordResponse, _super);
    function CreateIpRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateIpRecordResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateIpRecordResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VoiceV1IpRecord)
    ], CreateIpRecordResponse.prototype, "voiceV1IpRecord", void 0);
    return CreateIpRecordResponse;
}(utils_1.SpeakeasyBase));
exports.CreateIpRecordResponse = CreateIpRecordResponse;

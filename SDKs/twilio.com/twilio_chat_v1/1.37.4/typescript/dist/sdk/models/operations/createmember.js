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
exports.CreateMemberResponse = exports.CreateMemberRequest = exports.CreateMemberSecurity = exports.CreateMemberCreateMemberRequest = exports.CreateMemberPathParams = exports.CreateMemberServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateMemberServerList = [
    "https://chat.twilio.com",
];
var CreateMemberPathParams = /** @class */ (function (_super) {
    __extends(CreateMemberPathParams, _super);
    function CreateMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], CreateMemberPathParams.prototype, "channelSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateMemberPathParams.prototype, "serviceSid", void 0);
    return CreateMemberPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateMemberPathParams = CreateMemberPathParams;
var CreateMemberCreateMemberRequest = /** @class */ (function (_super) {
    __extends(CreateMemberCreateMemberRequest, _super);
    function CreateMemberCreateMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateMemberCreateMemberRequest.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], CreateMemberCreateMemberRequest.prototype, "roleSid", void 0);
    return CreateMemberCreateMemberRequest;
}(utils_1.SpeakeasyBase));
exports.CreateMemberCreateMemberRequest = CreateMemberCreateMemberRequest;
var CreateMemberSecurity = /** @class */ (function (_super) {
    __extends(CreateMemberSecurity, _super);
    function CreateMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateMemberSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateMemberSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateMemberSecurity = CreateMemberSecurity;
var CreateMemberRequest = /** @class */ (function (_super) {
    __extends(CreateMemberRequest, _super);
    function CreateMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateMemberRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateMemberPathParams)
    ], CreateMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateMemberCreateMemberRequest)
    ], CreateMemberRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateMemberSecurity)
    ], CreateMemberRequest.prototype, "security", void 0);
    return CreateMemberRequest;
}(utils_1.SpeakeasyBase));
exports.CreateMemberRequest = CreateMemberRequest;
var CreateMemberResponse = /** @class */ (function (_super) {
    __extends(CreateMemberResponse, _super);
    function CreateMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateMemberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateMemberResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ChatV1ServiceChannelMember)
    ], CreateMemberResponse.prototype, "chatV1ServiceChannelMember", void 0);
    return CreateMemberResponse;
}(utils_1.SpeakeasyBase));
exports.CreateMemberResponse = CreateMemberResponse;

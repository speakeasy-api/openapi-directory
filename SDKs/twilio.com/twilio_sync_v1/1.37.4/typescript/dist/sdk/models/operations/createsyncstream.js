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
exports.CreateSyncStreamResponse = exports.CreateSyncStreamRequest = exports.CreateSyncStreamSecurity = exports.CreateSyncStreamCreateSyncStreamRequest = exports.CreateSyncStreamPathParams = exports.CreateSyncStreamServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateSyncStreamServerList = [
    "https://sync.twilio.com",
];
var CreateSyncStreamPathParams = /** @class */ (function (_super) {
    __extends(CreateSyncStreamPathParams, _super);
    function CreateSyncStreamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSyncStreamPathParams.prototype, "serviceSid", void 0);
    return CreateSyncStreamPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateSyncStreamPathParams = CreateSyncStreamPathParams;
var CreateSyncStreamCreateSyncStreamRequest = /** @class */ (function (_super) {
    __extends(CreateSyncStreamCreateSyncStreamRequest, _super);
    function CreateSyncStreamCreateSyncStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], CreateSyncStreamCreateSyncStreamRequest.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateSyncStreamCreateSyncStreamRequest.prototype, "uniqueName", void 0);
    return CreateSyncStreamCreateSyncStreamRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSyncStreamCreateSyncStreamRequest = CreateSyncStreamCreateSyncStreamRequest;
var CreateSyncStreamSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncStreamSecurity, _super);
    function CreateSyncStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncStreamSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncStreamSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateSyncStreamSecurity = CreateSyncStreamSecurity;
var CreateSyncStreamRequest = /** @class */ (function (_super) {
    __extends(CreateSyncStreamRequest, _super);
    function CreateSyncStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSyncStreamRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSyncStreamPathParams)
    ], CreateSyncStreamRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncStreamCreateSyncStreamRequest)
    ], CreateSyncStreamRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSyncStreamSecurity)
    ], CreateSyncStreamRequest.prototype, "security", void 0);
    return CreateSyncStreamRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSyncStreamRequest = CreateSyncStreamRequest;
var CreateSyncStreamResponse = /** @class */ (function (_super) {
    __extends(CreateSyncStreamResponse, _super);
    function CreateSyncStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSyncStreamResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSyncStreamResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SyncV1ServiceSyncStream)
    ], CreateSyncStreamResponse.prototype, "syncV1ServiceSyncStream", void 0);
    return CreateSyncStreamResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSyncStreamResponse = CreateSyncStreamResponse;

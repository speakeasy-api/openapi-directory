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
exports.CreateSampleResponse = exports.CreateSampleRequest = exports.CreateSampleSecurity = exports.CreateSampleCreateSampleRequest = exports.CreateSamplePathParams = exports.CreateSampleServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateSampleServerList = [
    "https://autopilot.twilio.com",
];
var CreateSamplePathParams = /** @class */ (function (_super) {
    __extends(CreateSamplePathParams, _super);
    function CreateSamplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateSamplePathParams.prototype, "assistantSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], CreateSamplePathParams.prototype, "taskSid", void 0);
    return CreateSamplePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateSamplePathParams = CreateSamplePathParams;
var CreateSampleCreateSampleRequest = /** @class */ (function (_super) {
    __extends(CreateSampleCreateSampleRequest, _super);
    function CreateSampleCreateSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Language;" }),
        __metadata("design:type", String)
    ], CreateSampleCreateSampleRequest.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SourceChannel;" }),
        __metadata("design:type", String)
    ], CreateSampleCreateSampleRequest.prototype, "sourceChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=TaggedText;" }),
        __metadata("design:type", String)
    ], CreateSampleCreateSampleRequest.prototype, "taggedText", void 0);
    return CreateSampleCreateSampleRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSampleCreateSampleRequest = CreateSampleCreateSampleRequest;
var CreateSampleSecurity = /** @class */ (function (_super) {
    __extends(CreateSampleSecurity, _super);
    function CreateSampleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSampleSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSampleSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateSampleSecurity = CreateSampleSecurity;
var CreateSampleRequest = /** @class */ (function (_super) {
    __extends(CreateSampleRequest, _super);
    function CreateSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSampleRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSamplePathParams)
    ], CreateSampleRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSampleCreateSampleRequest)
    ], CreateSampleRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSampleSecurity)
    ], CreateSampleRequest.prototype, "security", void 0);
    return CreateSampleRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSampleRequest = CreateSampleRequest;
var CreateSampleResponse = /** @class */ (function (_super) {
    __extends(CreateSampleResponse, _super);
    function CreateSampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSampleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSampleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AutopilotV1AssistantTaskSample)
    ], CreateSampleResponse.prototype, "autopilotV1AssistantTaskSample", void 0);
    return CreateSampleResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSampleResponse = CreateSampleResponse;

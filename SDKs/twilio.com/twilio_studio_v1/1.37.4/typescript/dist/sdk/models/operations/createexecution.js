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
exports.CreateExecutionResponse = exports.CreateExecutionRequest = exports.CreateExecutionSecurity = exports.CreateExecutionCreateExecutionRequest = exports.CreateExecutionPathParams = exports.CreateExecutionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateExecutionServerList = [
    "https://studio.twilio.com",
];
var CreateExecutionPathParams = /** @class */ (function (_super) {
    __extends(CreateExecutionPathParams, _super);
    function CreateExecutionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], CreateExecutionPathParams.prototype, "flowSid", void 0);
    return CreateExecutionPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateExecutionPathParams = CreateExecutionPathParams;
var CreateExecutionCreateExecutionRequest = /** @class */ (function (_super) {
    __extends(CreateExecutionCreateExecutionRequest, _super);
    function CreateExecutionCreateExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=From;" }),
        __metadata("design:type", String)
    ], CreateExecutionCreateExecutionRequest.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Parameters;" }),
        __metadata("design:type", Object)
    ], CreateExecutionCreateExecutionRequest.prototype, "parameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], CreateExecutionCreateExecutionRequest.prototype, "to", void 0);
    return CreateExecutionCreateExecutionRequest;
}(utils_1.SpeakeasyBase));
exports.CreateExecutionCreateExecutionRequest = CreateExecutionCreateExecutionRequest;
var CreateExecutionSecurity = /** @class */ (function (_super) {
    __extends(CreateExecutionSecurity, _super);
    function CreateExecutionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateExecutionSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateExecutionSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateExecutionSecurity = CreateExecutionSecurity;
var CreateExecutionRequest = /** @class */ (function (_super) {
    __extends(CreateExecutionRequest, _super);
    function CreateExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateExecutionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateExecutionPathParams)
    ], CreateExecutionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateExecutionCreateExecutionRequest)
    ], CreateExecutionRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateExecutionSecurity)
    ], CreateExecutionRequest.prototype, "security", void 0);
    return CreateExecutionRequest;
}(utils_1.SpeakeasyBase));
exports.CreateExecutionRequest = CreateExecutionRequest;
var CreateExecutionResponse = /** @class */ (function (_super) {
    __extends(CreateExecutionResponse, _super);
    function CreateExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateExecutionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateExecutionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.StudioV1FlowExecution)
    ], CreateExecutionResponse.prototype, "studioV1FlowExecution", void 0);
    return CreateExecutionResponse;
}(utils_1.SpeakeasyBase));
exports.CreateExecutionResponse = CreateExecutionResponse;

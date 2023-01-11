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
exports.UpdateQueryResponse = exports.UpdateQueryRequest = exports.UpdateQuerySecurity = exports.UpdateQueryUpdateQueryRequest = exports.UpdateQueryPathParams = exports.UpdateQueryServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateQueryServerList = [
    "https://autopilot.twilio.com",
];
var UpdateQueryPathParams = /** @class */ (function (_super) {
    __extends(UpdateQueryPathParams, _super);
    function UpdateQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateQueryPathParams.prototype, "assistantSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateQueryPathParams.prototype, "sid", void 0);
    return UpdateQueryPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateQueryPathParams = UpdateQueryPathParams;
var UpdateQueryUpdateQueryRequest = /** @class */ (function (_super) {
    __extends(UpdateQueryUpdateQueryRequest, _super);
    function UpdateQueryUpdateQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SampleSid;" }),
        __metadata("design:type", String)
    ], UpdateQueryUpdateQueryRequest.prototype, "sampleSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateQueryUpdateQueryRequest.prototype, "status", void 0);
    return UpdateQueryUpdateQueryRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateQueryUpdateQueryRequest = UpdateQueryUpdateQueryRequest;
var UpdateQuerySecurity = /** @class */ (function (_super) {
    __extends(UpdateQuerySecurity, _super);
    function UpdateQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateQuerySecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateQuerySecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateQuerySecurity = UpdateQuerySecurity;
var UpdateQueryRequest = /** @class */ (function (_super) {
    __extends(UpdateQueryRequest, _super);
    function UpdateQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateQueryRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateQueryPathParams)
    ], UpdateQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateQueryUpdateQueryRequest)
    ], UpdateQueryRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateQuerySecurity)
    ], UpdateQueryRequest.prototype, "security", void 0);
    return UpdateQueryRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateQueryRequest = UpdateQueryRequest;
var UpdateQueryResponse = /** @class */ (function (_super) {
    __extends(UpdateQueryResponse, _super);
    function UpdateQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateQueryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateQueryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AutopilotV1AssistantQuery)
    ], UpdateQueryResponse.prototype, "autopilotV1AssistantQuery", void 0);
    return UpdateQueryResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateQueryResponse = UpdateQueryResponse;

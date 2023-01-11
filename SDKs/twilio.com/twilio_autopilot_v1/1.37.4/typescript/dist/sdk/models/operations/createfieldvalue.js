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
exports.CreateFieldValueResponse = exports.CreateFieldValueRequest = exports.CreateFieldValueSecurity = exports.CreateFieldValueCreateFieldValueRequest = exports.CreateFieldValuePathParams = exports.CreateFieldValueServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateFieldValueServerList = [
    "https://autopilot.twilio.com",
];
var CreateFieldValuePathParams = /** @class */ (function (_super) {
    __extends(CreateFieldValuePathParams, _super);
    function CreateFieldValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateFieldValuePathParams.prototype, "assistantSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" }),
        __metadata("design:type", String)
    ], CreateFieldValuePathParams.prototype, "fieldTypeSid", void 0);
    return CreateFieldValuePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateFieldValuePathParams = CreateFieldValuePathParams;
var CreateFieldValueCreateFieldValueRequest = /** @class */ (function (_super) {
    __extends(CreateFieldValueCreateFieldValueRequest, _super);
    function CreateFieldValueCreateFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Language;" }),
        __metadata("design:type", String)
    ], CreateFieldValueCreateFieldValueRequest.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SynonymOf;" }),
        __metadata("design:type", String)
    ], CreateFieldValueCreateFieldValueRequest.prototype, "synonymOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Value;" }),
        __metadata("design:type", String)
    ], CreateFieldValueCreateFieldValueRequest.prototype, "value", void 0);
    return CreateFieldValueCreateFieldValueRequest;
}(utils_1.SpeakeasyBase));
exports.CreateFieldValueCreateFieldValueRequest = CreateFieldValueCreateFieldValueRequest;
var CreateFieldValueSecurity = /** @class */ (function (_super) {
    __extends(CreateFieldValueSecurity, _super);
    function CreateFieldValueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateFieldValueSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateFieldValueSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateFieldValueSecurity = CreateFieldValueSecurity;
var CreateFieldValueRequest = /** @class */ (function (_super) {
    __extends(CreateFieldValueRequest, _super);
    function CreateFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateFieldValueRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateFieldValuePathParams)
    ], CreateFieldValueRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateFieldValueCreateFieldValueRequest)
    ], CreateFieldValueRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateFieldValueSecurity)
    ], CreateFieldValueRequest.prototype, "security", void 0);
    return CreateFieldValueRequest;
}(utils_1.SpeakeasyBase));
exports.CreateFieldValueRequest = CreateFieldValueRequest;
var CreateFieldValueResponse = /** @class */ (function (_super) {
    __extends(CreateFieldValueResponse, _super);
    function CreateFieldValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateFieldValueResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateFieldValueResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AutopilotV1AssistantFieldTypeFieldValue)
    ], CreateFieldValueResponse.prototype, "autopilotV1AssistantFieldTypeFieldValue", void 0);
    return CreateFieldValueResponse;
}(utils_1.SpeakeasyBase));
exports.CreateFieldValueResponse = CreateFieldValueResponse;

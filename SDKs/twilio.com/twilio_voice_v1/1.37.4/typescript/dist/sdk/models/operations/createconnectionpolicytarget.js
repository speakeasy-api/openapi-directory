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
exports.CreateConnectionPolicyTargetResponse = exports.CreateConnectionPolicyTargetRequest = exports.CreateConnectionPolicyTargetSecurity = exports.CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest = exports.CreateConnectionPolicyTargetPathParams = exports.CreateConnectionPolicyTargetServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateConnectionPolicyTargetServerList = [
    "https://voice.twilio.com",
];
var CreateConnectionPolicyTargetPathParams = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyTargetPathParams, _super);
    function CreateConnectionPolicyTargetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" }),
        __metadata("design:type", String)
    ], CreateConnectionPolicyTargetPathParams.prototype, "connectionPolicySid", void 0);
    return CreateConnectionPolicyTargetPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateConnectionPolicyTargetPathParams = CreateConnectionPolicyTargetPathParams;
var CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest, _super);
    function CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Priority;" }),
        __metadata("design:type", Number)
    ], CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Target;" }),
        __metadata("design:type", String)
    ], CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Weight;" }),
        __metadata("design:type", Number)
    ], CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest.prototype, "weight", void 0);
    return CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest;
}(utils_1.SpeakeasyBase));
exports.CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest = CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest;
var CreateConnectionPolicyTargetSecurity = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyTargetSecurity, _super);
    function CreateConnectionPolicyTargetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateConnectionPolicyTargetSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateConnectionPolicyTargetSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateConnectionPolicyTargetSecurity = CreateConnectionPolicyTargetSecurity;
var CreateConnectionPolicyTargetRequest = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyTargetRequest, _super);
    function CreateConnectionPolicyTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateConnectionPolicyTargetRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateConnectionPolicyTargetPathParams)
    ], CreateConnectionPolicyTargetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest)
    ], CreateConnectionPolicyTargetRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateConnectionPolicyTargetSecurity)
    ], CreateConnectionPolicyTargetRequest.prototype, "security", void 0);
    return CreateConnectionPolicyTargetRequest;
}(utils_1.SpeakeasyBase));
exports.CreateConnectionPolicyTargetRequest = CreateConnectionPolicyTargetRequest;
var CreateConnectionPolicyTargetResponse = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyTargetResponse, _super);
    function CreateConnectionPolicyTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateConnectionPolicyTargetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateConnectionPolicyTargetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VoiceV1ConnectionPolicyConnectionPolicyTarget)
    ], CreateConnectionPolicyTargetResponse.prototype, "voiceV1ConnectionPolicyConnectionPolicyTarget", void 0);
    return CreateConnectionPolicyTargetResponse;
}(utils_1.SpeakeasyBase));
exports.CreateConnectionPolicyTargetResponse = CreateConnectionPolicyTargetResponse;

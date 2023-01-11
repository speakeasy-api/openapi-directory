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
exports.UpdateSipDomainResponse = exports.UpdateSipDomainRequest = exports.UpdateSipDomainSecurity = exports.UpdateSipDomainUpdateSipDomainRequest = exports.UpdateSipDomainPathParams = exports.UpdateSipDomainServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateSipDomainServerList = [
    "https://routes.twilio.com",
];
var UpdateSipDomainPathParams = /** @class */ (function (_super) {
    __extends(UpdateSipDomainPathParams, _super);
    function UpdateSipDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=SipDomain" }),
        __metadata("design:type", String)
    ], UpdateSipDomainPathParams.prototype, "sipDomain", void 0);
    return UpdateSipDomainPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSipDomainPathParams = UpdateSipDomainPathParams;
var UpdateSipDomainUpdateSipDomainRequest = /** @class */ (function (_super) {
    __extends(UpdateSipDomainUpdateSipDomainRequest, _super);
    function UpdateSipDomainUpdateSipDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceRegion;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "voiceRegion", void 0);
    return UpdateSipDomainUpdateSipDomainRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSipDomainUpdateSipDomainRequest = UpdateSipDomainUpdateSipDomainRequest;
var UpdateSipDomainSecurity = /** @class */ (function (_super) {
    __extends(UpdateSipDomainSecurity, _super);
    function UpdateSipDomainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSipDomainSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSipDomainSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateSipDomainSecurity = UpdateSipDomainSecurity;
var UpdateSipDomainRequest = /** @class */ (function (_super) {
    __extends(UpdateSipDomainRequest, _super);
    function UpdateSipDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSipDomainRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSipDomainPathParams)
    ], UpdateSipDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSipDomainUpdateSipDomainRequest)
    ], UpdateSipDomainRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSipDomainSecurity)
    ], UpdateSipDomainRequest.prototype, "security", void 0);
    return UpdateSipDomainRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSipDomainRequest = UpdateSipDomainRequest;
var UpdateSipDomainResponse = /** @class */ (function (_super) {
    __extends(UpdateSipDomainResponse, _super);
    function UpdateSipDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSipDomainResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSipDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.RoutesV2SipDomain)
    ], UpdateSipDomainResponse.prototype, "routesV2SipDomain", void 0);
    return UpdateSipDomainResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSipDomainResponse = UpdateSipDomainResponse;

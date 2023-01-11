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
exports.UpdateDomainCertV4Response = exports.UpdateDomainCertV4Request = exports.UpdateDomainCertV4Security = exports.UpdateDomainCertV4UpdateDomainCertV4Request = exports.UpdateDomainCertV4PathParams = exports.UpdateDomainCertV4ServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateDomainCertV4ServerList = [
    "https://messaging.twilio.com",
];
var UpdateDomainCertV4PathParams = /** @class */ (function (_super) {
    __extends(UpdateDomainCertV4PathParams, _super);
    function UpdateDomainCertV4PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], UpdateDomainCertV4PathParams.prototype, "domainSid", void 0);
    return UpdateDomainCertV4PathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainCertV4PathParams = UpdateDomainCertV4PathParams;
var UpdateDomainCertV4UpdateDomainCertV4Request = /** @class */ (function (_super) {
    __extends(UpdateDomainCertV4UpdateDomainCertV4Request, _super);
    function UpdateDomainCertV4UpdateDomainCertV4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=TlsCert;" }),
        __metadata("design:type", String)
    ], UpdateDomainCertV4UpdateDomainCertV4Request.prototype, "tlsCert", void 0);
    return UpdateDomainCertV4UpdateDomainCertV4Request;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainCertV4UpdateDomainCertV4Request = UpdateDomainCertV4UpdateDomainCertV4Request;
var UpdateDomainCertV4Security = /** @class */ (function (_super) {
    __extends(UpdateDomainCertV4Security, _super);
    function UpdateDomainCertV4Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDomainCertV4Security.prototype, "accountSidAuthToken", void 0);
    return UpdateDomainCertV4Security;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainCertV4Security = UpdateDomainCertV4Security;
var UpdateDomainCertV4Request = /** @class */ (function (_super) {
    __extends(UpdateDomainCertV4Request, _super);
    function UpdateDomainCertV4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDomainCertV4Request.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDomainCertV4PathParams)
    ], UpdateDomainCertV4Request.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDomainCertV4UpdateDomainCertV4Request)
    ], UpdateDomainCertV4Request.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDomainCertV4Security)
    ], UpdateDomainCertV4Request.prototype, "security", void 0);
    return UpdateDomainCertV4Request;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainCertV4Request = UpdateDomainCertV4Request;
var UpdateDomainCertV4Response = /** @class */ (function (_super) {
    __extends(UpdateDomainCertV4Response, _super);
    function UpdateDomainCertV4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDomainCertV4Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateDomainCertV4Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.MessagingV1DomainCertV4)
    ], UpdateDomainCertV4Response.prototype, "messagingV1DomainCertV4", void 0);
    return UpdateDomainCertV4Response;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainCertV4Response = UpdateDomainCertV4Response;

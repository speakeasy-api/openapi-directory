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
exports.CheckKeyUsabilityResponse = exports.CheckKeyUsabilityRequest = exports.CheckKeyUsabilitySecurity = exports.CheckKeyUsabilityQueryParams = exports.CheckKeyUsabilityPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CheckKeyUsabilityPathParams = /** @class */ (function (_super) {
    __extends(CheckKeyUsabilityPathParams, _super);
    function CheckKeyUsabilityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], CheckKeyUsabilityPathParams.prototype, "key", void 0);
    return CheckKeyUsabilityPathParams;
}(utils_1.SpeakeasyBase));
exports.CheckKeyUsabilityPathParams = CheckKeyUsabilityPathParams;
var CheckKeyUsabilityQueryParams = /** @class */ (function (_super) {
    __extends(CheckKeyUsabilityQueryParams, _super);
    function CheckKeyUsabilityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=user_token" }),
        __metadata("design:type", String)
    ], CheckKeyUsabilityQueryParams.prototype, "userToken", void 0);
    return CheckKeyUsabilityQueryParams;
}(utils_1.SpeakeasyBase));
exports.CheckKeyUsabilityQueryParams = CheckKeyUsabilityQueryParams;
var CheckKeyUsabilitySecurity = /** @class */ (function (_super) {
    __extends(CheckKeyUsabilitySecurity, _super);
    function CheckKeyUsabilitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CheckKeyUsabilitySecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], CheckKeyUsabilitySecurity.prototype, "userToken", void 0);
    return CheckKeyUsabilitySecurity;
}(utils_1.SpeakeasyBase));
exports.CheckKeyUsabilitySecurity = CheckKeyUsabilitySecurity;
var CheckKeyUsabilityRequest = /** @class */ (function (_super) {
    __extends(CheckKeyUsabilityRequest, _super);
    function CheckKeyUsabilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CheckKeyUsabilityPathParams)
    ], CheckKeyUsabilityRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CheckKeyUsabilityQueryParams)
    ], CheckKeyUsabilityRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CheckKeyUsabilitySecurity)
    ], CheckKeyUsabilityRequest.prototype, "security", void 0);
    return CheckKeyUsabilityRequest;
}(utils_1.SpeakeasyBase));
exports.CheckKeyUsabilityRequest = CheckKeyUsabilityRequest;
var CheckKeyUsabilityResponse = /** @class */ (function (_super) {
    __extends(CheckKeyUsabilityResponse, _super);
    function CheckKeyUsabilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AddressLookupResponseSchema)
    ], CheckKeyUsabilityResponse.prototype, "addressLookupResponseSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CheckKeyUsabilityResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.KeyUsabilityResponseSchema)
    ], CheckKeyUsabilityResponse.prototype, "keyUsabilityResponseSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CheckKeyUsabilityResponse.prototype, "statusCode", void 0);
    return CheckKeyUsabilityResponse;
}(utils_1.SpeakeasyBase));
exports.CheckKeyUsabilityResponse = CheckKeyUsabilityResponse;

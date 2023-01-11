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
exports.ValidateLicenseeResponse = exports.ValidateLicenseeRequest = exports.ValidateLicenseeSecurity = exports.ValidateLicenseeRequestBody = exports.ValidateLicenseeRequestBodyActionEnum = exports.ValidateLicenseePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ValidateLicenseePathParams = /** @class */ (function (_super) {
    __extends(ValidateLicenseePathParams, _super);
    function ValidateLicenseePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" }),
        __metadata("design:type", String)
    ], ValidateLicenseePathParams.prototype, "licenseeNumber", void 0);
    return ValidateLicenseePathParams;
}(utils_1.SpeakeasyBase));
exports.ValidateLicenseePathParams = ValidateLicenseePathParams;
var ValidateLicenseeRequestBodyActionEnum;
(function (ValidateLicenseeRequestBodyActionEnum) {
    ValidateLicenseeRequestBodyActionEnum["CheckOut"] = "checkOut";
    ValidateLicenseeRequestBodyActionEnum["CheckIn"] = "checkIn";
})(ValidateLicenseeRequestBodyActionEnum = exports.ValidateLicenseeRequestBodyActionEnum || (exports.ValidateLicenseeRequestBodyActionEnum = {}));
var ValidateLicenseeRequestBody = /** @class */ (function (_super) {
    __extends(ValidateLicenseeRequestBody, _super);
    function ValidateLicenseeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=action;" }),
        __metadata("design:type", String)
    ], ValidateLicenseeRequestBody.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=licenseeName;" }),
        __metadata("design:type", String)
    ], ValidateLicenseeRequestBody.prototype, "licenseeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=nodeSecret;" }),
        __metadata("design:type", String)
    ], ValidateLicenseeRequestBody.prototype, "nodeSecret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=productModuleNumber;" }),
        __metadata("design:type", String)
    ], ValidateLicenseeRequestBody.prototype, "productModuleNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=productNumber;" }),
        __metadata("design:type", String)
    ], ValidateLicenseeRequestBody.prototype, "productNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=sessionId;" }),
        __metadata("design:type", String)
    ], ValidateLicenseeRequestBody.prototype, "sessionId", void 0);
    return ValidateLicenseeRequestBody;
}(utils_1.SpeakeasyBase));
exports.ValidateLicenseeRequestBody = ValidateLicenseeRequestBody;
var ValidateLicenseeSecurity = /** @class */ (function (_super) {
    __extends(ValidateLicenseeSecurity, _super);
    function ValidateLicenseeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], ValidateLicenseeSecurity.prototype, "basicAuth", void 0);
    return ValidateLicenseeSecurity;
}(utils_1.SpeakeasyBase));
exports.ValidateLicenseeSecurity = ValidateLicenseeSecurity;
var ValidateLicenseeRequest = /** @class */ (function (_super) {
    __extends(ValidateLicenseeRequest, _super);
    function ValidateLicenseeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ValidateLicenseePathParams)
    ], ValidateLicenseeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ValidateLicenseeRequestBody)
    ], ValidateLicenseeRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ValidateLicenseeSecurity)
    ], ValidateLicenseeRequest.prototype, "security", void 0);
    return ValidateLicenseeRequest;
}(utils_1.SpeakeasyBase));
exports.ValidateLicenseeRequest = ValidateLicenseeRequest;
var ValidateLicenseeResponse = /** @class */ (function (_super) {
    __extends(ValidateLicenseeResponse, _super);
    function ValidateLicenseeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ValidateLicenseeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ValidateLicenseeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ValidateLicenseeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ValidateLicenseeResponse.prototype, "netlicensing", void 0);
    return ValidateLicenseeResponse;
}(utils_1.SpeakeasyBase));
exports.ValidateLicenseeResponse = ValidateLicenseeResponse;

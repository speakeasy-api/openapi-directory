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
exports.SendUserEmailConfirmationResponse = exports.SendUserEmailConfirmationRequest = exports.SendUserEmailConfirmation202ApplicationJson = exports.SendUserEmailConfirmation202ApplicationJsonStatusEnum = exports.SendUserEmailConfirmation200ApplicationJson = exports.SendUserEmailConfirmation200ApplicationJsonStatusEnum = exports.SendUserEmailConfirmationSecurity = exports.SendUserEmailConfirmationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SendUserEmailConfirmationPathParams = /** @class */ (function (_super) {
    __extends(SendUserEmailConfirmationPathParams, _super);
    function SendUserEmailConfirmationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", Number)
    ], SendUserEmailConfirmationPathParams.prototype, "userId", void 0);
    return SendUserEmailConfirmationPathParams;
}(utils_1.SpeakeasyBase));
exports.SendUserEmailConfirmationPathParams = SendUserEmailConfirmationPathParams;
var SendUserEmailConfirmationSecurity = /** @class */ (function (_super) {
    __extends(SendUserEmailConfirmationSecurity, _super);
    function SendUserEmailConfirmationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeMwoAuth)
    ], SendUserEmailConfirmationSecurity.prototype, "mwoAuth", void 0);
    return SendUserEmailConfirmationSecurity;
}(utils_1.SpeakeasyBase));
exports.SendUserEmailConfirmationSecurity = SendUserEmailConfirmationSecurity;
var SendUserEmailConfirmation200ApplicationJsonStatusEnum;
(function (SendUserEmailConfirmation200ApplicationJsonStatusEnum) {
    SendUserEmailConfirmation200ApplicationJsonStatusEnum["Success"] = "success";
})(SendUserEmailConfirmation200ApplicationJsonStatusEnum = exports.SendUserEmailConfirmation200ApplicationJsonStatusEnum || (exports.SendUserEmailConfirmation200ApplicationJsonStatusEnum = {}));
var SendUserEmailConfirmation200ApplicationJson = /** @class */ (function (_super) {
    __extends(SendUserEmailConfirmation200ApplicationJson, _super);
    function SendUserEmailConfirmation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SendUserEmailConfirmation200ApplicationJson.prototype, "status", void 0);
    return SendUserEmailConfirmation200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SendUserEmailConfirmation200ApplicationJson = SendUserEmailConfirmation200ApplicationJson;
var SendUserEmailConfirmation202ApplicationJsonStatusEnum;
(function (SendUserEmailConfirmation202ApplicationJsonStatusEnum) {
    SendUserEmailConfirmation202ApplicationJsonStatusEnum["AlreadyConfirmed"] = "already_confirmed";
})(SendUserEmailConfirmation202ApplicationJsonStatusEnum = exports.SendUserEmailConfirmation202ApplicationJsonStatusEnum || (exports.SendUserEmailConfirmation202ApplicationJsonStatusEnum = {}));
var SendUserEmailConfirmation202ApplicationJson = /** @class */ (function (_super) {
    __extends(SendUserEmailConfirmation202ApplicationJson, _super);
    function SendUserEmailConfirmation202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SendUserEmailConfirmation202ApplicationJson.prototype, "status", void 0);
    return SendUserEmailConfirmation202ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SendUserEmailConfirmation202ApplicationJson = SendUserEmailConfirmation202ApplicationJson;
var SendUserEmailConfirmationRequest = /** @class */ (function (_super) {
    __extends(SendUserEmailConfirmationRequest, _super);
    function SendUserEmailConfirmationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendUserEmailConfirmationPathParams)
    ], SendUserEmailConfirmationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendUserEmailConfirmationSecurity)
    ], SendUserEmailConfirmationRequest.prototype, "security", void 0);
    return SendUserEmailConfirmationRequest;
}(utils_1.SpeakeasyBase));
exports.SendUserEmailConfirmationRequest = SendUserEmailConfirmationRequest;
var SendUserEmailConfirmationResponse = /** @class */ (function (_super) {
    __extends(SendUserEmailConfirmationResponse, _super);
    function SendUserEmailConfirmationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SendUserEmailConfirmationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], SendUserEmailConfirmationResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SendUserEmailConfirmationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendUserEmailConfirmation200ApplicationJson)
    ], SendUserEmailConfirmationResponse.prototype, "sendUserEmailConfirmation200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendUserEmailConfirmation202ApplicationJson)
    ], SendUserEmailConfirmationResponse.prototype, "sendUserEmailConfirmation202ApplicationJSONObject", void 0);
    return SendUserEmailConfirmationResponse;
}(utils_1.SpeakeasyBase));
exports.SendUserEmailConfirmationResponse = SendUserEmailConfirmationResponse;

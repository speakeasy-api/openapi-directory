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
exports.UpdateFleetResponse = exports.UpdateFleetRequest = exports.UpdateFleetSecurity = exports.UpdateFleetUpdateFleetRequest = exports.UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum = exports.UpdateFleetUpdateFleetRequestIpCommandsMethodEnum = exports.UpdateFleetPathParams = exports.UpdateFleetServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateFleetServerList = [
    "https://supersim.twilio.com",
];
var UpdateFleetPathParams = /** @class */ (function (_super) {
    __extends(UpdateFleetPathParams, _super);
    function UpdateFleetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateFleetPathParams.prototype, "sid", void 0);
    return UpdateFleetPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateFleetPathParams = UpdateFleetPathParams;
var UpdateFleetUpdateFleetRequestIpCommandsMethodEnum;
(function (UpdateFleetUpdateFleetRequestIpCommandsMethodEnum) {
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Head"] = "HEAD";
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Get"] = "GET";
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Post"] = "POST";
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Patch"] = "PATCH";
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Put"] = "PUT";
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Delete"] = "DELETE";
})(UpdateFleetUpdateFleetRequestIpCommandsMethodEnum = exports.UpdateFleetUpdateFleetRequestIpCommandsMethodEnum || (exports.UpdateFleetUpdateFleetRequestIpCommandsMethodEnum = {}));
var UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum;
(function (UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum) {
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Head"] = "HEAD";
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Get"] = "GET";
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Post"] = "POST";
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Patch"] = "PATCH";
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Put"] = "PUT";
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Delete"] = "DELETE";
})(UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum = exports.UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum || (exports.UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum = {}));
var UpdateFleetUpdateFleetRequest = /** @class */ (function (_super) {
    __extends(UpdateFleetUpdateFleetRequest, _super);
    function UpdateFleetUpdateFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DataLimit;" }),
        __metadata("design:type", Number)
    ], UpdateFleetUpdateFleetRequest.prototype, "dataLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=IpCommandsMethod;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "ipCommandsMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=IpCommandsUrl;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "ipCommandsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=NetworkAccessProfile;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "networkAccessProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmsCommandsMethod;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "smsCommandsMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmsCommandsUrl;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "smsCommandsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "uniqueName", void 0);
    return UpdateFleetUpdateFleetRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateFleetUpdateFleetRequest = UpdateFleetUpdateFleetRequest;
var UpdateFleetSecurity = /** @class */ (function (_super) {
    __extends(UpdateFleetSecurity, _super);
    function UpdateFleetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateFleetSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateFleetSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateFleetSecurity = UpdateFleetSecurity;
var UpdateFleetRequest = /** @class */ (function (_super) {
    __extends(UpdateFleetRequest, _super);
    function UpdateFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateFleetRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFleetPathParams)
    ], UpdateFleetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateFleetUpdateFleetRequest)
    ], UpdateFleetRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFleetSecurity)
    ], UpdateFleetRequest.prototype, "security", void 0);
    return UpdateFleetRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateFleetRequest = UpdateFleetRequest;
var UpdateFleetResponse = /** @class */ (function (_super) {
    __extends(UpdateFleetResponse, _super);
    function UpdateFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateFleetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateFleetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SupersimV1Fleet)
    ], UpdateFleetResponse.prototype, "supersimV1Fleet", void 0);
    return UpdateFleetResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateFleetResponse = UpdateFleetResponse;

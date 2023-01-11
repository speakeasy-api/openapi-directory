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
exports.CreateFleetResponse = exports.CreateFleetRequest = exports.CreateFleetSecurity = exports.CreateFleetCreateFleetRequest = exports.CreateFleetCreateFleetRequestSmsCommandsMethodEnum = exports.CreateFleetCreateFleetRequestIpCommandsMethodEnum = exports.CreateFleetServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateFleetServerList = [
    "https://supersim.twilio.com",
];
var CreateFleetCreateFleetRequestIpCommandsMethodEnum;
(function (CreateFleetCreateFleetRequestIpCommandsMethodEnum) {
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Head"] = "HEAD";
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Get"] = "GET";
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Post"] = "POST";
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Patch"] = "PATCH";
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Put"] = "PUT";
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Delete"] = "DELETE";
})(CreateFleetCreateFleetRequestIpCommandsMethodEnum = exports.CreateFleetCreateFleetRequestIpCommandsMethodEnum || (exports.CreateFleetCreateFleetRequestIpCommandsMethodEnum = {}));
var CreateFleetCreateFleetRequestSmsCommandsMethodEnum;
(function (CreateFleetCreateFleetRequestSmsCommandsMethodEnum) {
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Head"] = "HEAD";
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Get"] = "GET";
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Post"] = "POST";
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Patch"] = "PATCH";
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Put"] = "PUT";
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Delete"] = "DELETE";
})(CreateFleetCreateFleetRequestSmsCommandsMethodEnum = exports.CreateFleetCreateFleetRequestSmsCommandsMethodEnum || (exports.CreateFleetCreateFleetRequestSmsCommandsMethodEnum = {}));
var CreateFleetCreateFleetRequest = /** @class */ (function (_super) {
    __extends(CreateFleetCreateFleetRequest, _super);
    function CreateFleetCreateFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DataEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateFleetCreateFleetRequest.prototype, "dataEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DataLimit;" }),
        __metadata("design:type", Number)
    ], CreateFleetCreateFleetRequest.prototype, "dataLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=IpCommandsMethod;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "ipCommandsMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=IpCommandsUrl;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "ipCommandsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=NetworkAccessProfile;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "networkAccessProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmsCommandsEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateFleetCreateFleetRequest.prototype, "smsCommandsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmsCommandsMethod;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "smsCommandsMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmsCommandsUrl;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "smsCommandsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "uniqueName", void 0);
    return CreateFleetCreateFleetRequest;
}(utils_1.SpeakeasyBase));
exports.CreateFleetCreateFleetRequest = CreateFleetCreateFleetRequest;
var CreateFleetSecurity = /** @class */ (function (_super) {
    __extends(CreateFleetSecurity, _super);
    function CreateFleetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateFleetSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateFleetSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateFleetSecurity = CreateFleetSecurity;
var CreateFleetRequest = /** @class */ (function (_super) {
    __extends(CreateFleetRequest, _super);
    function CreateFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateFleetCreateFleetRequest)
    ], CreateFleetRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateFleetSecurity)
    ], CreateFleetRequest.prototype, "security", void 0);
    return CreateFleetRequest;
}(utils_1.SpeakeasyBase));
exports.CreateFleetRequest = CreateFleetRequest;
var CreateFleetResponse = /** @class */ (function (_super) {
    __extends(CreateFleetResponse, _super);
    function CreateFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateFleetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateFleetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SupersimV1Fleet)
    ], CreateFleetResponse.prototype, "supersimV1Fleet", void 0);
    return CreateFleetResponse;
}(utils_1.SpeakeasyBase));
exports.CreateFleetResponse = CreateFleetResponse;

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
exports.CreateEsimProfileResponse = exports.CreateEsimProfileRequest = exports.CreateEsimProfileSecurity = exports.CreateEsimProfileCreateEsimProfileRequest = exports.CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum = exports.CreateEsimProfileServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateEsimProfileServerList = [
    "https://supersim.twilio.com",
];
var CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;
(function (CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum) {
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Head"] = "HEAD";
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Get"] = "GET";
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Post"] = "POST";
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Patch"] = "PATCH";
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Put"] = "PUT";
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Delete"] = "DELETE";
})(CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum = exports.CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum || (exports.CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum = {}));
var CreateEsimProfileCreateEsimProfileRequest = /** @class */ (function (_super) {
    __extends(CreateEsimProfileCreateEsimProfileRequest, _super);
    function CreateEsimProfileCreateEsimProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateEsimProfileCreateEsimProfileRequest.prototype, "callbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateEsimProfileCreateEsimProfileRequest.prototype, "callbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Eid;" }),
        __metadata("design:type", String)
    ], CreateEsimProfileCreateEsimProfileRequest.prototype, "eid", void 0);
    return CreateEsimProfileCreateEsimProfileRequest;
}(utils_1.SpeakeasyBase));
exports.CreateEsimProfileCreateEsimProfileRequest = CreateEsimProfileCreateEsimProfileRequest;
var CreateEsimProfileSecurity = /** @class */ (function (_super) {
    __extends(CreateEsimProfileSecurity, _super);
    function CreateEsimProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateEsimProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateEsimProfileSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateEsimProfileSecurity = CreateEsimProfileSecurity;
var CreateEsimProfileRequest = /** @class */ (function (_super) {
    __extends(CreateEsimProfileRequest, _super);
    function CreateEsimProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateEsimProfileRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateEsimProfileCreateEsimProfileRequest)
    ], CreateEsimProfileRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateEsimProfileSecurity)
    ], CreateEsimProfileRequest.prototype, "security", void 0);
    return CreateEsimProfileRequest;
}(utils_1.SpeakeasyBase));
exports.CreateEsimProfileRequest = CreateEsimProfileRequest;
var CreateEsimProfileResponse = /** @class */ (function (_super) {
    __extends(CreateEsimProfileResponse, _super);
    function CreateEsimProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateEsimProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateEsimProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SupersimV1EsimProfile)
    ], CreateEsimProfileResponse.prototype, "supersimV1EsimProfile", void 0);
    return CreateEsimProfileResponse;
}(utils_1.SpeakeasyBase));
exports.CreateEsimProfileResponse = CreateEsimProfileResponse;

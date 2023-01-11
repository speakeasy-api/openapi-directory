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
exports.UpdateDocumentResponse = exports.UpdateDocumentRequest = exports.UpdateDocumentSecurity = exports.UpdateDocumentUpdateDocumentRequest = exports.UpdateDocumentHeaders = exports.UpdateDocumentPathParams = exports.UpdateDocumentServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateDocumentServerList = [
    "https://sync.twilio.com",
];
var UpdateDocumentPathParams = /** @class */ (function (_super) {
    __extends(UpdateDocumentPathParams, _super);
    function UpdateDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateDocumentPathParams.prototype, "serviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateDocumentPathParams.prototype, "sid", void 0);
    return UpdateDocumentPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateDocumentPathParams = UpdateDocumentPathParams;
var UpdateDocumentHeaders = /** @class */ (function (_super) {
    __extends(UpdateDocumentHeaders, _super);
    function UpdateDocumentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateDocumentHeaders.prototype, "ifMatch", void 0);
    return UpdateDocumentHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateDocumentHeaders = UpdateDocumentHeaders;
var UpdateDocumentUpdateDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateDocumentUpdateDocumentRequest, _super);
    function UpdateDocumentUpdateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], UpdateDocumentUpdateDocumentRequest.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], UpdateDocumentUpdateDocumentRequest.prototype, "ttl", void 0);
    return UpdateDocumentUpdateDocumentRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateDocumentUpdateDocumentRequest = UpdateDocumentUpdateDocumentRequest;
var UpdateDocumentSecurity = /** @class */ (function (_super) {
    __extends(UpdateDocumentSecurity, _super);
    function UpdateDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDocumentSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateDocumentSecurity = UpdateDocumentSecurity;
var UpdateDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateDocumentRequest, _super);
    function UpdateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDocumentRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDocumentPathParams)
    ], UpdateDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDocumentHeaders)
    ], UpdateDocumentRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDocumentUpdateDocumentRequest)
    ], UpdateDocumentRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDocumentSecurity)
    ], UpdateDocumentRequest.prototype, "security", void 0);
    return UpdateDocumentRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateDocumentRequest = UpdateDocumentRequest;
var UpdateDocumentResponse = /** @class */ (function (_super) {
    __extends(UpdateDocumentResponse, _super);
    function UpdateDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SyncV1ServiceDocument)
    ], UpdateDocumentResponse.prototype, "syncV1ServiceDocument", void 0);
    return UpdateDocumentResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateDocumentResponse = UpdateDocumentResponse;

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
exports.UpdateSyncDocumentResponse = exports.UpdateSyncDocumentRequest = exports.UpdateSyncDocumentSecurity = exports.UpdateSyncDocumentUpdateSyncDocumentRequest = exports.UpdateSyncDocumentHeaders = exports.UpdateSyncDocumentPathParams = exports.UpdateSyncDocumentServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateSyncDocumentServerList = [
    "https://preview.twilio.com",
];
var UpdateSyncDocumentPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentPathParams, _super);
    function UpdateSyncDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncDocumentPathParams.prototype, "serviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSyncDocumentPathParams.prototype, "sid", void 0);
    return UpdateSyncDocumentPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncDocumentPathParams = UpdateSyncDocumentPathParams;
var UpdateSyncDocumentHeaders = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentHeaders, _super);
    function UpdateSyncDocumentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateSyncDocumentHeaders.prototype, "ifMatch", void 0);
    return UpdateSyncDocumentHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncDocumentHeaders = UpdateSyncDocumentHeaders;
var UpdateSyncDocumentUpdateSyncDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentUpdateSyncDocumentRequest, _super);
    function UpdateSyncDocumentUpdateSyncDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], UpdateSyncDocumentUpdateSyncDocumentRequest.prototype, "data", void 0);
    return UpdateSyncDocumentUpdateSyncDocumentRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncDocumentUpdateSyncDocumentRequest = UpdateSyncDocumentUpdateSyncDocumentRequest;
var UpdateSyncDocumentSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentSecurity, _super);
    function UpdateSyncDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncDocumentSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncDocumentSecurity = UpdateSyncDocumentSecurity;
var UpdateSyncDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentRequest, _super);
    function UpdateSyncDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSyncDocumentRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSyncDocumentPathParams)
    ], UpdateSyncDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSyncDocumentHeaders)
    ], UpdateSyncDocumentRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncDocumentUpdateSyncDocumentRequest)
    ], UpdateSyncDocumentRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSyncDocumentSecurity)
    ], UpdateSyncDocumentRequest.prototype, "security", void 0);
    return UpdateSyncDocumentRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncDocumentRequest = UpdateSyncDocumentRequest;
var UpdateSyncDocumentResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentResponse, _super);
    function UpdateSyncDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSyncDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSyncDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreviewSyncServiceDocument)
    ], UpdateSyncDocumentResponse.prototype, "previewSyncServiceDocument", void 0);
    return UpdateSyncDocumentResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncDocumentResponse = UpdateSyncDocumentResponse;

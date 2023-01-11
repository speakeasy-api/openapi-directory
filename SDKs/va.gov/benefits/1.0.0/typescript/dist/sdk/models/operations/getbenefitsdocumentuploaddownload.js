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
exports.GetBenefitsDocumentUploadDownloadResponse = exports.GetBenefitsDocumentUploadDownloadRequest = exports.GetBenefitsDocumentUploadDownload500ApplicationJson = exports.GetBenefitsDocumentUploadDownload429ApplicationJson = exports.GetBenefitsDocumentUploadDownload404ApplicationJson = exports.GetBenefitsDocumentUploadDownload403ApplicationJson = exports.GetBenefitsDocumentUploadDownload401ApplicationJson = exports.GetBenefitsDocumentUploadDownloadSecurity = exports.GetBenefitsDocumentUploadDownloadPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetBenefitsDocumentUploadDownloadPathParams = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownloadPathParams, _super);
    function GetBenefitsDocumentUploadDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownloadPathParams.prototype, "id", void 0);
    return GetBenefitsDocumentUploadDownloadPathParams;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadDownloadPathParams = GetBenefitsDocumentUploadDownloadPathParams;
var GetBenefitsDocumentUploadDownloadSecurity = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownloadSecurity, _super);
    function GetBenefitsDocumentUploadDownloadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], GetBenefitsDocumentUploadDownloadSecurity.prototype, "apikey", void 0);
    return GetBenefitsDocumentUploadDownloadSecurity;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadDownloadSecurity = GetBenefitsDocumentUploadDownloadSecurity;
var GetBenefitsDocumentUploadDownload401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownload401ApplicationJson, _super);
    function GetBenefitsDocumentUploadDownload401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload401ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadDownload401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadDownload401ApplicationJson = GetBenefitsDocumentUploadDownload401ApplicationJson;
var GetBenefitsDocumentUploadDownload403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownload403ApplicationJson, _super);
    function GetBenefitsDocumentUploadDownload403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload403ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadDownload403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadDownload403ApplicationJson = GetBenefitsDocumentUploadDownload403ApplicationJson;
var GetBenefitsDocumentUploadDownload404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownload404ApplicationJson, _super);
    function GetBenefitsDocumentUploadDownload404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload404ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload404ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload404ApplicationJson.prototype, "title", void 0);
    return GetBenefitsDocumentUploadDownload404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadDownload404ApplicationJson = GetBenefitsDocumentUploadDownload404ApplicationJson;
var GetBenefitsDocumentUploadDownload429ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownload429ApplicationJson, _super);
    function GetBenefitsDocumentUploadDownload429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload429ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadDownload429ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadDownload429ApplicationJson = GetBenefitsDocumentUploadDownload429ApplicationJson;
var GetBenefitsDocumentUploadDownload500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownload500ApplicationJson, _super);
    function GetBenefitsDocumentUploadDownload500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload500ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload500ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload500ApplicationJson.prototype, "title", void 0);
    return GetBenefitsDocumentUploadDownload500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadDownload500ApplicationJson = GetBenefitsDocumentUploadDownload500ApplicationJson;
var GetBenefitsDocumentUploadDownloadRequest = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownloadRequest, _super);
    function GetBenefitsDocumentUploadDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadDownloadPathParams)
    ], GetBenefitsDocumentUploadDownloadRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadDownloadSecurity)
    ], GetBenefitsDocumentUploadDownloadRequest.prototype, "security", void 0);
    return GetBenefitsDocumentUploadDownloadRequest;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadDownloadRequest = GetBenefitsDocumentUploadDownloadRequest;
var GetBenefitsDocumentUploadDownloadResponse = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownloadResponse, _super);
    function GetBenefitsDocumentUploadDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload200ApplicationZipBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadDownload401ApplicationJson)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadDownload403ApplicationJson)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadDownload404ApplicationJson)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadDownload429ApplicationJson)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload429ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadDownload500ApplicationJson)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload500ApplicationJSONObject", void 0);
    return GetBenefitsDocumentUploadDownloadResponse;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadDownloadResponse = GetBenefitsDocumentUploadDownloadResponse;

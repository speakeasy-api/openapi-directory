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
exports.GetBenefitsDocumentUploadStatusReportResponse = exports.GetBenefitsDocumentUploadStatusReportRequest = exports.GetBenefitsDocumentUploadStatusReport500ApplicationJson = exports.GetBenefitsDocumentUploadStatusReport429ApplicationJson = exports.GetBenefitsDocumentUploadStatusReport422ApplicationJson = exports.GetBenefitsDocumentUploadStatusReport403ApplicationJson = exports.GetBenefitsDocumentUploadStatusReport401ApplicationJson = exports.GetBenefitsDocumentUploadStatusReport200ApplicationJson = exports.GetBenefitsDocumentUploadStatusReportSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetBenefitsDocumentUploadStatusReportSecurity = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReportSecurity, _super);
    function GetBenefitsDocumentUploadStatusReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], GetBenefitsDocumentUploadStatusReportSecurity.prototype, "apikey", void 0);
    return GetBenefitsDocumentUploadStatusReportSecurity;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadStatusReportSecurity = GetBenefitsDocumentUploadStatusReportSecurity;
var GetBenefitsDocumentUploadStatusReport200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport200ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetBenefitsDocumentUploadStatusReport200ApplicationJson.prototype, "data", void 0);
    return GetBenefitsDocumentUploadStatusReport200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadStatusReport200ApplicationJson = GetBenefitsDocumentUploadStatusReport200ApplicationJson;
var GetBenefitsDocumentUploadStatusReport401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport401ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport401ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadStatusReport401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadStatusReport401ApplicationJson = GetBenefitsDocumentUploadStatusReport401ApplicationJson;
var GetBenefitsDocumentUploadStatusReport403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport403ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport403ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadStatusReport403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadStatusReport403ApplicationJson = GetBenefitsDocumentUploadStatusReport403ApplicationJson;
var GetBenefitsDocumentUploadStatusReport422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport422ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], GetBenefitsDocumentUploadStatusReport422ApplicationJson.prototype, "errors", void 0);
    return GetBenefitsDocumentUploadStatusReport422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadStatusReport422ApplicationJson = GetBenefitsDocumentUploadStatusReport422ApplicationJson;
var GetBenefitsDocumentUploadStatusReport429ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport429ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport429ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadStatusReport429ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadStatusReport429ApplicationJson = GetBenefitsDocumentUploadStatusReport429ApplicationJson;
var GetBenefitsDocumentUploadStatusReport500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport500ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport500ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport500ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport500ApplicationJson.prototype, "title", void 0);
    return GetBenefitsDocumentUploadStatusReport500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadStatusReport500ApplicationJson = GetBenefitsDocumentUploadStatusReport500ApplicationJson;
var GetBenefitsDocumentUploadStatusReportRequest = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReportRequest, _super);
    function GetBenefitsDocumentUploadStatusReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DocumentUploadStatusGuidList)
    ], GetBenefitsDocumentUploadStatusReportRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReportSecurity)
    ], GetBenefitsDocumentUploadStatusReportRequest.prototype, "security", void 0);
    return GetBenefitsDocumentUploadStatusReportRequest;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadStatusReportRequest = GetBenefitsDocumentUploadStatusReportRequest;
var GetBenefitsDocumentUploadStatusReportResponse = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReportResponse, _super);
    function GetBenefitsDocumentUploadStatusReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport200ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport401ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport403ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport422ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport422ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport429ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport429ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport500ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport500ApplicationJSONObject", void 0);
    return GetBenefitsDocumentUploadStatusReportResponse;
}(utils_1.SpeakeasyBase));
exports.GetBenefitsDocumentUploadStatusReportResponse = GetBenefitsDocumentUploadStatusReportResponse;

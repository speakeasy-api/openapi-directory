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
exports.FetchSyncDocumentPermissionResponse = exports.FetchSyncDocumentPermissionRequest = exports.FetchSyncDocumentPermissionSecurity = exports.FetchSyncDocumentPermissionPathParams = exports.FetchSyncDocumentPermissionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.FetchSyncDocumentPermissionServerList = [
    "https://preview.twilio.com",
];
var FetchSyncDocumentPermissionPathParams = /** @class */ (function (_super) {
    __extends(FetchSyncDocumentPermissionPathParams, _super);
    function FetchSyncDocumentPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=DocumentSid" }),
        __metadata("design:type", String)
    ], FetchSyncDocumentPermissionPathParams.prototype, "documentSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], FetchSyncDocumentPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchSyncDocumentPermissionPathParams.prototype, "serviceSid", void 0);
    return FetchSyncDocumentPermissionPathParams;
}(utils_1.SpeakeasyBase));
exports.FetchSyncDocumentPermissionPathParams = FetchSyncDocumentPermissionPathParams;
var FetchSyncDocumentPermissionSecurity = /** @class */ (function (_super) {
    __extends(FetchSyncDocumentPermissionSecurity, _super);
    function FetchSyncDocumentPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSyncDocumentPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSyncDocumentPermissionSecurity;
}(utils_1.SpeakeasyBase));
exports.FetchSyncDocumentPermissionSecurity = FetchSyncDocumentPermissionSecurity;
var FetchSyncDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(FetchSyncDocumentPermissionRequest, _super);
    function FetchSyncDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchSyncDocumentPermissionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchSyncDocumentPermissionPathParams)
    ], FetchSyncDocumentPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchSyncDocumentPermissionSecurity)
    ], FetchSyncDocumentPermissionRequest.prototype, "security", void 0);
    return FetchSyncDocumentPermissionRequest;
}(utils_1.SpeakeasyBase));
exports.FetchSyncDocumentPermissionRequest = FetchSyncDocumentPermissionRequest;
var FetchSyncDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(FetchSyncDocumentPermissionResponse, _super);
    function FetchSyncDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchSyncDocumentPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FetchSyncDocumentPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreviewSyncServiceDocumentDocumentPermission)
    ], FetchSyncDocumentPermissionResponse.prototype, "previewSyncServiceDocumentDocumentPermission", void 0);
    return FetchSyncDocumentPermissionResponse;
}(utils_1.SpeakeasyBase));
exports.FetchSyncDocumentPermissionResponse = FetchSyncDocumentPermissionResponse;

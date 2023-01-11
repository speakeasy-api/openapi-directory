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
exports.ListCredentialPublicKeyResponse = exports.ListCredentialPublicKeyRequest = exports.ListCredentialPublicKeyListCredentialPublicKeyResponse = exports.ListCredentialPublicKeyListCredentialPublicKeyResponseMeta = exports.ListCredentialPublicKeySecurity = exports.ListCredentialPublicKeyQueryParams = exports.ListCredentialPublicKeyServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListCredentialPublicKeyServerList = [
    "https://accounts.twilio.com",
];
var ListCredentialPublicKeyQueryParams = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeyQueryParams, _super);
    function ListCredentialPublicKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCredentialPublicKeyQueryParams.prototype, "pageSize", void 0);
    return ListCredentialPublicKeyQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCredentialPublicKeyQueryParams = ListCredentialPublicKeyQueryParams;
var ListCredentialPublicKeySecurity = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeySecurity, _super);
    function ListCredentialPublicKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCredentialPublicKeySecurity.prototype, "accountSidAuthToken", void 0);
    return ListCredentialPublicKeySecurity;
}(utils_1.SpeakeasyBase));
exports.ListCredentialPublicKeySecurity = ListCredentialPublicKeySecurity;
var ListCredentialPublicKeyListCredentialPublicKeyResponseMeta = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeyListCredentialPublicKeyResponseMeta, _super);
    function ListCredentialPublicKeyListCredentialPublicKeyResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "url", void 0);
    return ListCredentialPublicKeyListCredentialPublicKeyResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListCredentialPublicKeyListCredentialPublicKeyResponseMeta = ListCredentialPublicKeyListCredentialPublicKeyResponseMeta;
var ListCredentialPublicKeyListCredentialPublicKeyResponse = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeyListCredentialPublicKeyResponse, _super);
    function ListCredentialPublicKeyListCredentialPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=credentials", elemType: shared.AccountsV1CredentialCredentialPublicKey }),
        __metadata("design:type", Array)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponse.prototype, "credentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListCredentialPublicKeyListCredentialPublicKeyResponseMeta)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponse.prototype, "meta", void 0);
    return ListCredentialPublicKeyListCredentialPublicKeyResponse;
}(utils_1.SpeakeasyBase));
exports.ListCredentialPublicKeyListCredentialPublicKeyResponse = ListCredentialPublicKeyListCredentialPublicKeyResponse;
var ListCredentialPublicKeyRequest = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeyRequest, _super);
    function ListCredentialPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCredentialPublicKeyQueryParams)
    ], ListCredentialPublicKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCredentialPublicKeySecurity)
    ], ListCredentialPublicKeyRequest.prototype, "security", void 0);
    return ListCredentialPublicKeyRequest;
}(utils_1.SpeakeasyBase));
exports.ListCredentialPublicKeyRequest = ListCredentialPublicKeyRequest;
var ListCredentialPublicKeyResponse = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeyResponse, _super);
    function ListCredentialPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCredentialPublicKeyListCredentialPublicKeyResponse)
    ], ListCredentialPublicKeyResponse.prototype, "listCredentialPublicKeyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCredentialPublicKeyResponse.prototype, "statusCode", void 0);
    return ListCredentialPublicKeyResponse;
}(utils_1.SpeakeasyBase));
exports.ListCredentialPublicKeyResponse = ListCredentialPublicKeyResponse;

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
exports.ListSigningKeyResponse = exports.ListSigningKeyRequest = exports.ListSigningKeyListSigningKeyResponse = exports.ListSigningKeySecurity = exports.ListSigningKeyQueryParams = exports.ListSigningKeyPathParams = exports.ListSigningKeyServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSigningKeyServerList = [
    "https://api.twilio.com",
];
var ListSigningKeyPathParams = /** @class */ (function (_super) {
    __extends(ListSigningKeyPathParams, _super);
    function ListSigningKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSigningKeyPathParams.prototype, "accountSid", void 0);
    return ListSigningKeyPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSigningKeyPathParams = ListSigningKeyPathParams;
var ListSigningKeyQueryParams = /** @class */ (function (_super) {
    __extends(ListSigningKeyQueryParams, _super);
    function ListSigningKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSigningKeyQueryParams.prototype, "pageSize", void 0);
    return ListSigningKeyQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSigningKeyQueryParams = ListSigningKeyQueryParams;
var ListSigningKeySecurity = /** @class */ (function (_super) {
    __extends(ListSigningKeySecurity, _super);
    function ListSigningKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSigningKeySecurity.prototype, "accountSidAuthToken", void 0);
    return ListSigningKeySecurity;
}(utils_1.SpeakeasyBase));
exports.ListSigningKeySecurity = ListSigningKeySecurity;
var ListSigningKeyListSigningKeyResponse = /** @class */ (function (_super) {
    __extends(ListSigningKeyListSigningKeyResponse, _super);
    function ListSigningKeyListSigningKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSigningKeyListSigningKeyResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSigningKeyListSigningKeyResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSigningKeyListSigningKeyResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSigningKeyListSigningKeyResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSigningKeyListSigningKeyResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSigningKeyListSigningKeyResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signing_keys", elemType: shared.ApiV2010AccountSigningKey }),
        __metadata("design:type", Array)
    ], ListSigningKeyListSigningKeyResponse.prototype, "signingKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSigningKeyListSigningKeyResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSigningKeyListSigningKeyResponse.prototype, "uri", void 0);
    return ListSigningKeyListSigningKeyResponse;
}(utils_1.SpeakeasyBase));
exports.ListSigningKeyListSigningKeyResponse = ListSigningKeyListSigningKeyResponse;
var ListSigningKeyRequest = /** @class */ (function (_super) {
    __extends(ListSigningKeyRequest, _super);
    function ListSigningKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSigningKeyRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSigningKeyPathParams)
    ], ListSigningKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSigningKeyQueryParams)
    ], ListSigningKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSigningKeySecurity)
    ], ListSigningKeyRequest.prototype, "security", void 0);
    return ListSigningKeyRequest;
}(utils_1.SpeakeasyBase));
exports.ListSigningKeyRequest = ListSigningKeyRequest;
var ListSigningKeyResponse = /** @class */ (function (_super) {
    __extends(ListSigningKeyResponse, _super);
    function ListSigningKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSigningKeyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSigningKeyListSigningKeyResponse)
    ], ListSigningKeyResponse.prototype, "listSigningKeyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSigningKeyResponse.prototype, "statusCode", void 0);
    return ListSigningKeyResponse;
}(utils_1.SpeakeasyBase));
exports.ListSigningKeyResponse = ListSigningKeyResponse;

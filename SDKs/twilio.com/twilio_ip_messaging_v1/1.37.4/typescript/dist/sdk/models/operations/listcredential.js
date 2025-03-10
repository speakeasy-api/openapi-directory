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
exports.ListCredentialResponse = exports.ListCredentialRequest = exports.ListCredentialListCredentialResponse = exports.ListCredentialListCredentialResponseMeta = exports.ListCredentialSecurity = exports.ListCredentialQueryParams = exports.ListCredentialServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListCredentialServerList = [
    "https://ip-messaging.twilio.com",
];
var ListCredentialQueryParams = /** @class */ (function (_super) {
    __extends(ListCredentialQueryParams, _super);
    function ListCredentialQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCredentialQueryParams.prototype, "pageSize", void 0);
    return ListCredentialQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCredentialQueryParams = ListCredentialQueryParams;
var ListCredentialSecurity = /** @class */ (function (_super) {
    __extends(ListCredentialSecurity, _super);
    function ListCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCredentialSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCredentialSecurity;
}(utils_1.SpeakeasyBase));
exports.ListCredentialSecurity = ListCredentialSecurity;
var ListCredentialListCredentialResponseMeta = /** @class */ (function (_super) {
    __extends(ListCredentialListCredentialResponseMeta, _super);
    function ListCredentialListCredentialResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialListCredentialResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCredentialListCredentialResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialListCredentialResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCredentialListCredentialResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCredentialListCredentialResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialListCredentialResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCredentialListCredentialResponseMeta.prototype, "url", void 0);
    return ListCredentialListCredentialResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListCredentialListCredentialResponseMeta = ListCredentialListCredentialResponseMeta;
var ListCredentialListCredentialResponse = /** @class */ (function (_super) {
    __extends(ListCredentialListCredentialResponse, _super);
    function ListCredentialListCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=credentials", elemType: shared.IpMessagingV1Credential }),
        __metadata("design:type", Array)
    ], ListCredentialListCredentialResponse.prototype, "credentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListCredentialListCredentialResponseMeta)
    ], ListCredentialListCredentialResponse.prototype, "meta", void 0);
    return ListCredentialListCredentialResponse;
}(utils_1.SpeakeasyBase));
exports.ListCredentialListCredentialResponse = ListCredentialListCredentialResponse;
var ListCredentialRequest = /** @class */ (function (_super) {
    __extends(ListCredentialRequest, _super);
    function ListCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCredentialRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCredentialQueryParams)
    ], ListCredentialRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCredentialSecurity)
    ], ListCredentialRequest.prototype, "security", void 0);
    return ListCredentialRequest;
}(utils_1.SpeakeasyBase));
exports.ListCredentialRequest = ListCredentialRequest;
var ListCredentialResponse = /** @class */ (function (_super) {
    __extends(ListCredentialResponse, _super);
    function ListCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCredentialListCredentialResponse)
    ], ListCredentialResponse.prototype, "listCredentialResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCredentialResponse.prototype, "statusCode", void 0);
    return ListCredentialResponse;
}(utils_1.SpeakeasyBase));
exports.ListCredentialResponse = ListCredentialResponse;

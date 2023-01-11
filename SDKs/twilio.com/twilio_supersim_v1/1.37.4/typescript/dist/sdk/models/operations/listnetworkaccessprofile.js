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
exports.ListNetworkAccessProfileResponse = exports.ListNetworkAccessProfileRequest = exports.ListNetworkAccessProfileListNetworkAccessProfileResponse = exports.ListNetworkAccessProfileListNetworkAccessProfileResponseMeta = exports.ListNetworkAccessProfileSecurity = exports.ListNetworkAccessProfileQueryParams = exports.ListNetworkAccessProfileServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListNetworkAccessProfileServerList = [
    "https://supersim.twilio.com",
];
var ListNetworkAccessProfileQueryParams = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileQueryParams, _super);
    function ListNetworkAccessProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileQueryParams.prototype, "pageSize", void 0);
    return ListNetworkAccessProfileQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileQueryParams = ListNetworkAccessProfileQueryParams;
var ListNetworkAccessProfileSecurity = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileSecurity, _super);
    function ListNetworkAccessProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListNetworkAccessProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return ListNetworkAccessProfileSecurity;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileSecurity = ListNetworkAccessProfileSecurity;
var ListNetworkAccessProfileListNetworkAccessProfileResponseMeta = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileListNetworkAccessProfileResponseMeta, _super);
    function ListNetworkAccessProfileListNetworkAccessProfileResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "url", void 0);
    return ListNetworkAccessProfileListNetworkAccessProfileResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileListNetworkAccessProfileResponseMeta = ListNetworkAccessProfileListNetworkAccessProfileResponseMeta;
var ListNetworkAccessProfileListNetworkAccessProfileResponse = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileListNetworkAccessProfileResponse, _super);
    function ListNetworkAccessProfileListNetworkAccessProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListNetworkAccessProfileListNetworkAccessProfileResponseMeta)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_access_profiles", elemType: shared.SupersimV1NetworkAccessProfile }),
        __metadata("design:type", Array)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponse.prototype, "networkAccessProfiles", void 0);
    return ListNetworkAccessProfileListNetworkAccessProfileResponse;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileListNetworkAccessProfileResponse = ListNetworkAccessProfileListNetworkAccessProfileResponse;
var ListNetworkAccessProfileRequest = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileRequest, _super);
    function ListNetworkAccessProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListNetworkAccessProfileQueryParams)
    ], ListNetworkAccessProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListNetworkAccessProfileSecurity)
    ], ListNetworkAccessProfileRequest.prototype, "security", void 0);
    return ListNetworkAccessProfileRequest;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileRequest = ListNetworkAccessProfileRequest;
var ListNetworkAccessProfileResponse = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileResponse, _super);
    function ListNetworkAccessProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListNetworkAccessProfileListNetworkAccessProfileResponse)
    ], ListNetworkAccessProfileResponse.prototype, "listNetworkAccessProfileResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileResponse.prototype, "statusCode", void 0);
    return ListNetworkAccessProfileResponse;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileResponse = ListNetworkAccessProfileResponse;

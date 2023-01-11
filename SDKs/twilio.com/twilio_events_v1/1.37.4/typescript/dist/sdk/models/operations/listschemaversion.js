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
exports.ListSchemaVersionResponse = exports.ListSchemaVersionRequest = exports.ListSchemaVersionListSchemaVersionResponse = exports.ListSchemaVersionListSchemaVersionResponseMeta = exports.ListSchemaVersionSecurity = exports.ListSchemaVersionQueryParams = exports.ListSchemaVersionPathParams = exports.ListSchemaVersionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSchemaVersionServerList = [
    "https://events.twilio.com",
];
var ListSchemaVersionPathParams = /** @class */ (function (_super) {
    __extends(ListSchemaVersionPathParams, _super);
    function ListSchemaVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Id" }),
        __metadata("design:type", String)
    ], ListSchemaVersionPathParams.prototype, "id", void 0);
    return ListSchemaVersionPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSchemaVersionPathParams = ListSchemaVersionPathParams;
var ListSchemaVersionQueryParams = /** @class */ (function (_super) {
    __extends(ListSchemaVersionQueryParams, _super);
    function ListSchemaVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSchemaVersionQueryParams.prototype, "pageSize", void 0);
    return ListSchemaVersionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSchemaVersionQueryParams = ListSchemaVersionQueryParams;
var ListSchemaVersionSecurity = /** @class */ (function (_super) {
    __extends(ListSchemaVersionSecurity, _super);
    function ListSchemaVersionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSchemaVersionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSchemaVersionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSchemaVersionSecurity = ListSchemaVersionSecurity;
var ListSchemaVersionListSchemaVersionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSchemaVersionListSchemaVersionResponseMeta, _super);
    function ListSchemaVersionListSchemaVersionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "url", void 0);
    return ListSchemaVersionListSchemaVersionResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListSchemaVersionListSchemaVersionResponseMeta = ListSchemaVersionListSchemaVersionResponseMeta;
var ListSchemaVersionListSchemaVersionResponse = /** @class */ (function (_super) {
    __extends(ListSchemaVersionListSchemaVersionResponse, _super);
    function ListSchemaVersionListSchemaVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListSchemaVersionListSchemaVersionResponseMeta)
    ], ListSchemaVersionListSchemaVersionResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema_versions", elemType: shared.EventsV1SchemaSchemaVersion }),
        __metadata("design:type", Array)
    ], ListSchemaVersionListSchemaVersionResponse.prototype, "schemaVersions", void 0);
    return ListSchemaVersionListSchemaVersionResponse;
}(utils_1.SpeakeasyBase));
exports.ListSchemaVersionListSchemaVersionResponse = ListSchemaVersionListSchemaVersionResponse;
var ListSchemaVersionRequest = /** @class */ (function (_super) {
    __extends(ListSchemaVersionRequest, _super);
    function ListSchemaVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSchemaVersionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSchemaVersionPathParams)
    ], ListSchemaVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSchemaVersionQueryParams)
    ], ListSchemaVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSchemaVersionSecurity)
    ], ListSchemaVersionRequest.prototype, "security", void 0);
    return ListSchemaVersionRequest;
}(utils_1.SpeakeasyBase));
exports.ListSchemaVersionRequest = ListSchemaVersionRequest;
var ListSchemaVersionResponse = /** @class */ (function (_super) {
    __extends(ListSchemaVersionResponse, _super);
    function ListSchemaVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSchemaVersionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSchemaVersionListSchemaVersionResponse)
    ], ListSchemaVersionResponse.prototype, "listSchemaVersionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSchemaVersionResponse.prototype, "statusCode", void 0);
    return ListSchemaVersionResponse;
}(utils_1.SpeakeasyBase));
exports.ListSchemaVersionResponse = ListSchemaVersionResponse;

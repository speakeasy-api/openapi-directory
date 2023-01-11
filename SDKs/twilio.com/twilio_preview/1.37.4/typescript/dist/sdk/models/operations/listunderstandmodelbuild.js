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
exports.ListUnderstandModelBuildResponse = exports.ListUnderstandModelBuildRequest = exports.ListUnderstandModelBuildListUnderstandModelBuildResponse = exports.ListUnderstandModelBuildListUnderstandModelBuildResponseMeta = exports.ListUnderstandModelBuildSecurity = exports.ListUnderstandModelBuildQueryParams = exports.ListUnderstandModelBuildPathParams = exports.ListUnderstandModelBuildServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListUnderstandModelBuildServerList = [
    "https://preview.twilio.com",
];
var ListUnderstandModelBuildPathParams = /** @class */ (function (_super) {
    __extends(ListUnderstandModelBuildPathParams, _super);
    function ListUnderstandModelBuildPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListUnderstandModelBuildPathParams.prototype, "assistantSid", void 0);
    return ListUnderstandModelBuildPathParams;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandModelBuildPathParams = ListUnderstandModelBuildPathParams;
var ListUnderstandModelBuildQueryParams = /** @class */ (function (_super) {
    __extends(ListUnderstandModelBuildQueryParams, _super);
    function ListUnderstandModelBuildQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUnderstandModelBuildQueryParams.prototype, "pageSize", void 0);
    return ListUnderstandModelBuildQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandModelBuildQueryParams = ListUnderstandModelBuildQueryParams;
var ListUnderstandModelBuildSecurity = /** @class */ (function (_super) {
    __extends(ListUnderstandModelBuildSecurity, _super);
    function ListUnderstandModelBuildSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUnderstandModelBuildSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUnderstandModelBuildSecurity;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandModelBuildSecurity = ListUnderstandModelBuildSecurity;
var ListUnderstandModelBuildListUnderstandModelBuildResponseMeta = /** @class */ (function (_super) {
    __extends(ListUnderstandModelBuildListUnderstandModelBuildResponseMeta, _super);
    function ListUnderstandModelBuildListUnderstandModelBuildResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandModelBuildListUnderstandModelBuildResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUnderstandModelBuildListUnderstandModelBuildResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandModelBuildListUnderstandModelBuildResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUnderstandModelBuildListUnderstandModelBuildResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUnderstandModelBuildListUnderstandModelBuildResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandModelBuildListUnderstandModelBuildResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUnderstandModelBuildListUnderstandModelBuildResponseMeta.prototype, "url", void 0);
    return ListUnderstandModelBuildListUnderstandModelBuildResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandModelBuildListUnderstandModelBuildResponseMeta = ListUnderstandModelBuildListUnderstandModelBuildResponseMeta;
var ListUnderstandModelBuildListUnderstandModelBuildResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandModelBuildListUnderstandModelBuildResponse, _super);
    function ListUnderstandModelBuildListUnderstandModelBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListUnderstandModelBuildListUnderstandModelBuildResponseMeta)
    ], ListUnderstandModelBuildListUnderstandModelBuildResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=model_builds", elemType: shared.PreviewUnderstandAssistantModelBuild }),
        __metadata("design:type", Array)
    ], ListUnderstandModelBuildListUnderstandModelBuildResponse.prototype, "modelBuilds", void 0);
    return ListUnderstandModelBuildListUnderstandModelBuildResponse;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandModelBuildListUnderstandModelBuildResponse = ListUnderstandModelBuildListUnderstandModelBuildResponse;
var ListUnderstandModelBuildRequest = /** @class */ (function (_super) {
    __extends(ListUnderstandModelBuildRequest, _super);
    function ListUnderstandModelBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListUnderstandModelBuildRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUnderstandModelBuildPathParams)
    ], ListUnderstandModelBuildRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUnderstandModelBuildQueryParams)
    ], ListUnderstandModelBuildRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUnderstandModelBuildSecurity)
    ], ListUnderstandModelBuildRequest.prototype, "security", void 0);
    return ListUnderstandModelBuildRequest;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandModelBuildRequest = ListUnderstandModelBuildRequest;
var ListUnderstandModelBuildResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandModelBuildResponse, _super);
    function ListUnderstandModelBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListUnderstandModelBuildResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUnderstandModelBuildListUnderstandModelBuildResponse)
    ], ListUnderstandModelBuildResponse.prototype, "listUnderstandModelBuildResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListUnderstandModelBuildResponse.prototype, "statusCode", void 0);
    return ListUnderstandModelBuildResponse;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandModelBuildResponse = ListUnderstandModelBuildResponse;

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
exports.ListActivityResponse = exports.ListActivityRequest = exports.ListActivityListActivityResponse = exports.ListActivityListActivityResponseMeta = exports.ListActivitySecurity = exports.ListActivityQueryParams = exports.ListActivityPathParams = exports.ListActivityServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListActivityServerList = [
    "https://taskrouter.twilio.com",
];
var ListActivityPathParams = /** @class */ (function (_super) {
    __extends(ListActivityPathParams, _super);
    function ListActivityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListActivityPathParams.prototype, "workspaceSid", void 0);
    return ListActivityPathParams;
}(utils_1.SpeakeasyBase));
exports.ListActivityPathParams = ListActivityPathParams;
var ListActivityQueryParams = /** @class */ (function (_super) {
    __extends(ListActivityQueryParams, _super);
    function ListActivityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Available" }),
        __metadata("design:type", String)
    ], ListActivityQueryParams.prototype, "available", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListActivityQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListActivityQueryParams.prototype, "pageSize", void 0);
    return ListActivityQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListActivityQueryParams = ListActivityQueryParams;
var ListActivitySecurity = /** @class */ (function (_super) {
    __extends(ListActivitySecurity, _super);
    function ListActivitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListActivitySecurity.prototype, "accountSidAuthToken", void 0);
    return ListActivitySecurity;
}(utils_1.SpeakeasyBase));
exports.ListActivitySecurity = ListActivitySecurity;
var ListActivityListActivityResponseMeta = /** @class */ (function (_super) {
    __extends(ListActivityListActivityResponseMeta, _super);
    function ListActivityListActivityResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListActivityListActivityResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListActivityListActivityResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListActivityListActivityResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListActivityListActivityResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListActivityListActivityResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListActivityListActivityResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListActivityListActivityResponseMeta.prototype, "url", void 0);
    return ListActivityListActivityResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListActivityListActivityResponseMeta = ListActivityListActivityResponseMeta;
var ListActivityListActivityResponse = /** @class */ (function (_super) {
    __extends(ListActivityListActivityResponse, _super);
    function ListActivityListActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activities", elemType: shared.TaskrouterV1WorkspaceActivity }),
        __metadata("design:type", Array)
    ], ListActivityListActivityResponse.prototype, "activities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListActivityListActivityResponseMeta)
    ], ListActivityListActivityResponse.prototype, "meta", void 0);
    return ListActivityListActivityResponse;
}(utils_1.SpeakeasyBase));
exports.ListActivityListActivityResponse = ListActivityListActivityResponse;
var ListActivityRequest = /** @class */ (function (_super) {
    __extends(ListActivityRequest, _super);
    function ListActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListActivityRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListActivityPathParams)
    ], ListActivityRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListActivityQueryParams)
    ], ListActivityRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListActivitySecurity)
    ], ListActivityRequest.prototype, "security", void 0);
    return ListActivityRequest;
}(utils_1.SpeakeasyBase));
exports.ListActivityRequest = ListActivityRequest;
var ListActivityResponse = /** @class */ (function (_super) {
    __extends(ListActivityResponse, _super);
    function ListActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListActivityResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListActivityListActivityResponse)
    ], ListActivityResponse.prototype, "listActivityResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListActivityResponse.prototype, "statusCode", void 0);
    return ListActivityResponse;
}(utils_1.SpeakeasyBase));
exports.ListActivityResponse = ListActivityResponse;

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
exports.ListMediaProcessorResponse = exports.ListMediaProcessorRequest = exports.ListMediaProcessorListMediaProcessorResponse = exports.ListMediaProcessorListMediaProcessorResponseMeta = exports.ListMediaProcessorSecurity = exports.ListMediaProcessorQueryParams = exports.ListMediaProcessorServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListMediaProcessorServerList = [
    "https://media.twilio.com",
];
var ListMediaProcessorQueryParams = /** @class */ (function (_super) {
    __extends(ListMediaProcessorQueryParams, _super);
    function ListMediaProcessorQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListMediaProcessorQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMediaProcessorQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListMediaProcessorQueryParams.prototype, "status", void 0);
    return ListMediaProcessorQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListMediaProcessorQueryParams = ListMediaProcessorQueryParams;
var ListMediaProcessorSecurity = /** @class */ (function (_super) {
    __extends(ListMediaProcessorSecurity, _super);
    function ListMediaProcessorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMediaProcessorSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMediaProcessorSecurity;
}(utils_1.SpeakeasyBase));
exports.ListMediaProcessorSecurity = ListMediaProcessorSecurity;
var ListMediaProcessorListMediaProcessorResponseMeta = /** @class */ (function (_super) {
    __extends(ListMediaProcessorListMediaProcessorResponseMeta, _super);
    function ListMediaProcessorListMediaProcessorResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "url", void 0);
    return ListMediaProcessorListMediaProcessorResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListMediaProcessorListMediaProcessorResponseMeta = ListMediaProcessorListMediaProcessorResponseMeta;
var ListMediaProcessorListMediaProcessorResponse = /** @class */ (function (_super) {
    __extends(ListMediaProcessorListMediaProcessorResponse, _super);
    function ListMediaProcessorListMediaProcessorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media_processors", elemType: shared.MediaV1MediaProcessor }),
        __metadata("design:type", Array)
    ], ListMediaProcessorListMediaProcessorResponse.prototype, "mediaProcessors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListMediaProcessorListMediaProcessorResponseMeta)
    ], ListMediaProcessorListMediaProcessorResponse.prototype, "meta", void 0);
    return ListMediaProcessorListMediaProcessorResponse;
}(utils_1.SpeakeasyBase));
exports.ListMediaProcessorListMediaProcessorResponse = ListMediaProcessorListMediaProcessorResponse;
var ListMediaProcessorRequest = /** @class */ (function (_super) {
    __extends(ListMediaProcessorRequest, _super);
    function ListMediaProcessorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMediaProcessorRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMediaProcessorQueryParams)
    ], ListMediaProcessorRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMediaProcessorSecurity)
    ], ListMediaProcessorRequest.prototype, "security", void 0);
    return ListMediaProcessorRequest;
}(utils_1.SpeakeasyBase));
exports.ListMediaProcessorRequest = ListMediaProcessorRequest;
var ListMediaProcessorResponse = /** @class */ (function (_super) {
    __extends(ListMediaProcessorResponse, _super);
    function ListMediaProcessorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMediaProcessorResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMediaProcessorListMediaProcessorResponse)
    ], ListMediaProcessorResponse.prototype, "listMediaProcessorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListMediaProcessorResponse.prototype, "statusCode", void 0);
    return ListMediaProcessorResponse;
}(utils_1.SpeakeasyBase));
exports.ListMediaProcessorResponse = ListMediaProcessorResponse;

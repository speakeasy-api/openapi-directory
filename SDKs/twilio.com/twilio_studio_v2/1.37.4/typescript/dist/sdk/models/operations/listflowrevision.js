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
exports.ListFlowRevisionResponse = exports.ListFlowRevisionRequest = exports.ListFlowRevisionListFlowRevisionResponse = exports.ListFlowRevisionListFlowRevisionResponseMeta = exports.ListFlowRevisionSecurity = exports.ListFlowRevisionQueryParams = exports.ListFlowRevisionPathParams = exports.ListFlowRevisionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListFlowRevisionServerList = [
    "https://studio.twilio.com",
];
var ListFlowRevisionPathParams = /** @class */ (function (_super) {
    __extends(ListFlowRevisionPathParams, _super);
    function ListFlowRevisionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], ListFlowRevisionPathParams.prototype, "sid", void 0);
    return ListFlowRevisionPathParams;
}(utils_1.SpeakeasyBase));
exports.ListFlowRevisionPathParams = ListFlowRevisionPathParams;
var ListFlowRevisionQueryParams = /** @class */ (function (_super) {
    __extends(ListFlowRevisionQueryParams, _super);
    function ListFlowRevisionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFlowRevisionQueryParams.prototype, "pageSize", void 0);
    return ListFlowRevisionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListFlowRevisionQueryParams = ListFlowRevisionQueryParams;
var ListFlowRevisionSecurity = /** @class */ (function (_super) {
    __extends(ListFlowRevisionSecurity, _super);
    function ListFlowRevisionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFlowRevisionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFlowRevisionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListFlowRevisionSecurity = ListFlowRevisionSecurity;
var ListFlowRevisionListFlowRevisionResponseMeta = /** @class */ (function (_super) {
    __extends(ListFlowRevisionListFlowRevisionResponseMeta, _super);
    function ListFlowRevisionListFlowRevisionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "url", void 0);
    return ListFlowRevisionListFlowRevisionResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListFlowRevisionListFlowRevisionResponseMeta = ListFlowRevisionListFlowRevisionResponseMeta;
var ListFlowRevisionListFlowRevisionResponse = /** @class */ (function (_super) {
    __extends(ListFlowRevisionListFlowRevisionResponse, _super);
    function ListFlowRevisionListFlowRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListFlowRevisionListFlowRevisionResponseMeta)
    ], ListFlowRevisionListFlowRevisionResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revisions", elemType: shared.StudioV2FlowFlowRevision }),
        __metadata("design:type", Array)
    ], ListFlowRevisionListFlowRevisionResponse.prototype, "revisions", void 0);
    return ListFlowRevisionListFlowRevisionResponse;
}(utils_1.SpeakeasyBase));
exports.ListFlowRevisionListFlowRevisionResponse = ListFlowRevisionListFlowRevisionResponse;
var ListFlowRevisionRequest = /** @class */ (function (_super) {
    __extends(ListFlowRevisionRequest, _super);
    function ListFlowRevisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListFlowRevisionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFlowRevisionPathParams)
    ], ListFlowRevisionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFlowRevisionQueryParams)
    ], ListFlowRevisionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFlowRevisionSecurity)
    ], ListFlowRevisionRequest.prototype, "security", void 0);
    return ListFlowRevisionRequest;
}(utils_1.SpeakeasyBase));
exports.ListFlowRevisionRequest = ListFlowRevisionRequest;
var ListFlowRevisionResponse = /** @class */ (function (_super) {
    __extends(ListFlowRevisionResponse, _super);
    function ListFlowRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListFlowRevisionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFlowRevisionListFlowRevisionResponse)
    ], ListFlowRevisionResponse.prototype, "listFlowRevisionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListFlowRevisionResponse.prototype, "statusCode", void 0);
    return ListFlowRevisionResponse;
}(utils_1.SpeakeasyBase));
exports.ListFlowRevisionResponse = ListFlowRevisionResponse;

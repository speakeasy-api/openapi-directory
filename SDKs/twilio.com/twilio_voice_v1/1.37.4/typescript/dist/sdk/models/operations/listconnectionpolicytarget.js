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
exports.ListConnectionPolicyTargetResponse = exports.ListConnectionPolicyTargetRequest = exports.ListConnectionPolicyTargetListConnectionPolicyTargetResponse = exports.ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta = exports.ListConnectionPolicyTargetSecurity = exports.ListConnectionPolicyTargetQueryParams = exports.ListConnectionPolicyTargetPathParams = exports.ListConnectionPolicyTargetServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListConnectionPolicyTargetServerList = [
    "https://voice.twilio.com",
];
var ListConnectionPolicyTargetPathParams = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyTargetPathParams, _super);
    function ListConnectionPolicyTargetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyTargetPathParams.prototype, "connectionPolicySid", void 0);
    return ListConnectionPolicyTargetPathParams;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPolicyTargetPathParams = ListConnectionPolicyTargetPathParams;
var ListConnectionPolicyTargetQueryParams = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyTargetQueryParams, _super);
    function ListConnectionPolicyTargetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConnectionPolicyTargetQueryParams.prototype, "pageSize", void 0);
    return ListConnectionPolicyTargetQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPolicyTargetQueryParams = ListConnectionPolicyTargetQueryParams;
var ListConnectionPolicyTargetSecurity = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyTargetSecurity, _super);
    function ListConnectionPolicyTargetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConnectionPolicyTargetSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConnectionPolicyTargetSecurity;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPolicyTargetSecurity = ListConnectionPolicyTargetSecurity;
var ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta, _super);
    function ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta.prototype, "url", void 0);
    return ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta = ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta;
var ListConnectionPolicyTargetListConnectionPolicyTargetResponse = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyTargetListConnectionPolicyTargetResponse, _super);
    function ListConnectionPolicyTargetListConnectionPolicyTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta)
    ], ListConnectionPolicyTargetListConnectionPolicyTargetResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targets", elemType: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget }),
        __metadata("design:type", Array)
    ], ListConnectionPolicyTargetListConnectionPolicyTargetResponse.prototype, "targets", void 0);
    return ListConnectionPolicyTargetListConnectionPolicyTargetResponse;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPolicyTargetListConnectionPolicyTargetResponse = ListConnectionPolicyTargetListConnectionPolicyTargetResponse;
var ListConnectionPolicyTargetRequest = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyTargetRequest, _super);
    function ListConnectionPolicyTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConnectionPolicyTargetRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConnectionPolicyTargetPathParams)
    ], ListConnectionPolicyTargetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConnectionPolicyTargetQueryParams)
    ], ListConnectionPolicyTargetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConnectionPolicyTargetSecurity)
    ], ListConnectionPolicyTargetRequest.prototype, "security", void 0);
    return ListConnectionPolicyTargetRequest;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPolicyTargetRequest = ListConnectionPolicyTargetRequest;
var ListConnectionPolicyTargetResponse = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyTargetResponse, _super);
    function ListConnectionPolicyTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConnectionPolicyTargetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConnectionPolicyTargetListConnectionPolicyTargetResponse)
    ], ListConnectionPolicyTargetResponse.prototype, "listConnectionPolicyTargetResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListConnectionPolicyTargetResponse.prototype, "statusCode", void 0);
    return ListConnectionPolicyTargetResponse;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPolicyTargetResponse = ListConnectionPolicyTargetResponse;

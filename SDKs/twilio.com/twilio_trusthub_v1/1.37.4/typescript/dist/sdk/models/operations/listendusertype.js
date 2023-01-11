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
exports.ListEndUserTypeResponse = exports.ListEndUserTypeRequest = exports.ListEndUserTypeListEndUserTypeResponse = exports.ListEndUserTypeListEndUserTypeResponseMeta = exports.ListEndUserTypeSecurity = exports.ListEndUserTypeQueryParams = exports.ListEndUserTypeServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListEndUserTypeServerList = [
    "https://trusthub.twilio.com",
];
var ListEndUserTypeQueryParams = /** @class */ (function (_super) {
    __extends(ListEndUserTypeQueryParams, _super);
    function ListEndUserTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEndUserTypeQueryParams.prototype, "pageSize", void 0);
    return ListEndUserTypeQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListEndUserTypeQueryParams = ListEndUserTypeQueryParams;
var ListEndUserTypeSecurity = /** @class */ (function (_super) {
    __extends(ListEndUserTypeSecurity, _super);
    function ListEndUserTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEndUserTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEndUserTypeSecurity;
}(utils_1.SpeakeasyBase));
exports.ListEndUserTypeSecurity = ListEndUserTypeSecurity;
var ListEndUserTypeListEndUserTypeResponseMeta = /** @class */ (function (_super) {
    __extends(ListEndUserTypeListEndUserTypeResponseMeta, _super);
    function ListEndUserTypeListEndUserTypeResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEndUserTypeListEndUserTypeResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEndUserTypeListEndUserTypeResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEndUserTypeListEndUserTypeResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEndUserTypeListEndUserTypeResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEndUserTypeListEndUserTypeResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEndUserTypeListEndUserTypeResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEndUserTypeListEndUserTypeResponseMeta.prototype, "url", void 0);
    return ListEndUserTypeListEndUserTypeResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListEndUserTypeListEndUserTypeResponseMeta = ListEndUserTypeListEndUserTypeResponseMeta;
var ListEndUserTypeListEndUserTypeResponse = /** @class */ (function (_super) {
    __extends(ListEndUserTypeListEndUserTypeResponse, _super);
    function ListEndUserTypeListEndUserTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_user_types", elemType: shared.TrusthubV1EndUserType }),
        __metadata("design:type", Array)
    ], ListEndUserTypeListEndUserTypeResponse.prototype, "endUserTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListEndUserTypeListEndUserTypeResponseMeta)
    ], ListEndUserTypeListEndUserTypeResponse.prototype, "meta", void 0);
    return ListEndUserTypeListEndUserTypeResponse;
}(utils_1.SpeakeasyBase));
exports.ListEndUserTypeListEndUserTypeResponse = ListEndUserTypeListEndUserTypeResponse;
var ListEndUserTypeRequest = /** @class */ (function (_super) {
    __extends(ListEndUserTypeRequest, _super);
    function ListEndUserTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEndUserTypeRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEndUserTypeQueryParams)
    ], ListEndUserTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEndUserTypeSecurity)
    ], ListEndUserTypeRequest.prototype, "security", void 0);
    return ListEndUserTypeRequest;
}(utils_1.SpeakeasyBase));
exports.ListEndUserTypeRequest = ListEndUserTypeRequest;
var ListEndUserTypeResponse = /** @class */ (function (_super) {
    __extends(ListEndUserTypeResponse, _super);
    function ListEndUserTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEndUserTypeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEndUserTypeListEndUserTypeResponse)
    ], ListEndUserTypeResponse.prototype, "listEndUserTypeResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListEndUserTypeResponse.prototype, "statusCode", void 0);
    return ListEndUserTypeResponse;
}(utils_1.SpeakeasyBase));
exports.ListEndUserTypeResponse = ListEndUserTypeResponse;

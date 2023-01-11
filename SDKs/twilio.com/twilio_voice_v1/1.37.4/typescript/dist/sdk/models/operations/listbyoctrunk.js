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
exports.ListByocTrunkResponse = exports.ListByocTrunkRequest = exports.ListByocTrunkListByocTrunkResponse = exports.ListByocTrunkListByocTrunkResponseMeta = exports.ListByocTrunkSecurity = exports.ListByocTrunkQueryParams = exports.ListByocTrunkServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListByocTrunkServerList = [
    "https://voice.twilio.com",
];
var ListByocTrunkQueryParams = /** @class */ (function (_super) {
    __extends(ListByocTrunkQueryParams, _super);
    function ListByocTrunkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListByocTrunkQueryParams.prototype, "pageSize", void 0);
    return ListByocTrunkQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListByocTrunkQueryParams = ListByocTrunkQueryParams;
var ListByocTrunkSecurity = /** @class */ (function (_super) {
    __extends(ListByocTrunkSecurity, _super);
    function ListByocTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListByocTrunkSecurity.prototype, "accountSidAuthToken", void 0);
    return ListByocTrunkSecurity;
}(utils_1.SpeakeasyBase));
exports.ListByocTrunkSecurity = ListByocTrunkSecurity;
var ListByocTrunkListByocTrunkResponseMeta = /** @class */ (function (_super) {
    __extends(ListByocTrunkListByocTrunkResponseMeta, _super);
    function ListByocTrunkListByocTrunkResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "url", void 0);
    return ListByocTrunkListByocTrunkResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListByocTrunkListByocTrunkResponseMeta = ListByocTrunkListByocTrunkResponseMeta;
var ListByocTrunkListByocTrunkResponse = /** @class */ (function (_super) {
    __extends(ListByocTrunkListByocTrunkResponse, _super);
    function ListByocTrunkListByocTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=byoc_trunks", elemType: shared.VoiceV1ByocTrunk }),
        __metadata("design:type", Array)
    ], ListByocTrunkListByocTrunkResponse.prototype, "byocTrunks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListByocTrunkListByocTrunkResponseMeta)
    ], ListByocTrunkListByocTrunkResponse.prototype, "meta", void 0);
    return ListByocTrunkListByocTrunkResponse;
}(utils_1.SpeakeasyBase));
exports.ListByocTrunkListByocTrunkResponse = ListByocTrunkListByocTrunkResponse;
var ListByocTrunkRequest = /** @class */ (function (_super) {
    __extends(ListByocTrunkRequest, _super);
    function ListByocTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListByocTrunkRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListByocTrunkQueryParams)
    ], ListByocTrunkRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListByocTrunkSecurity)
    ], ListByocTrunkRequest.prototype, "security", void 0);
    return ListByocTrunkRequest;
}(utils_1.SpeakeasyBase));
exports.ListByocTrunkRequest = ListByocTrunkRequest;
var ListByocTrunkResponse = /** @class */ (function (_super) {
    __extends(ListByocTrunkResponse, _super);
    function ListByocTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListByocTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListByocTrunkListByocTrunkResponse)
    ], ListByocTrunkResponse.prototype, "listByocTrunkResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListByocTrunkResponse.prototype, "statusCode", void 0);
    return ListByocTrunkResponse;
}(utils_1.SpeakeasyBase));
exports.ListByocTrunkResponse = ListByocTrunkResponse;

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
exports.ListCompositionHookResponse = exports.ListCompositionHookRequest = exports.ListCompositionHookListCompositionHookResponse = exports.ListCompositionHookListCompositionHookResponseMeta = exports.ListCompositionHookSecurity = exports.ListCompositionHookQueryParams = exports.ListCompositionHookServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListCompositionHookServerList = [
    "https://video.twilio.com",
];
var ListCompositionHookQueryParams = /** @class */ (function (_super) {
    __extends(ListCompositionHookQueryParams, _super);
    function ListCompositionHookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" }),
        __metadata("design:type", Date)
    ], ListCompositionHookQueryParams.prototype, "dateCreatedAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" }),
        __metadata("design:type", Date)
    ], ListCompositionHookQueryParams.prototype, "dateCreatedBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Enabled" }),
        __metadata("design:type", Boolean)
    ], ListCompositionHookQueryParams.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListCompositionHookQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCompositionHookQueryParams.prototype, "pageSize", void 0);
    return ListCompositionHookQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCompositionHookQueryParams = ListCompositionHookQueryParams;
var ListCompositionHookSecurity = /** @class */ (function (_super) {
    __extends(ListCompositionHookSecurity, _super);
    function ListCompositionHookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCompositionHookSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCompositionHookSecurity;
}(utils_1.SpeakeasyBase));
exports.ListCompositionHookSecurity = ListCompositionHookSecurity;
var ListCompositionHookListCompositionHookResponseMeta = /** @class */ (function (_super) {
    __extends(ListCompositionHookListCompositionHookResponseMeta, _super);
    function ListCompositionHookListCompositionHookResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCompositionHookListCompositionHookResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCompositionHookListCompositionHookResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCompositionHookListCompositionHookResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCompositionHookListCompositionHookResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCompositionHookListCompositionHookResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCompositionHookListCompositionHookResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCompositionHookListCompositionHookResponseMeta.prototype, "url", void 0);
    return ListCompositionHookListCompositionHookResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListCompositionHookListCompositionHookResponseMeta = ListCompositionHookListCompositionHookResponseMeta;
var ListCompositionHookListCompositionHookResponse = /** @class */ (function (_super) {
    __extends(ListCompositionHookListCompositionHookResponse, _super);
    function ListCompositionHookListCompositionHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=composition_hooks", elemType: shared.VideoV1CompositionHook }),
        __metadata("design:type", Array)
    ], ListCompositionHookListCompositionHookResponse.prototype, "compositionHooks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListCompositionHookListCompositionHookResponseMeta)
    ], ListCompositionHookListCompositionHookResponse.prototype, "meta", void 0);
    return ListCompositionHookListCompositionHookResponse;
}(utils_1.SpeakeasyBase));
exports.ListCompositionHookListCompositionHookResponse = ListCompositionHookListCompositionHookResponse;
var ListCompositionHookRequest = /** @class */ (function (_super) {
    __extends(ListCompositionHookRequest, _super);
    function ListCompositionHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCompositionHookRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCompositionHookQueryParams)
    ], ListCompositionHookRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCompositionHookSecurity)
    ], ListCompositionHookRequest.prototype, "security", void 0);
    return ListCompositionHookRequest;
}(utils_1.SpeakeasyBase));
exports.ListCompositionHookRequest = ListCompositionHookRequest;
var ListCompositionHookResponse = /** @class */ (function (_super) {
    __extends(ListCompositionHookResponse, _super);
    function ListCompositionHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCompositionHookResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCompositionHookListCompositionHookResponse)
    ], ListCompositionHookResponse.prototype, "listCompositionHookResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCompositionHookResponse.prototype, "statusCode", void 0);
    return ListCompositionHookResponse;
}(utils_1.SpeakeasyBase));
exports.ListCompositionHookResponse = ListCompositionHookResponse;

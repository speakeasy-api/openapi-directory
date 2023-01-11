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
exports.ListSettingsUpdateResponse = exports.ListSettingsUpdateRequest = exports.ListSettingsUpdateListSettingsUpdateResponse = exports.ListSettingsUpdateListSettingsUpdateResponseMeta = exports.ListSettingsUpdateSecurity = exports.ListSettingsUpdateQueryParams = exports.ListSettingsUpdateServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSettingsUpdateServerList = [
    "https://supersim.twilio.com",
];
var ListSettingsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ListSettingsUpdateQueryParams, _super);
    function ListSettingsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSettingsUpdateQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Sim" }),
        __metadata("design:type", String)
    ], ListSettingsUpdateQueryParams.prototype, "sim", void 0);
    return ListSettingsUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSettingsUpdateQueryParams = ListSettingsUpdateQueryParams;
var ListSettingsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ListSettingsUpdateSecurity, _super);
    function ListSettingsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSettingsUpdateSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSettingsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSettingsUpdateSecurity = ListSettingsUpdateSecurity;
var ListSettingsUpdateListSettingsUpdateResponseMeta = /** @class */ (function (_super) {
    __extends(ListSettingsUpdateListSettingsUpdateResponseMeta, _super);
    function ListSettingsUpdateListSettingsUpdateResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSettingsUpdateListSettingsUpdateResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSettingsUpdateListSettingsUpdateResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSettingsUpdateListSettingsUpdateResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSettingsUpdateListSettingsUpdateResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSettingsUpdateListSettingsUpdateResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSettingsUpdateListSettingsUpdateResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSettingsUpdateListSettingsUpdateResponseMeta.prototype, "url", void 0);
    return ListSettingsUpdateListSettingsUpdateResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListSettingsUpdateListSettingsUpdateResponseMeta = ListSettingsUpdateListSettingsUpdateResponseMeta;
var ListSettingsUpdateListSettingsUpdateResponse = /** @class */ (function (_super) {
    __extends(ListSettingsUpdateListSettingsUpdateResponse, _super);
    function ListSettingsUpdateListSettingsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListSettingsUpdateListSettingsUpdateResponseMeta)
    ], ListSettingsUpdateListSettingsUpdateResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings_updates", elemType: shared.SupersimV1SettingsUpdate }),
        __metadata("design:type", Array)
    ], ListSettingsUpdateListSettingsUpdateResponse.prototype, "settingsUpdates", void 0);
    return ListSettingsUpdateListSettingsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.ListSettingsUpdateListSettingsUpdateResponse = ListSettingsUpdateListSettingsUpdateResponse;
var ListSettingsUpdateRequest = /** @class */ (function (_super) {
    __extends(ListSettingsUpdateRequest, _super);
    function ListSettingsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSettingsUpdateRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSettingsUpdateQueryParams)
    ], ListSettingsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSettingsUpdateSecurity)
    ], ListSettingsUpdateRequest.prototype, "security", void 0);
    return ListSettingsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.ListSettingsUpdateRequest = ListSettingsUpdateRequest;
var ListSettingsUpdateResponse = /** @class */ (function (_super) {
    __extends(ListSettingsUpdateResponse, _super);
    function ListSettingsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSettingsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSettingsUpdateListSettingsUpdateResponse)
    ], ListSettingsUpdateResponse.prototype, "listSettingsUpdateResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSettingsUpdateResponse.prototype, "statusCode", void 0);
    return ListSettingsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.ListSettingsUpdateResponse = ListSettingsUpdateResponse;

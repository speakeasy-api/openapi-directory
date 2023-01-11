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
exports.ListWirelessCommandResponse = exports.ListWirelessCommandRequest = exports.ListWirelessCommandListWirelessCommandResponse = exports.ListWirelessCommandListWirelessCommandResponseMeta = exports.ListWirelessCommandSecurity = exports.ListWirelessCommandQueryParams = exports.ListWirelessCommandServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListWirelessCommandServerList = [
    "https://preview.twilio.com",
];
var ListWirelessCommandQueryParams = /** @class */ (function (_super) {
    __extends(ListWirelessCommandQueryParams, _super);
    function ListWirelessCommandQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Device" }),
        __metadata("design:type", String)
    ], ListWirelessCommandQueryParams.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Direction" }),
        __metadata("design:type", String)
    ], ListWirelessCommandQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListWirelessCommandQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Sim" }),
        __metadata("design:type", String)
    ], ListWirelessCommandQueryParams.prototype, "sim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListWirelessCommandQueryParams.prototype, "status", void 0);
    return ListWirelessCommandQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListWirelessCommandQueryParams = ListWirelessCommandQueryParams;
var ListWirelessCommandSecurity = /** @class */ (function (_super) {
    __extends(ListWirelessCommandSecurity, _super);
    function ListWirelessCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListWirelessCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return ListWirelessCommandSecurity;
}(utils_1.SpeakeasyBase));
exports.ListWirelessCommandSecurity = ListWirelessCommandSecurity;
var ListWirelessCommandListWirelessCommandResponseMeta = /** @class */ (function (_super) {
    __extends(ListWirelessCommandListWirelessCommandResponseMeta, _super);
    function ListWirelessCommandListWirelessCommandResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListWirelessCommandListWirelessCommandResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListWirelessCommandListWirelessCommandResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListWirelessCommandListWirelessCommandResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListWirelessCommandListWirelessCommandResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWirelessCommandListWirelessCommandResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListWirelessCommandListWirelessCommandResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListWirelessCommandListWirelessCommandResponseMeta.prototype, "url", void 0);
    return ListWirelessCommandListWirelessCommandResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListWirelessCommandListWirelessCommandResponseMeta = ListWirelessCommandListWirelessCommandResponseMeta;
var ListWirelessCommandListWirelessCommandResponse = /** @class */ (function (_super) {
    __extends(ListWirelessCommandListWirelessCommandResponse, _super);
    function ListWirelessCommandListWirelessCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commands", elemType: shared.PreviewWirelessCommand }),
        __metadata("design:type", Array)
    ], ListWirelessCommandListWirelessCommandResponse.prototype, "commands", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListWirelessCommandListWirelessCommandResponseMeta)
    ], ListWirelessCommandListWirelessCommandResponse.prototype, "meta", void 0);
    return ListWirelessCommandListWirelessCommandResponse;
}(utils_1.SpeakeasyBase));
exports.ListWirelessCommandListWirelessCommandResponse = ListWirelessCommandListWirelessCommandResponse;
var ListWirelessCommandRequest = /** @class */ (function (_super) {
    __extends(ListWirelessCommandRequest, _super);
    function ListWirelessCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListWirelessCommandRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWirelessCommandQueryParams)
    ], ListWirelessCommandRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWirelessCommandSecurity)
    ], ListWirelessCommandRequest.prototype, "security", void 0);
    return ListWirelessCommandRequest;
}(utils_1.SpeakeasyBase));
exports.ListWirelessCommandRequest = ListWirelessCommandRequest;
var ListWirelessCommandResponse = /** @class */ (function (_super) {
    __extends(ListWirelessCommandResponse, _super);
    function ListWirelessCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListWirelessCommandResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWirelessCommandListWirelessCommandResponse)
    ], ListWirelessCommandResponse.prototype, "listWirelessCommandResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListWirelessCommandResponse.prototype, "statusCode", void 0);
    return ListWirelessCommandResponse;
}(utils_1.SpeakeasyBase));
exports.ListWirelessCommandResponse = ListWirelessCommandResponse;

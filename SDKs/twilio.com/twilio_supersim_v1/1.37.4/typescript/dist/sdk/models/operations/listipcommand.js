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
exports.ListIpCommandResponse = exports.ListIpCommandRequest = exports.ListIpCommandListIpCommandResponse = exports.ListIpCommandListIpCommandResponseMeta = exports.ListIpCommandSecurity = exports.ListIpCommandQueryParams = exports.ListIpCommandServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListIpCommandServerList = [
    "https://supersim.twilio.com",
];
var ListIpCommandQueryParams = /** @class */ (function (_super) {
    __extends(ListIpCommandQueryParams, _super);
    function ListIpCommandQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Direction" }),
        __metadata("design:type", String)
    ], ListIpCommandQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIpCommandQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Sim" }),
        __metadata("design:type", String)
    ], ListIpCommandQueryParams.prototype, "sim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SimIccid" }),
        __metadata("design:type", String)
    ], ListIpCommandQueryParams.prototype, "simIccid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListIpCommandQueryParams.prototype, "status", void 0);
    return ListIpCommandQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListIpCommandQueryParams = ListIpCommandQueryParams;
var ListIpCommandSecurity = /** @class */ (function (_super) {
    __extends(ListIpCommandSecurity, _super);
    function ListIpCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIpCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIpCommandSecurity;
}(utils_1.SpeakeasyBase));
exports.ListIpCommandSecurity = ListIpCommandSecurity;
var ListIpCommandListIpCommandResponseMeta = /** @class */ (function (_super) {
    __extends(ListIpCommandListIpCommandResponseMeta, _super);
    function ListIpCommandListIpCommandResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "url", void 0);
    return ListIpCommandListIpCommandResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListIpCommandListIpCommandResponseMeta = ListIpCommandListIpCommandResponseMeta;
var ListIpCommandListIpCommandResponse = /** @class */ (function (_super) {
    __extends(ListIpCommandListIpCommandResponse, _super);
    function ListIpCommandListIpCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_commands", elemType: shared.SupersimV1IpCommand }),
        __metadata("design:type", Array)
    ], ListIpCommandListIpCommandResponse.prototype, "ipCommands", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListIpCommandListIpCommandResponseMeta)
    ], ListIpCommandListIpCommandResponse.prototype, "meta", void 0);
    return ListIpCommandListIpCommandResponse;
}(utils_1.SpeakeasyBase));
exports.ListIpCommandListIpCommandResponse = ListIpCommandListIpCommandResponse;
var ListIpCommandRequest = /** @class */ (function (_super) {
    __extends(ListIpCommandRequest, _super);
    function ListIpCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListIpCommandRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIpCommandQueryParams)
    ], ListIpCommandRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIpCommandSecurity)
    ], ListIpCommandRequest.prototype, "security", void 0);
    return ListIpCommandRequest;
}(utils_1.SpeakeasyBase));
exports.ListIpCommandRequest = ListIpCommandRequest;
var ListIpCommandResponse = /** @class */ (function (_super) {
    __extends(ListIpCommandResponse, _super);
    function ListIpCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListIpCommandResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIpCommandListIpCommandResponse)
    ], ListIpCommandResponse.prototype, "listIpCommandResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListIpCommandResponse.prototype, "statusCode", void 0);
    return ListIpCommandResponse;
}(utils_1.SpeakeasyBase));
exports.ListIpCommandResponse = ListIpCommandResponse;

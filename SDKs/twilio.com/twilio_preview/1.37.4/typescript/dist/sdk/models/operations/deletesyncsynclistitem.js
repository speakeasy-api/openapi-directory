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
exports.DeleteSyncSyncListItemResponse = exports.DeleteSyncSyncListItemRequest = exports.DeleteSyncSyncListItemSecurity = exports.DeleteSyncSyncListItemHeaders = exports.DeleteSyncSyncListItemPathParams = exports.DeleteSyncSyncListItemServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.DeleteSyncSyncListItemServerList = [
    "https://preview.twilio.com",
];
var DeleteSyncSyncListItemPathParams = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncListItemPathParams, _super);
    function DeleteSyncSyncListItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Index" }),
        __metadata("design:type", Number)
    ], DeleteSyncSyncListItemPathParams.prototype, "index", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], DeleteSyncSyncListItemPathParams.prototype, "listSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteSyncSyncListItemPathParams.prototype, "serviceSid", void 0);
    return DeleteSyncSyncListItemPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteSyncSyncListItemPathParams = DeleteSyncSyncListItemPathParams;
var DeleteSyncSyncListItemHeaders = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncListItemHeaders, _super);
    function DeleteSyncSyncListItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], DeleteSyncSyncListItemHeaders.prototype, "ifMatch", void 0);
    return DeleteSyncSyncListItemHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteSyncSyncListItemHeaders = DeleteSyncSyncListItemHeaders;
var DeleteSyncSyncListItemSecurity = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncListItemSecurity, _super);
    function DeleteSyncSyncListItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSyncSyncListItemSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSyncSyncListItemSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteSyncSyncListItemSecurity = DeleteSyncSyncListItemSecurity;
var DeleteSyncSyncListItemRequest = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncListItemRequest, _super);
    function DeleteSyncSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteSyncSyncListItemRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSyncSyncListItemPathParams)
    ], DeleteSyncSyncListItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSyncSyncListItemHeaders)
    ], DeleteSyncSyncListItemRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSyncSyncListItemSecurity)
    ], DeleteSyncSyncListItemRequest.prototype, "security", void 0);
    return DeleteSyncSyncListItemRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteSyncSyncListItemRequest = DeleteSyncSyncListItemRequest;
var DeleteSyncSyncListItemResponse = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncListItemResponse, _super);
    function DeleteSyncSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteSyncSyncListItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteSyncSyncListItemResponse.prototype, "statusCode", void 0);
    return DeleteSyncSyncListItemResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteSyncSyncListItemResponse = DeleteSyncSyncListItemResponse;

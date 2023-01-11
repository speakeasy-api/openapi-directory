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
exports.DeleteSyncListItemResponse = exports.DeleteSyncListItemRequest = exports.DeleteSyncListItemSecurity = exports.DeleteSyncListItemHeaders = exports.DeleteSyncListItemPathParams = exports.DeleteSyncListItemServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.DeleteSyncListItemServerList = [
    "https://sync.twilio.com",
];
var DeleteSyncListItemPathParams = /** @class */ (function (_super) {
    __extends(DeleteSyncListItemPathParams, _super);
    function DeleteSyncListItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Index" }),
        __metadata("design:type", Number)
    ], DeleteSyncListItemPathParams.prototype, "index", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], DeleteSyncListItemPathParams.prototype, "listSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteSyncListItemPathParams.prototype, "serviceSid", void 0);
    return DeleteSyncListItemPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteSyncListItemPathParams = DeleteSyncListItemPathParams;
var DeleteSyncListItemHeaders = /** @class */ (function (_super) {
    __extends(DeleteSyncListItemHeaders, _super);
    function DeleteSyncListItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], DeleteSyncListItemHeaders.prototype, "ifMatch", void 0);
    return DeleteSyncListItemHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteSyncListItemHeaders = DeleteSyncListItemHeaders;
var DeleteSyncListItemSecurity = /** @class */ (function (_super) {
    __extends(DeleteSyncListItemSecurity, _super);
    function DeleteSyncListItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSyncListItemSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSyncListItemSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteSyncListItemSecurity = DeleteSyncListItemSecurity;
var DeleteSyncListItemRequest = /** @class */ (function (_super) {
    __extends(DeleteSyncListItemRequest, _super);
    function DeleteSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteSyncListItemRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSyncListItemPathParams)
    ], DeleteSyncListItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSyncListItemHeaders)
    ], DeleteSyncListItemRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSyncListItemSecurity)
    ], DeleteSyncListItemRequest.prototype, "security", void 0);
    return DeleteSyncListItemRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteSyncListItemRequest = DeleteSyncListItemRequest;
var DeleteSyncListItemResponse = /** @class */ (function (_super) {
    __extends(DeleteSyncListItemResponse, _super);
    function DeleteSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteSyncListItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteSyncListItemResponse.prototype, "statusCode", void 0);
    return DeleteSyncListItemResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteSyncListItemResponse = DeleteSyncListItemResponse;

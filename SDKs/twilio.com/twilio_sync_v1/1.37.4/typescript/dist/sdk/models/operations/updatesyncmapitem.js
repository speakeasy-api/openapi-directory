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
exports.UpdateSyncMapItemResponse = exports.UpdateSyncMapItemRequest = exports.UpdateSyncMapItemSecurity = exports.UpdateSyncMapItemUpdateSyncMapItemRequest = exports.UpdateSyncMapItemHeaders = exports.UpdateSyncMapItemPathParams = exports.UpdateSyncMapItemServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateSyncMapItemServerList = [
    "https://sync.twilio.com",
];
var UpdateSyncMapItemPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncMapItemPathParams, _super);
    function UpdateSyncMapItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Key" }),
        __metadata("design:type", String)
    ], UpdateSyncMapItemPathParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], UpdateSyncMapItemPathParams.prototype, "mapSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncMapItemPathParams.prototype, "serviceSid", void 0);
    return UpdateSyncMapItemPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncMapItemPathParams = UpdateSyncMapItemPathParams;
var UpdateSyncMapItemHeaders = /** @class */ (function (_super) {
    __extends(UpdateSyncMapItemHeaders, _super);
    function UpdateSyncMapItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateSyncMapItemHeaders.prototype, "ifMatch", void 0);
    return UpdateSyncMapItemHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncMapItemHeaders = UpdateSyncMapItemHeaders;
var UpdateSyncMapItemUpdateSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncMapItemUpdateSyncMapItemRequest, _super);
    function UpdateSyncMapItemUpdateSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CollectionTtl;" }),
        __metadata("design:type", Number)
    ], UpdateSyncMapItemUpdateSyncMapItemRequest.prototype, "collectionTtl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], UpdateSyncMapItemUpdateSyncMapItemRequest.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ItemTtl;" }),
        __metadata("design:type", Number)
    ], UpdateSyncMapItemUpdateSyncMapItemRequest.prototype, "itemTtl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], UpdateSyncMapItemUpdateSyncMapItemRequest.prototype, "ttl", void 0);
    return UpdateSyncMapItemUpdateSyncMapItemRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncMapItemUpdateSyncMapItemRequest = UpdateSyncMapItemUpdateSyncMapItemRequest;
var UpdateSyncMapItemSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncMapItemSecurity, _super);
    function UpdateSyncMapItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncMapItemSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncMapItemSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncMapItemSecurity = UpdateSyncMapItemSecurity;
var UpdateSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncMapItemRequest, _super);
    function UpdateSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSyncMapItemRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSyncMapItemPathParams)
    ], UpdateSyncMapItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSyncMapItemHeaders)
    ], UpdateSyncMapItemRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncMapItemUpdateSyncMapItemRequest)
    ], UpdateSyncMapItemRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSyncMapItemSecurity)
    ], UpdateSyncMapItemRequest.prototype, "security", void 0);
    return UpdateSyncMapItemRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncMapItemRequest = UpdateSyncMapItemRequest;
var UpdateSyncMapItemResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncMapItemResponse, _super);
    function UpdateSyncMapItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSyncMapItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSyncMapItemResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SyncV1ServiceSyncMapSyncMapItem)
    ], UpdateSyncMapItemResponse.prototype, "syncV1ServiceSyncMapSyncMapItem", void 0);
    return UpdateSyncMapItemResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSyncMapItemResponse = UpdateSyncMapItemResponse;

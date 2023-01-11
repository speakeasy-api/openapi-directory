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
exports.RetrieveBalanceTransfersResponse = exports.RetrieveBalanceTransfersRequest = exports.RetrieveBalanceTransfers404ApplicationJson = exports.RetrieveBalanceTransfers401ApplicationJson = exports.RetrieveBalanceTransfersSecurity = exports.RetrieveBalanceTransfersQueryParams = exports.RetrieveBalanceTransfersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RetrieveBalanceTransfersPathParams = /** @class */ (function (_super) {
    __extends(RetrieveBalanceTransfersPathParams, _super);
    function RetrieveBalanceTransfersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfersPathParams.prototype, "apiKey", void 0);
    return RetrieveBalanceTransfersPathParams;
}(utils_1.SpeakeasyBase));
exports.RetrieveBalanceTransfersPathParams = RetrieveBalanceTransfersPathParams;
var RetrieveBalanceTransfersQueryParams = /** @class */ (function (_super) {
    __extends(RetrieveBalanceTransfersQueryParams, _super);
    function RetrieveBalanceTransfersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfersQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfersQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subaccount" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfersQueryParams.prototype, "subaccount", void 0);
    return RetrieveBalanceTransfersQueryParams;
}(utils_1.SpeakeasyBase));
exports.RetrieveBalanceTransfersQueryParams = RetrieveBalanceTransfersQueryParams;
var RetrieveBalanceTransfersSecurity = /** @class */ (function (_super) {
    __extends(RetrieveBalanceTransfersSecurity, _super);
    function RetrieveBalanceTransfersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], RetrieveBalanceTransfersSecurity.prototype, "basicAuth", void 0);
    return RetrieveBalanceTransfersSecurity;
}(utils_1.SpeakeasyBase));
exports.RetrieveBalanceTransfersSecurity = RetrieveBalanceTransfersSecurity;
var RetrieveBalanceTransfers401ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveBalanceTransfers401ApplicationJson, _super);
    function RetrieveBalanceTransfers401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfers401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfers401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfers401ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfers401ApplicationJson.prototype, "type", void 0);
    return RetrieveBalanceTransfers401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RetrieveBalanceTransfers401ApplicationJson = RetrieveBalanceTransfers401ApplicationJson;
// RetrieveBalanceTransfers404ApplicationJson
/**
 * Invalid API Key
**/
var RetrieveBalanceTransfers404ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveBalanceTransfers404ApplicationJson, _super);
    function RetrieveBalanceTransfers404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfers404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfers404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfers404ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfers404ApplicationJson.prototype, "type", void 0);
    return RetrieveBalanceTransfers404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RetrieveBalanceTransfers404ApplicationJson = RetrieveBalanceTransfers404ApplicationJson;
var RetrieveBalanceTransfersRequest = /** @class */ (function (_super) {
    __extends(RetrieveBalanceTransfersRequest, _super);
    function RetrieveBalanceTransfersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveBalanceTransfersPathParams)
    ], RetrieveBalanceTransfersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveBalanceTransfersQueryParams)
    ], RetrieveBalanceTransfersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveBalanceTransfersSecurity)
    ], RetrieveBalanceTransfersRequest.prototype, "security", void 0);
    return RetrieveBalanceTransfersRequest;
}(utils_1.SpeakeasyBase));
exports.RetrieveBalanceTransfersRequest = RetrieveBalanceTransfersRequest;
var RetrieveBalanceTransfersResponse = /** @class */ (function (_super) {
    __extends(RetrieveBalanceTransfersResponse, _super);
    function RetrieveBalanceTransfersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RetrieveBalanceTransfersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RetrieveBalanceTransfersResponse.prototype, "listBalanceTransfersResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RetrieveBalanceTransfersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], RetrieveBalanceTransfersResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveBalanceTransfers401ApplicationJson)
    ], RetrieveBalanceTransfersResponse.prototype, "retrieveBalanceTransfers401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveBalanceTransfers404ApplicationJson)
    ], RetrieveBalanceTransfersResponse.prototype, "retrieveBalanceTransfers404ApplicationJSONObject", void 0);
    return RetrieveBalanceTransfersResponse;
}(utils_1.SpeakeasyBase));
exports.RetrieveBalanceTransfersResponse = RetrieveBalanceTransfersResponse;

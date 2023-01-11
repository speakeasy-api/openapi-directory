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
exports.RetrieveCreditTransfersResponse = exports.RetrieveCreditTransfersRequest = exports.RetrieveCreditTransfers404ApplicationJson = exports.RetrieveCreditTransfers401ApplicationJson = exports.RetrieveCreditTransfersSecurity = exports.RetrieveCreditTransfersQueryParams = exports.RetrieveCreditTransfersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RetrieveCreditTransfersPathParams = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfersPathParams, _super);
    function RetrieveCreditTransfersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfersPathParams.prototype, "apiKey", void 0);
    return RetrieveCreditTransfersPathParams;
}(utils_1.SpeakeasyBase));
exports.RetrieveCreditTransfersPathParams = RetrieveCreditTransfersPathParams;
var RetrieveCreditTransfersQueryParams = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfersQueryParams, _super);
    function RetrieveCreditTransfersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfersQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfersQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subaccount" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfersQueryParams.prototype, "subaccount", void 0);
    return RetrieveCreditTransfersQueryParams;
}(utils_1.SpeakeasyBase));
exports.RetrieveCreditTransfersQueryParams = RetrieveCreditTransfersQueryParams;
var RetrieveCreditTransfersSecurity = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfersSecurity, _super);
    function RetrieveCreditTransfersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], RetrieveCreditTransfersSecurity.prototype, "basicAuth", void 0);
    return RetrieveCreditTransfersSecurity;
}(utils_1.SpeakeasyBase));
exports.RetrieveCreditTransfersSecurity = RetrieveCreditTransfersSecurity;
var RetrieveCreditTransfers401ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfers401ApplicationJson, _super);
    function RetrieveCreditTransfers401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers401ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers401ApplicationJson.prototype, "type", void 0);
    return RetrieveCreditTransfers401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RetrieveCreditTransfers401ApplicationJson = RetrieveCreditTransfers401ApplicationJson;
// RetrieveCreditTransfers404ApplicationJson
/**
 * Invalid API Key
**/
var RetrieveCreditTransfers404ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfers404ApplicationJson, _super);
    function RetrieveCreditTransfers404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers404ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers404ApplicationJson.prototype, "type", void 0);
    return RetrieveCreditTransfers404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RetrieveCreditTransfers404ApplicationJson = RetrieveCreditTransfers404ApplicationJson;
var RetrieveCreditTransfersRequest = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfersRequest, _super);
    function RetrieveCreditTransfersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveCreditTransfersPathParams)
    ], RetrieveCreditTransfersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveCreditTransfersQueryParams)
    ], RetrieveCreditTransfersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveCreditTransfersSecurity)
    ], RetrieveCreditTransfersRequest.prototype, "security", void 0);
    return RetrieveCreditTransfersRequest;
}(utils_1.SpeakeasyBase));
exports.RetrieveCreditTransfersRequest = RetrieveCreditTransfersRequest;
var RetrieveCreditTransfersResponse = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfersResponse, _super);
    function RetrieveCreditTransfersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RetrieveCreditTransfersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RetrieveCreditTransfersResponse.prototype, "listCreditTransfersResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RetrieveCreditTransfersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], RetrieveCreditTransfersResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveCreditTransfers401ApplicationJson)
    ], RetrieveCreditTransfersResponse.prototype, "retrieveCreditTransfers401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveCreditTransfers404ApplicationJson)
    ], RetrieveCreditTransfersResponse.prototype, "retrieveCreditTransfers404ApplicationJSONObject", void 0);
    return RetrieveCreditTransfersResponse;
}(utils_1.SpeakeasyBase));
exports.RetrieveCreditTransfersResponse = RetrieveCreditTransfersResponse;

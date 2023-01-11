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
exports.TransferBalanceResponse = exports.TransferBalanceRequest = exports.TransferBalance422ApplicationJson = exports.TransferBalance422ApplicationJsonInvalidParameters = exports.TransferBalance404ApplicationJson = exports.TransferBalance401ApplicationJson = exports.TransferBalanceSecurity = exports.TransferBalancePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TransferBalancePathParams = /** @class */ (function (_super) {
    __extends(TransferBalancePathParams, _super);
    function TransferBalancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], TransferBalancePathParams.prototype, "apiKey", void 0);
    return TransferBalancePathParams;
}(utils_1.SpeakeasyBase));
exports.TransferBalancePathParams = TransferBalancePathParams;
var TransferBalanceSecurity = /** @class */ (function (_super) {
    __extends(TransferBalanceSecurity, _super);
    function TransferBalanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], TransferBalanceSecurity.prototype, "basicAuth", void 0);
    return TransferBalanceSecurity;
}(utils_1.SpeakeasyBase));
exports.TransferBalanceSecurity = TransferBalanceSecurity;
var TransferBalance401ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferBalance401ApplicationJson, _super);
    function TransferBalance401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferBalance401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferBalance401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferBalance401ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferBalance401ApplicationJson.prototype, "type", void 0);
    return TransferBalance401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TransferBalance401ApplicationJson = TransferBalance401ApplicationJson;
// TransferBalance404ApplicationJson
/**
 * Invalid API Key
**/
var TransferBalance404ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferBalance404ApplicationJson, _super);
    function TransferBalance404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferBalance404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferBalance404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferBalance404ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferBalance404ApplicationJson.prototype, "type", void 0);
    return TransferBalance404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TransferBalance404ApplicationJson = TransferBalance404ApplicationJson;
var TransferBalance422ApplicationJsonInvalidParameters = /** @class */ (function (_super) {
    __extends(TransferBalance422ApplicationJsonInvalidParameters, _super);
    function TransferBalance422ApplicationJsonInvalidParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJsonInvalidParameters.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJsonInvalidParameters.prototype, "reason", void 0);
    return TransferBalance422ApplicationJsonInvalidParameters;
}(utils_1.SpeakeasyBase));
exports.TransferBalance422ApplicationJsonInvalidParameters = TransferBalance422ApplicationJsonInvalidParameters;
var TransferBalance422ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferBalance422ApplicationJson, _super);
    function TransferBalance422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invalid_parameters", elemType: TransferBalance422ApplicationJsonInvalidParameters }),
        __metadata("design:type", Array)
    ], TransferBalance422ApplicationJson.prototype, "invalidParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJson.prototype, "type", void 0);
    return TransferBalance422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TransferBalance422ApplicationJson = TransferBalance422ApplicationJson;
var TransferBalanceRequest = /** @class */ (function (_super) {
    __extends(TransferBalanceRequest, _super);
    function TransferBalanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TransferBalancePathParams)
    ], TransferBalanceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TransferBalanceOrCreditRequest)
    ], TransferBalanceRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TransferBalanceSecurity)
    ], TransferBalanceRequest.prototype, "security", void 0);
    return TransferBalanceRequest;
}(utils_1.SpeakeasyBase));
exports.TransferBalanceRequest = TransferBalanceRequest;
var TransferBalanceResponse = /** @class */ (function (_super) {
    __extends(TransferBalanceResponse, _super);
    function TransferBalanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TransferBalanceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TransferBalanceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], TransferBalanceResponse.prototype, "transferBalanceResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], TransferBalanceResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TransferBalance401ApplicationJson)
    ], TransferBalanceResponse.prototype, "transferBalance401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TransferBalance404ApplicationJson)
    ], TransferBalanceResponse.prototype, "transferBalance404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TransferBalance422ApplicationJson)
    ], TransferBalanceResponse.prototype, "transferBalance422ApplicationJSONObject", void 0);
    return TransferBalanceResponse;
}(utils_1.SpeakeasyBase));
exports.TransferBalanceResponse = TransferBalanceResponse;

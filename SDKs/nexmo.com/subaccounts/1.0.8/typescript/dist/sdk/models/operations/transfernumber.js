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
exports.TransferNumberResponse = exports.TransferNumberRequest = exports.TransferNumber422ApplicationJson = exports.TransferNumber422ApplicationJsonInvalidParameters = exports.TransferNumber409ApplicationJson = exports.TransferNumber401ApplicationJson = exports.TransferNumberSecurity = exports.TransferNumberPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TransferNumberPathParams = /** @class */ (function (_super) {
    __extends(TransferNumberPathParams, _super);
    function TransferNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], TransferNumberPathParams.prototype, "apiKey", void 0);
    return TransferNumberPathParams;
}(utils_1.SpeakeasyBase));
exports.TransferNumberPathParams = TransferNumberPathParams;
var TransferNumberSecurity = /** @class */ (function (_super) {
    __extends(TransferNumberSecurity, _super);
    function TransferNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], TransferNumberSecurity.prototype, "basicAuth", void 0);
    return TransferNumberSecurity;
}(utils_1.SpeakeasyBase));
exports.TransferNumberSecurity = TransferNumberSecurity;
var TransferNumber401ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferNumber401ApplicationJson, _super);
    function TransferNumber401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferNumber401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferNumber401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferNumber401ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferNumber401ApplicationJson.prototype, "type", void 0);
    return TransferNumber401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TransferNumber401ApplicationJson = TransferNumber401ApplicationJson;
var TransferNumber409ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferNumber409ApplicationJson, _super);
    function TransferNumber409ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferNumber409ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferNumber409ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferNumber409ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferNumber409ApplicationJson.prototype, "type", void 0);
    return TransferNumber409ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TransferNumber409ApplicationJson = TransferNumber409ApplicationJson;
var TransferNumber422ApplicationJsonInvalidParameters = /** @class */ (function (_super) {
    __extends(TransferNumber422ApplicationJsonInvalidParameters, _super);
    function TransferNumber422ApplicationJsonInvalidParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJsonInvalidParameters.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJsonInvalidParameters.prototype, "reason", void 0);
    return TransferNumber422ApplicationJsonInvalidParameters;
}(utils_1.SpeakeasyBase));
exports.TransferNumber422ApplicationJsonInvalidParameters = TransferNumber422ApplicationJsonInvalidParameters;
var TransferNumber422ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferNumber422ApplicationJson, _super);
    function TransferNumber422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invalid_parameters", elemType: TransferNumber422ApplicationJsonInvalidParameters }),
        __metadata("design:type", Array)
    ], TransferNumber422ApplicationJson.prototype, "invalidParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJson.prototype, "type", void 0);
    return TransferNumber422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TransferNumber422ApplicationJson = TransferNumber422ApplicationJson;
var TransferNumberRequest = /** @class */ (function (_super) {
    __extends(TransferNumberRequest, _super);
    function TransferNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TransferNumberPathParams)
    ], TransferNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TransferNumberRequest)
    ], TransferNumberRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TransferNumberSecurity)
    ], TransferNumberRequest.prototype, "security", void 0);
    return TransferNumberRequest;
}(utils_1.SpeakeasyBase));
exports.TransferNumberRequest = TransferNumberRequest;
var TransferNumberResponse = /** @class */ (function (_super) {
    __extends(TransferNumberResponse, _super);
    function TransferNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TransferNumberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TransferNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], TransferNumberResponse.prototype, "transferNumberResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TransferNumber401ApplicationJson)
    ], TransferNumberResponse.prototype, "transferNumber401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], TransferNumberResponse.prototype, "transferNumber403ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], TransferNumberResponse.prototype, "transferNumber404ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TransferNumber409ApplicationJson)
    ], TransferNumberResponse.prototype, "transferNumber409ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TransferNumber422ApplicationJson)
    ], TransferNumberResponse.prototype, "transferNumber422ApplicationJSONObject", void 0);
    return TransferNumberResponse;
}(utils_1.SpeakeasyBase));
exports.TransferNumberResponse = TransferNumberResponse;

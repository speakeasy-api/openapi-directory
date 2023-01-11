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
exports.RetrieveSubaccountResponse = exports.RetrieveSubaccountRequest = exports.RetrieveSubaccount404ApplicationJson = exports.RetrieveSubaccount401ApplicationJson = exports.RetrieveSubaccountSecurity = exports.RetrieveSubaccountPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RetrieveSubaccountPathParams = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountPathParams, _super);
    function RetrieveSubaccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountPathParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=subaccount_key" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountPathParams.prototype, "subaccountKey", void 0);
    return RetrieveSubaccountPathParams;
}(utils_1.SpeakeasyBase));
exports.RetrieveSubaccountPathParams = RetrieveSubaccountPathParams;
var RetrieveSubaccountSecurity = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountSecurity, _super);
    function RetrieveSubaccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], RetrieveSubaccountSecurity.prototype, "basicAuth", void 0);
    return RetrieveSubaccountSecurity;
}(utils_1.SpeakeasyBase));
exports.RetrieveSubaccountSecurity = RetrieveSubaccountSecurity;
var RetrieveSubaccount401ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveSubaccount401ApplicationJson, _super);
    function RetrieveSubaccount401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount401ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount401ApplicationJson.prototype, "type", void 0);
    return RetrieveSubaccount401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RetrieveSubaccount401ApplicationJson = RetrieveSubaccount401ApplicationJson;
// RetrieveSubaccount404ApplicationJson
/**
 * Invalid API Key
**/
var RetrieveSubaccount404ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveSubaccount404ApplicationJson, _super);
    function RetrieveSubaccount404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount404ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount404ApplicationJson.prototype, "type", void 0);
    return RetrieveSubaccount404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RetrieveSubaccount404ApplicationJson = RetrieveSubaccount404ApplicationJson;
var RetrieveSubaccountRequest = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountRequest, _super);
    function RetrieveSubaccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveSubaccountPathParams)
    ], RetrieveSubaccountRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveSubaccountSecurity)
    ], RetrieveSubaccountRequest.prototype, "security", void 0);
    return RetrieveSubaccountRequest;
}(utils_1.SpeakeasyBase));
exports.RetrieveSubaccountRequest = RetrieveSubaccountRequest;
var RetrieveSubaccountResponse = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountResponse, _super);
    function RetrieveSubaccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RetrieveSubaccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RetrieveSubaccountResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RetrieveSubaccountResponse.prototype, "subaccountResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], RetrieveSubaccountResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveSubaccount401ApplicationJson)
    ], RetrieveSubaccountResponse.prototype, "retrieveSubaccount401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveSubaccount404ApplicationJson)
    ], RetrieveSubaccountResponse.prototype, "retrieveSubaccount404ApplicationJSONObject", void 0);
    return RetrieveSubaccountResponse;
}(utils_1.SpeakeasyBase));
exports.RetrieveSubaccountResponse = RetrieveSubaccountResponse;

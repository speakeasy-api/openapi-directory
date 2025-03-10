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
exports.FetchWirelessUsageResponse = exports.FetchWirelessUsageRequest = exports.FetchWirelessUsageSecurity = exports.FetchWirelessUsageQueryParams = exports.FetchWirelessUsagePathParams = exports.FetchWirelessUsageServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.FetchWirelessUsageServerList = [
    "https://preview.twilio.com",
];
var FetchWirelessUsagePathParams = /** @class */ (function (_super) {
    __extends(FetchWirelessUsagePathParams, _super);
    function FetchWirelessUsagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=SimSid" }),
        __metadata("design:type", String)
    ], FetchWirelessUsagePathParams.prototype, "simSid", void 0);
    return FetchWirelessUsagePathParams;
}(utils_1.SpeakeasyBase));
exports.FetchWirelessUsagePathParams = FetchWirelessUsagePathParams;
var FetchWirelessUsageQueryParams = /** @class */ (function (_super) {
    __extends(FetchWirelessUsageQueryParams, _super);
    function FetchWirelessUsageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=End" }),
        __metadata("design:type", String)
    ], FetchWirelessUsageQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Start" }),
        __metadata("design:type", String)
    ], FetchWirelessUsageQueryParams.prototype, "start", void 0);
    return FetchWirelessUsageQueryParams;
}(utils_1.SpeakeasyBase));
exports.FetchWirelessUsageQueryParams = FetchWirelessUsageQueryParams;
var FetchWirelessUsageSecurity = /** @class */ (function (_super) {
    __extends(FetchWirelessUsageSecurity, _super);
    function FetchWirelessUsageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWirelessUsageSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWirelessUsageSecurity;
}(utils_1.SpeakeasyBase));
exports.FetchWirelessUsageSecurity = FetchWirelessUsageSecurity;
var FetchWirelessUsageRequest = /** @class */ (function (_super) {
    __extends(FetchWirelessUsageRequest, _super);
    function FetchWirelessUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchWirelessUsageRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchWirelessUsagePathParams)
    ], FetchWirelessUsageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchWirelessUsageQueryParams)
    ], FetchWirelessUsageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchWirelessUsageSecurity)
    ], FetchWirelessUsageRequest.prototype, "security", void 0);
    return FetchWirelessUsageRequest;
}(utils_1.SpeakeasyBase));
exports.FetchWirelessUsageRequest = FetchWirelessUsageRequest;
var FetchWirelessUsageResponse = /** @class */ (function (_super) {
    __extends(FetchWirelessUsageResponse, _super);
    function FetchWirelessUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchWirelessUsageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FetchWirelessUsageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreviewWirelessSimUsage)
    ], FetchWirelessUsageResponse.prototype, "previewWirelessSimUsage", void 0);
    return FetchWirelessUsageResponse;
}(utils_1.SpeakeasyBase));
exports.FetchWirelessUsageResponse = FetchWirelessUsageResponse;

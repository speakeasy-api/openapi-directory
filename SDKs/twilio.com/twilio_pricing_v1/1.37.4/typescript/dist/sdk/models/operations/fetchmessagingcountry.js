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
exports.FetchMessagingCountryResponse = exports.FetchMessagingCountryRequest = exports.FetchMessagingCountrySecurity = exports.FetchMessagingCountryPathParams = exports.FetchMessagingCountryServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.FetchMessagingCountryServerList = [
    "https://pricing.twilio.com",
];
var FetchMessagingCountryPathParams = /** @class */ (function (_super) {
    __extends(FetchMessagingCountryPathParams, _super);
    function FetchMessagingCountryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=IsoCountry" }),
        __metadata("design:type", String)
    ], FetchMessagingCountryPathParams.prototype, "isoCountry", void 0);
    return FetchMessagingCountryPathParams;
}(utils_1.SpeakeasyBase));
exports.FetchMessagingCountryPathParams = FetchMessagingCountryPathParams;
var FetchMessagingCountrySecurity = /** @class */ (function (_super) {
    __extends(FetchMessagingCountrySecurity, _super);
    function FetchMessagingCountrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchMessagingCountrySecurity.prototype, "accountSidAuthToken", void 0);
    return FetchMessagingCountrySecurity;
}(utils_1.SpeakeasyBase));
exports.FetchMessagingCountrySecurity = FetchMessagingCountrySecurity;
var FetchMessagingCountryRequest = /** @class */ (function (_super) {
    __extends(FetchMessagingCountryRequest, _super);
    function FetchMessagingCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchMessagingCountryRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchMessagingCountryPathParams)
    ], FetchMessagingCountryRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchMessagingCountrySecurity)
    ], FetchMessagingCountryRequest.prototype, "security", void 0);
    return FetchMessagingCountryRequest;
}(utils_1.SpeakeasyBase));
exports.FetchMessagingCountryRequest = FetchMessagingCountryRequest;
var FetchMessagingCountryResponse = /** @class */ (function (_super) {
    __extends(FetchMessagingCountryResponse, _super);
    function FetchMessagingCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchMessagingCountryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FetchMessagingCountryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PricingV1MessagingMessagingCountryInstance)
    ], FetchMessagingCountryResponse.prototype, "pricingV1MessagingMessagingCountryInstance", void 0);
    return FetchMessagingCountryResponse;
}(utils_1.SpeakeasyBase));
exports.FetchMessagingCountryResponse = FetchMessagingCountryResponse;

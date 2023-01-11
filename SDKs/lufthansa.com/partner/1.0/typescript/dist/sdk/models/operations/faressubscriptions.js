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
exports.FaresSubscriptionsResponse = exports.FaresSubscriptionsRequest = exports.FaresSubscriptionsSecurity = exports.FaresSubscriptionsHeaders = exports.FaresSubscriptionsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FaresSubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(FaresSubscriptionsQueryParams, _super);
    function FaresSubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cabin-class" }),
        __metadata("design:type", String)
    ], FaresSubscriptionsQueryParams.prototype, "cabinClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], FaresSubscriptionsQueryParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], FaresSubscriptionsQueryParams.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], FaresSubscriptionsQueryParams.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], FaresSubscriptionsQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=origin" }),
        __metadata("design:type", String)
    ], FaresSubscriptionsQueryParams.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=trackingid" }),
        __metadata("design:type", String)
    ], FaresSubscriptionsQueryParams.prototype, "trackingid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=trip-duration" }),
        __metadata("design:type", String)
    ], FaresSubscriptionsQueryParams.prototype, "tripDuration", void 0);
    return FaresSubscriptionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.FaresSubscriptionsQueryParams = FaresSubscriptionsQueryParams;
var FaresSubscriptionsHeaders = /** @class */ (function (_super) {
    __extends(FaresSubscriptionsHeaders, _super);
    function FaresSubscriptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], FaresSubscriptionsHeaders.prototype, "accept", void 0);
    return FaresSubscriptionsHeaders;
}(utils_1.SpeakeasyBase));
exports.FaresSubscriptionsHeaders = FaresSubscriptionsHeaders;
var FaresSubscriptionsSecurity = /** @class */ (function (_super) {
    __extends(FaresSubscriptionsSecurity, _super);
    function FaresSubscriptionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], FaresSubscriptionsSecurity.prototype, "auth", void 0);
    return FaresSubscriptionsSecurity;
}(utils_1.SpeakeasyBase));
exports.FaresSubscriptionsSecurity = FaresSubscriptionsSecurity;
var FaresSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(FaresSubscriptionsRequest, _super);
    function FaresSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FaresSubscriptionsQueryParams)
    ], FaresSubscriptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FaresSubscriptionsHeaders)
    ], FaresSubscriptionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FaresSubscriptionsSecurity)
    ], FaresSubscriptionsRequest.prototype, "security", void 0);
    return FaresSubscriptionsRequest;
}(utils_1.SpeakeasyBase));
exports.FaresSubscriptionsRequest = FaresSubscriptionsRequest;
var FaresSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(FaresSubscriptionsResponse, _super);
    function FaresSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FaresSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FaresSubscriptionsResponse.prototype, "faresSubscriptions200ApplicationJSONString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FaresSubscriptionsResponse.prototype, "statusCode", void 0);
    return FaresSubscriptionsResponse;
}(utils_1.SpeakeasyBase));
exports.FaresSubscriptionsResponse = FaresSubscriptionsResponse;

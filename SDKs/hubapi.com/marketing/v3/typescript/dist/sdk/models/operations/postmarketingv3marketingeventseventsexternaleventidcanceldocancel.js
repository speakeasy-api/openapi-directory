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
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse = exports.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest = exports.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity = exports.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams = exports.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams.prototype, "externalEventId", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams;
}(utils_1.SpeakeasyBase));
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams = PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams;
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams.prototype, "externalAccountId", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams = PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams;
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity;
}(utils_1.SpeakeasyBase));
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity = PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity;
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest;
}(utils_1.SpeakeasyBase));
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest = PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest;
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.MarketingEventDefaultResponse)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse.prototype, "marketingEventDefaultResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse;
}(utils_1.SpeakeasyBase));
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse = PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse;

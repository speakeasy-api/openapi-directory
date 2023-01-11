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
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse = exports.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest = exports.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity = exports.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams = exports.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams.prototype, "externalEventId", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams;
}(utils_1.SpeakeasyBase));
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams = PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams;
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams.prototype, "externalAccountId", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams = PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams;
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity;
}(utils_1.SpeakeasyBase));
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity = PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity;
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MarketingEventCompleteRequestParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest;
}(utils_1.SpeakeasyBase));
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest = PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest;
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.MarketingEventDefaultResponse)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse.prototype, "marketingEventDefaultResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse;
}(utils_1.SpeakeasyBase));
exports.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse = PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse;

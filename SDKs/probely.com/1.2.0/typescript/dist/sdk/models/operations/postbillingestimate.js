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
exports.PostBillingEstimateResponse = exports.PostBillingEstimateRequest = exports.PostBillingEstimate403ApplicationJson = exports.PostBillingEstimate401ApplicationJson = exports.PostBillingEstimate400ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostBillingEstimate400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBillingEstimate400ApplicationJson, _super);
    function PostBillingEstimate400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostBillingEstimate400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostBillingEstimate400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostBillingEstimate400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostBillingEstimate400ApplicationJson = PostBillingEstimate400ApplicationJson;
var PostBillingEstimate401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBillingEstimate401ApplicationJson, _super);
    function PostBillingEstimate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostBillingEstimate401ApplicationJson.prototype, "detail", void 0);
    return PostBillingEstimate401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostBillingEstimate401ApplicationJson = PostBillingEstimate401ApplicationJson;
var PostBillingEstimate403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBillingEstimate403ApplicationJson, _super);
    function PostBillingEstimate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostBillingEstimate403ApplicationJson.prototype, "detail", void 0);
    return PostBillingEstimate403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostBillingEstimate403ApplicationJson = PostBillingEstimate403ApplicationJson;
var PostBillingEstimateRequest = /** @class */ (function (_super) {
    __extends(PostBillingEstimateRequest, _super);
    function PostBillingEstimateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubscriptionInput)
    ], PostBillingEstimateRequest.prototype, "request", void 0);
    return PostBillingEstimateRequest;
}(utils_1.SpeakeasyBase));
exports.PostBillingEstimateRequest = PostBillingEstimateRequest;
var PostBillingEstimateResponse = /** @class */ (function (_super) {
    __extends(PostBillingEstimateResponse, _super);
    function PostBillingEstimateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostBillingEstimateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Invoice)
    ], PostBillingEstimateResponse.prototype, "invoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostBillingEstimateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBillingEstimate400ApplicationJson)
    ], PostBillingEstimateResponse.prototype, "postBillingEstimate400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBillingEstimate401ApplicationJson)
    ], PostBillingEstimateResponse.prototype, "postBillingEstimate401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBillingEstimate403ApplicationJson)
    ], PostBillingEstimateResponse.prototype, "postBillingEstimate403ApplicationJSONObject", void 0);
    return PostBillingEstimateResponse;
}(utils_1.SpeakeasyBase));
exports.PostBillingEstimateResponse = PostBillingEstimateResponse;

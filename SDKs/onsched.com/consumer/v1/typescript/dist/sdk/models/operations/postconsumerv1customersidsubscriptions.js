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
exports.PostConsumerV1CustomersIdSubscriptionsResponse = exports.PostConsumerV1CustomersIdSubscriptionsRequest = exports.PostConsumerV1CustomersIdSubscriptionsRequests = exports.PostConsumerV1CustomersIdSubscriptionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostConsumerV1CustomersIdSubscriptionsPathParams = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersIdSubscriptionsPathParams, _super);
    function PostConsumerV1CustomersIdSubscriptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostConsumerV1CustomersIdSubscriptionsPathParams.prototype, "id", void 0);
    return PostConsumerV1CustomersIdSubscriptionsPathParams;
}(utils_1.SpeakeasyBase));
exports.PostConsumerV1CustomersIdSubscriptionsPathParams = PostConsumerV1CustomersIdSubscriptionsPathParams;
var PostConsumerV1CustomersIdSubscriptionsRequests = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersIdSubscriptionsRequests, _super);
    function PostConsumerV1CustomersIdSubscriptionsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CustomerSubscriptionInputModel)
    ], PostConsumerV1CustomersIdSubscriptionsRequests.prototype, "customerSubscriptionInputModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomerSubscriptionInputModel)
    ], PostConsumerV1CustomersIdSubscriptionsRequests.prototype, "customerSubscriptionInputModel1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CustomerSubscriptionInputModel)
    ], PostConsumerV1CustomersIdSubscriptionsRequests.prototype, "customerSubscriptionInputModel2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CustomerSubscriptionInputModel)
    ], PostConsumerV1CustomersIdSubscriptionsRequests.prototype, "customerSubscriptionInputModel3", void 0);
    return PostConsumerV1CustomersIdSubscriptionsRequests;
}(utils_1.SpeakeasyBase));
exports.PostConsumerV1CustomersIdSubscriptionsRequests = PostConsumerV1CustomersIdSubscriptionsRequests;
var PostConsumerV1CustomersIdSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersIdSubscriptionsRequest, _super);
    function PostConsumerV1CustomersIdSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostConsumerV1CustomersIdSubscriptionsPathParams)
    ], PostConsumerV1CustomersIdSubscriptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostConsumerV1CustomersIdSubscriptionsRequests)
    ], PostConsumerV1CustomersIdSubscriptionsRequest.prototype, "request", void 0);
    return PostConsumerV1CustomersIdSubscriptionsRequest;
}(utils_1.SpeakeasyBase));
exports.PostConsumerV1CustomersIdSubscriptionsRequest = PostConsumerV1CustomersIdSubscriptionsRequest;
var PostConsumerV1CustomersIdSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersIdSubscriptionsResponse, _super);
    function PostConsumerV1CustomersIdSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostConsumerV1CustomersIdSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomerSubscriptionViewModel)
    ], PostConsumerV1CustomersIdSubscriptionsResponse.prototype, "customerSubscriptionViewModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostConsumerV1CustomersIdSubscriptionsResponse.prototype, "statusCode", void 0);
    return PostConsumerV1CustomersIdSubscriptionsResponse;
}(utils_1.SpeakeasyBase));
exports.PostConsumerV1CustomersIdSubscriptionsResponse = PostConsumerV1CustomersIdSubscriptionsResponse;

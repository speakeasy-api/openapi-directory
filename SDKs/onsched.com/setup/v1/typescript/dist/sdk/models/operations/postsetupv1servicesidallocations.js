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
exports.PostSetupV1ServicesIdAllocationsResponse = exports.PostSetupV1ServicesIdAllocationsRequest = exports.PostSetupV1ServicesIdAllocationsRequests = exports.PostSetupV1ServicesIdAllocationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostSetupV1ServicesIdAllocationsPathParams = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesIdAllocationsPathParams, _super);
    function PostSetupV1ServicesIdAllocationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostSetupV1ServicesIdAllocationsPathParams.prototype, "id", void 0);
    return PostSetupV1ServicesIdAllocationsPathParams;
}(utils_1.SpeakeasyBase));
exports.PostSetupV1ServicesIdAllocationsPathParams = PostSetupV1ServicesIdAllocationsPathParams;
var PostSetupV1ServicesIdAllocationsRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesIdAllocationsRequests, _super);
    function PostSetupV1ServicesIdAllocationsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ServiceAllocationInputModel)
    ], PostSetupV1ServicesIdAllocationsRequests.prototype, "serviceAllocationInputModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServiceAllocationInputModel)
    ], PostSetupV1ServicesIdAllocationsRequests.prototype, "serviceAllocationInputModel1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ServiceAllocationInputModel)
    ], PostSetupV1ServicesIdAllocationsRequests.prototype, "serviceAllocationInputModel2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ServiceAllocationInputModel)
    ], PostSetupV1ServicesIdAllocationsRequests.prototype, "serviceAllocationInputModel3", void 0);
    return PostSetupV1ServicesIdAllocationsRequests;
}(utils_1.SpeakeasyBase));
exports.PostSetupV1ServicesIdAllocationsRequests = PostSetupV1ServicesIdAllocationsRequests;
var PostSetupV1ServicesIdAllocationsRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesIdAllocationsRequest, _super);
    function PostSetupV1ServicesIdAllocationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSetupV1ServicesIdAllocationsPathParams)
    ], PostSetupV1ServicesIdAllocationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSetupV1ServicesIdAllocationsRequests)
    ], PostSetupV1ServicesIdAllocationsRequest.prototype, "request", void 0);
    return PostSetupV1ServicesIdAllocationsRequest;
}(utils_1.SpeakeasyBase));
exports.PostSetupV1ServicesIdAllocationsRequest = PostSetupV1ServicesIdAllocationsRequest;
var PostSetupV1ServicesIdAllocationsResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesIdAllocationsResponse, _super);
    function PostSetupV1ServicesIdAllocationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSetupV1ServicesIdAllocationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ServiceAllocationViewModel)
    ], PostSetupV1ServicesIdAllocationsResponse.prototype, "serviceAllocationViewModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSetupV1ServicesIdAllocationsResponse.prototype, "statusCode", void 0);
    return PostSetupV1ServicesIdAllocationsResponse;
}(utils_1.SpeakeasyBase));
exports.PostSetupV1ServicesIdAllocationsResponse = PostSetupV1ServicesIdAllocationsResponse;

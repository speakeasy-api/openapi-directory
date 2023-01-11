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
exports.PostV05ConsentRequestsInitResponse = exports.PostV05ConsentRequestsInitRequest = exports.PostV05ConsentRequestsInitRequests = exports.PostV05ConsentRequestsInitHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostV05ConsentRequestsInitHeaders = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsInitHeaders, _super);
    function PostV05ConsentRequestsInitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsInitHeaders.prototype, "authorization", void 0);
    return PostV05ConsentRequestsInitHeaders;
}(utils_1.SpeakeasyBase));
exports.PostV05ConsentRequestsInitHeaders = PostV05ConsentRequestsInitHeaders;
var PostV05ConsentRequestsInitRequests = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsInitRequests, _super);
    function PostV05ConsentRequestsInitRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentRequestsInitRequests.prototype, "applicationXML", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConsentRequest)
    ], PostV05ConsentRequestsInitRequests.prototype, "consentRequest", void 0);
    return PostV05ConsentRequestsInitRequests;
}(utils_1.SpeakeasyBase));
exports.PostV05ConsentRequestsInitRequests = PostV05ConsentRequestsInitRequests;
var PostV05ConsentRequestsInitRequest = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsInitRequest, _super);
    function PostV05ConsentRequestsInitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostV05ConsentRequestsInitHeaders)
    ], PostV05ConsentRequestsInitRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostV05ConsentRequestsInitRequests)
    ], PostV05ConsentRequestsInitRequest.prototype, "request", void 0);
    return PostV05ConsentRequestsInitRequest;
}(utils_1.SpeakeasyBase));
exports.PostV05ConsentRequestsInitRequest = PostV05ConsentRequestsInitRequest;
var PostV05ConsentRequestsInitResponse = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsInitResponse, _super);
    function PostV05ConsentRequestsInitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentRequestsInitResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsInitResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05ConsentRequestsInitResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostV05ConsentRequestsInitResponse.prototype, "statusCode", void 0);
    return PostV05ConsentRequestsInitResponse;
}(utils_1.SpeakeasyBase));
exports.PostV05ConsentRequestsInitResponse = PostV05ConsentRequestsInitResponse;

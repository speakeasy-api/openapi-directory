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
exports.PostEmployeeSecretResponse = exports.PostEmployeeSecretRequest = exports.PostEmployeeSecretHeaders = exports.PostEmployeeSecretPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostEmployeeSecretPathParams = /** @class */ (function (_super) {
    __extends(PostEmployeeSecretPathParams, _super);
    function PostEmployeeSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], PostEmployeeSecretPathParams.prototype, "employeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PostEmployeeSecretPathParams.prototype, "employerId", void 0);
    return PostEmployeeSecretPathParams;
}(utils_1.SpeakeasyBase));
exports.PostEmployeeSecretPathParams = PostEmployeeSecretPathParams;
var PostEmployeeSecretHeaders = /** @class */ (function (_super) {
    __extends(PostEmployeeSecretHeaders, _super);
    function PostEmployeeSecretHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PostEmployeeSecretHeaders.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostEmployeeSecretHeaders.prototype, "authorization", void 0);
    return PostEmployeeSecretHeaders;
}(utils_1.SpeakeasyBase));
exports.PostEmployeeSecretHeaders = PostEmployeeSecretHeaders;
var PostEmployeeSecretRequest = /** @class */ (function (_super) {
    __extends(PostEmployeeSecretRequest, _super);
    function PostEmployeeSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEmployeeSecretPathParams)
    ], PostEmployeeSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEmployeeSecretHeaders)
    ], PostEmployeeSecretRequest.prototype, "headers", void 0);
    return PostEmployeeSecretRequest;
}(utils_1.SpeakeasyBase));
exports.PostEmployeeSecretRequest = PostEmployeeSecretRequest;
var PostEmployeeSecretResponse = /** @class */ (function (_super) {
    __extends(PostEmployeeSecretResponse, _super);
    function PostEmployeeSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostEmployeeSecretResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorModel)
    ], PostEmployeeSecretResponse.prototype, "errorModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Link)
    ], PostEmployeeSecretResponse.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostEmployeeSecretResponse.prototype, "statusCode", void 0);
    return PostEmployeeSecretResponse;
}(utils_1.SpeakeasyBase));
exports.PostEmployeeSecretResponse = PostEmployeeSecretResponse;

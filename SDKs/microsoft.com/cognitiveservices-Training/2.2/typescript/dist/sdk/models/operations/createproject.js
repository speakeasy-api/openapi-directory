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
exports.CreateProjectResponse = exports.CreateProjectRequest = exports.CreateProjectHeaders = exports.CreateProjectQueryParams = exports.CreateProjectClassificationTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateProjectClassificationTypeEnum;
(function (CreateProjectClassificationTypeEnum) {
    CreateProjectClassificationTypeEnum["Multiclass"] = "Multiclass";
    CreateProjectClassificationTypeEnum["Multilabel"] = "Multilabel";
})(CreateProjectClassificationTypeEnum = exports.CreateProjectClassificationTypeEnum || (exports.CreateProjectClassificationTypeEnum = {}));
var CreateProjectQueryParams = /** @class */ (function (_super) {
    __extends(CreateProjectQueryParams, _super);
    function CreateProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=classificationType" }),
        __metadata("design:type", String)
    ], CreateProjectQueryParams.prototype, "classificationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], CreateProjectQueryParams.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=domainId" }),
        __metadata("design:type", String)
    ], CreateProjectQueryParams.prototype, "domainId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CreateProjectQueryParams.prototype, "name", void 0);
    return CreateProjectQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateProjectQueryParams = CreateProjectQueryParams;
var CreateProjectHeaders = /** @class */ (function (_super) {
    __extends(CreateProjectHeaders, _super);
    function CreateProjectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], CreateProjectHeaders.prototype, "trainingKey", void 0);
    return CreateProjectHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateProjectHeaders = CreateProjectHeaders;
var CreateProjectRequest = /** @class */ (function (_super) {
    __extends(CreateProjectRequest, _super);
    function CreateProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateProjectQueryParams)
    ], CreateProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateProjectHeaders)
    ], CreateProjectRequest.prototype, "headers", void 0);
    return CreateProjectRequest;
}(utils_1.SpeakeasyBase));
exports.CreateProjectRequest = CreateProjectRequest;
var CreateProjectResponse = /** @class */ (function (_super) {
    __extends(CreateProjectResponse, _super);
    function CreateProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreateProjectResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateProjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Project)
    ], CreateProjectResponse.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateProjectResponse.prototype, "statusCode", void 0);
    return CreateProjectResponse;
}(utils_1.SpeakeasyBase));
exports.CreateProjectResponse = CreateProjectResponse;

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
exports.ExportIterationResponse = exports.ExportIterationRequest = exports.ExportIterationHeaders = exports.ExportIterationQueryParams = exports.ExportIterationPlatformEnum = exports.ExportIterationFlavorEnum = exports.ExportIterationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ExportIterationPathParams = /** @class */ (function (_super) {
    __extends(ExportIterationPathParams, _super);
    function ExportIterationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=iterationId" }),
        __metadata("design:type", String)
    ], ExportIterationPathParams.prototype, "iterationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ExportIterationPathParams.prototype, "projectId", void 0);
    return ExportIterationPathParams;
}(utils_1.SpeakeasyBase));
exports.ExportIterationPathParams = ExportIterationPathParams;
var ExportIterationFlavorEnum;
(function (ExportIterationFlavorEnum) {
    ExportIterationFlavorEnum["Linux"] = "Linux";
    ExportIterationFlavorEnum["Windows"] = "Windows";
    ExportIterationFlavorEnum["Onnx10"] = "ONNX10";
    ExportIterationFlavorEnum["Onnx12"] = "ONNX12";
})(ExportIterationFlavorEnum = exports.ExportIterationFlavorEnum || (exports.ExportIterationFlavorEnum = {}));
var ExportIterationPlatformEnum;
(function (ExportIterationPlatformEnum) {
    ExportIterationPlatformEnum["CoreMl"] = "CoreML";
    ExportIterationPlatformEnum["TensorFlow"] = "TensorFlow";
    ExportIterationPlatformEnum["DockerFile"] = "DockerFile";
    ExportIterationPlatformEnum["Onnx"] = "ONNX";
})(ExportIterationPlatformEnum = exports.ExportIterationPlatformEnum || (exports.ExportIterationPlatformEnum = {}));
var ExportIterationQueryParams = /** @class */ (function (_super) {
    __extends(ExportIterationQueryParams, _super);
    function ExportIterationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=flavor" }),
        __metadata("design:type", String)
    ], ExportIterationQueryParams.prototype, "flavor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=platform" }),
        __metadata("design:type", String)
    ], ExportIterationQueryParams.prototype, "platform", void 0);
    return ExportIterationQueryParams;
}(utils_1.SpeakeasyBase));
exports.ExportIterationQueryParams = ExportIterationQueryParams;
var ExportIterationHeaders = /** @class */ (function (_super) {
    __extends(ExportIterationHeaders, _super);
    function ExportIterationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], ExportIterationHeaders.prototype, "trainingKey", void 0);
    return ExportIterationHeaders;
}(utils_1.SpeakeasyBase));
exports.ExportIterationHeaders = ExportIterationHeaders;
var ExportIterationRequest = /** @class */ (function (_super) {
    __extends(ExportIterationRequest, _super);
    function ExportIterationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExportIterationPathParams)
    ], ExportIterationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExportIterationQueryParams)
    ], ExportIterationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExportIterationHeaders)
    ], ExportIterationRequest.prototype, "headers", void 0);
    return ExportIterationRequest;
}(utils_1.SpeakeasyBase));
exports.ExportIterationRequest = ExportIterationRequest;
var ExportIterationResponse = /** @class */ (function (_super) {
    __extends(ExportIterationResponse, _super);
    function ExportIterationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ExportIterationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ExportIterationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Export)
    ], ExportIterationResponse.prototype, "export", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ExportIterationResponse.prototype, "statusCode", void 0);
    return ExportIterationResponse;
}(utils_1.SpeakeasyBase));
exports.ExportIterationResponse = ExportIterationResponse;

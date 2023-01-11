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
exports.GetTrainedModelMetrics1Response = exports.GetTrainedModelMetrics1Request = exports.GetTrainedModelMetrics1Security = exports.GetTrainedModelMetrics1PathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTrainedModelMetrics1PathParams = /** @class */ (function (_super) {
    __extends(GetTrainedModelMetrics1PathParams, _super);
    function GetTrainedModelMetrics1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=modelId" }),
        __metadata("design:type", String)
    ], GetTrainedModelMetrics1PathParams.prototype, "modelId", void 0);
    return GetTrainedModelMetrics1PathParams;
}(utils_1.SpeakeasyBase));
exports.GetTrainedModelMetrics1PathParams = GetTrainedModelMetrics1PathParams;
var GetTrainedModelMetrics1Security = /** @class */ (function (_super) {
    __extends(GetTrainedModelMetrics1Security, _super);
    function GetTrainedModelMetrics1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetTrainedModelMetrics1Security.prototype, "bearerToken", void 0);
    return GetTrainedModelMetrics1Security;
}(utils_1.SpeakeasyBase));
exports.GetTrainedModelMetrics1Security = GetTrainedModelMetrics1Security;
var GetTrainedModelMetrics1Request = /** @class */ (function (_super) {
    __extends(GetTrainedModelMetrics1Request, _super);
    function GetTrainedModelMetrics1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTrainedModelMetrics1PathParams)
    ], GetTrainedModelMetrics1Request.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTrainedModelMetrics1Security)
    ], GetTrainedModelMetrics1Request.prototype, "security", void 0);
    return GetTrainedModelMetrics1Request;
}(utils_1.SpeakeasyBase));
exports.GetTrainedModelMetrics1Request = GetTrainedModelMetrics1Request;
var GetTrainedModelMetrics1Response = /** @class */ (function (_super) {
    __extends(GetTrainedModelMetrics1Response, _super);
    function GetTrainedModelMetrics1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTrainedModelMetrics1Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Metrics)
    ], GetTrainedModelMetrics1Response.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTrainedModelMetrics1Response.prototype, "statusCode", void 0);
    return GetTrainedModelMetrics1Response;
}(utils_1.SpeakeasyBase));
exports.GetTrainedModelMetrics1Response = GetTrainedModelMetrics1Response;

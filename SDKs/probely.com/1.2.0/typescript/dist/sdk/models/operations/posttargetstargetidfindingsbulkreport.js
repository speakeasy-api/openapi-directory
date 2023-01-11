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
exports.PostTargetsTargetIdFindingsBulkReportResponse = exports.PostTargetsTargetIdFindingsBulkReportRequest = exports.PostTargetsTargetIdFindingsBulkReport404ApplicationJson = exports.PostTargetsTargetIdFindingsBulkReport401ApplicationJson = exports.PostTargetsTargetIdFindingsBulkReport400ApplicationJson = exports.PostTargetsTargetIdFindingsBulkReportPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargetsTargetIdFindingsBulkReportPathParams = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdFindingsBulkReportPathParams, _super);
    function PostTargetsTargetIdFindingsBulkReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdFindingsBulkReportPathParams.prototype, "targetId", void 0);
    return PostTargetsTargetIdFindingsBulkReportPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdFindingsBulkReportPathParams = PostTargetsTargetIdFindingsBulkReportPathParams;
var PostTargetsTargetIdFindingsBulkReport400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdFindingsBulkReport400ApplicationJson, _super);
    function PostTargetsTargetIdFindingsBulkReport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdFindingsBulkReport400ApplicationJson.prototype, "error", void 0);
    return PostTargetsTargetIdFindingsBulkReport400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdFindingsBulkReport400ApplicationJson = PostTargetsTargetIdFindingsBulkReport400ApplicationJson;
var PostTargetsTargetIdFindingsBulkReport401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdFindingsBulkReport401ApplicationJson, _super);
    function PostTargetsTargetIdFindingsBulkReport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdFindingsBulkReport401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdFindingsBulkReport401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdFindingsBulkReport401ApplicationJson = PostTargetsTargetIdFindingsBulkReport401ApplicationJson;
var PostTargetsTargetIdFindingsBulkReport404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdFindingsBulkReport404ApplicationJson, _super);
    function PostTargetsTargetIdFindingsBulkReport404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdFindingsBulkReport404ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdFindingsBulkReport404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdFindingsBulkReport404ApplicationJson = PostTargetsTargetIdFindingsBulkReport404ApplicationJson;
var PostTargetsTargetIdFindingsBulkReportRequest = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdFindingsBulkReportRequest, _super);
    function PostTargetsTargetIdFindingsBulkReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdFindingsBulkReportPathParams)
    ], PostTargetsTargetIdFindingsBulkReportRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FindingBulkIds)
    ], PostTargetsTargetIdFindingsBulkReportRequest.prototype, "request", void 0);
    return PostTargetsTargetIdFindingsBulkReportRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdFindingsBulkReportRequest = PostTargetsTargetIdFindingsBulkReportRequest;
var PostTargetsTargetIdFindingsBulkReportResponse = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdFindingsBulkReportResponse, _super);
    function PostTargetsTargetIdFindingsBulkReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsTargetIdFindingsBulkReportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsTargetIdFindingsBulkReportResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdFindingsBulkReport400ApplicationJson)
    ], PostTargetsTargetIdFindingsBulkReportResponse.prototype, "postTargetsTargetIdFindingsBulkReport400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdFindingsBulkReport401ApplicationJson)
    ], PostTargetsTargetIdFindingsBulkReportResponse.prototype, "postTargetsTargetIdFindingsBulkReport401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdFindingsBulkReport404ApplicationJson)
    ], PostTargetsTargetIdFindingsBulkReportResponse.prototype, "postTargetsTargetIdFindingsBulkReport404ApplicationJSONObject", void 0);
    return PostTargetsTargetIdFindingsBulkReportResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdFindingsBulkReportResponse = PostTargetsTargetIdFindingsBulkReportResponse;

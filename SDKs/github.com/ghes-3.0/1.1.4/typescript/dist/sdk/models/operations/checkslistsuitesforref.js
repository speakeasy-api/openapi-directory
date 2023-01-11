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
exports.ChecksListSuitesForRefResponse = exports.ChecksListSuitesForRefRequest = exports.ChecksListSuitesForRef200ApplicationJson = exports.ChecksListSuitesForRefQueryParams = exports.ChecksListSuitesForRefPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ChecksListSuitesForRefPathParams = /** @class */ (function (_super) {
    __extends(ChecksListSuitesForRefPathParams, _super);
    function ChecksListSuitesForRefPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ChecksListSuitesForRefPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ref" }),
        __metadata("design:type", String)
    ], ChecksListSuitesForRefPathParams.prototype, "ref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ChecksListSuitesForRefPathParams.prototype, "repo", void 0);
    return ChecksListSuitesForRefPathParams;
}(utils_1.SpeakeasyBase));
exports.ChecksListSuitesForRefPathParams = ChecksListSuitesForRefPathParams;
var ChecksListSuitesForRefQueryParams = /** @class */ (function (_super) {
    __extends(ChecksListSuitesForRefQueryParams, _super);
    function ChecksListSuitesForRefQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=app_id" }),
        __metadata("design:type", Number)
    ], ChecksListSuitesForRefQueryParams.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=check_name" }),
        __metadata("design:type", String)
    ], ChecksListSuitesForRefQueryParams.prototype, "checkName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ChecksListSuitesForRefQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ChecksListSuitesForRefQueryParams.prototype, "perPage", void 0);
    return ChecksListSuitesForRefQueryParams;
}(utils_1.SpeakeasyBase));
exports.ChecksListSuitesForRefQueryParams = ChecksListSuitesForRefQueryParams;
var ChecksListSuitesForRef200ApplicationJson = /** @class */ (function (_super) {
    __extends(ChecksListSuitesForRef200ApplicationJson, _super);
    function ChecksListSuitesForRef200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=check_suites", elemType: shared.CheckSuite }),
        __metadata("design:type", Array)
    ], ChecksListSuitesForRef200ApplicationJson.prototype, "checkSuites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ChecksListSuitesForRef200ApplicationJson.prototype, "totalCount", void 0);
    return ChecksListSuitesForRef200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ChecksListSuitesForRef200ApplicationJson = ChecksListSuitesForRef200ApplicationJson;
var ChecksListSuitesForRefRequest = /** @class */ (function (_super) {
    __extends(ChecksListSuitesForRefRequest, _super);
    function ChecksListSuitesForRefRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChecksListSuitesForRefPathParams)
    ], ChecksListSuitesForRefRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChecksListSuitesForRefQueryParams)
    ], ChecksListSuitesForRefRequest.prototype, "queryParams", void 0);
    return ChecksListSuitesForRefRequest;
}(utils_1.SpeakeasyBase));
exports.ChecksListSuitesForRefRequest = ChecksListSuitesForRefRequest;
var ChecksListSuitesForRefResponse = /** @class */ (function (_super) {
    __extends(ChecksListSuitesForRefResponse, _super);
    function ChecksListSuitesForRefResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ChecksListSuitesForRefResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ChecksListSuitesForRefResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ChecksListSuitesForRefResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChecksListSuitesForRef200ApplicationJson)
    ], ChecksListSuitesForRefResponse.prototype, "checksListSuitesForRef200ApplicationJSONObject", void 0);
    return ChecksListSuitesForRefResponse;
}(utils_1.SpeakeasyBase));
exports.ChecksListSuitesForRefResponse = ChecksListSuitesForRefResponse;

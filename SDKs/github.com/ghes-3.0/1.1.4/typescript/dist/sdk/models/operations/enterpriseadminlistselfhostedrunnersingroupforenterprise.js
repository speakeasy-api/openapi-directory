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
exports.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse = exports.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest = exports.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson = exports.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams = exports.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams, _super);
    function EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams.prototype, "enterprise", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams.prototype, "runnerGroupId", void 0);
    return EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams = EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams;
var EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams, _super);
    function EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams.prototype, "perPage", void 0);
    return EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams = EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams;
var EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson, _super);
    function EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runners", elemType: shared.Runner }),
        __metadata("design:type", Array)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson.prototype, "runners", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson.prototype, "totalCount", void 0);
    return EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson = EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson;
var EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest, _super);
    function EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest.prototype, "queryParams", void 0);
    return EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest = EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest;
var EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse, _super);
    function EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson)
    ], EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse.prototype, "enterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject", void 0);
    return EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse = EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse;

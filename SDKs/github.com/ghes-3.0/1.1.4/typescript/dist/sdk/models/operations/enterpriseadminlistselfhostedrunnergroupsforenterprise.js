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
exports.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse = exports.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest = exports.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson = exports.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams = exports.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams, _super);
    function EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams.prototype, "enterprise", void 0);
    return EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams = EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams;
var EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams, _super);
    function EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams.prototype, "perPage", void 0);
    return EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams = EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams;
var EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson, _super);
    function EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runner_groups", elemType: shared.RunnerGroupsEnterprise }),
        __metadata("design:type", Array)
    ], EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson.prototype, "runnerGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson.prototype, "totalCount", void 0);
    return EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson = EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson;
var EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest, _super);
    function EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams)
    ], EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams)
    ], EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest.prototype, "queryParams", void 0);
    return EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest = EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest;
var EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse, _super);
    function EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson)
    ], EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse.prototype, "enterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject", void 0);
    return EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse = EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse;

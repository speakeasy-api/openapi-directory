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
exports.ActionsListSelfHostedRunnerGroupsForOrgResponse = exports.ActionsListSelfHostedRunnerGroupsForOrgRequest = exports.ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson = exports.ActionsListSelfHostedRunnerGroupsForOrgQueryParams = exports.ActionsListSelfHostedRunnerGroupsForOrgPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ActionsListSelfHostedRunnerGroupsForOrgPathParams = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnerGroupsForOrgPathParams, _super);
    function ActionsListSelfHostedRunnerGroupsForOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsListSelfHostedRunnerGroupsForOrgPathParams.prototype, "org", void 0);
    return ActionsListSelfHostedRunnerGroupsForOrgPathParams;
}(utils_1.SpeakeasyBase));
exports.ActionsListSelfHostedRunnerGroupsForOrgPathParams = ActionsListSelfHostedRunnerGroupsForOrgPathParams;
var ActionsListSelfHostedRunnerGroupsForOrgQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnerGroupsForOrgQueryParams, _super);
    function ActionsListSelfHostedRunnerGroupsForOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnerGroupsForOrgQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnerGroupsForOrgQueryParams.prototype, "perPage", void 0);
    return ActionsListSelfHostedRunnerGroupsForOrgQueryParams;
}(utils_1.SpeakeasyBase));
exports.ActionsListSelfHostedRunnerGroupsForOrgQueryParams = ActionsListSelfHostedRunnerGroupsForOrgQueryParams;
var ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson, _super);
    function ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runner_groups", elemType: shared.RunnerGroupsOrg }),
        __metadata("design:type", Array)
    ], ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson.prototype, "runnerGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson = ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson;
var ActionsListSelfHostedRunnerGroupsForOrgRequest = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnerGroupsForOrgRequest, _super);
    function ActionsListSelfHostedRunnerGroupsForOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActionsListSelfHostedRunnerGroupsForOrgPathParams)
    ], ActionsListSelfHostedRunnerGroupsForOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActionsListSelfHostedRunnerGroupsForOrgQueryParams)
    ], ActionsListSelfHostedRunnerGroupsForOrgRequest.prototype, "queryParams", void 0);
    return ActionsListSelfHostedRunnerGroupsForOrgRequest;
}(utils_1.SpeakeasyBase));
exports.ActionsListSelfHostedRunnerGroupsForOrgRequest = ActionsListSelfHostedRunnerGroupsForOrgRequest;
var ActionsListSelfHostedRunnerGroupsForOrgResponse = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnerGroupsForOrgResponse, _super);
    function ActionsListSelfHostedRunnerGroupsForOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ActionsListSelfHostedRunnerGroupsForOrgResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnerGroupsForOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson)
    ], ActionsListSelfHostedRunnerGroupsForOrgResponse.prototype, "actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject", void 0);
    return ActionsListSelfHostedRunnerGroupsForOrgResponse;
}(utils_1.SpeakeasyBase));
exports.ActionsListSelfHostedRunnerGroupsForOrgResponse = ActionsListSelfHostedRunnerGroupsForOrgResponse;

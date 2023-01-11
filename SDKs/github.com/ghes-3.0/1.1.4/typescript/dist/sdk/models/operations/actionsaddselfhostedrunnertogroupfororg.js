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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsAddSelfHostedRunnerToGroupForOrgResponse = exports.ActionsAddSelfHostedRunnerToGroupForOrgRequest = exports.ActionsAddSelfHostedRunnerToGroupForOrgPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ActionsAddSelfHostedRunnerToGroupForOrgPathParams = /** @class */ (function (_super) {
    __extends(ActionsAddSelfHostedRunnerToGroupForOrgPathParams, _super);
    function ActionsAddSelfHostedRunnerToGroupForOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsAddSelfHostedRunnerToGroupForOrgPathParams.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], ActionsAddSelfHostedRunnerToGroupForOrgPathParams.prototype, "runnerGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=runner_id" }),
        __metadata("design:type", Number)
    ], ActionsAddSelfHostedRunnerToGroupForOrgPathParams.prototype, "runnerId", void 0);
    return ActionsAddSelfHostedRunnerToGroupForOrgPathParams;
}(utils_1.SpeakeasyBase));
exports.ActionsAddSelfHostedRunnerToGroupForOrgPathParams = ActionsAddSelfHostedRunnerToGroupForOrgPathParams;
var ActionsAddSelfHostedRunnerToGroupForOrgRequest = /** @class */ (function (_super) {
    __extends(ActionsAddSelfHostedRunnerToGroupForOrgRequest, _super);
    function ActionsAddSelfHostedRunnerToGroupForOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActionsAddSelfHostedRunnerToGroupForOrgPathParams)
    ], ActionsAddSelfHostedRunnerToGroupForOrgRequest.prototype, "pathParams", void 0);
    return ActionsAddSelfHostedRunnerToGroupForOrgRequest;
}(utils_1.SpeakeasyBase));
exports.ActionsAddSelfHostedRunnerToGroupForOrgRequest = ActionsAddSelfHostedRunnerToGroupForOrgRequest;
var ActionsAddSelfHostedRunnerToGroupForOrgResponse = /** @class */ (function (_super) {
    __extends(ActionsAddSelfHostedRunnerToGroupForOrgResponse, _super);
    function ActionsAddSelfHostedRunnerToGroupForOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ActionsAddSelfHostedRunnerToGroupForOrgResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ActionsAddSelfHostedRunnerToGroupForOrgResponse.prototype, "statusCode", void 0);
    return ActionsAddSelfHostedRunnerToGroupForOrgResponse;
}(utils_1.SpeakeasyBase));
exports.ActionsAddSelfHostedRunnerToGroupForOrgResponse = ActionsAddSelfHostedRunnerToGroupForOrgResponse;

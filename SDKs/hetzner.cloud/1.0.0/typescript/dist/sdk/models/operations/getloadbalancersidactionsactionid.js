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
exports.GetLoadBalancersIdActionsActionIdResponse = exports.GetLoadBalancersIdActionsActionIdRequest = exports.GetLoadBalancersIdActionsActionIdActionResponse = exports.GetLoadBalancersIdActionsActionIdActionResponseAction = exports.GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum = exports.GetLoadBalancersIdActionsActionIdActionResponseActionResources = exports.GetLoadBalancersIdActionsActionIdActionResponseActionError = exports.GetLoadBalancersIdActionsActionIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetLoadBalancersIdActionsActionIdPathParams = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionIdPathParams, _super);
    function GetLoadBalancersIdActionsActionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=action_id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionIdPathParams.prototype, "actionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionIdPathParams.prototype, "id", void 0);
    return GetLoadBalancersIdActionsActionIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetLoadBalancersIdActionsActionIdPathParams = GetLoadBalancersIdActionsActionIdPathParams;
// GetLoadBalancersIdActionsActionIdActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetLoadBalancersIdActionsActionIdActionResponseActionError = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionIdActionResponseActionError, _super);
    function GetLoadBalancersIdActionsActionIdActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionIdActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionIdActionResponseActionError.prototype, "message", void 0);
    return GetLoadBalancersIdActionsActionIdActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.GetLoadBalancersIdActionsActionIdActionResponseActionError = GetLoadBalancersIdActionsActionIdActionResponseActionError;
var GetLoadBalancersIdActionsActionIdActionResponseActionResources = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionIdActionResponseActionResources, _super);
    function GetLoadBalancersIdActionsActionIdActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionIdActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionIdActionResponseActionResources.prototype, "type", void 0);
    return GetLoadBalancersIdActionsActionIdActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.GetLoadBalancersIdActionsActionIdActionResponseActionResources = GetLoadBalancersIdActionsActionIdActionResponseActionResources;
var GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum;
(function (GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum) {
    GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum["Success"] = "success";
    GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum["Running"] = "running";
    GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum["Error"] = "error";
})(GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum = exports.GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum || (exports.GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum = {}));
var GetLoadBalancersIdActionsActionIdActionResponseAction = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionIdActionResponseAction, _super);
    function GetLoadBalancersIdActionsActionIdActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionIdActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", GetLoadBalancersIdActionsActionIdActionResponseActionError)
    ], GetLoadBalancersIdActionsActionIdActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionIdActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionIdActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionIdActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: GetLoadBalancersIdActionsActionIdActionResponseActionResources }),
        __metadata("design:type", Array)
    ], GetLoadBalancersIdActionsActionIdActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionIdActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionIdActionResponseAction.prototype, "status", void 0);
    return GetLoadBalancersIdActionsActionIdActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.GetLoadBalancersIdActionsActionIdActionResponseAction = GetLoadBalancersIdActionsActionIdActionResponseAction;
var GetLoadBalancersIdActionsActionIdActionResponse = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionIdActionResponse, _super);
    function GetLoadBalancersIdActionsActionIdActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", GetLoadBalancersIdActionsActionIdActionResponseAction)
    ], GetLoadBalancersIdActionsActionIdActionResponse.prototype, "action", void 0);
    return GetLoadBalancersIdActionsActionIdActionResponse;
}(utils_1.SpeakeasyBase));
exports.GetLoadBalancersIdActionsActionIdActionResponse = GetLoadBalancersIdActionsActionIdActionResponse;
var GetLoadBalancersIdActionsActionIdRequest = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionIdRequest, _super);
    function GetLoadBalancersIdActionsActionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLoadBalancersIdActionsActionIdPathParams)
    ], GetLoadBalancersIdActionsActionIdRequest.prototype, "pathParams", void 0);
    return GetLoadBalancersIdActionsActionIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetLoadBalancersIdActionsActionIdRequest = GetLoadBalancersIdActionsActionIdRequest;
var GetLoadBalancersIdActionsActionIdResponse = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionIdResponse, _super);
    function GetLoadBalancersIdActionsActionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLoadBalancersIdActionsActionIdActionResponse)
    ], GetLoadBalancersIdActionsActionIdResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionIdResponse.prototype, "statusCode", void 0);
    return GetLoadBalancersIdActionsActionIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetLoadBalancersIdActionsActionIdResponse = GetLoadBalancersIdActionsActionIdResponse;

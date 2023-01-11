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
exports.GetFirewallsIdActionsActionIdResponse = exports.GetFirewallsIdActionsActionIdRequest = exports.GetFirewallsIdActionsActionIdActionResponse = exports.GetFirewallsIdActionsActionIdActionResponseAction = exports.GetFirewallsIdActionsActionIdActionResponseActionStatusEnum = exports.GetFirewallsIdActionsActionIdActionResponseActionResources = exports.GetFirewallsIdActionsActionIdActionResponseActionError = exports.GetFirewallsIdActionsActionIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetFirewallsIdActionsActionIdPathParams = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionIdPathParams, _super);
    function GetFirewallsIdActionsActionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=action_id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionIdPathParams.prototype, "actionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionIdPathParams.prototype, "id", void 0);
    return GetFirewallsIdActionsActionIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsIdActionsActionIdPathParams = GetFirewallsIdActionsActionIdPathParams;
// GetFirewallsIdActionsActionIdActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetFirewallsIdActionsActionIdActionResponseActionError = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionIdActionResponseActionError, _super);
    function GetFirewallsIdActionsActionIdActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionIdActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionIdActionResponseActionError.prototype, "message", void 0);
    return GetFirewallsIdActionsActionIdActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsIdActionsActionIdActionResponseActionError = GetFirewallsIdActionsActionIdActionResponseActionError;
var GetFirewallsIdActionsActionIdActionResponseActionResources = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionIdActionResponseActionResources, _super);
    function GetFirewallsIdActionsActionIdActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionIdActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionIdActionResponseActionResources.prototype, "type", void 0);
    return GetFirewallsIdActionsActionIdActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsIdActionsActionIdActionResponseActionResources = GetFirewallsIdActionsActionIdActionResponseActionResources;
var GetFirewallsIdActionsActionIdActionResponseActionStatusEnum;
(function (GetFirewallsIdActionsActionIdActionResponseActionStatusEnum) {
    GetFirewallsIdActionsActionIdActionResponseActionStatusEnum["Success"] = "success";
    GetFirewallsIdActionsActionIdActionResponseActionStatusEnum["Running"] = "running";
    GetFirewallsIdActionsActionIdActionResponseActionStatusEnum["Error"] = "error";
})(GetFirewallsIdActionsActionIdActionResponseActionStatusEnum = exports.GetFirewallsIdActionsActionIdActionResponseActionStatusEnum || (exports.GetFirewallsIdActionsActionIdActionResponseActionStatusEnum = {}));
var GetFirewallsIdActionsActionIdActionResponseAction = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionIdActionResponseAction, _super);
    function GetFirewallsIdActionsActionIdActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionIdActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", GetFirewallsIdActionsActionIdActionResponseActionError)
    ], GetFirewallsIdActionsActionIdActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionIdActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionIdActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionIdActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: GetFirewallsIdActionsActionIdActionResponseActionResources }),
        __metadata("design:type", Array)
    ], GetFirewallsIdActionsActionIdActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionIdActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionIdActionResponseAction.prototype, "status", void 0);
    return GetFirewallsIdActionsActionIdActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsIdActionsActionIdActionResponseAction = GetFirewallsIdActionsActionIdActionResponseAction;
var GetFirewallsIdActionsActionIdActionResponse = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionIdActionResponse, _super);
    function GetFirewallsIdActionsActionIdActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", GetFirewallsIdActionsActionIdActionResponseAction)
    ], GetFirewallsIdActionsActionIdActionResponse.prototype, "action", void 0);
    return GetFirewallsIdActionsActionIdActionResponse;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsIdActionsActionIdActionResponse = GetFirewallsIdActionsActionIdActionResponse;
var GetFirewallsIdActionsActionIdRequest = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionIdRequest, _super);
    function GetFirewallsIdActionsActionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFirewallsIdActionsActionIdPathParams)
    ], GetFirewallsIdActionsActionIdRequest.prototype, "pathParams", void 0);
    return GetFirewallsIdActionsActionIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsIdActionsActionIdRequest = GetFirewallsIdActionsActionIdRequest;
var GetFirewallsIdActionsActionIdResponse = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionIdResponse, _super);
    function GetFirewallsIdActionsActionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFirewallsIdActionsActionIdActionResponse)
    ], GetFirewallsIdActionsActionIdResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionIdResponse.prototype, "statusCode", void 0);
    return GetFirewallsIdActionsActionIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsIdActionsActionIdResponse = GetFirewallsIdActionsActionIdResponse;

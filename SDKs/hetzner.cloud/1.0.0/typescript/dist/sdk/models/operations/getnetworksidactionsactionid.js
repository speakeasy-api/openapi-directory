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
exports.GetNetworksIdActionsActionIdResponse = exports.GetNetworksIdActionsActionIdRequest = exports.GetNetworksIdActionsActionIdActionResponse = exports.GetNetworksIdActionsActionIdActionResponseAction = exports.GetNetworksIdActionsActionIdActionResponseActionStatusEnum = exports.GetNetworksIdActionsActionIdActionResponseActionResources = exports.GetNetworksIdActionsActionIdActionResponseActionError = exports.GetNetworksIdActionsActionIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworksIdActionsActionIdPathParams = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionIdPathParams, _super);
    function GetNetworksIdActionsActionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=action_id" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionIdPathParams.prototype, "actionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionIdPathParams.prototype, "id", void 0);
    return GetNetworksIdActionsActionIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworksIdActionsActionIdPathParams = GetNetworksIdActionsActionIdPathParams;
// GetNetworksIdActionsActionIdActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetNetworksIdActionsActionIdActionResponseActionError = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionIdActionResponseActionError, _super);
    function GetNetworksIdActionsActionIdActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionIdActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionIdActionResponseActionError.prototype, "message", void 0);
    return GetNetworksIdActionsActionIdActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.GetNetworksIdActionsActionIdActionResponseActionError = GetNetworksIdActionsActionIdActionResponseActionError;
var GetNetworksIdActionsActionIdActionResponseActionResources = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionIdActionResponseActionResources, _super);
    function GetNetworksIdActionsActionIdActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionIdActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionIdActionResponseActionResources.prototype, "type", void 0);
    return GetNetworksIdActionsActionIdActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.GetNetworksIdActionsActionIdActionResponseActionResources = GetNetworksIdActionsActionIdActionResponseActionResources;
var GetNetworksIdActionsActionIdActionResponseActionStatusEnum;
(function (GetNetworksIdActionsActionIdActionResponseActionStatusEnum) {
    GetNetworksIdActionsActionIdActionResponseActionStatusEnum["Success"] = "success";
    GetNetworksIdActionsActionIdActionResponseActionStatusEnum["Running"] = "running";
    GetNetworksIdActionsActionIdActionResponseActionStatusEnum["Error"] = "error";
})(GetNetworksIdActionsActionIdActionResponseActionStatusEnum = exports.GetNetworksIdActionsActionIdActionResponseActionStatusEnum || (exports.GetNetworksIdActionsActionIdActionResponseActionStatusEnum = {}));
var GetNetworksIdActionsActionIdActionResponseAction = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionIdActionResponseAction, _super);
    function GetNetworksIdActionsActionIdActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionIdActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", GetNetworksIdActionsActionIdActionResponseActionError)
    ], GetNetworksIdActionsActionIdActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionIdActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionIdActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionIdActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: GetNetworksIdActionsActionIdActionResponseActionResources }),
        __metadata("design:type", Array)
    ], GetNetworksIdActionsActionIdActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionIdActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionIdActionResponseAction.prototype, "status", void 0);
    return GetNetworksIdActionsActionIdActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.GetNetworksIdActionsActionIdActionResponseAction = GetNetworksIdActionsActionIdActionResponseAction;
var GetNetworksIdActionsActionIdActionResponse = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionIdActionResponse, _super);
    function GetNetworksIdActionsActionIdActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", GetNetworksIdActionsActionIdActionResponseAction)
    ], GetNetworksIdActionsActionIdActionResponse.prototype, "action", void 0);
    return GetNetworksIdActionsActionIdActionResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworksIdActionsActionIdActionResponse = GetNetworksIdActionsActionIdActionResponse;
var GetNetworksIdActionsActionIdRequest = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionIdRequest, _super);
    function GetNetworksIdActionsActionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworksIdActionsActionIdPathParams)
    ], GetNetworksIdActionsActionIdRequest.prototype, "pathParams", void 0);
    return GetNetworksIdActionsActionIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworksIdActionsActionIdRequest = GetNetworksIdActionsActionIdRequest;
var GetNetworksIdActionsActionIdResponse = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionIdResponse, _super);
    function GetNetworksIdActionsActionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworksIdActionsActionIdActionResponse)
    ], GetNetworksIdActionsActionIdResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionIdResponse.prototype, "statusCode", void 0);
    return GetNetworksIdActionsActionIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworksIdActionsActionIdResponse = GetNetworksIdActionsActionIdResponse;

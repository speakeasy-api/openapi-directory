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
exports.UpdateTaskActionsResponse = exports.UpdateTaskActionsRequest = exports.UpdateTaskActionsSecurity = exports.UpdateTaskActionsUpdateTaskActionsRequest = exports.UpdateTaskActionsPathParams = exports.UpdateTaskActionsServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateTaskActionsServerList = [
    "https://autopilot.twilio.com",
];
var UpdateTaskActionsPathParams = /** @class */ (function (_super) {
    __extends(UpdateTaskActionsPathParams, _super);
    function UpdateTaskActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateTaskActionsPathParams.prototype, "assistantSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], UpdateTaskActionsPathParams.prototype, "taskSid", void 0);
    return UpdateTaskActionsPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskActionsPathParams = UpdateTaskActionsPathParams;
var UpdateTaskActionsUpdateTaskActionsRequest = /** @class */ (function (_super) {
    __extends(UpdateTaskActionsUpdateTaskActionsRequest, _super);
    function UpdateTaskActionsUpdateTaskActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Actions;" }),
        __metadata("design:type", Object)
    ], UpdateTaskActionsUpdateTaskActionsRequest.prototype, "actions", void 0);
    return UpdateTaskActionsUpdateTaskActionsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskActionsUpdateTaskActionsRequest = UpdateTaskActionsUpdateTaskActionsRequest;
var UpdateTaskActionsSecurity = /** @class */ (function (_super) {
    __extends(UpdateTaskActionsSecurity, _super);
    function UpdateTaskActionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateTaskActionsSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateTaskActionsSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskActionsSecurity = UpdateTaskActionsSecurity;
var UpdateTaskActionsRequest = /** @class */ (function (_super) {
    __extends(UpdateTaskActionsRequest, _super);
    function UpdateTaskActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateTaskActionsRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTaskActionsPathParams)
    ], UpdateTaskActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateTaskActionsUpdateTaskActionsRequest)
    ], UpdateTaskActionsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTaskActionsSecurity)
    ], UpdateTaskActionsRequest.prototype, "security", void 0);
    return UpdateTaskActionsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskActionsRequest = UpdateTaskActionsRequest;
var UpdateTaskActionsResponse = /** @class */ (function (_super) {
    __extends(UpdateTaskActionsResponse, _super);
    function UpdateTaskActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateTaskActionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateTaskActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AutopilotV1AssistantTaskTaskActions)
    ], UpdateTaskActionsResponse.prototype, "autopilotV1AssistantTaskTaskActions", void 0);
    return UpdateTaskActionsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskActionsResponse = UpdateTaskActionsResponse;

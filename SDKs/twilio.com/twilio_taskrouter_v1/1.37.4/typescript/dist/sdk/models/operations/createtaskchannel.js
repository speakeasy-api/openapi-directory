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
exports.CreateTaskChannelResponse = exports.CreateTaskChannelRequest = exports.CreateTaskChannelSecurity = exports.CreateTaskChannelCreateTaskChannelRequest = exports.CreateTaskChannelPathParams = exports.CreateTaskChannelServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateTaskChannelServerList = [
    "https://taskrouter.twilio.com",
];
var CreateTaskChannelPathParams = /** @class */ (function (_super) {
    __extends(CreateTaskChannelPathParams, _super);
    function CreateTaskChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], CreateTaskChannelPathParams.prototype, "workspaceSid", void 0);
    return CreateTaskChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateTaskChannelPathParams = CreateTaskChannelPathParams;
var CreateTaskChannelCreateTaskChannelRequest = /** @class */ (function (_super) {
    __extends(CreateTaskChannelCreateTaskChannelRequest, _super);
    function CreateTaskChannelCreateTaskChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ChannelOptimizedRouting;" }),
        __metadata("design:type", Boolean)
    ], CreateTaskChannelCreateTaskChannelRequest.prototype, "channelOptimizedRouting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateTaskChannelCreateTaskChannelRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateTaskChannelCreateTaskChannelRequest.prototype, "uniqueName", void 0);
    return CreateTaskChannelCreateTaskChannelRequest;
}(utils_1.SpeakeasyBase));
exports.CreateTaskChannelCreateTaskChannelRequest = CreateTaskChannelCreateTaskChannelRequest;
var CreateTaskChannelSecurity = /** @class */ (function (_super) {
    __extends(CreateTaskChannelSecurity, _super);
    function CreateTaskChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTaskChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTaskChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateTaskChannelSecurity = CreateTaskChannelSecurity;
var CreateTaskChannelRequest = /** @class */ (function (_super) {
    __extends(CreateTaskChannelRequest, _super);
    function CreateTaskChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateTaskChannelRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTaskChannelPathParams)
    ], CreateTaskChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTaskChannelCreateTaskChannelRequest)
    ], CreateTaskChannelRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTaskChannelSecurity)
    ], CreateTaskChannelRequest.prototype, "security", void 0);
    return CreateTaskChannelRequest;
}(utils_1.SpeakeasyBase));
exports.CreateTaskChannelRequest = CreateTaskChannelRequest;
var CreateTaskChannelResponse = /** @class */ (function (_super) {
    __extends(CreateTaskChannelResponse, _super);
    function CreateTaskChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateTaskChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateTaskChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTaskChannel)
    ], CreateTaskChannelResponse.prototype, "taskrouterV1WorkspaceTaskChannel", void 0);
    return CreateTaskChannelResponse;
}(utils_1.SpeakeasyBase));
exports.CreateTaskChannelResponse = CreateTaskChannelResponse;

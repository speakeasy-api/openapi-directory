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
exports.CreateActivityResponse = exports.CreateActivityRequest = exports.CreateActivitySecurity = exports.CreateActivityCreateActivityRequest = exports.CreateActivityPathParams = exports.CreateActivityServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateActivityServerList = [
    "https://taskrouter.twilio.com",
];
var CreateActivityPathParams = /** @class */ (function (_super) {
    __extends(CreateActivityPathParams, _super);
    function CreateActivityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], CreateActivityPathParams.prototype, "workspaceSid", void 0);
    return CreateActivityPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateActivityPathParams = CreateActivityPathParams;
var CreateActivityCreateActivityRequest = /** @class */ (function (_super) {
    __extends(CreateActivityCreateActivityRequest, _super);
    function CreateActivityCreateActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Available;" }),
        __metadata("design:type", Boolean)
    ], CreateActivityCreateActivityRequest.prototype, "available", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateActivityCreateActivityRequest.prototype, "friendlyName", void 0);
    return CreateActivityCreateActivityRequest;
}(utils_1.SpeakeasyBase));
exports.CreateActivityCreateActivityRequest = CreateActivityCreateActivityRequest;
var CreateActivitySecurity = /** @class */ (function (_super) {
    __extends(CreateActivitySecurity, _super);
    function CreateActivitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateActivitySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateActivitySecurity;
}(utils_1.SpeakeasyBase));
exports.CreateActivitySecurity = CreateActivitySecurity;
var CreateActivityRequest = /** @class */ (function (_super) {
    __extends(CreateActivityRequest, _super);
    function CreateActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateActivityRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateActivityPathParams)
    ], CreateActivityRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateActivityCreateActivityRequest)
    ], CreateActivityRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateActivitySecurity)
    ], CreateActivityRequest.prototype, "security", void 0);
    return CreateActivityRequest;
}(utils_1.SpeakeasyBase));
exports.CreateActivityRequest = CreateActivityRequest;
var CreateActivityResponse = /** @class */ (function (_super) {
    __extends(CreateActivityResponse, _super);
    function CreateActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateActivityResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateActivityResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceActivity)
    ], CreateActivityResponse.prototype, "taskrouterV1WorkspaceActivity", void 0);
    return CreateActivityResponse;
}(utils_1.SpeakeasyBase));
exports.CreateActivityResponse = CreateActivityResponse;

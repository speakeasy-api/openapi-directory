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
exports.UpdateActivityResponse = exports.UpdateActivityRequest = exports.UpdateActivitySecurity = exports.UpdateActivityUpdateActivityRequest = exports.UpdateActivityPathParams = exports.UpdateActivityServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateActivityServerList = [
    "https://taskrouter.twilio.com",
];
var UpdateActivityPathParams = /** @class */ (function (_super) {
    __extends(UpdateActivityPathParams, _super);
    function UpdateActivityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateActivityPathParams.prototype, "sid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], UpdateActivityPathParams.prototype, "workspaceSid", void 0);
    return UpdateActivityPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateActivityPathParams = UpdateActivityPathParams;
var UpdateActivityUpdateActivityRequest = /** @class */ (function (_super) {
    __extends(UpdateActivityUpdateActivityRequest, _super);
    function UpdateActivityUpdateActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateActivityUpdateActivityRequest.prototype, "friendlyName", void 0);
    return UpdateActivityUpdateActivityRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateActivityUpdateActivityRequest = UpdateActivityUpdateActivityRequest;
var UpdateActivitySecurity = /** @class */ (function (_super) {
    __extends(UpdateActivitySecurity, _super);
    function UpdateActivitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateActivitySecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateActivitySecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateActivitySecurity = UpdateActivitySecurity;
var UpdateActivityRequest = /** @class */ (function (_super) {
    __extends(UpdateActivityRequest, _super);
    function UpdateActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActivityRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateActivityPathParams)
    ], UpdateActivityRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateActivityUpdateActivityRequest)
    ], UpdateActivityRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateActivitySecurity)
    ], UpdateActivityRequest.prototype, "security", void 0);
    return UpdateActivityRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateActivityRequest = UpdateActivityRequest;
var UpdateActivityResponse = /** @class */ (function (_super) {
    __extends(UpdateActivityResponse, _super);
    function UpdateActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActivityResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateActivityResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceActivity)
    ], UpdateActivityResponse.prototype, "taskrouterV1WorkspaceActivity", void 0);
    return UpdateActivityResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateActivityResponse = UpdateActivityResponse;

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
exports.UpdateTaskResponse = exports.UpdateTaskRequest = exports.UpdateTaskSecurity = exports.UpdateTaskUpdateTaskRequest = exports.UpdateTaskHeaders = exports.UpdateTaskPathParams = exports.UpdateTaskServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateTaskServerList = [
    "https://taskrouter.twilio.com",
];
var UpdateTaskPathParams = /** @class */ (function (_super) {
    __extends(UpdateTaskPathParams, _super);
    function UpdateTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateTaskPathParams.prototype, "sid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], UpdateTaskPathParams.prototype, "workspaceSid", void 0);
    return UpdateTaskPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskPathParams = UpdateTaskPathParams;
var UpdateTaskHeaders = /** @class */ (function (_super) {
    __extends(UpdateTaskHeaders, _super);
    function UpdateTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateTaskHeaders.prototype, "ifMatch", void 0);
    return UpdateTaskHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskHeaders = UpdateTaskHeaders;
var UpdateTaskUpdateTaskRequest = /** @class */ (function (_super) {
    __extends(UpdateTaskUpdateTaskRequest, _super);
    function UpdateTaskUpdateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=AssignmentStatus;" }),
        __metadata("design:type", String)
    ], UpdateTaskUpdateTaskRequest.prototype, "assignmentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateTaskUpdateTaskRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Priority;" }),
        __metadata("design:type", Number)
    ], UpdateTaskUpdateTaskRequest.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Reason;" }),
        __metadata("design:type", String)
    ], UpdateTaskUpdateTaskRequest.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=TaskChannel;" }),
        __metadata("design:type", String)
    ], UpdateTaskUpdateTaskRequest.prototype, "taskChannel", void 0);
    return UpdateTaskUpdateTaskRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskUpdateTaskRequest = UpdateTaskUpdateTaskRequest;
var UpdateTaskSecurity = /** @class */ (function (_super) {
    __extends(UpdateTaskSecurity, _super);
    function UpdateTaskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateTaskSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateTaskSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskSecurity = UpdateTaskSecurity;
var UpdateTaskRequest = /** @class */ (function (_super) {
    __extends(UpdateTaskRequest, _super);
    function UpdateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateTaskRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTaskPathParams)
    ], UpdateTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTaskHeaders)
    ], UpdateTaskRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateTaskUpdateTaskRequest)
    ], UpdateTaskRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTaskSecurity)
    ], UpdateTaskRequest.prototype, "security", void 0);
    return UpdateTaskRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskRequest = UpdateTaskRequest;
var UpdateTaskResponse = /** @class */ (function (_super) {
    __extends(UpdateTaskResponse, _super);
    function UpdateTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateTaskResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTask)
    ], UpdateTaskResponse.prototype, "taskrouterV1WorkspaceTask", void 0);
    return UpdateTaskResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskResponse = UpdateTaskResponse;

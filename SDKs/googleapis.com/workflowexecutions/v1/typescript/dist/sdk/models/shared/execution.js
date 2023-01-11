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
exports.ExecutionInput = exports.Execution = exports.ExecutionStateEnum = exports.ExecutionCallLogLevelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var error_1 = require("./error");
var status_1 = require("./status");
var ExecutionCallLogLevelEnum;
(function (ExecutionCallLogLevelEnum) {
    ExecutionCallLogLevelEnum["CallLogLevelUnspecified"] = "CALL_LOG_LEVEL_UNSPECIFIED";
    ExecutionCallLogLevelEnum["LogAllCalls"] = "LOG_ALL_CALLS";
    ExecutionCallLogLevelEnum["LogErrorsOnly"] = "LOG_ERRORS_ONLY";
})(ExecutionCallLogLevelEnum = exports.ExecutionCallLogLevelEnum || (exports.ExecutionCallLogLevelEnum = {}));
var ExecutionStateEnum;
(function (ExecutionStateEnum) {
    ExecutionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ExecutionStateEnum["Active"] = "ACTIVE";
    ExecutionStateEnum["Succeeded"] = "SUCCEEDED";
    ExecutionStateEnum["Failed"] = "FAILED";
    ExecutionStateEnum["Cancelled"] = "CANCELLED";
})(ExecutionStateEnum = exports.ExecutionStateEnum || (exports.ExecutionStateEnum = {}));
// Execution
/**
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows).
**/
var Execution = /** @class */ (function (_super) {
    __extends(Execution, _super);
    function Execution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=argument" }),
        __metadata("design:type", String)
    ], Execution.prototype, "argument", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callLogLevel" }),
        __metadata("design:type", String)
    ], Execution.prototype, "callLogLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Execution.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", error_1.ErrorT)
    ], Execution.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Execution.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], Execution.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Execution.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Execution.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", status_1.Status)
    ], Execution.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowRevisionId" }),
        __metadata("design:type", String)
    ], Execution.prototype, "workflowRevisionId", void 0);
    return Execution;
}(utils_1.SpeakeasyBase));
exports.Execution = Execution;
// ExecutionInput
/**
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows).
**/
var ExecutionInput = /** @class */ (function (_super) {
    __extends(ExecutionInput, _super);
    function ExecutionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=argument" }),
        __metadata("design:type", String)
    ], ExecutionInput.prototype, "argument", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callLogLevel" }),
        __metadata("design:type", String)
    ], ExecutionInput.prototype, "callLogLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", error_1.ErrorT)
    ], ExecutionInput.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", status_1.Status)
    ], ExecutionInput.prototype, "status", void 0);
    return ExecutionInput;
}(utils_1.SpeakeasyBase));
exports.ExecutionInput = ExecutionInput;

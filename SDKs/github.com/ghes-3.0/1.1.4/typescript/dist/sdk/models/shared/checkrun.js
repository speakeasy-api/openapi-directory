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
exports.CheckRun = exports.CheckRunStatusEnum = exports.CheckRunOutput = exports.CheckRunConclusionEnum = exports.CheckRunCheckSuite = void 0;
var utils_1 = require("../../../internal/utils");
var deploymentsimple_1 = require("./deploymentsimple");
var CheckRunCheckSuite = /** @class */ (function (_super) {
    __extends(CheckRunCheckSuite, _super);
    function CheckRunCheckSuite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CheckRunCheckSuite.prototype, "id", void 0);
    return CheckRunCheckSuite;
}(utils_1.SpeakeasyBase));
exports.CheckRunCheckSuite = CheckRunCheckSuite;
var CheckRunConclusionEnum;
(function (CheckRunConclusionEnum) {
    CheckRunConclusionEnum["Success"] = "success";
    CheckRunConclusionEnum["Failure"] = "failure";
    CheckRunConclusionEnum["Neutral"] = "neutral";
    CheckRunConclusionEnum["Cancelled"] = "cancelled";
    CheckRunConclusionEnum["Skipped"] = "skipped";
    CheckRunConclusionEnum["TimedOut"] = "timed_out";
    CheckRunConclusionEnum["ActionRequired"] = "action_required";
})(CheckRunConclusionEnum = exports.CheckRunConclusionEnum || (exports.CheckRunConclusionEnum = {}));
var CheckRunOutput = /** @class */ (function (_super) {
    __extends(CheckRunOutput, _super);
    function CheckRunOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotations_count" }),
        __metadata("design:type", Number)
    ], CheckRunOutput.prototype, "annotationsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotations_url" }),
        __metadata("design:type", String)
    ], CheckRunOutput.prototype, "annotationsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], CheckRunOutput.prototype, "summary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], CheckRunOutput.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CheckRunOutput.prototype, "title", void 0);
    return CheckRunOutput;
}(utils_1.SpeakeasyBase));
exports.CheckRunOutput = CheckRunOutput;
var CheckRunStatusEnum;
(function (CheckRunStatusEnum) {
    CheckRunStatusEnum["Queued"] = "queued";
    CheckRunStatusEnum["InProgress"] = "in_progress";
    CheckRunStatusEnum["Completed"] = "completed";
})(CheckRunStatusEnum = exports.CheckRunStatusEnum || (exports.CheckRunStatusEnum = {}));
// CheckRun
/**
 * A check performed on the code of a given code change
**/
var CheckRun = /** @class */ (function (_super) {
    __extends(CheckRun, _super);
    function CheckRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app" }),
        __metadata("design:type", Object)
    ], CheckRun.prototype, "app", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=check_suite" }),
        __metadata("design:type", CheckRunCheckSuite)
    ], CheckRun.prototype, "checkSuite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], CheckRun.prototype, "completedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conclusion" }),
        __metadata("design:type", String)
    ], CheckRun.prototype, "conclusion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deployment" }),
        __metadata("design:type", deploymentsimple_1.DeploymentSimple)
    ], CheckRun.prototype, "deployment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details_url" }),
        __metadata("design:type", String)
    ], CheckRun.prototype, "detailsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_id" }),
        __metadata("design:type", String)
    ], CheckRun.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=head_sha" }),
        __metadata("design:type", String)
    ], CheckRun.prototype, "headSha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CheckRun.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CheckRun.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CheckRun.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], CheckRun.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=output" }),
        __metadata("design:type", CheckRunOutput)
    ], CheckRun.prototype, "output", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pull_requests" }),
        __metadata("design:type", Object)
    ], CheckRun.prototype, "pullRequests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started_at" }),
        __metadata("design:type", Date)
    ], CheckRun.prototype, "startedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CheckRun.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CheckRun.prototype, "url", void 0);
    return CheckRun;
}(utils_1.SpeakeasyBase));
exports.CheckRun = CheckRun;

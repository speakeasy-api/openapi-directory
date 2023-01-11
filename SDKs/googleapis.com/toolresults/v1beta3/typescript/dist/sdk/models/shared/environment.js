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
exports.Environment = void 0;
var utils_1 = require("../../../internal/utils");
var timestamp_1 = require("./timestamp");
var environmentdimensionvalueentry_1 = require("./environmentdimensionvalueentry");
var mergedresult_1 = require("./mergedresult");
var resultsstorage_1 = require("./resultsstorage");
var shardsummary_1 = require("./shardsummary");
// Environment
/**
 * An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).
**/
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completionTime" }),
        __metadata("design:type", timestamp_1.Timestamp)
    ], Environment.prototype, "completionTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationTime" }),
        __metadata("design:type", timestamp_1.Timestamp)
    ], Environment.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensionValue", elemType: environmentdimensionvalueentry_1.EnvironmentDimensionValueEntry }),
        __metadata("design:type", Array)
    ], Environment.prototype, "dimensionValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Environment.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environmentId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "environmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environmentResult" }),
        __metadata("design:type", mergedresult_1.MergedResult)
    ], Environment.prototype, "environmentResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executionId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "executionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=historyId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "historyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultsStorage" }),
        __metadata("design:type", resultsstorage_1.ResultsStorage)
    ], Environment.prototype, "resultsStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shardSummaries", elemType: shardsummary_1.ShardSummary }),
        __metadata("design:type", Array)
    ], Environment.prototype, "shardSummaries", void 0);
    return Environment;
}(utils_1.SpeakeasyBase));
exports.Environment = Environment;

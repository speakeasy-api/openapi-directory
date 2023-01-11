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
exports.DiscoveryOccurrence = exports.DiscoveryOccurrenceContinuousAnalysisEnum = exports.DiscoveryOccurrenceAnalysisStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var analysiscompleted_1 = require("./analysiscompleted");
var status_1 = require("./status");
var DiscoveryOccurrenceAnalysisStatusEnum;
(function (DiscoveryOccurrenceAnalysisStatusEnum) {
    DiscoveryOccurrenceAnalysisStatusEnum["AnalysisStatusUnspecified"] = "ANALYSIS_STATUS_UNSPECIFIED";
    DiscoveryOccurrenceAnalysisStatusEnum["Pending"] = "PENDING";
    DiscoveryOccurrenceAnalysisStatusEnum["Scanning"] = "SCANNING";
    DiscoveryOccurrenceAnalysisStatusEnum["FinishedSuccess"] = "FINISHED_SUCCESS";
    DiscoveryOccurrenceAnalysisStatusEnum["Complete"] = "COMPLETE";
    DiscoveryOccurrenceAnalysisStatusEnum["FinishedFailed"] = "FINISHED_FAILED";
    DiscoveryOccurrenceAnalysisStatusEnum["FinishedUnsupported"] = "FINISHED_UNSUPPORTED";
})(DiscoveryOccurrenceAnalysisStatusEnum = exports.DiscoveryOccurrenceAnalysisStatusEnum || (exports.DiscoveryOccurrenceAnalysisStatusEnum = {}));
var DiscoveryOccurrenceContinuousAnalysisEnum;
(function (DiscoveryOccurrenceContinuousAnalysisEnum) {
    DiscoveryOccurrenceContinuousAnalysisEnum["ContinuousAnalysisUnspecified"] = "CONTINUOUS_ANALYSIS_UNSPECIFIED";
    DiscoveryOccurrenceContinuousAnalysisEnum["Active"] = "ACTIVE";
    DiscoveryOccurrenceContinuousAnalysisEnum["Inactive"] = "INACTIVE";
})(DiscoveryOccurrenceContinuousAnalysisEnum = exports.DiscoveryOccurrenceContinuousAnalysisEnum || (exports.DiscoveryOccurrenceContinuousAnalysisEnum = {}));
// DiscoveryOccurrence
/**
 * Provides information about the analysis status of a discovered resource.
**/
var DiscoveryOccurrence = /** @class */ (function (_super) {
    __extends(DiscoveryOccurrence, _super);
    function DiscoveryOccurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analysisCompleted" }),
        __metadata("design:type", analysiscompleted_1.AnalysisCompleted)
    ], DiscoveryOccurrence.prototype, "analysisCompleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analysisError", elemType: status_1.Status }),
        __metadata("design:type", Array)
    ], DiscoveryOccurrence.prototype, "analysisError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analysisStatus" }),
        __metadata("design:type", String)
    ], DiscoveryOccurrence.prototype, "analysisStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analysisStatusError" }),
        __metadata("design:type", status_1.Status)
    ], DiscoveryOccurrence.prototype, "analysisStatusError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archiveTime" }),
        __metadata("design:type", String)
    ], DiscoveryOccurrence.prototype, "archiveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=continuousAnalysis" }),
        __metadata("design:type", String)
    ], DiscoveryOccurrence.prototype, "continuousAnalysis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpe" }),
        __metadata("design:type", String)
    ], DiscoveryOccurrence.prototype, "cpe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastScanTime" }),
        __metadata("design:type", String)
    ], DiscoveryOccurrence.prototype, "lastScanTime", void 0);
    return DiscoveryOccurrence;
}(utils_1.SpeakeasyBase));
exports.DiscoveryOccurrence = DiscoveryOccurrence;

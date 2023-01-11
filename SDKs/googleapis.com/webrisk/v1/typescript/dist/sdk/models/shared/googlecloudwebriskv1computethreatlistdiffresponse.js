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
exports.GoogleCloudWebriskV1ComputeThreatListDiffResponse = exports.GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudwebriskv1threatentryadditions_1 = require("./googlecloudwebriskv1threatentryadditions");
var googlecloudwebriskv1computethreatlistdiffresponsechecksum_1 = require("./googlecloudwebriskv1computethreatlistdiffresponsechecksum");
var googlecloudwebriskv1threatentryremovals_1 = require("./googlecloudwebriskv1threatentryremovals");
var GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum;
(function (GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum) {
    GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum["ResponseTypeUnspecified"] = "RESPONSE_TYPE_UNSPECIFIED";
    GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum["Diff"] = "DIFF";
    GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum["Reset"] = "RESET";
})(GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum = exports.GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum || (exports.GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum = {}));
var GoogleCloudWebriskV1ComputeThreatListDiffResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudWebriskV1ComputeThreatListDiffResponse, _super);
    function GoogleCloudWebriskV1ComputeThreatListDiffResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additions" }),
        __metadata("design:type", googlecloudwebriskv1threatentryadditions_1.GoogleCloudWebriskV1ThreatEntryAdditions)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "additions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=checksum" }),
        __metadata("design:type", googlecloudwebriskv1computethreatlistdiffresponsechecksum_1.GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "checksum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newVersionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "newVersionToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommendedNextDiff" }),
        __metadata("design:type", String)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "recommendedNextDiff", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=removals" }),
        __metadata("design:type", googlecloudwebriskv1threatentryremovals_1.GoogleCloudWebriskV1ThreatEntryRemovals)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "removals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=responseType" }),
        __metadata("design:type", String)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "responseType", void 0);
    return GoogleCloudWebriskV1ComputeThreatListDiffResponse;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudWebriskV1ComputeThreatListDiffResponse = GoogleCloudWebriskV1ComputeThreatListDiffResponse;

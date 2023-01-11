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
exports.GroupCoverageResult = exports.GroupCoverageResultLineOfCoverageEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GroupCoverageResultLineOfCoverageEnum;
(function (GroupCoverageResultLineOfCoverageEnum) {
    GroupCoverageResultLineOfCoverageEnum["Accident"] = "accident";
    GroupCoverageResultLineOfCoverageEnum["Add"] = "add";
    GroupCoverageResultLineOfCoverageEnum["Cancer"] = "cancer";
    GroupCoverageResultLineOfCoverageEnum["CriticalIllness"] = "critical_illness";
    GroupCoverageResultLineOfCoverageEnum["Dental"] = "dental";
    GroupCoverageResultLineOfCoverageEnum["HospitalIndemnity"] = "hospital_indemnity";
    GroupCoverageResultLineOfCoverageEnum["Life"] = "life";
    GroupCoverageResultLineOfCoverageEnum["Ltd"] = "ltd";
    GroupCoverageResultLineOfCoverageEnum["Medical"] = "medical";
    GroupCoverageResultLineOfCoverageEnum["Std"] = "std";
    GroupCoverageResultLineOfCoverageEnum["Vision"] = "vision";
})(GroupCoverageResultLineOfCoverageEnum = exports.GroupCoverageResultLineOfCoverageEnum || (exports.GroupCoverageResultLineOfCoverageEnum = {}));
var GroupCoverageResult = /** @class */ (function (_super) {
    __extends(GroupCoverageResult, _super);
    function GroupCoverageResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=application_id" }),
        __metadata("design:type", String)
    ], GroupCoverageResult.prototype, "applicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], GroupCoverageResult.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=existing_coverage" }),
        __metadata("design:type", Boolean)
    ], GroupCoverageResult.prototype, "existingCoverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GroupCoverageResult.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=line_of_coverage" }),
        __metadata("design:type", String)
    ], GroupCoverageResult.prototype, "lineOfCoverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], GroupCoverageResult.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], GroupCoverageResult.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requested_effective_date" }),
        __metadata("design:type", Date)
    ], GroupCoverageResult.prototype, "requestedEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], GroupCoverageResult.prototype, "version", void 0);
    return GroupCoverageResult;
}(utils_1.SpeakeasyBase));
exports.GroupCoverageResult = GroupCoverageResult;

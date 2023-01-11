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
exports.GroupCoverageCreateRequest = exports.GroupCoverageCreateRequestLineOfCoverageEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GroupCoverageCreateRequestLineOfCoverageEnum;
(function (GroupCoverageCreateRequestLineOfCoverageEnum) {
    GroupCoverageCreateRequestLineOfCoverageEnum["Accident"] = "accident";
    GroupCoverageCreateRequestLineOfCoverageEnum["Add"] = "add";
    GroupCoverageCreateRequestLineOfCoverageEnum["Cancer"] = "cancer";
    GroupCoverageCreateRequestLineOfCoverageEnum["CriticalIllness"] = "critical_illness";
    GroupCoverageCreateRequestLineOfCoverageEnum["Dental"] = "dental";
    GroupCoverageCreateRequestLineOfCoverageEnum["HospitalIndemnity"] = "hospital_indemnity";
    GroupCoverageCreateRequestLineOfCoverageEnum["Life"] = "life";
    GroupCoverageCreateRequestLineOfCoverageEnum["Ltd"] = "ltd";
    GroupCoverageCreateRequestLineOfCoverageEnum["Medical"] = "medical";
    GroupCoverageCreateRequestLineOfCoverageEnum["Std"] = "std";
    GroupCoverageCreateRequestLineOfCoverageEnum["Vision"] = "vision";
})(GroupCoverageCreateRequestLineOfCoverageEnum = exports.GroupCoverageCreateRequestLineOfCoverageEnum || (exports.GroupCoverageCreateRequestLineOfCoverageEnum = {}));
var GroupCoverageCreateRequest = /** @class */ (function (_super) {
    __extends(GroupCoverageCreateRequest, _super);
    function GroupCoverageCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=existing_coverage" }),
        __metadata("design:type", Boolean)
    ], GroupCoverageCreateRequest.prototype, "existingCoverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=line_of_coverage" }),
        __metadata("design:type", String)
    ], GroupCoverageCreateRequest.prototype, "lineOfCoverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], GroupCoverageCreateRequest.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requested_effective_date" }),
        __metadata("design:type", Date)
    ], GroupCoverageCreateRequest.prototype, "requestedEffectiveDate", void 0);
    return GroupCoverageCreateRequest;
}(utils_1.SpeakeasyBase));
exports.GroupCoverageCreateRequest = GroupCoverageCreateRequest;

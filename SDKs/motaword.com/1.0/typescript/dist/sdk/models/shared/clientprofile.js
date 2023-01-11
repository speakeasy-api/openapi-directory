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
exports.ClientProfile = exports.ClientProfileNps = exports.ClientProfileNpsLast = exports.ClientProfileNpsAverage = void 0;
var utils_1 = require("../../../internal/utils");
var proofreaderwithlanguage_1 = require("./proofreaderwithlanguage");
// ClientProfileNpsAverage
/**
 * information for all nps survey that this client completed
**/
var ClientProfileNpsAverage = /** @class */ (function (_super) {
    __extends(ClientProfileNpsAverage, _super);
    function ClientProfileNpsAverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_surveys_count" }),
        __metadata("design:type", Number)
    ], ClientProfileNpsAverage.prototype, "completedSurveysCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], ClientProfileNpsAverage.prototype, "score", void 0);
    return ClientProfileNpsAverage;
}(utils_1.SpeakeasyBase));
exports.ClientProfileNpsAverage = ClientProfileNpsAverage;
// ClientProfileNpsLast
/**
 * last survey info
**/
var ClientProfileNpsLast = /** @class */ (function (_super) {
    __extends(ClientProfileNpsLast, _super);
    function ClientProfileNpsLast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completion_date" }),
        __metadata("design:type", Date)
    ], ClientProfileNpsLast.prototype, "completionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], ClientProfileNpsLast.prototype, "score", void 0);
    return ClientProfileNpsLast;
}(utils_1.SpeakeasyBase));
exports.ClientProfileNpsLast = ClientProfileNpsLast;
// ClientProfileNps
/**
 * net promoter score info for this client
**/
var ClientProfileNps = /** @class */ (function (_super) {
    __extends(ClientProfileNps, _super);
    function ClientProfileNps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=average" }),
        __metadata("design:type", ClientProfileNpsAverage)
    ], ClientProfileNps.prototype, "average", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", ClientProfileNpsLast)
    ], ClientProfileNps.prototype, "last", void 0);
    return ClientProfileNps;
}(utils_1.SpeakeasyBase));
exports.ClientProfileNps = ClientProfileNps;
var ClientProfile = /** @class */ (function (_super) {
    __extends(ClientProfile, _super);
    function ClientProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_creation_date" }),
        __metadata("design:type", Date)
    ], ClientProfile.prototype, "accountCreationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_project_count" }),
        __metadata("design:type", Number)
    ], ClientProfile.prototype, "clientProjectCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=corporate" }),
        __metadata("design:type", String)
    ], ClientProfile.prototype, "corporate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=corporate_id" }),
        __metadata("design:type", Number)
    ], ClientProfile.prototype, "corporateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=corporate_user_count" }),
        __metadata("design:type", Number)
    ], ClientProfile.prototype, "corporateUserCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequent_file_extension" }),
        __metadata("design:type", String)
    ], ClientProfile.prototype, "frequentFileExtension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequent_language_pairs" }),
        __metadata("design:type", Array)
    ], ClientProfile.prototype, "frequentLanguagePairs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], ClientProfile.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=growth" }),
        __metadata("design:type", Boolean)
    ], ClientProfile.prototype, "growth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_complex" }),
        __metadata("design:type", Boolean)
    ], ClientProfile.prototype, "isComplex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_12_months_spending" }),
        __metadata("design:type", Number)
    ], ClientProfile.prototype, "last12MonthsSpending", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_project" }),
        __metadata("design:type", Number)
    ], ClientProfile.prototype, "lastProject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_project_time" }),
        __metadata("design:type", Date)
    ], ClientProfile.prototype, "lastProjectTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_proofreaders", elemType: proofreaderwithlanguage_1.ProofreaderWithLanguage }),
        __metadata("design:type", Array)
    ], ClientProfile.prototype, "lastProofreaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", Array)
    ], ClientProfile.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nps" }),
        __metadata("design:type", ClientProfileNps)
    ], ClientProfile.prototype, "nps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_rank_in_project_count" }),
        __metadata("design:type", Number)
    ], ClientProfile.prototype, "userRankInProjectCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_rank_in_spending" }),
        __metadata("design:type", Number)
    ], ClientProfile.prototype, "userRankInSpending", void 0);
    return ClientProfile;
}(utils_1.SpeakeasyBase));
exports.ClientProfile = ClientProfile;

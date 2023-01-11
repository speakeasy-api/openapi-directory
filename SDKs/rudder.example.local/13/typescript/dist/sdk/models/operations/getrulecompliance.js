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
exports.GetRuleComplianceResponse = exports.GetRuleComplianceRequest = exports.GetRuleCompliance200ApplicationJson = exports.GetRuleCompliance200ApplicationJsonResultEnum = exports.GetRuleCompliance200ApplicationJsonData = exports.GetRuleCompliance200ApplicationJsonDataRules = exports.GetRuleCompliance200ApplicationJsonDataRulesModeEnum = exports.GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails = exports.GetRuleCompliance200ApplicationJsonActionEnum = exports.GetRuleComplianceQueryParams = exports.GetRuleCompliancePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetRuleCompliancePathParams = /** @class */ (function (_super) {
    __extends(GetRuleCompliancePathParams, _super);
    function GetRuleCompliancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ruleId" }),
        __metadata("design:type", String)
    ], GetRuleCompliancePathParams.prototype, "ruleId", void 0);
    return GetRuleCompliancePathParams;
}(utils_1.SpeakeasyBase));
exports.GetRuleCompliancePathParams = GetRuleCompliancePathParams;
var GetRuleComplianceQueryParams = /** @class */ (function (_super) {
    __extends(GetRuleComplianceQueryParams, _super);
    function GetRuleComplianceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=level" }),
        __metadata("design:type", Number)
    ], GetRuleComplianceQueryParams.prototype, "level", void 0);
    return GetRuleComplianceQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRuleComplianceQueryParams = GetRuleComplianceQueryParams;
var GetRuleCompliance200ApplicationJsonActionEnum;
(function (GetRuleCompliance200ApplicationJsonActionEnum) {
    GetRuleCompliance200ApplicationJsonActionEnum["GetRuleCompliance"] = "getRuleCompliance";
})(GetRuleCompliance200ApplicationJsonActionEnum = exports.GetRuleCompliance200ApplicationJsonActionEnum || (exports.GetRuleCompliance200ApplicationJsonActionEnum = {}));
var GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails = /** @class */ (function (_super) {
    __extends(GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails, _super);
    function GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Number)
    ], GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noReport" }),
        __metadata("design:type", Number)
    ], GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "noReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=successAlreadyOK" }),
        __metadata("design:type", Number)
    ], GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "successAlreadyOK", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=successNotApplicable" }),
        __metadata("design:type", Number)
    ], GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "successNotApplicable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=successRepaired" }),
        __metadata("design:type", Number)
    ], GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "successRepaired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unexpectedMissingComponent" }),
        __metadata("design:type", Number)
    ], GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "unexpectedMissingComponent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unexpectedUnknownComponent" }),
        __metadata("design:type", Number)
    ], GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "unexpectedUnknownComponent", void 0);
    return GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails;
}(utils_1.SpeakeasyBase));
exports.GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails = GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails;
var GetRuleCompliance200ApplicationJsonDataRulesModeEnum;
(function (GetRuleCompliance200ApplicationJsonDataRulesModeEnum) {
    GetRuleCompliance200ApplicationJsonDataRulesModeEnum["FullCompliance"] = "full-compliance";
    GetRuleCompliance200ApplicationJsonDataRulesModeEnum["ChangesOnly"] = "changes-only";
    GetRuleCompliance200ApplicationJsonDataRulesModeEnum["ReportsDisabled"] = "reports-disabled";
})(GetRuleCompliance200ApplicationJsonDataRulesModeEnum = exports.GetRuleCompliance200ApplicationJsonDataRulesModeEnum || (exports.GetRuleCompliance200ApplicationJsonDataRulesModeEnum = {}));
var GetRuleCompliance200ApplicationJsonDataRules = /** @class */ (function (_super) {
    __extends(GetRuleCompliance200ApplicationJsonDataRules, _super);
    function GetRuleCompliance200ApplicationJsonDataRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compliance" }),
        __metadata("design:type", Number)
    ], GetRuleCompliance200ApplicationJsonDataRules.prototype, "compliance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=complianceDetails" }),
        __metadata("design:type", GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails)
    ], GetRuleCompliance200ApplicationJsonDataRules.prototype, "complianceDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetRuleCompliance200ApplicationJsonDataRules.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], GetRuleCompliance200ApplicationJsonDataRules.prototype, "mode", void 0);
    return GetRuleCompliance200ApplicationJsonDataRules;
}(utils_1.SpeakeasyBase));
exports.GetRuleCompliance200ApplicationJsonDataRules = GetRuleCompliance200ApplicationJsonDataRules;
var GetRuleCompliance200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetRuleCompliance200ApplicationJsonData, _super);
    function GetRuleCompliance200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: GetRuleCompliance200ApplicationJsonDataRules }),
        __metadata("design:type", Array)
    ], GetRuleCompliance200ApplicationJsonData.prototype, "rules", void 0);
    return GetRuleCompliance200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetRuleCompliance200ApplicationJsonData = GetRuleCompliance200ApplicationJsonData;
var GetRuleCompliance200ApplicationJsonResultEnum;
(function (GetRuleCompliance200ApplicationJsonResultEnum) {
    GetRuleCompliance200ApplicationJsonResultEnum["Success"] = "success";
    GetRuleCompliance200ApplicationJsonResultEnum["Error"] = "error";
})(GetRuleCompliance200ApplicationJsonResultEnum = exports.GetRuleCompliance200ApplicationJsonResultEnum || (exports.GetRuleCompliance200ApplicationJsonResultEnum = {}));
var GetRuleCompliance200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRuleCompliance200ApplicationJson, _super);
    function GetRuleCompliance200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetRuleCompliance200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetRuleCompliance200ApplicationJsonData)
    ], GetRuleCompliance200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetRuleCompliance200ApplicationJson.prototype, "result", void 0);
    return GetRuleCompliance200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetRuleCompliance200ApplicationJson = GetRuleCompliance200ApplicationJson;
var GetRuleComplianceRequest = /** @class */ (function (_super) {
    __extends(GetRuleComplianceRequest, _super);
    function GetRuleComplianceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRuleCompliancePathParams)
    ], GetRuleComplianceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRuleComplianceQueryParams)
    ], GetRuleComplianceRequest.prototype, "queryParams", void 0);
    return GetRuleComplianceRequest;
}(utils_1.SpeakeasyBase));
exports.GetRuleComplianceRequest = GetRuleComplianceRequest;
var GetRuleComplianceResponse = /** @class */ (function (_super) {
    __extends(GetRuleComplianceResponse, _super);
    function GetRuleComplianceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRuleComplianceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRuleComplianceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRuleCompliance200ApplicationJson)
    ], GetRuleComplianceResponse.prototype, "getRuleCompliance200ApplicationJSONObject", void 0);
    return GetRuleComplianceResponse;
}(utils_1.SpeakeasyBase));
exports.GetRuleComplianceResponse = GetRuleComplianceResponse;

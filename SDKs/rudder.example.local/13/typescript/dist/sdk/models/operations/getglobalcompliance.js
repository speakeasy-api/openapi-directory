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
exports.GetGlobalComplianceResponse = exports.GetGlobalCompliance200ApplicationJson = exports.GetGlobalCompliance200ApplicationJsonResultEnum = exports.GetGlobalCompliance200ApplicationJsonData = exports.GetGlobalCompliance200ApplicationJsonDataGlobalCompliance = exports.GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails = exports.GetGlobalCompliance200ApplicationJsonActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGlobalCompliance200ApplicationJsonActionEnum;
(function (GetGlobalCompliance200ApplicationJsonActionEnum) {
    GetGlobalCompliance200ApplicationJsonActionEnum["GetGlobalCompliance"] = "getGlobalCompliance";
})(GetGlobalCompliance200ApplicationJsonActionEnum = exports.GetGlobalCompliance200ApplicationJsonActionEnum || (exports.GetGlobalCompliance200ApplicationJsonActionEnum = {}));
var GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails = /** @class */ (function (_super) {
    __extends(GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails, _super);
    function GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Number)
    ], GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noReport" }),
        __metadata("design:type", Number)
    ], GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails.prototype, "noReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=successAlreadyOK" }),
        __metadata("design:type", Number)
    ], GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails.prototype, "successAlreadyOK", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=successNotApplicable" }),
        __metadata("design:type", Number)
    ], GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails.prototype, "successNotApplicable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=successRepaired" }),
        __metadata("design:type", Number)
    ], GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails.prototype, "successRepaired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unexpectedMissingComponent" }),
        __metadata("design:type", Number)
    ], GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails.prototype, "unexpectedMissingComponent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unexpectedUnknownComponent" }),
        __metadata("design:type", Number)
    ], GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails.prototype, "unexpectedUnknownComponent", void 0);
    return GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails;
}(utils_1.SpeakeasyBase));
exports.GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails = GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails;
var GetGlobalCompliance200ApplicationJsonDataGlobalCompliance = /** @class */ (function (_super) {
    __extends(GetGlobalCompliance200ApplicationJsonDataGlobalCompliance, _super);
    function GetGlobalCompliance200ApplicationJsonDataGlobalCompliance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compliance" }),
        __metadata("design:type", Number)
    ], GetGlobalCompliance200ApplicationJsonDataGlobalCompliance.prototype, "compliance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=complianceDetails" }),
        __metadata("design:type", GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails)
    ], GetGlobalCompliance200ApplicationJsonDataGlobalCompliance.prototype, "complianceDetails", void 0);
    return GetGlobalCompliance200ApplicationJsonDataGlobalCompliance;
}(utils_1.SpeakeasyBase));
exports.GetGlobalCompliance200ApplicationJsonDataGlobalCompliance = GetGlobalCompliance200ApplicationJsonDataGlobalCompliance;
var GetGlobalCompliance200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetGlobalCompliance200ApplicationJsonData, _super);
    function GetGlobalCompliance200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=globalCompliance" }),
        __metadata("design:type", GetGlobalCompliance200ApplicationJsonDataGlobalCompliance)
    ], GetGlobalCompliance200ApplicationJsonData.prototype, "globalCompliance", void 0);
    return GetGlobalCompliance200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetGlobalCompliance200ApplicationJsonData = GetGlobalCompliance200ApplicationJsonData;
var GetGlobalCompliance200ApplicationJsonResultEnum;
(function (GetGlobalCompliance200ApplicationJsonResultEnum) {
    GetGlobalCompliance200ApplicationJsonResultEnum["Success"] = "success";
    GetGlobalCompliance200ApplicationJsonResultEnum["Error"] = "error";
})(GetGlobalCompliance200ApplicationJsonResultEnum = exports.GetGlobalCompliance200ApplicationJsonResultEnum || (exports.GetGlobalCompliance200ApplicationJsonResultEnum = {}));
var GetGlobalCompliance200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGlobalCompliance200ApplicationJson, _super);
    function GetGlobalCompliance200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetGlobalCompliance200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetGlobalCompliance200ApplicationJsonData)
    ], GetGlobalCompliance200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetGlobalCompliance200ApplicationJson.prototype, "result", void 0);
    return GetGlobalCompliance200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetGlobalCompliance200ApplicationJson = GetGlobalCompliance200ApplicationJson;
var GetGlobalComplianceResponse = /** @class */ (function (_super) {
    __extends(GetGlobalComplianceResponse, _super);
    function GetGlobalComplianceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGlobalComplianceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGlobalComplianceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGlobalCompliance200ApplicationJson)
    ], GetGlobalComplianceResponse.prototype, "getGlobalCompliance200ApplicationJSONObject", void 0);
    return GetGlobalComplianceResponse;
}(utils_1.SpeakeasyBase));
exports.GetGlobalComplianceResponse = GetGlobalComplianceResponse;

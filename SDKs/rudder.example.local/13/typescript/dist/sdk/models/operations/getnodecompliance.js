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
exports.GetNodeComplianceResponse = exports.GetNodeComplianceRequest = exports.GetNodeCompliance200ApplicationJson = exports.GetNodeCompliance200ApplicationJsonResultEnum = exports.GetNodeCompliance200ApplicationJsonData = exports.GetNodeCompliance200ApplicationJsonDataNodes = exports.GetNodeCompliance200ApplicationJsonDataNodesModeEnum = exports.GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails = exports.GetNodeCompliance200ApplicationJsonActionEnum = exports.GetNodeComplianceQueryParams = exports.GetNodeCompliancePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNodeCompliancePathParams = /** @class */ (function (_super) {
    __extends(GetNodeCompliancePathParams, _super);
    function GetNodeCompliancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], GetNodeCompliancePathParams.prototype, "nodeId", void 0);
    return GetNodeCompliancePathParams;
}(utils_1.SpeakeasyBase));
exports.GetNodeCompliancePathParams = GetNodeCompliancePathParams;
var GetNodeComplianceQueryParams = /** @class */ (function (_super) {
    __extends(GetNodeComplianceQueryParams, _super);
    function GetNodeComplianceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=level" }),
        __metadata("design:type", Number)
    ], GetNodeComplianceQueryParams.prototype, "level", void 0);
    return GetNodeComplianceQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNodeComplianceQueryParams = GetNodeComplianceQueryParams;
var GetNodeCompliance200ApplicationJsonActionEnum;
(function (GetNodeCompliance200ApplicationJsonActionEnum) {
    GetNodeCompliance200ApplicationJsonActionEnum["GetNodeCompliance"] = "getNodeCompliance";
})(GetNodeCompliance200ApplicationJsonActionEnum = exports.GetNodeCompliance200ApplicationJsonActionEnum || (exports.GetNodeCompliance200ApplicationJsonActionEnum = {}));
var GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails = /** @class */ (function (_super) {
    __extends(GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails, _super);
    function GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Number)
    ], GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noReport" }),
        __metadata("design:type", Number)
    ], GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "noReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=successAlreadyOK" }),
        __metadata("design:type", Number)
    ], GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "successAlreadyOK", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=successNotApplicable" }),
        __metadata("design:type", Number)
    ], GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "successNotApplicable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=successRepaired" }),
        __metadata("design:type", Number)
    ], GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "successRepaired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unexpectedMissingComponent" }),
        __metadata("design:type", Number)
    ], GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "unexpectedMissingComponent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unexpectedUnknownComponent" }),
        __metadata("design:type", Number)
    ], GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "unexpectedUnknownComponent", void 0);
    return GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails;
}(utils_1.SpeakeasyBase));
exports.GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails = GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails;
var GetNodeCompliance200ApplicationJsonDataNodesModeEnum;
(function (GetNodeCompliance200ApplicationJsonDataNodesModeEnum) {
    GetNodeCompliance200ApplicationJsonDataNodesModeEnum["FullCompliance"] = "full-compliance";
    GetNodeCompliance200ApplicationJsonDataNodesModeEnum["ChangesOnly"] = "changes-only";
    GetNodeCompliance200ApplicationJsonDataNodesModeEnum["ReportsDisabled"] = "reports-disabled";
})(GetNodeCompliance200ApplicationJsonDataNodesModeEnum = exports.GetNodeCompliance200ApplicationJsonDataNodesModeEnum || (exports.GetNodeCompliance200ApplicationJsonDataNodesModeEnum = {}));
var GetNodeCompliance200ApplicationJsonDataNodes = /** @class */ (function (_super) {
    __extends(GetNodeCompliance200ApplicationJsonDataNodes, _super);
    function GetNodeCompliance200ApplicationJsonDataNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compliance" }),
        __metadata("design:type", Number)
    ], GetNodeCompliance200ApplicationJsonDataNodes.prototype, "compliance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=complianceDetails" }),
        __metadata("design:type", GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails)
    ], GetNodeCompliance200ApplicationJsonDataNodes.prototype, "complianceDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetNodeCompliance200ApplicationJsonDataNodes.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], GetNodeCompliance200ApplicationJsonDataNodes.prototype, "mode", void 0);
    return GetNodeCompliance200ApplicationJsonDataNodes;
}(utils_1.SpeakeasyBase));
exports.GetNodeCompliance200ApplicationJsonDataNodes = GetNodeCompliance200ApplicationJsonDataNodes;
var GetNodeCompliance200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetNodeCompliance200ApplicationJsonData, _super);
    function GetNodeCompliance200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodes", elemType: GetNodeCompliance200ApplicationJsonDataNodes }),
        __metadata("design:type", Array)
    ], GetNodeCompliance200ApplicationJsonData.prototype, "nodes", void 0);
    return GetNodeCompliance200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetNodeCompliance200ApplicationJsonData = GetNodeCompliance200ApplicationJsonData;
var GetNodeCompliance200ApplicationJsonResultEnum;
(function (GetNodeCompliance200ApplicationJsonResultEnum) {
    GetNodeCompliance200ApplicationJsonResultEnum["Success"] = "success";
    GetNodeCompliance200ApplicationJsonResultEnum["Error"] = "error";
})(GetNodeCompliance200ApplicationJsonResultEnum = exports.GetNodeCompliance200ApplicationJsonResultEnum || (exports.GetNodeCompliance200ApplicationJsonResultEnum = {}));
var GetNodeCompliance200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetNodeCompliance200ApplicationJson, _super);
    function GetNodeCompliance200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetNodeCompliance200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetNodeCompliance200ApplicationJsonData)
    ], GetNodeCompliance200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetNodeCompliance200ApplicationJson.prototype, "result", void 0);
    return GetNodeCompliance200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetNodeCompliance200ApplicationJson = GetNodeCompliance200ApplicationJson;
var GetNodeComplianceRequest = /** @class */ (function (_super) {
    __extends(GetNodeComplianceRequest, _super);
    function GetNodeComplianceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNodeCompliancePathParams)
    ], GetNodeComplianceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNodeComplianceQueryParams)
    ], GetNodeComplianceRequest.prototype, "queryParams", void 0);
    return GetNodeComplianceRequest;
}(utils_1.SpeakeasyBase));
exports.GetNodeComplianceRequest = GetNodeComplianceRequest;
var GetNodeComplianceResponse = /** @class */ (function (_super) {
    __extends(GetNodeComplianceResponse, _super);
    function GetNodeComplianceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNodeComplianceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNodeComplianceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNodeCompliance200ApplicationJson)
    ], GetNodeComplianceResponse.prototype, "getNodeCompliance200ApplicationJSONObject", void 0);
    return GetNodeComplianceResponse;
}(utils_1.SpeakeasyBase));
exports.GetNodeComplianceResponse = GetNodeComplianceResponse;

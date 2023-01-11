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
exports.GetTargetsTargetIdTopVulnsResponse = exports.GetTargetsTargetIdTopVulnsRequest = exports.GetTargetsTargetIdTopVulns200ApplicationJson = exports.GetTargetsTargetIdTopVulnsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdTopVulnsPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdTopVulnsPathParams, _super);
    function GetTargetsTargetIdTopVulnsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdTopVulnsPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdTopVulnsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdTopVulnsPathParams = GetTargetsTargetIdTopVulnsPathParams;
var GetTargetsTargetIdTopVulns200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdTopVulns200ApplicationJson, _super);
    function GetTargetsTargetIdTopVulns200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=0" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdTopVulns200ApplicationJson.prototype, "zero", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=1" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdTopVulns200ApplicationJson.prototype, "one", void 0);
    return GetTargetsTargetIdTopVulns200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdTopVulns200ApplicationJson = GetTargetsTargetIdTopVulns200ApplicationJson;
var GetTargetsTargetIdTopVulnsRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdTopVulnsRequest, _super);
    function GetTargetsTargetIdTopVulnsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdTopVulnsPathParams)
    ], GetTargetsTargetIdTopVulnsRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdTopVulnsRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdTopVulnsRequest = GetTargetsTargetIdTopVulnsRequest;
var GetTargetsTargetIdTopVulnsResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdTopVulnsResponse, _super);
    function GetTargetsTargetIdTopVulnsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdTopVulnsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdTopVulnsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: GetTargetsTargetIdTopVulns200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdTopVulnsResponse.prototype, "getTargetsTargetIdTopVulns200ApplicationJSONObjects", void 0);
    return GetTargetsTargetIdTopVulnsResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdTopVulnsResponse = GetTargetsTargetIdTopVulnsResponse;

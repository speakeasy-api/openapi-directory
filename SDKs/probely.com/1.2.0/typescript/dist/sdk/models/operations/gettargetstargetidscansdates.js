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
exports.GetTargetsTargetIdScansDatesResponse = exports.GetTargetsTargetIdScansDatesRequest = exports.GetTargetsTargetIdScansDates404ApplicationJson = exports.GetTargetsTargetIdScansDates401ApplicationJson = exports.GetTargetsTargetIdScansDatesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdScansDatesPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansDatesPathParams, _super);
    function GetTargetsTargetIdScansDatesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansDatesPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdScansDatesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansDatesPathParams = GetTargetsTargetIdScansDatesPathParams;
var GetTargetsTargetIdScansDates401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansDates401ApplicationJson, _super);
    function GetTargetsTargetIdScansDates401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansDates401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansDates401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansDates401ApplicationJson = GetTargetsTargetIdScansDates401ApplicationJson;
var GetTargetsTargetIdScansDates404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansDates404ApplicationJson, _super);
    function GetTargetsTargetIdScansDates404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansDates404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansDates404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansDates404ApplicationJson = GetTargetsTargetIdScansDates404ApplicationJson;
var GetTargetsTargetIdScansDatesRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansDatesRequest, _super);
    function GetTargetsTargetIdScansDatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansDatesPathParams)
    ], GetTargetsTargetIdScansDatesRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdScansDatesRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansDatesRequest = GetTargetsTargetIdScansDatesRequest;
var GetTargetsTargetIdScansDatesResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansDatesResponse, _super);
    function GetTargetsTargetIdScansDatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansDatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansDatesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdScansDatesResponse.prototype, "getTargetsTargetIdScansDates200ApplicationJSONDateStrings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansDates401ApplicationJson)
    ], GetTargetsTargetIdScansDatesResponse.prototype, "getTargetsTargetIdScansDates401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansDates404ApplicationJson)
    ], GetTargetsTargetIdScansDatesResponse.prototype, "getTargetsTargetIdScansDates404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdScansDatesResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansDatesResponse = GetTargetsTargetIdScansDatesResponse;

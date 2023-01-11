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
exports.VmUtilizationInfoInput = exports.VmUtilizationInfo = void 0;
var utils_1 = require("../../../internal/utils");
var vmutilizationmetrics_1 = require("./vmutilizationmetrics");
var vmwarevmdetails_1 = require("./vmwarevmdetails");
var vmwarevmdetails_2 = require("./vmwarevmdetails");
// VmUtilizationInfo
/**
 * Utilization information of a single VM.
**/
var VmUtilizationInfo = /** @class */ (function (_super) {
    __extends(VmUtilizationInfo, _super);
    function VmUtilizationInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=utilization" }),
        __metadata("design:type", vmutilizationmetrics_1.VmUtilizationMetrics)
    ], VmUtilizationInfo.prototype, "utilization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmId" }),
        __metadata("design:type", String)
    ], VmUtilizationInfo.prototype, "vmId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmwareVmDetails" }),
        __metadata("design:type", vmwarevmdetails_1.VmwareVmDetails)
    ], VmUtilizationInfo.prototype, "vmwareVmDetails", void 0);
    return VmUtilizationInfo;
}(utils_1.SpeakeasyBase));
exports.VmUtilizationInfo = VmUtilizationInfo;
// VmUtilizationInfoInput
/**
 * Utilization information of a single VM.
**/
var VmUtilizationInfoInput = /** @class */ (function (_super) {
    __extends(VmUtilizationInfoInput, _super);
    function VmUtilizationInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=utilization" }),
        __metadata("design:type", vmutilizationmetrics_1.VmUtilizationMetrics)
    ], VmUtilizationInfoInput.prototype, "utilization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmId" }),
        __metadata("design:type", String)
    ], VmUtilizationInfoInput.prototype, "vmId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmwareVmDetails" }),
        __metadata("design:type", vmwarevmdetails_2.VmwareVmDetailsInput)
    ], VmUtilizationInfoInput.prototype, "vmwareVmDetails", void 0);
    return VmUtilizationInfoInput;
}(utils_1.SpeakeasyBase));
exports.VmUtilizationInfoInput = VmUtilizationInfoInput;

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
exports.EvaluationInput = exports.Evaluation = void 0;
var utils_1 = require("../../../internal/utils");
var resourcefilter_1 = require("./resourcefilter");
var resourcestatus_1 = require("./resourcestatus");
// Evaluation
/**
 * Message describing Evaluation object
**/
var Evaluation = /** @class */ (function (_super) {
    __extends(Evaluation, _super);
    function Evaluation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], Evaluation.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceFilter" }),
        __metadata("design:type", resourcefilter_1.ResourceFilter)
    ], Evaluation.prototype, "resourceFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceStatus" }),
        __metadata("design:type", resourcestatus_1.ResourceStatus)
    ], Evaluation.prototype, "resourceStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleNames" }),
        __metadata("design:type", Array)
    ], Evaluation.prototype, "ruleNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleVersions" }),
        __metadata("design:type", Array)
    ], Evaluation.prototype, "ruleVersions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "updateTime", void 0);
    return Evaluation;
}(utils_1.SpeakeasyBase));
exports.Evaluation = Evaluation;
// EvaluationInput
/**
 * Message describing Evaluation object
**/
var EvaluationInput = /** @class */ (function (_super) {
    __extends(EvaluationInput, _super);
    function EvaluationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EvaluationInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], EvaluationInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EvaluationInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceFilter" }),
        __metadata("design:type", resourcefilter_1.ResourceFilter)
    ], EvaluationInput.prototype, "resourceFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceStatus" }),
        __metadata("design:type", resourcestatus_1.ResourceStatus)
    ], EvaluationInput.prototype, "resourceStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleNames" }),
        __metadata("design:type", Array)
    ], EvaluationInput.prototype, "ruleNames", void 0);
    return EvaluationInput;
}(utils_1.SpeakeasyBase));
exports.EvaluationInput = EvaluationInput;

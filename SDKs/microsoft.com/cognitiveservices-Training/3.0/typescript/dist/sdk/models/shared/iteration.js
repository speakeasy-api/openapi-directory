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
exports.IterationInput = exports.Iteration = exports.IterationTrainingTypeEnum = exports.IterationExportableToEnum = exports.IterationClassificationTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var IterationClassificationTypeEnum;
(function (IterationClassificationTypeEnum) {
    IterationClassificationTypeEnum["Multiclass"] = "Multiclass";
    IterationClassificationTypeEnum["Multilabel"] = "Multilabel";
})(IterationClassificationTypeEnum = exports.IterationClassificationTypeEnum || (exports.IterationClassificationTypeEnum = {}));
var IterationExportableToEnum;
(function (IterationExportableToEnum) {
    IterationExportableToEnum["CoreMl"] = "CoreML";
    IterationExportableToEnum["TensorFlow"] = "TensorFlow";
    IterationExportableToEnum["DockerFile"] = "DockerFile";
    IterationExportableToEnum["Onnx"] = "ONNX";
    IterationExportableToEnum["Vaidk"] = "VAIDK";
})(IterationExportableToEnum = exports.IterationExportableToEnum || (exports.IterationExportableToEnum = {}));
var IterationTrainingTypeEnum;
(function (IterationTrainingTypeEnum) {
    IterationTrainingTypeEnum["Regular"] = "Regular";
    IterationTrainingTypeEnum["Advanced"] = "Advanced";
})(IterationTrainingTypeEnum = exports.IterationTrainingTypeEnum || (exports.IterationTrainingTypeEnum = {}));
// Iteration
/**
 * Iteration model to be sent over JSON.
**/
var Iteration = /** @class */ (function (_super) {
    __extends(Iteration, _super);
    function Iteration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classificationType" }),
        __metadata("design:type", String)
    ], Iteration.prototype, "classificationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Iteration.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domainId" }),
        __metadata("design:type", String)
    ], Iteration.prototype, "domainId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exportable" }),
        __metadata("design:type", Boolean)
    ], Iteration.prototype, "exportable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exportableTo" }),
        __metadata("design:type", Array)
    ], Iteration.prototype, "exportableTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Iteration.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastModified" }),
        __metadata("design:type", Date)
    ], Iteration.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Iteration.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originalPublishResourceId" }),
        __metadata("design:type", String)
    ], Iteration.prototype, "originalPublishResourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], Iteration.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishName" }),
        __metadata("design:type", String)
    ], Iteration.prototype, "publishName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reservedBudgetInHours" }),
        __metadata("design:type", Number)
    ], Iteration.prototype, "reservedBudgetInHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Iteration.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trainedAt" }),
        __metadata("design:type", Date)
    ], Iteration.prototype, "trainedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trainingType" }),
        __metadata("design:type", String)
    ], Iteration.prototype, "trainingType", void 0);
    return Iteration;
}(utils_1.SpeakeasyBase));
exports.Iteration = Iteration;
// IterationInput
/**
 * Iteration model to be sent over JSON.
**/
var IterationInput = /** @class */ (function (_super) {
    __extends(IterationInput, _super);
    function IterationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name, form, name=name;" }),
        __metadata("design:type", String)
    ], IterationInput.prototype, "name", void 0);
    return IterationInput;
}(utils_1.SpeakeasyBase));
exports.IterationInput = IterationInput;

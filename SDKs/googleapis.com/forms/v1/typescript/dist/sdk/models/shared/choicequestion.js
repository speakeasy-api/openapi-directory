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
exports.ChoiceQuestion = exports.ChoiceQuestionInput = exports.ChoiceQuestionTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var option_1 = require("./option");
var option_2 = require("./option");
var ChoiceQuestionTypeEnum;
(function (ChoiceQuestionTypeEnum) {
    ChoiceQuestionTypeEnum["ChoiceTypeUnspecified"] = "CHOICE_TYPE_UNSPECIFIED";
    ChoiceQuestionTypeEnum["Radio"] = "RADIO";
    ChoiceQuestionTypeEnum["Checkbox"] = "CHECKBOX";
    ChoiceQuestionTypeEnum["DropDown"] = "DROP_DOWN";
})(ChoiceQuestionTypeEnum = exports.ChoiceQuestionTypeEnum || (exports.ChoiceQuestionTypeEnum = {}));
// ChoiceQuestionInput
/**
 * A radio/checkbox/dropdown question.
**/
var ChoiceQuestionInput = /** @class */ (function (_super) {
    __extends(ChoiceQuestionInput, _super);
    function ChoiceQuestionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options", elemType: option_1.OptionInput }),
        __metadata("design:type", Array)
    ], ChoiceQuestionInput.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shuffle" }),
        __metadata("design:type", Boolean)
    ], ChoiceQuestionInput.prototype, "shuffle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChoiceQuestionInput.prototype, "type", void 0);
    return ChoiceQuestionInput;
}(utils_1.SpeakeasyBase));
exports.ChoiceQuestionInput = ChoiceQuestionInput;
// ChoiceQuestion
/**
 * A radio/checkbox/dropdown question.
**/
var ChoiceQuestion = /** @class */ (function (_super) {
    __extends(ChoiceQuestion, _super);
    function ChoiceQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options", elemType: option_2.Option }),
        __metadata("design:type", Array)
    ], ChoiceQuestion.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shuffle" }),
        __metadata("design:type", Boolean)
    ], ChoiceQuestion.prototype, "shuffle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChoiceQuestion.prototype, "type", void 0);
    return ChoiceQuestion;
}(utils_1.SpeakeasyBase));
exports.ChoiceQuestion = ChoiceQuestion;

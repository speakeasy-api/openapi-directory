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
exports.EarningWithTqs = exports.EarningWithTqsStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var EarningWithTqsStatusEnum;
(function (EarningWithTqsStatusEnum) {
    EarningWithTqsStatusEnum["Paid"] = "paid";
    EarningWithTqsStatusEnum["Pending"] = "pending";
    EarningWithTqsStatusEnum["Failed"] = "failed";
})(EarningWithTqsStatusEnum = exports.EarningWithTqsStatusEnum || (exports.EarningWithTqsStatusEnum = {}));
var EarningWithTqs = /** @class */ (function (_super) {
    __extends(EarningWithTqs, _super);
    function EarningWithTqs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], EarningWithTqs.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], EarningWithTqs.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_date" }),
        __metadata("design:type", Date)
    ], EarningWithTqs.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_above_average" }),
        __metadata("design:type", Boolean)
    ], EarningWithTqs.prototype, "isAboveAverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project_id" }),
        __metadata("design:type", Number)
    ], EarningWithTqs.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], EarningWithTqs.prototype, "score", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], EarningWithTqs.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=strings_edited" }),
        __metadata("design:type", Number)
    ], EarningWithTqs.prototype, "stringsEdited", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=strings_translated" }),
        __metadata("design:type", Number)
    ], EarningWithTqs.prototype, "stringsTranslated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=words" }),
        __metadata("design:type", Number)
    ], EarningWithTqs.prototype, "words", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=words_approved" }),
        __metadata("design:type", Number)
    ], EarningWithTqs.prototype, "wordsApproved", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=words_translated" }),
        __metadata("design:type", Number)
    ], EarningWithTqs.prototype, "wordsTranslated", void 0);
    return EarningWithTqs;
}(utils_1.SpeakeasyBase));
exports.EarningWithTqs = EarningWithTqs;

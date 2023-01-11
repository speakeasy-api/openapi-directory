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
exports.AppliedLabelChangeDetail = exports.AppliedLabelChangeDetailTypesEnum = void 0;
var utils_1 = require("../../../internal/utils");
var fieldvaluechange_1 = require("./fieldvaluechange");
var AppliedLabelChangeDetailTypesEnum;
(function (AppliedLabelChangeDetailTypesEnum) {
    AppliedLabelChangeDetailTypesEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    AppliedLabelChangeDetailTypesEnum["LabelAdded"] = "LABEL_ADDED";
    AppliedLabelChangeDetailTypesEnum["LabelRemoved"] = "LABEL_REMOVED";
    AppliedLabelChangeDetailTypesEnum["LabelFieldValueChanged"] = "LABEL_FIELD_VALUE_CHANGED";
    AppliedLabelChangeDetailTypesEnum["LabelAppliedByItemCreate"] = "LABEL_APPLIED_BY_ITEM_CREATE";
})(AppliedLabelChangeDetailTypesEnum = exports.AppliedLabelChangeDetailTypesEnum || (exports.AppliedLabelChangeDetailTypesEnum = {}));
// AppliedLabelChangeDetail
/**
 * A change made to a Label on the Target.
**/
var AppliedLabelChangeDetail = /** @class */ (function (_super) {
    __extends(AppliedLabelChangeDetail, _super);
    function AppliedLabelChangeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fieldChanges", elemType: fieldvaluechange_1.FieldValueChange }),
        __metadata("design:type", Array)
    ], AppliedLabelChangeDetail.prototype, "fieldChanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], AppliedLabelChangeDetail.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AppliedLabelChangeDetail.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], AppliedLabelChangeDetail.prototype, "types", void 0);
    return AppliedLabelChangeDetail;
}(utils_1.SpeakeasyBase));
exports.AppliedLabelChangeDetail = AppliedLabelChangeDetail;

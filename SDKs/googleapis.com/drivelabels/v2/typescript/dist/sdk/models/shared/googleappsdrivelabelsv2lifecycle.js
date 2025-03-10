"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GoogleAppsDriveLabelsV2LifecycleInput = exports.GoogleAppsDriveLabelsV2Lifecycle = exports.GoogleAppsDriveLabelsV2LifecycleStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googleappsdrivelabelsv2lifecycledisabledpolicy_1 = require("./googleappsdrivelabelsv2lifecycledisabledpolicy");
var class_transformer_1 = require("class-transformer");
/**
 * Output only. The state of the object associated with this lifecycle.
 */
var GoogleAppsDriveLabelsV2LifecycleStateEnum;
(function (GoogleAppsDriveLabelsV2LifecycleStateEnum) {
    GoogleAppsDriveLabelsV2LifecycleStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleAppsDriveLabelsV2LifecycleStateEnum["UnpublishedDraft"] = "UNPUBLISHED_DRAFT";
    GoogleAppsDriveLabelsV2LifecycleStateEnum["Published"] = "PUBLISHED";
    GoogleAppsDriveLabelsV2LifecycleStateEnum["Disabled"] = "DISABLED";
    GoogleAppsDriveLabelsV2LifecycleStateEnum["Deleted"] = "DELETED";
})(GoogleAppsDriveLabelsV2LifecycleStateEnum = exports.GoogleAppsDriveLabelsV2LifecycleStateEnum || (exports.GoogleAppsDriveLabelsV2LifecycleStateEnum = {}));
/**
 * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
 */
var GoogleAppsDriveLabelsV2Lifecycle = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2Lifecycle, _super);
    function GoogleAppsDriveLabelsV2Lifecycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "disabledPolicy" }),
        (0, class_transformer_1.Type)(function () { return googleappsdrivelabelsv2lifecycledisabledpolicy_1.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy; }),
        __metadata("design:type", googleappsdrivelabelsv2lifecycledisabledpolicy_1.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy)
    ], GoogleAppsDriveLabelsV2Lifecycle.prototype, "disabledPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "hasUnpublishedChanges" }),
        __metadata("design:type", Boolean)
    ], GoogleAppsDriveLabelsV2Lifecycle.prototype, "hasUnpublishedChanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Lifecycle.prototype, "state", void 0);
    return GoogleAppsDriveLabelsV2Lifecycle;
}(utils_1.SpeakeasyBase));
exports.GoogleAppsDriveLabelsV2Lifecycle = GoogleAppsDriveLabelsV2Lifecycle;
/**
 * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
 */
var GoogleAppsDriveLabelsV2LifecycleInput = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2LifecycleInput, _super);
    function GoogleAppsDriveLabelsV2LifecycleInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "disabledPolicy" }),
        (0, class_transformer_1.Type)(function () { return googleappsdrivelabelsv2lifecycledisabledpolicy_1.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy; }),
        __metadata("design:type", googleappsdrivelabelsv2lifecycledisabledpolicy_1.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy)
    ], GoogleAppsDriveLabelsV2LifecycleInput.prototype, "disabledPolicy", void 0);
    return GoogleAppsDriveLabelsV2LifecycleInput;
}(utils_1.SpeakeasyBase));
exports.GoogleAppsDriveLabelsV2LifecycleInput = GoogleAppsDriveLabelsV2LifecycleInput;

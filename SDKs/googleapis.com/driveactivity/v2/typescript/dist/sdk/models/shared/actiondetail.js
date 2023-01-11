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
exports.ActionDetail = void 0;
var utils_1 = require("../../../internal/utils");
var appliedlabelchange_1 = require("./appliedlabelchange");
var comment_1 = require("./comment");
var create_1 = require("./create");
var delete_1 = require("./delete");
var dataleakpreventionchange_1 = require("./dataleakpreventionchange");
var move_1 = require("./move");
var permissionchange_1 = require("./permissionchange");
var applicationreference_1 = require("./applicationreference");
var rename_1 = require("./rename");
var restore_1 = require("./restore");
var settingschange_1 = require("./settingschange");
// ActionDetail
/**
 * Data describing the type and additional information of an action.
**/
var ActionDetail = /** @class */ (function (_super) {
    __extends(ActionDetail, _super);
    function ActionDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedLabelChange" }),
        __metadata("design:type", appliedlabelchange_1.AppliedLabelChange)
    ], ActionDetail.prototype, "appliedLabelChange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", comment_1.Comment)
    ], ActionDetail.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=create" }),
        __metadata("design:type", create_1.Create)
    ], ActionDetail.prototype, "create", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", delete_1.Delete)
    ], ActionDetail.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dlpChange" }),
        __metadata("design:type", dataleakpreventionchange_1.DataLeakPreventionChange)
    ], ActionDetail.prototype, "dlpChange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=edit" }),
        __metadata("design:type", Object)
    ], ActionDetail.prototype, "edit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=move" }),
        __metadata("design:type", move_1.Move)
    ], ActionDetail.prototype, "move", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permissionChange" }),
        __metadata("design:type", permissionchange_1.PermissionChange)
    ], ActionDetail.prototype, "permissionChange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reference" }),
        __metadata("design:type", applicationreference_1.ApplicationReference)
    ], ActionDetail.prototype, "reference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rename" }),
        __metadata("design:type", rename_1.Rename)
    ], ActionDetail.prototype, "rename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=restore" }),
        __metadata("design:type", restore_1.Restore)
    ], ActionDetail.prototype, "restore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settingsChange" }),
        __metadata("design:type", settingschange_1.SettingsChange)
    ], ActionDetail.prototype, "settingsChange", void 0);
    return ActionDetail;
}(utils_1.SpeakeasyBase));
exports.ActionDetail = ActionDetail;

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
exports.RequisitionInput = exports.Requisition = void 0;
var utils_1 = require("../../../internal/utils");
// Requisition
/**
 * RequisitionSerializer.
**/
var Requisition = /** @class */ (function (_super) {
    __extends(Requisition, _super);
    function Requisition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accounts" }),
        __metadata("design:type", Array)
    ], Requisition.prototype, "accounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agreements" }),
        __metadata("design:type", Array)
    ], Requisition.prototype, "agreements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enduser_id" }),
        __metadata("design:type", String)
    ], Requisition.prototype, "enduserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Requisition.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirect" }),
        __metadata("design:type", String)
    ], Requisition.prototype, "redirect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], Requisition.prototype, "reference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Object)
    ], Requisition.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_language" }),
        __metadata("design:type", String)
    ], Requisition.prototype, "userLanguage", void 0);
    return Requisition;
}(utils_1.SpeakeasyBase));
exports.Requisition = Requisition;
// RequisitionInput
/**
 * RequisitionSerializer.
**/
var RequisitionInput = /** @class */ (function (_super) {
    __extends(RequisitionInput, _super);
    function RequisitionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agreements, form, name=agreements;, multipart_form, name=agreements;json=true" }),
        __metadata("design:type", Array)
    ], RequisitionInput.prototype, "agreements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enduser_id, form, name=enduser_id;, multipart_form, name=enduser_id" }),
        __metadata("design:type", String)
    ], RequisitionInput.prototype, "enduserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirect, form, name=redirect;, multipart_form, name=redirect" }),
        __metadata("design:type", String)
    ], RequisitionInput.prototype, "redirect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reference, form, name=reference;, multipart_form, name=reference" }),
        __metadata("design:type", String)
    ], RequisitionInput.prototype, "reference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_language, form, name=user_language;, multipart_form, name=user_language" }),
        __metadata("design:type", String)
    ], RequisitionInput.prototype, "userLanguage", void 0);
    return RequisitionInput;
}(utils_1.SpeakeasyBase));
exports.RequisitionInput = RequisitionInput;

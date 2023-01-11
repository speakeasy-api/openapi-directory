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
exports.EndUserAgreementInput = exports.EndUserAgreement = void 0;
var utils_1 = require("../../../internal/utils");
// EndUserAgreement
/**
 * Represents an end-user agreement.
**/
var EndUserAgreement = /** @class */ (function (_super) {
    __extends(EndUserAgreement, _super);
    function EndUserAgreement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accepted" }),
        __metadata("design:type", Date)
    ], EndUserAgreement.prototype, "accepted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_scope" }),
        __metadata("design:type", Array)
    ], EndUserAgreement.prototype, "accessScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_valid_for_days" }),
        __metadata("design:type", Number)
    ], EndUserAgreement.prototype, "accessValidForDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspsp_id" }),
        __metadata("design:type", String)
    ], EndUserAgreement.prototype, "aspspId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], EndUserAgreement.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enduser_id" }),
        __metadata("design:type", String)
    ], EndUserAgreement.prototype, "enduserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EndUserAgreement.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_historical_days" }),
        __metadata("design:type", Number)
    ], EndUserAgreement.prototype, "maxHistoricalDays", void 0);
    return EndUserAgreement;
}(utils_1.SpeakeasyBase));
exports.EndUserAgreement = EndUserAgreement;
// EndUserAgreementInput
/**
 * Represents an end-user agreement.
**/
var EndUserAgreementInput = /** @class */ (function (_super) {
    __extends(EndUserAgreementInput, _super);
    function EndUserAgreementInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_scope, form, name=access_scope;, multipart_form, name=access_scope;json=true" }),
        __metadata("design:type", Array)
    ], EndUserAgreementInput.prototype, "accessScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspsp_id, form, name=aspsp_id;, multipart_form, name=aspsp_id" }),
        __metadata("design:type", String)
    ], EndUserAgreementInput.prototype, "aspspId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enduser_id, form, name=enduser_id;, multipart_form, name=enduser_id" }),
        __metadata("design:type", String)
    ], EndUserAgreementInput.prototype, "enduserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_historical_days, form, name=max_historical_days;, multipart_form, name=max_historical_days" }),
        __metadata("design:type", Number)
    ], EndUserAgreementInput.prototype, "maxHistoricalDays", void 0);
    return EndUserAgreementInput;
}(utils_1.SpeakeasyBase));
exports.EndUserAgreementInput = EndUserAgreementInput;

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
exports.VerifyApiResponseGetReport = void 0;
var utils_1 = require("../../../internal/utils");
var links_1 = require("./links");
var productverifyenum_1 = require("./productverifyenum");
var requeststatusenum_1 = require("./requeststatusenum");
// VerifyApiResponseGetReport
/**
 * Verify
**/
var VerifyApiResponseGetReport = /** @class */ (function (_super) {
    __extends(VerifyApiResponseGetReport, _super);
    function VerifyApiResponseGetReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", links_1.Links)
    ], VerifyApiResponseGetReport.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], VerifyApiResponseGetReport.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callback_url" }),
        __metadata("design:type", String)
    ], VerifyApiResponseGetReport.prototype, "callbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_end" }),
        __metadata("design:type", Date)
    ], VerifyApiResponseGetReport.prototype, "dateEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_start" }),
        __metadata("design:type", Date)
    ], VerifyApiResponseGetReport.prototype, "dateStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=include_subaccounts" }),
        __metadata("design:type", Boolean)
    ], VerifyApiResponseGetReport.prototype, "includeSubaccounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], VerifyApiResponseGetReport.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], VerifyApiResponseGetReport.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], VerifyApiResponseGetReport.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=receive_time" }),
        __metadata("design:type", Date)
    ], VerifyApiResponseGetReport.prototype, "receiveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], VerifyApiResponseGetReport.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], VerifyApiResponseGetReport.prototype, "requestStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], VerifyApiResponseGetReport.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], VerifyApiResponseGetReport.prototype, "to", void 0);
    return VerifyApiResponseGetReport;
}(utils_1.SpeakeasyBase));
exports.VerifyApiResponseGetReport = VerifyApiResponseGetReport;

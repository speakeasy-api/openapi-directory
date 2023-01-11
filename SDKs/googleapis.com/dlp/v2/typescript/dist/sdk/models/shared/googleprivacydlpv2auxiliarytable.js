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
exports.GooglePrivacyDlpV2AuxiliaryTable = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2quasiidfield_1 = require("./googleprivacydlpv2quasiidfield");
var googleprivacydlpv2fieldid_1 = require("./googleprivacydlpv2fieldid");
var googleprivacydlpv2bigquerytable_1 = require("./googleprivacydlpv2bigquerytable");
// GooglePrivacyDlpV2AuxiliaryTable
/**
 * An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
**/
var GooglePrivacyDlpV2AuxiliaryTable = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2AuxiliaryTable, _super);
    function GooglePrivacyDlpV2AuxiliaryTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quasiIds", elemType: googleprivacydlpv2quasiidfield_1.GooglePrivacyDlpV2QuasiIdField }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2AuxiliaryTable.prototype, "quasiIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relativeFrequency" }),
        __metadata("design:type", googleprivacydlpv2fieldid_1.GooglePrivacyDlpV2FieldId)
    ], GooglePrivacyDlpV2AuxiliaryTable.prototype, "relativeFrequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=table" }),
        __metadata("design:type", googleprivacydlpv2bigquerytable_1.GooglePrivacyDlpV2BigQueryTable)
    ], GooglePrivacyDlpV2AuxiliaryTable.prototype, "table", void 0);
    return GooglePrivacyDlpV2AuxiliaryTable;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2AuxiliaryTable = GooglePrivacyDlpV2AuxiliaryTable;

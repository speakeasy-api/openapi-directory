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
exports.GooglePrivacyDlpV2LDiversityEquivalenceClass = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2value_1 = require("./googleprivacydlpv2value");
var googleprivacydlpv2valuefrequency_1 = require("./googleprivacydlpv2valuefrequency");
// GooglePrivacyDlpV2LDiversityEquivalenceClass
/**
 * The set of columns' values that share the same ldiversity value.
**/
var GooglePrivacyDlpV2LDiversityEquivalenceClass = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2LDiversityEquivalenceClass, _super);
    function GooglePrivacyDlpV2LDiversityEquivalenceClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=equivalenceClassSize" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2LDiversityEquivalenceClass.prototype, "equivalenceClassSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numDistinctSensitiveValues" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2LDiversityEquivalenceClass.prototype, "numDistinctSensitiveValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quasiIdsValues", elemType: googleprivacydlpv2value_1.GooglePrivacyDlpV2Value }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2LDiversityEquivalenceClass.prototype, "quasiIdsValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topSensitiveValues", elemType: googleprivacydlpv2valuefrequency_1.GooglePrivacyDlpV2ValueFrequency }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2LDiversityEquivalenceClass.prototype, "topSensitiveValues", void 0);
    return GooglePrivacyDlpV2LDiversityEquivalenceClass;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2LDiversityEquivalenceClass = GooglePrivacyDlpV2LDiversityEquivalenceClass;

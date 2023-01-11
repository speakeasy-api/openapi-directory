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
exports.UpgradeOccurrence = void 0;
var utils_1 = require("../../../internal/utils");
var upgradedistribution_1 = require("./upgradedistribution");
var version_1 = require("./version");
var windowsupdate_1 = require("./windowsupdate");
// UpgradeOccurrence
/**
 * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
**/
var UpgradeOccurrence = /** @class */ (function (_super) {
    __extends(UpgradeOccurrence, _super);
    function UpgradeOccurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=distribution" }),
        __metadata("design:type", upgradedistribution_1.UpgradeDistribution)
    ], UpgradeOccurrence.prototype, "distribution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=package" }),
        __metadata("design:type", String)
    ], UpgradeOccurrence.prototype, "package", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parsedVersion" }),
        __metadata("design:type", version_1.Version)
    ], UpgradeOccurrence.prototype, "parsedVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=windowsUpdate" }),
        __metadata("design:type", windowsupdate_1.WindowsUpdate)
    ], UpgradeOccurrence.prototype, "windowsUpdate", void 0);
    return UpgradeOccurrence;
}(utils_1.SpeakeasyBase));
exports.UpgradeOccurrence = UpgradeOccurrence;

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
exports.TestSetup = void 0;
var utils_1 = require("../../../internal/utils");
var account_1 = require("./account");
var apk_1 = require("./apk");
var environmentvariable_1 = require("./environmentvariable");
var devicefile_1 = require("./devicefile");
var systracesetup_1 = require("./systracesetup");
// TestSetup
/**
 * A description of how to set up the Android device prior to running the test.
**/
var TestSetup = /** @class */ (function (_super) {
    __extends(TestSetup, _super);
    function TestSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", account_1.Account)
    ], TestSetup.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalApks", elemType: apk_1.Apk }),
        __metadata("design:type", Array)
    ], TestSetup.prototype, "additionalApks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directoriesToPull" }),
        __metadata("design:type", Array)
    ], TestSetup.prototype, "directoriesToPull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dontAutograntPermissions" }),
        __metadata("design:type", Boolean)
    ], TestSetup.prototype, "dontAutograntPermissions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environmentVariables", elemType: environmentvariable_1.EnvironmentVariable }),
        __metadata("design:type", Array)
    ], TestSetup.prototype, "environmentVariables", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filesToPush", elemType: devicefile_1.DeviceFile }),
        __metadata("design:type", Array)
    ], TestSetup.prototype, "filesToPush", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkProfile" }),
        __metadata("design:type", String)
    ], TestSetup.prototype, "networkProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=systrace" }),
        __metadata("design:type", systracesetup_1.SystraceSetup)
    ], TestSetup.prototype, "systrace", void 0);
    return TestSetup;
}(utils_1.SpeakeasyBase));
exports.TestSetup = TestSetup;

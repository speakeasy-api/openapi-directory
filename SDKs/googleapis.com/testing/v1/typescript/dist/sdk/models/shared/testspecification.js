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
exports.TestSpecification = void 0;
var utils_1 = require("../../../internal/utils");
var androidinstrumentationtest_1 = require("./androidinstrumentationtest");
var androidrobotest_1 = require("./androidrobotest");
var androidtestloop_1 = require("./androidtestloop");
var iostestloop_1 = require("./iostestloop");
var iostestsetup_1 = require("./iostestsetup");
var iosxctest_1 = require("./iosxctest");
var testsetup_1 = require("./testsetup");
// TestSpecification
/**
 * A description of how to run the test.
**/
var TestSpecification = /** @class */ (function (_super) {
    __extends(TestSpecification, _super);
    function TestSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=androidInstrumentationTest" }),
        __metadata("design:type", androidinstrumentationtest_1.AndroidInstrumentationTest)
    ], TestSpecification.prototype, "androidInstrumentationTest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=androidRoboTest" }),
        __metadata("design:type", androidrobotest_1.AndroidRoboTest)
    ], TestSpecification.prototype, "androidRoboTest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=androidTestLoop" }),
        __metadata("design:type", androidtestloop_1.AndroidTestLoop)
    ], TestSpecification.prototype, "androidTestLoop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disablePerformanceMetrics" }),
        __metadata("design:type", Boolean)
    ], TestSpecification.prototype, "disablePerformanceMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disableVideoRecording" }),
        __metadata("design:type", Boolean)
    ], TestSpecification.prototype, "disableVideoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iosTestLoop" }),
        __metadata("design:type", iostestloop_1.IosTestLoop)
    ], TestSpecification.prototype, "iosTestLoop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iosTestSetup" }),
        __metadata("design:type", iostestsetup_1.IosTestSetup)
    ], TestSpecification.prototype, "iosTestSetup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iosXcTest" }),
        __metadata("design:type", iosxctest_1.IosXcTest)
    ], TestSpecification.prototype, "iosXcTest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=testSetup" }),
        __metadata("design:type", testsetup_1.TestSetup)
    ], TestSpecification.prototype, "testSetup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=testTimeout" }),
        __metadata("design:type", String)
    ], TestSpecification.prototype, "testTimeout", void 0);
    return TestSpecification;
}(utils_1.SpeakeasyBase));
exports.TestSpecification = TestSpecification;

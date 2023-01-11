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
exports.IosTest = void 0;
var utils_1 = require("../../../internal/utils");
var iosappinfo_1 = require("./iosappinfo");
var iostestloop_1 = require("./iostestloop");
var iosxctest_1 = require("./iosxctest");
var duration_1 = require("./duration");
// IosTest
/**
 * A iOS mobile test specification
**/
var IosTest = /** @class */ (function (_super) {
    __extends(IosTest, _super);
    function IosTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iosAppInfo" }),
        __metadata("design:type", iosappinfo_1.IosAppInfo)
    ], IosTest.prototype, "iosAppInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iosRoboTest" }),
        __metadata("design:type", Object)
    ], IosTest.prototype, "iosRoboTest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iosTestLoop" }),
        __metadata("design:type", iostestloop_1.IosTestLoop)
    ], IosTest.prototype, "iosTestLoop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iosXcTest" }),
        __metadata("design:type", iosxctest_1.IosXcTest)
    ], IosTest.prototype, "iosXcTest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=testTimeout" }),
        __metadata("design:type", duration_1.Duration)
    ], IosTest.prototype, "testTimeout", void 0);
    return IosTest;
}(utils_1.SpeakeasyBase));
exports.IosTest = IosTest;

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
exports.LighthouseResultV5 = void 0;
var utils_1 = require("../../../internal/utils");
var lighthouseauditresultv5_1 = require("./lighthouseauditresultv5");
var categories_1 = require("./categories");
var categorygroupv5_1 = require("./categorygroupv5");
var configsettings_1 = require("./configsettings");
var environment_1 = require("./environment");
var i18n_1 = require("./i18n");
var runtimeerror_1 = require("./runtimeerror");
var stackpack_1 = require("./stackpack");
var timing_1 = require("./timing");
// LighthouseResultV5
/**
 * The Lighthouse result object.
**/
var LighthouseResultV5 = /** @class */ (function (_super) {
    __extends(LighthouseResultV5, _super);
    function LighthouseResultV5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audits", elemType: lighthouseauditresultv5_1.LighthouseAuditResultV5 }),
        __metadata("design:type", Object)
    ], LighthouseResultV5.prototype, "audits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", categories_1.Categories)
    ], LighthouseResultV5.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryGroups", elemType: categorygroupv5_1.CategoryGroupV5 }),
        __metadata("design:type", Object)
    ], LighthouseResultV5.prototype, "categoryGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configSettings" }),
        __metadata("design:type", configsettings_1.ConfigSettings)
    ], LighthouseResultV5.prototype, "configSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", environment_1.Environment)
    ], LighthouseResultV5.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fetchTime" }),
        __metadata("design:type", String)
    ], LighthouseResultV5.prototype, "fetchTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finalUrl" }),
        __metadata("design:type", String)
    ], LighthouseResultV5.prototype, "finalUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=i18n" }),
        __metadata("design:type", i18n_1.I18n)
    ], LighthouseResultV5.prototype, "i18n", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lighthouseVersion" }),
        __metadata("design:type", String)
    ], LighthouseResultV5.prototype, "lighthouseVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedUrl" }),
        __metadata("design:type", String)
    ], LighthouseResultV5.prototype, "requestedUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runWarnings" }),
        __metadata("design:type", Array)
    ], LighthouseResultV5.prototype, "runWarnings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runtimeError" }),
        __metadata("design:type", runtimeerror_1.RuntimeError)
    ], LighthouseResultV5.prototype, "runtimeError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stackPacks", elemType: stackpack_1.StackPack }),
        __metadata("design:type", Array)
    ], LighthouseResultV5.prototype, "stackPacks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timing" }),
        __metadata("design:type", timing_1.Timing)
    ], LighthouseResultV5.prototype, "timing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userAgent" }),
        __metadata("design:type", String)
    ], LighthouseResultV5.prototype, "userAgent", void 0);
    return LighthouseResultV5;
}(utils_1.SpeakeasyBase));
exports.LighthouseResultV5 = LighthouseResultV5;

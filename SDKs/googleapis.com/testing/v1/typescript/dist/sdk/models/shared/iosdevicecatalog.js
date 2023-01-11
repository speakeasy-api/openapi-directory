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
exports.IosDeviceCatalog = void 0;
var utils_1 = require("../../../internal/utils");
var iosmodel_1 = require("./iosmodel");
var iosruntimeconfiguration_1 = require("./iosruntimeconfiguration");
var iosversion_1 = require("./iosversion");
var xcodeversion_1 = require("./xcodeversion");
// IosDeviceCatalog
/**
 * The currently supported iOS devices.
**/
var IosDeviceCatalog = /** @class */ (function (_super) {
    __extends(IosDeviceCatalog, _super);
    function IosDeviceCatalog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=models", elemType: iosmodel_1.IosModel }),
        __metadata("design:type", Array)
    ], IosDeviceCatalog.prototype, "models", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runtimeConfiguration" }),
        __metadata("design:type", iosruntimeconfiguration_1.IosRuntimeConfiguration)
    ], IosDeviceCatalog.prototype, "runtimeConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=versions", elemType: iosversion_1.IosVersion }),
        __metadata("design:type", Array)
    ], IosDeviceCatalog.prototype, "versions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=xcodeVersions", elemType: xcodeversion_1.XcodeVersion }),
        __metadata("design:type", Array)
    ], IosDeviceCatalog.prototype, "xcodeVersions", void 0);
    return IosDeviceCatalog;
}(utils_1.SpeakeasyBase));
exports.IosDeviceCatalog = IosDeviceCatalog;

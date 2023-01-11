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
exports.EnvironmentInput = exports.Environment = void 0;
var utils_1 = require("../../../internal/utils");
var containerimage_1 = require("./containerimage");
var vmimage_1 = require("./vmimage");
// Environment
/**
 * Definition of a software environment that is used to start a notebook instance.
**/
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=containerImage" }),
        __metadata("design:type", containerimage_1.ContainerImage)
    ], Environment.prototype, "containerImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Environment.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Environment.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Environment.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Environment.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postStartupScript" }),
        __metadata("design:type", String)
    ], Environment.prototype, "postStartupScript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmImage" }),
        __metadata("design:type", vmimage_1.VmImage)
    ], Environment.prototype, "vmImage", void 0);
    return Environment;
}(utils_1.SpeakeasyBase));
exports.Environment = Environment;
// EnvironmentInput
/**
 * Definition of a software environment that is used to start a notebook instance.
**/
var EnvironmentInput = /** @class */ (function (_super) {
    __extends(EnvironmentInput, _super);
    function EnvironmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=containerImage" }),
        __metadata("design:type", containerimage_1.ContainerImage)
    ], EnvironmentInput.prototype, "containerImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postStartupScript" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "postStartupScript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmImage" }),
        __metadata("design:type", vmimage_1.VmImage)
    ], EnvironmentInput.prototype, "vmImage", void 0);
    return EnvironmentInput;
}(utils_1.SpeakeasyBase));
exports.EnvironmentInput = EnvironmentInput;

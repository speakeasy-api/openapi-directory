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
exports.AssetInput = exports.Asset = void 0;
var utils_1 = require("../../../internal/utils");
var changedby_1 = require("./changedby");
var cookies_1 = require("./cookies");
var headers_1 = require("./headers");
var verificationmethodenum_1 = require("./verificationmethodenum");
// Asset
/**
 * Secondary domain of a target
**/
var Asset = /** @class */ (function (_super) {
    __extends(Asset, _super);
    function Asset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changed" }),
        __metadata("design:type", Date)
    ], Asset.prototype, "changed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changed_by" }),
        __metadata("design:type", changedby_1.ChangedBy)
    ], Asset.prototype, "changedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookies", elemType: cookies_1.Cookies }),
        __metadata("design:type", Array)
    ], Asset.prototype, "cookies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], Asset.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: headers_1.Headers }),
        __metadata("design:type", Array)
    ], Asset.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], Asset.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Asset.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=include" }),
        __metadata("design:type", Boolean)
    ], Asset.prototype, "include", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Asset.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stack" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "stack", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification_date" }),
        __metadata("design:type", Date)
    ], Asset.prototype, "verificationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification_last_error" }),
        __metadata("design:type", String)
    ], Asset.prototype, "verificationLastError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification_method" }),
        __metadata("design:type", String)
    ], Asset.prototype, "verificationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification_token" }),
        __metadata("design:type", String)
    ], Asset.prototype, "verificationToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], Asset.prototype, "verified", void 0);
    return Asset;
}(utils_1.SpeakeasyBase));
exports.Asset = Asset;
// AssetInput
/**
 * Secondary domain of a target
**/
var AssetInput = /** @class */ (function (_super) {
    __extends(AssetInput, _super);
    function AssetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookies", elemType: cookies_1.Cookies }),
        __metadata("design:type", Array)
    ], AssetInput.prototype, "cookies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], AssetInput.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: headers_1.Headers }),
        __metadata("design:type", Array)
    ], AssetInput.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], AssetInput.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=include" }),
        __metadata("design:type", Boolean)
    ], AssetInput.prototype, "include", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AssetInput.prototype, "name", void 0);
    return AssetInput;
}(utils_1.SpeakeasyBase));
exports.AssetInput = AssetInput;

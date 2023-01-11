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
exports.OptimadeError = exports.OptimadeErrorErrorSource = exports.OptimadeErrorErrorLinks = void 0;
var utils_1 = require("../../../internal/utils");
// OptimadeErrorErrorLinks
/**
 * A Links object specific to Error objects
**/
var OptimadeErrorErrorLinks = /** @class */ (function (_super) {
    __extends(OptimadeErrorErrorLinks, _super);
    function OptimadeErrorErrorLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=about" }),
        __metadata("design:type", Object)
    ], OptimadeErrorErrorLinks.prototype, "about", void 0);
    return OptimadeErrorErrorLinks;
}(utils_1.SpeakeasyBase));
exports.OptimadeErrorErrorLinks = OptimadeErrorErrorLinks;
// OptimadeErrorErrorSource
/**
 * an object containing references to the source of the error
**/
var OptimadeErrorErrorSource = /** @class */ (function (_super) {
    __extends(OptimadeErrorErrorSource, _super);
    function OptimadeErrorErrorSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], OptimadeErrorErrorSource.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], OptimadeErrorErrorSource.prototype, "pointer", void 0);
    return OptimadeErrorErrorSource;
}(utils_1.SpeakeasyBase));
exports.OptimadeErrorErrorSource = OptimadeErrorErrorSource;
// OptimadeError
/**
 * detail MUST be present
**/
var OptimadeError = /** @class */ (function (_super) {
    __extends(OptimadeError, _super);
    function OptimadeError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], OptimadeError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], OptimadeError.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OptimadeError.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", OptimadeErrorErrorLinks)
    ], OptimadeError.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], OptimadeError.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", OptimadeErrorErrorSource)
    ], OptimadeError.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OptimadeError.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OptimadeError.prototype, "title", void 0);
    return OptimadeError;
}(utils_1.SpeakeasyBase));
exports.OptimadeError = OptimadeError;

"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.OBReadParty3 = void 0;
var utils_1 = require("../../../internal/utils");
var links_1 = require("./links");
var meta_1 = require("./meta");
var obreaddataparty3_1 = require("./obreaddataparty3");
var class_transformer_1 = require("class-transformer");
/**
 * Party Read
 */
var OBReadParty3 = /** @class */ (function (_super) {
    __extends(OBReadParty3, _super);
    function OBReadParty3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Data" }),
        (0, class_transformer_1.Type)(function () { return obreaddataparty3_1.OBReadDataParty3; }),
        __metadata("design:type", obreaddataparty3_1.OBReadDataParty3)
    ], OBReadParty3.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Links" }),
        (0, class_transformer_1.Type)(function () { return links_1.Links; }),
        __metadata("design:type", links_1.Links)
    ], OBReadParty3.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Meta" }),
        (0, class_transformer_1.Type)(function () { return meta_1.Meta; }),
        __metadata("design:type", meta_1.Meta)
    ], OBReadParty3.prototype, "meta", void 0);
    return OBReadParty3;
}(utils_1.SpeakeasyBase));
exports.OBReadParty3 = OBReadParty3;

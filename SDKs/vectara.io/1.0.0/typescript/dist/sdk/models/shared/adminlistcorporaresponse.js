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
exports.AdminListCorporaResponse = void 0;
var utils_1 = require("../../../internal/utils");
var admincorpus_1 = require("./admincorpus");
var comvectarastatus_1 = require("./comvectarastatus");
var class_transformer_1 = require("class-transformer");
/**
 * A successful response.
 */
var AdminListCorporaResponse = /** @class */ (function (_super) {
    __extends(AdminListCorporaResponse, _super);
    function AdminListCorporaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: admincorpus_1.AdminCorpus }),
        (0, class_transformer_1.Expose)({ name: "corpus" }),
        (0, class_transformer_1.Type)(function () { return admincorpus_1.AdminCorpus; }),
        __metadata("design:type", Array)
    ], AdminListCorporaResponse.prototype, "corpus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "pageKey" }),
        __metadata("design:type", String)
    ], AdminListCorporaResponse.prototype, "pageKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        (0, class_transformer_1.Type)(function () { return comvectarastatus_1.ComvectaraStatus; }),
        __metadata("design:type", comvectarastatus_1.ComvectaraStatus)
    ], AdminListCorporaResponse.prototype, "status", void 0);
    return AdminListCorporaResponse;
}(utils_1.SpeakeasyBase));
exports.AdminListCorporaResponse = AdminListCorporaResponse;

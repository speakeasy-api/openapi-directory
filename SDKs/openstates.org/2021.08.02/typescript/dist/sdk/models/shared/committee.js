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
exports.Committee = void 0;
var utils_1 = require("../../../internal/utils");
var committeeclassificationenum_1 = require("./committeeclassificationenum");
var link_1 = require("./link");
var committeemembership_1 = require("./committeemembership");
var altname_1 = require("./altname");
var Committee = /** @class */ (function (_super) {
    __extends(Committee, _super);
    function Committee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification" }),
        __metadata("design:type", String)
    ], Committee.prototype, "classification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extras" }),
        __metadata("design:type", Object)
    ], Committee.prototype, "extras", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Committee.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links", elemType: link_1.Link }),
        __metadata("design:type", Array)
    ], Committee.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memberships", elemType: committeemembership_1.CommitteeMembership }),
        __metadata("design:type", Array)
    ], Committee.prototype, "memberships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Committee.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=other_names", elemType: altname_1.AltName }),
        __metadata("design:type", Array)
    ], Committee.prototype, "otherNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_id" }),
        __metadata("design:type", String)
    ], Committee.prototype, "parentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sources", elemType: link_1.Link }),
        __metadata("design:type", Array)
    ], Committee.prototype, "sources", void 0);
    return Committee;
}(utils_1.SpeakeasyBase));
exports.Committee = Committee;

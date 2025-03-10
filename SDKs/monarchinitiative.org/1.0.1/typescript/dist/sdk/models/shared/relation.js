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
exports.Relation = void 0;
var utils_1 = require("../../../internal/utils");
var synonympropertyvalue_1 = require("./synonympropertyvalue");
var Relation = /** @class */ (function (_super) {
    __extends(Relation, _super);
    function Relation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", Array)
    ], Relation.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consider" }),
        __metadata("design:type", Array)
    ], Relation.prototype, "consider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deprecated" }),
        __metadata("design:type", Boolean)
    ], Relation.prototype, "deprecated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Relation.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Relation.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iri" }),
        __metadata("design:type", String)
    ], Relation.prototype, "iri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Relation.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replaced_by" }),
        __metadata("design:type", Array)
    ], Relation.prototype, "replacedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=synonyms", elemType: synonympropertyvalue_1.SynonymPropertyValue }),
        __metadata("design:type", Array)
    ], Relation.prototype, "synonyms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], Relation.prototype, "types", void 0);
    return Relation;
}(utils_1.SpeakeasyBase));
exports.Relation = Relation;

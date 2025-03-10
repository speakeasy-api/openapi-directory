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
exports.Rule = exports.RuleTags = void 0;
var utils_1 = require("../../../internal/utils");
var ruletargets_1 = require("./ruletargets");
var RuleTags = /** @class */ (function (_super) {
    __extends(RuleTags, _super);
    function RuleTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RuleTags.prototype, "name", void 0);
    return RuleTags;
}(utils_1.SpeakeasyBase));
exports.RuleTags = RuleTags;
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directives" }),
        __metadata("design:type", Array)
    ], Rule.prototype, "directives", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Rule.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], Rule.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Rule.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=longDescription" }),
        __metadata("design:type", String)
    ], Rule.prototype, "longDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], Rule.prototype, "shortDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=system" }),
        __metadata("design:type", Boolean)
    ], Rule.prototype, "system", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: RuleTags }),
        __metadata("design:type", Array)
    ], Rule.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targets", elemType: ruletargets_1.RuleTargets }),
        __metadata("design:type", Array)
    ], Rule.prototype, "targets", void 0);
    return Rule;
}(utils_1.SpeakeasyBase));
exports.Rule = Rule;

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
exports.SimMatch = void 0;
var utils_1 = require("../../../internal/utils");
var pairwisematch_1 = require("./pairwisematch");
var node_1 = require("./node");
var SimMatch = /** @class */ (function (_super) {
    __extends(SimMatch, _super);
    function SimMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SimMatch.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], SimMatch.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pairwise_match", elemType: pairwisematch_1.PairwiseMatch }),
        __metadata("design:type", Array)
    ], SimMatch.prototype, "pairwiseMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rank" }),
        __metadata("design:type", String)
    ], SimMatch.prototype, "rank", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], SimMatch.prototype, "score", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=significance" }),
        __metadata("design:type", String)
    ], SimMatch.prototype, "significance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxon" }),
        __metadata("design:type", node_1.Node)
    ], SimMatch.prototype, "taxon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SimMatch.prototype, "type", void 0);
    return SimMatch;
}(utils_1.SpeakeasyBase));
exports.SimMatch = SimMatch;

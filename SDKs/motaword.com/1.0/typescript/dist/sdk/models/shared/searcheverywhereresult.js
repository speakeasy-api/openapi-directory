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
exports.SearchEverywhereResult = exports.SearchEverywhereResultResult = void 0;
var utils_1 = require("../../../internal/utils");
var documentinsearch_1 = require("./documentinsearch");
var projectinsearch_1 = require("./projectinsearch");
var stringinsearch_1 = require("./stringinsearch");
var pagingmeta_1 = require("./pagingmeta");
var SearchEverywhereResultResult = /** @class */ (function (_super) {
    __extends(SearchEverywhereResultResult, _super);
    function SearchEverywhereResultResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documents", elemType: documentinsearch_1.DocumentInSearch }),
        __metadata("design:type", Array)
    ], SearchEverywhereResultResult.prototype, "documents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projects", elemType: projectinsearch_1.ProjectInSearch }),
        __metadata("design:type", Array)
    ], SearchEverywhereResultResult.prototype, "projects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=strings", elemType: stringinsearch_1.StringInSearch }),
        __metadata("design:type", Array)
    ], SearchEverywhereResultResult.prototype, "strings", void 0);
    return SearchEverywhereResultResult;
}(utils_1.SpeakeasyBase));
exports.SearchEverywhereResultResult = SearchEverywhereResultResult;
var SearchEverywhereResult = /** @class */ (function (_super) {
    __extends(SearchEverywhereResult, _super);
    function SearchEverywhereResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", pagingmeta_1.PagingMeta)
    ], SearchEverywhereResult.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", SearchEverywhereResultResult)
    ], SearchEverywhereResult.prototype, "result", void 0);
    return SearchEverywhereResult;
}(utils_1.SpeakeasyBase));
exports.SearchEverywhereResult = SearchEverywhereResult;

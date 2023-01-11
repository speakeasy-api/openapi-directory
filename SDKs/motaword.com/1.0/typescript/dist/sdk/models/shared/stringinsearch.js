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
exports.StringInSearch = exports.StringInSearchTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var stringtranslationstateenum_1 = require("./stringtranslationstateenum");
var StringInSearchTypeEnum;
(function (StringInSearchTypeEnum) {
    StringInSearchTypeEnum["LocalProject"] = "LOCAL_PROJECT";
    StringInSearchTypeEnum["ImportedTm"] = "IMPORTED_TM";
})(StringInSearchTypeEnum = exports.StringInSearchTypeEnum || (exports.StringInSearchTypeEnum = {}));
var StringInSearch = /** @class */ (function (_super) {
    __extends(StringInSearch, _super);
    function StringInSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_id" }),
        __metadata("design:type", Number)
    ], StringInSearch.prototype, "fileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=internal_project_id" }),
        __metadata("design:type", Number)
    ], StringInSearch.prototype, "internalProjectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], StringInSearch.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project_id" }),
        __metadata("design:type", Number)
    ], StringInSearch.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_score" }),
        __metadata("design:type", Number)
    ], StringInSearch.prototype, "searchScore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], StringInSearch.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], StringInSearch.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=string_id" }),
        __metadata("design:type", Number)
    ], StringInSearch.prototype, "stringId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], StringInSearch.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targets" }),
        __metadata("design:type", Array)
    ], StringInSearch.prototype, "targets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tm_name" }),
        __metadata("design:type", String)
    ], StringInSearch.prototype, "tmName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], StringInSearch.prototype, "type", void 0);
    return StringInSearch;
}(utils_1.SpeakeasyBase));
exports.StringInSearch = StringInSearch;

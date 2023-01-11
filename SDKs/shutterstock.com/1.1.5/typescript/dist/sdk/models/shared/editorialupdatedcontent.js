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
exports.EditorialUpdatedContent = exports.EditorialUpdatedContentRights = void 0;
var utils_1 = require("../../../internal/utils");
var editorialassets_1 = require("./editorialassets");
var editorialcategory_1 = require("./editorialcategory");
var EditorialUpdatedContentRights = /** @class */ (function (_super) {
    __extends(EditorialUpdatedContentRights, _super);
    function EditorialUpdatedContentRights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countries" }),
        __metadata("design:type", String)
    ], EditorialUpdatedContentRights.prototype, "countries", void 0);
    return EditorialUpdatedContentRights;
}(utils_1.SpeakeasyBase));
exports.EditorialUpdatedContentRights = EditorialUpdatedContentRights;
// EditorialUpdatedContent
/**
 * Metadata about updated editorial content
**/
var EditorialUpdatedContent = /** @class */ (function (_super) {
    __extends(EditorialUpdatedContent, _super);
    function EditorialUpdatedContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspect" }),
        __metadata("design:type", Number)
    ], EditorialUpdatedContent.prototype, "aspect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", editorialassets_1.EditorialAssets)
    ], EditorialUpdatedContent.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=byline" }),
        __metadata("design:type", String)
    ], EditorialUpdatedContent.prototype, "byline", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], EditorialUpdatedContent.prototype, "caption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories", elemType: editorialcategory_1.EditorialCategory }),
        __metadata("design:type", Array)
    ], EditorialUpdatedContent.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commercial_status" }),
        __metadata("design:type", Object)
    ], EditorialUpdatedContent.prototype, "commercialStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", Date)
    ], EditorialUpdatedContent.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_taken" }),
        __metadata("design:type", Date)
    ], EditorialUpdatedContent.prototype, "dateTaken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EditorialUpdatedContent.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EditorialUpdatedContent.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], EditorialUpdatedContent.prototype, "keywords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rights" }),
        __metadata("design:type", EditorialUpdatedContentRights)
    ], EditorialUpdatedContent.prototype, "rights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=special_instructions" }),
        __metadata("design:type", String)
    ], EditorialUpdatedContent.prototype, "specialInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=supplier_code" }),
        __metadata("design:type", String)
    ], EditorialUpdatedContent.prototype, "supplierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], EditorialUpdatedContent.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_time" }),
        __metadata("design:type", Date)
    ], EditorialUpdatedContent.prototype, "updatedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updates" }),
        __metadata("design:type", Array)
    ], EditorialUpdatedContent.prototype, "updates", void 0);
    return EditorialUpdatedContent;
}(utils_1.SpeakeasyBase));
exports.EditorialUpdatedContent = EditorialUpdatedContent;

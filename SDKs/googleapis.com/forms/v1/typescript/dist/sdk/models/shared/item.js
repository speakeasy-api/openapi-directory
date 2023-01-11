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
exports.Item = exports.ItemInput = void 0;
var utils_1 = require("../../../internal/utils");
var imageitem_1 = require("./imageitem");
var questiongroupitem_1 = require("./questiongroupitem");
var questionitem_1 = require("./questionitem");
var videoitem_1 = require("./videoitem");
var imageitem_2 = require("./imageitem");
var questiongroupitem_2 = require("./questiongroupitem");
var questionitem_2 = require("./questionitem");
// ItemInput
/**
 * A single item of the form. `kind` defines which kind of item it is.
**/
var ItemInput = /** @class */ (function (_super) {
    __extends(ItemInput, _super);
    function ItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageItem" }),
        __metadata("design:type", imageitem_1.ImageItemInput)
    ], ItemInput.prototype, "imageItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemId" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "itemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageBreakItem" }),
        __metadata("design:type", Object)
    ], ItemInput.prototype, "pageBreakItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questionGroupItem" }),
        __metadata("design:type", questiongroupitem_1.QuestionGroupItemInput)
    ], ItemInput.prototype, "questionGroupItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questionItem" }),
        __metadata("design:type", questionitem_1.QuestionItemInput)
    ], ItemInput.prototype, "questionItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=textItem" }),
        __metadata("design:type", Object)
    ], ItemInput.prototype, "textItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videoItem" }),
        __metadata("design:type", videoitem_1.VideoItem)
    ], ItemInput.prototype, "videoItem", void 0);
    return ItemInput;
}(utils_1.SpeakeasyBase));
exports.ItemInput = ItemInput;
// Item
/**
 * A single item of the form. `kind` defines which kind of item it is.
**/
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Item.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageItem" }),
        __metadata("design:type", imageitem_2.ImageItem)
    ], Item.prototype, "imageItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemId" }),
        __metadata("design:type", String)
    ], Item.prototype, "itemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageBreakItem" }),
        __metadata("design:type", Object)
    ], Item.prototype, "pageBreakItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questionGroupItem" }),
        __metadata("design:type", questiongroupitem_2.QuestionGroupItem)
    ], Item.prototype, "questionGroupItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questionItem" }),
        __metadata("design:type", questionitem_2.QuestionItem)
    ], Item.prototype, "questionItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=textItem" }),
        __metadata("design:type", Object)
    ], Item.prototype, "textItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Item.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videoItem" }),
        __metadata("design:type", videoitem_1.VideoItem)
    ], Item.prototype, "videoItem", void 0);
    return Item;
}(utils_1.SpeakeasyBase));
exports.Item = Item;

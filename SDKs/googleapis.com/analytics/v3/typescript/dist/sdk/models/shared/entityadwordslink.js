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
exports.EntityAdWordsLink = exports.EntityAdWordsLinkEntity = void 0;
var utils_1 = require("../../../internal/utils");
var webpropertyref_1 = require("./webpropertyref");
var adwordsaccount_1 = require("./adwordsaccount");
// EntityAdWordsLinkEntity
/**
 * Web property being linked.
**/
var EntityAdWordsLinkEntity = /** @class */ (function (_super) {
    __extends(EntityAdWordsLinkEntity, _super);
    function EntityAdWordsLinkEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webPropertyRef" }),
        __metadata("design:type", webpropertyref_1.WebPropertyRef)
    ], EntityAdWordsLinkEntity.prototype, "webPropertyRef", void 0);
    return EntityAdWordsLinkEntity;
}(utils_1.SpeakeasyBase));
exports.EntityAdWordsLinkEntity = EntityAdWordsLinkEntity;
// EntityAdWordsLink
/**
 * JSON template for Analytics Entity Google Ads Link.
**/
var EntityAdWordsLink = /** @class */ (function (_super) {
    __extends(EntityAdWordsLink, _super);
    function EntityAdWordsLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adWordsAccounts", elemType: adwordsaccount_1.AdWordsAccount }),
        __metadata("design:type", Array)
    ], EntityAdWordsLink.prototype, "adWordsAccounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entity" }),
        __metadata("design:type", EntityAdWordsLinkEntity)
    ], EntityAdWordsLink.prototype, "entity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EntityAdWordsLink.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], EntityAdWordsLink.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EntityAdWordsLink.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profileIds" }),
        __metadata("design:type", Array)
    ], EntityAdWordsLink.prototype, "profileIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], EntityAdWordsLink.prototype, "selfLink", void 0);
    return EntityAdWordsLink;
}(utils_1.SpeakeasyBase));
exports.EntityAdWordsLink = EntityAdWordsLink;

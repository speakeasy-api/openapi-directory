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
exports.Attraction = exports.AttractionTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var classification_1 = require("./classification");
var externallink_1 = require("./externallink");
var image_1 = require("./image");
var AttractionTypeEnum;
(function (AttractionTypeEnum) {
    AttractionTypeEnum["Event"] = "event";
    AttractionTypeEnum["Venue"] = "venue";
    AttractionTypeEnum["Attraction"] = "attraction";
})(AttractionTypeEnum = exports.AttractionTypeEnum || (exports.AttractionTypeEnum = {}));
// Attraction
/**
 * Attraction
**/
var Attraction = /** @class */ (function (_super) {
    __extends(Attraction, _super);
    function Attraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Attraction.prototype, "additionalInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: classification_1.Classification }),
        __metadata("design:type", Array)
    ], Attraction.prototype, "classifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Attraction.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: externallink_1.ExternalLink, elemDepth: 2 }),
        __metadata("design:type", Object)
    ], Attraction.prototype, "externalLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Attraction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: image_1.Image }),
        __metadata("design:type", Array)
    ], Attraction.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Attraction.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Attraction.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], Attraction.prototype, "test", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Attraction.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], Attraction.prototype, "upcomingEvents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Attraction.prototype, "url", void 0);
    return Attraction;
}(utils_1.SpeakeasyBase));
exports.Attraction = Attraction;

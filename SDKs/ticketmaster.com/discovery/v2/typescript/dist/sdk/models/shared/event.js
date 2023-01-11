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
exports.Event = exports.EventTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accessibility_1 = require("./accessibility");
var classification_1 = require("./classification");
var eventdates_1 = require("./eventdates");
var externallink_1 = require("./externallink");
var image_1 = require("./image");
var location_1 = require("./location");
var outlet_1 = require("./outlet");
var place_1 = require("./place");
var pricerange_1 = require("./pricerange");
var product_1 = require("./product");
var promoter_1 = require("./promoter");
var eventsalesdates_1 = require("./eventsalesdates");
var seatmap_1 = require("./seatmap");
var EventTypeEnum;
(function (EventTypeEnum) {
    EventTypeEnum["Event"] = "event";
    EventTypeEnum["Venue"] = "venue";
    EventTypeEnum["Attraction"] = "attraction";
})(EventTypeEnum = exports.EventTypeEnum || (exports.EventTypeEnum = {}));
// Event
/**
 * Event
**/
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", accessibility_1.Accessibility)
    ], Event.prototype, "accessibility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Event.prototype, "additionalInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: classification_1.Classification }),
        __metadata("design:type", Array)
    ], Event.prototype, "classifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", eventdates_1.EventDates)
    ], Event.prototype, "dates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Event.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], Event.prototype, "distance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: externallink_1.ExternalLink, elemDepth: 2 }),
        __metadata("design:type", Object)
    ], Event.prototype, "externalLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Event.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: image_1.Image }),
        __metadata("design:type", Array)
    ], Event.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Event.prototype, "info", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Event.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", location_1.Location)
    ], Event.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Event.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: outlet_1.Outlet }),
        __metadata("design:type", Array)
    ], Event.prototype, "outlets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", place_1.Place)
    ], Event.prototype, "place", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Event.prototype, "pleaseNote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: pricerange_1.PriceRange }),
        __metadata("design:type", Array)
    ], Event.prototype, "priceRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: product_1.Product }),
        __metadata("design:type", Array)
    ], Event.prototype, "products", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", promoter_1.Promoter)
    ], Event.prototype, "promoter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: promoter_1.Promoter }),
        __metadata("design:type", Array)
    ], Event.prototype, "promoters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", eventsalesdates_1.EventSalesDates)
    ], Event.prototype, "sales", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", seatmap_1.SeatMap)
    ], Event.prototype, "seatmap", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], Event.prototype, "test", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Event.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Event.prototype, "units", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Event.prototype, "url", void 0);
    return Event;
}(utils_1.SpeakeasyBase));
exports.Event = Event;

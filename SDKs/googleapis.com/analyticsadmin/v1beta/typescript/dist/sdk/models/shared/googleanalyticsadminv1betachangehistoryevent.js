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
exports.GoogleAnalyticsAdminV1betaChangeHistoryEvent = exports.GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googleanalyticsadminv1betachangehistorychange_1 = require("./googleanalyticsadminv1betachangehistorychange");
var GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum;
(function (GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum) {
    GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum["ActorTypeUnspecified"] = "ACTOR_TYPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum["User"] = "USER";
    GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum["System"] = "SYSTEM";
    GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum["Support"] = "SUPPORT";
})(GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum = exports.GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum || (exports.GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum = {}));
// GoogleAnalyticsAdminV1betaChangeHistoryEvent
/**
 * A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
**/
var GoogleAnalyticsAdminV1betaChangeHistoryEvent = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1betaChangeHistoryEvent, _super);
    function GoogleAnalyticsAdminV1betaChangeHistoryEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actorType" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaChangeHistoryEvent.prototype, "actorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changeTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaChangeHistoryEvent.prototype, "changeTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changes", elemType: googleanalyticsadminv1betachangehistorychange_1.GoogleAnalyticsAdminV1betaChangeHistoryChange }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1betaChangeHistoryEvent.prototype, "changes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changesFiltered" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1betaChangeHistoryEvent.prototype, "changesFiltered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaChangeHistoryEvent.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userActorEmail" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaChangeHistoryEvent.prototype, "userActorEmail", void 0);
    return GoogleAnalyticsAdminV1betaChangeHistoryEvent;
}(utils_1.SpeakeasyBase));
exports.GoogleAnalyticsAdminV1betaChangeHistoryEvent = GoogleAnalyticsAdminV1betaChangeHistoryEvent;

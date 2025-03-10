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
exports.Event = void 0;
var utils_1 = require("../../../internal/utils");
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], Event.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], Event.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], Event.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", Object)
    ], Event.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Event.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization_id" }),
        __metadata("design:type", String)
    ], Event.prototype, "organizationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processed_at" }),
        __metadata("design:type", Number)
    ], Event.prototype, "processedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processor_id" }),
        __metadata("design:type", String)
    ], Event.prototype, "processorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], Event.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], Event.prototype, "sourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_name" }),
        __metadata("design:type", String)
    ], Event.prototype, "sourceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_type" }),
        __metadata("design:type", String)
    ], Event.prototype, "sourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Event.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_id" }),
        __metadata("design:type", String)
    ], Event.prototype, "targetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_name" }),
        __metadata("design:type", String)
    ], Event.prototype, "targetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_type" }),
        __metadata("design:type", String)
    ], Event.prototype, "targetType", void 0);
    return Event;
}(utils_1.SpeakeasyBase));
exports.Event = Event;

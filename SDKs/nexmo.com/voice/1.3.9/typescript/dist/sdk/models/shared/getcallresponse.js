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
exports.GetCallResponse = exports.GetCallResponseLinks = exports.GetCallResponseLinksSelf = void 0;
var utils_1 = require("../../../internal/utils");
var directionenum_1 = require("./directionenum");
var from_1 = require("./from");
var to_1 = require("./to");
var GetCallResponseLinksSelf = /** @class */ (function (_super) {
    __extends(GetCallResponseLinksSelf, _super);
    function GetCallResponseLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetCallResponseLinksSelf.prototype, "href", void 0);
    return GetCallResponseLinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetCallResponseLinksSelf = GetCallResponseLinksSelf;
var GetCallResponseLinks = /** @class */ (function (_super) {
    __extends(GetCallResponseLinks, _super);
    function GetCallResponseLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetCallResponseLinksSelf)
    ], GetCallResponseLinks.prototype, "self", void 0);
    return GetCallResponseLinks;
}(utils_1.SpeakeasyBase));
exports.GetCallResponseLinks = GetCallResponseLinks;
var GetCallResponse = /** @class */ (function (_super) {
    __extends(GetCallResponse, _super);
    function GetCallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetCallResponseLinks)
    ], GetCallResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversation_uuid" }),
        __metadata("design:type", String)
    ], GetCallResponse.prototype, "conversationUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetCallResponse.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], GetCallResponse.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", String)
    ], GetCallResponse.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", from_1.From)
    ], GetCallResponse.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], GetCallResponse.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", String)
    ], GetCallResponse.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate" }),
        __metadata("design:type", String)
    ], GetCallResponse.prototype, "rate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], GetCallResponse.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCallResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", to_1.To)
    ], GetCallResponse.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], GetCallResponse.prototype, "uuid", void 0);
    return GetCallResponse;
}(utils_1.SpeakeasyBase));
exports.GetCallResponse = GetCallResponse;

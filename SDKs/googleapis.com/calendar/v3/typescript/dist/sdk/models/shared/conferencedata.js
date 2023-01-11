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
exports.ConferenceData = void 0;
var utils_1 = require("../../../internal/utils");
var conferencesolution_1 = require("./conferencesolution");
var createconferencerequest_1 = require("./createconferencerequest");
var entrypoint_1 = require("./entrypoint");
var conferenceparameters_1 = require("./conferenceparameters");
var ConferenceData = /** @class */ (function (_super) {
    __extends(ConferenceData, _super);
    function ConferenceData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conferenceId" }),
        __metadata("design:type", String)
    ], ConferenceData.prototype, "conferenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conferenceSolution" }),
        __metadata("design:type", conferencesolution_1.ConferenceSolution)
    ], ConferenceData.prototype, "conferenceSolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createRequest" }),
        __metadata("design:type", createconferencerequest_1.CreateConferenceRequest)
    ], ConferenceData.prototype, "createRequest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entryPoints", elemType: entrypoint_1.EntryPoint }),
        __metadata("design:type", Array)
    ], ConferenceData.prototype, "entryPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], ConferenceData.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters" }),
        __metadata("design:type", conferenceparameters_1.ConferenceParameters)
    ], ConferenceData.prototype, "parameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signature" }),
        __metadata("design:type", String)
    ], ConferenceData.prototype, "signature", void 0);
    return ConferenceData;
}(utils_1.SpeakeasyBase));
exports.ConferenceData = ConferenceData;

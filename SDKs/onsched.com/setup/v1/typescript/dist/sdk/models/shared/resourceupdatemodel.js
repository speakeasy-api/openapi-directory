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
exports.ResourceUpdateModel = void 0;
var utils_1 = require("../../../internal/utils");
var addressupdatemodel_1 = require("./addressupdatemodel");
var availabilityinputmodel_1 = require("./availabilityinputmodel");
var contactupdatemodel_1 = require("./contactupdatemodel");
var customfieldupdatemodel_1 = require("./customfieldupdatemodel");
var resourceoptionsupdatemodel_1 = require("./resourceoptionsupdatemodel");
var ResourceUpdateModel = /** @class */ (function (_super) {
    __extends(ResourceUpdateModel, _super);
    function ResourceUpdateModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", addressupdatemodel_1.AddressUpdateModel)
    ], ResourceUpdateModel.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availability" }),
        __metadata("design:type", availabilityinputmodel_1.AvailabilityInputModel)
    ], ResourceUpdateModel.prototype, "availability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact" }),
        __metadata("design:type", contactupdatemodel_1.ContactUpdateModel)
    ], ResourceUpdateModel.prototype, "contact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", customfieldupdatemodel_1.CustomFieldUpdateModel)
    ], ResourceUpdateModel.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ResourceUpdateModel.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ResourceUpdateModel.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupId" }),
        __metadata("design:type", String)
    ], ResourceUpdateModel.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], ResourceUpdateModel.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ResourceUpdateModel.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", resourceoptionsupdatemodel_1.ResourceOptionsUpdateModel)
    ], ResourceUpdateModel.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceIds" }),
        __metadata("design:type", Array)
    ], ResourceUpdateModel.prototype, "serviceIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezoneId" }),
        __metadata("design:type", String)
    ], ResourceUpdateModel.prototype, "timezoneId", void 0);
    return ResourceUpdateModel;
}(utils_1.SpeakeasyBase));
exports.ResourceUpdateModel = ResourceUpdateModel;

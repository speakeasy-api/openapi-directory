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
exports.Properties = exports.PropertiesFacilityTypeEnum = exports.PropertiesActiveStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var addresses_1 = require("./addresses");
var detailedservice_1 = require("./detailedservice");
var hours_1 = require("./hours");
var operatingstatus_1 = require("./operatingstatus");
var phone_1 = require("./phone");
var satisfaction_1 = require("./satisfaction");
var services_1 = require("./services");
var waittimes_1 = require("./waittimes");
var PropertiesActiveStatusEnum;
(function (PropertiesActiveStatusEnum) {
    PropertiesActiveStatusEnum["A"] = "A";
    PropertiesActiveStatusEnum["T"] = "T";
})(PropertiesActiveStatusEnum = exports.PropertiesActiveStatusEnum || (exports.PropertiesActiveStatusEnum = {}));
var PropertiesFacilityTypeEnum;
(function (PropertiesFacilityTypeEnum) {
    PropertiesFacilityTypeEnum["VaBenefitsFacility"] = "va_benefits_facility";
    PropertiesFacilityTypeEnum["VaCemetery"] = "va_cemetery";
    PropertiesFacilityTypeEnum["VaHealthFacility"] = "va_health_facility";
    PropertiesFacilityTypeEnum["VetCenter"] = "vet_center";
})(PropertiesFacilityTypeEnum = exports.PropertiesFacilityTypeEnum || (exports.PropertiesFacilityTypeEnum = {}));
var Properties = /** @class */ (function (_super) {
    __extends(Properties, _super);
    function Properties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active_status" }),
        __metadata("design:type", String)
    ], Properties.prototype, "activeStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", addresses_1.Addresses)
    ], Properties.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification" }),
        __metadata("design:type", String)
    ], Properties.prototype, "classification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detailed_services", elemType: detailedservice_1.DetailedService }),
        __metadata("design:type", Array)
    ], Properties.prototype, "detailedServices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=facility_type" }),
        __metadata("design:type", String)
    ], Properties.prototype, "facilityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hours" }),
        __metadata("design:type", hours_1.Hours)
    ], Properties.prototype, "hours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Properties.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mobile" }),
        __metadata("design:type", Boolean)
    ], Properties.prototype, "mobile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Properties.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operating_status" }),
        __metadata("design:type", operatingstatus_1.OperatingStatus)
    ], Properties.prototype, "operatingStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operational_hours_special_instructions" }),
        __metadata("design:type", String)
    ], Properties.prototype, "operationalHoursSpecialInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", phone_1.Phone)
    ], Properties.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=satisfaction" }),
        __metadata("design:type", satisfaction_1.Satisfaction)
    ], Properties.prototype, "satisfaction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=services" }),
        __metadata("design:type", services_1.Services)
    ], Properties.prototype, "services", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_zone" }),
        __metadata("design:type", String)
    ], Properties.prototype, "timeZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visn" }),
        __metadata("design:type", String)
    ], Properties.prototype, "visn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wait_times" }),
        __metadata("design:type", waittimes_1.WaitTimes)
    ], Properties.prototype, "waitTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], Properties.prototype, "website", void 0);
    return Properties;
}(utils_1.SpeakeasyBase));
exports.Properties = Properties;

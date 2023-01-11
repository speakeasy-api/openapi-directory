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
exports.EmployeesResponse = exports.EmployeesResponseData = exports.EmployeesResponseDataAttributes = void 0;
var utils_1 = require("../../../internal/utils");
var absenceentitlement_1 = require("./absenceentitlement");
var attribute_1 = require("./attribute");
var costcenters_1 = require("./costcenters");
var department_1 = require("./department");
var holidaycalendar_1 = require("./holidaycalendar");
var office_1 = require("./office");
var supervisor_1 = require("./supervisor");
var workschedule_1 = require("./workschedule");
var EmployeesResponseDataAttributes = /** @class */ (function (_super) {
    __extends(EmployeesResponseDataAttributes, _super);
    function EmployeesResponseDataAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=absence_entitlement" }),
        __metadata("design:type", absenceentitlement_1.AbsenceEntitlement)
    ], EmployeesResponseDataAttributes.prototype, "absenceEntitlement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contract_end_date" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "contractEndDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cost_centers" }),
        __metadata("design:type", costcenters_1.CostCenters)
    ], EmployeesResponseDataAttributes.prototype, "costCenters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=department" }),
        __metadata("design:type", department_1.Department)
    ], EmployeesResponseDataAttributes.prototype, "department", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employment_type" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "employmentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fix_salary" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "fixSalary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gender" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "gender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hire_date" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "hireDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holiday_calendar" }),
        __metadata("design:type", holidaycalendar_1.HolidayCalendar)
    ], EmployeesResponseDataAttributes.prototype, "holidayCalendar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hourly_salary" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "hourlySalary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=office" }),
        __metadata("design:type", office_1.Office)
    ], EmployeesResponseDataAttributes.prototype, "office", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=probation_period_end" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "probationPeriodEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=supervisor" }),
        __metadata("design:type", supervisor_1.Supervisor)
    ], EmployeesResponseDataAttributes.prototype, "supervisor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termination_date" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "terminationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termination_reason" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "terminationReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termination_type" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "terminationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vacation_day_balance" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "vacationDayBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_working_hours" }),
        __metadata("design:type", attribute_1.Attribute)
    ], EmployeesResponseDataAttributes.prototype, "weeklyWorkingHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=work_schedule" }),
        __metadata("design:type", workschedule_1.WorkSchedule)
    ], EmployeesResponseDataAttributes.prototype, "workSchedule", void 0);
    return EmployeesResponseDataAttributes;
}(utils_1.SpeakeasyBase));
exports.EmployeesResponseDataAttributes = EmployeesResponseDataAttributes;
var EmployeesResponseData = /** @class */ (function (_super) {
    __extends(EmployeesResponseData, _super);
    function EmployeesResponseData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes", elemType: EmployeesResponseDataAttributes }),
        __metadata("design:type", Array)
    ], EmployeesResponseData.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EmployeesResponseData.prototype, "type", void 0);
    return EmployeesResponseData;
}(utils_1.SpeakeasyBase));
exports.EmployeesResponseData = EmployeesResponseData;
var EmployeesResponse = /** @class */ (function (_super) {
    __extends(EmployeesResponse, _super);
    function EmployeesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: EmployeesResponseData }),
        __metadata("design:type", Array)
    ], EmployeesResponse.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], EmployeesResponse.prototype, "success", void 0);
    return EmployeesResponse;
}(utils_1.SpeakeasyBase));
exports.EmployeesResponse = EmployeesResponse;

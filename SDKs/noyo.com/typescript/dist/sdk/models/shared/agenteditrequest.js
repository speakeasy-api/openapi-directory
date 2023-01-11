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
exports.AgentEditRequest = exports.AgentEditRequestAgentDetails = void 0;
var utils_1 = require("../../../internal/utils");
var agencydetails_1 = require("./agencydetails");
var splitcommissiondetails_1 = require("./splitcommissiondetails");
var generalagencydetails_1 = require("./generalagencydetails");
// AgentEditRequestAgentDetails
/**
 * Details about the agent
**/
var AgentEditRequestAgentDetails = /** @class */ (function (_super) {
    __extends(AgentEditRequestAgentDetails, _super);
    function AgentEditRequestAgentDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AgentEditRequestAgentDetails.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AgentEditRequestAgentDetails.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license_number" }),
        __metadata("design:type", String)
    ], AgentEditRequestAgentDetails.prototype, "licenseNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=national_producer_number" }),
        __metadata("design:type", String)
    ], AgentEditRequestAgentDetails.prototype, "nationalProducerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax_id_number" }),
        __metadata("design:type", String)
    ], AgentEditRequestAgentDetails.prototype, "taxIdNumber", void 0);
    return AgentEditRequestAgentDetails;
}(utils_1.SpeakeasyBase));
exports.AgentEditRequestAgentDetails = AgentEditRequestAgentDetails;
var AgentEditRequest = /** @class */ (function (_super) {
    __extends(AgentEditRequest, _super);
    function AgentEditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agency_details" }),
        __metadata("design:type", agencydetails_1.AgencyDetails)
    ], AgentEditRequest.prototype, "agencyDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agent_details" }),
        __metadata("design:type", AgentEditRequestAgentDetails)
    ], AgentEditRequest.prototype, "agentDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commission_details", elemType: splitcommissiondetails_1.SplitCommissionDetails }),
        __metadata("design:type", Array)
    ], AgentEditRequest.prototype, "commissionDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=general_agency_details" }),
        __metadata("design:type", generalagencydetails_1.GeneralAgencyDetails)
    ], AgentEditRequest.prototype, "generalAgencyDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license_number" }),
        __metadata("design:type", String)
    ], AgentEditRequest.prototype, "licenseNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signature_date" }),
        __metadata("design:type", Date)
    ], AgentEditRequest.prototype, "signatureDate", void 0);
    return AgentEditRequest;
}(utils_1.SpeakeasyBase));
exports.AgentEditRequest = AgentEditRequest;

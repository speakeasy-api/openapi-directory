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
exports.DatacenterConnectorInput = exports.DatacenterConnector = exports.DatacenterConnectorStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var availableupdates_1 = require("./availableupdates");
var status_1 = require("./status");
var upgradestatus_1 = require("./upgradestatus");
var DatacenterConnectorStateEnum;
(function (DatacenterConnectorStateEnum) {
    DatacenterConnectorStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    DatacenterConnectorStateEnum["Pending"] = "PENDING";
    DatacenterConnectorStateEnum["Offline"] = "OFFLINE";
    DatacenterConnectorStateEnum["Failed"] = "FAILED";
    DatacenterConnectorStateEnum["Active"] = "ACTIVE";
})(DatacenterConnectorStateEnum = exports.DatacenterConnectorStateEnum || (exports.DatacenterConnectorStateEnum = {}));
// DatacenterConnector
/**
 * DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
**/
var DatacenterConnector = /** @class */ (function (_super) {
    __extends(DatacenterConnector, _super);
    function DatacenterConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applianceInfrastructureVersion" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "applianceInfrastructureVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applianceSoftwareVersion" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "applianceSoftwareVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableVersions" }),
        __metadata("design:type", availableupdates_1.AvailableUpdates)
    ], DatacenterConnector.prototype, "availableVersions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bucket" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", status_1.Status)
    ], DatacenterConnector.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrationId" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "registrationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "serviceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stateTime" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "stateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "updateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upgradeStatus" }),
        __metadata("design:type", upgradestatus_1.UpgradeStatus)
    ], DatacenterConnector.prototype, "upgradeStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DatacenterConnector.prototype, "version", void 0);
    return DatacenterConnector;
}(utils_1.SpeakeasyBase));
exports.DatacenterConnector = DatacenterConnector;
// DatacenterConnectorInput
/**
 * DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
**/
var DatacenterConnectorInput = /** @class */ (function (_super) {
    __extends(DatacenterConnectorInput, _super);
    function DatacenterConnectorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableVersions" }),
        __metadata("design:type", availableupdates_1.AvailableUpdates)
    ], DatacenterConnectorInput.prototype, "availableVersions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", status_1.Status)
    ], DatacenterConnectorInput.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrationId" }),
        __metadata("design:type", String)
    ], DatacenterConnectorInput.prototype, "registrationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], DatacenterConnectorInput.prototype, "serviceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upgradeStatus" }),
        __metadata("design:type", upgradestatus_1.UpgradeStatus)
    ], DatacenterConnectorInput.prototype, "upgradeStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DatacenterConnectorInput.prototype, "version", void 0);
    return DatacenterConnectorInput;
}(utils_1.SpeakeasyBase));
exports.DatacenterConnectorInput = DatacenterConnectorInput;

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
exports.ConfigManagementMembershipState = void 0;
var utils_1 = require("../../../internal/utils");
var configmanagementconfigsyncstate_1 = require("./configmanagementconfigsyncstate");
var configmanagementhierarchycontrollerstate_1 = require("./configmanagementhierarchycontrollerstate");
var configmanagementmembershipspec_1 = require("./configmanagementmembershipspec");
var configmanagementoperatorstate_1 = require("./configmanagementoperatorstate");
var configmanagementpolicycontrollerstate_1 = require("./configmanagementpolicycontrollerstate");
// ConfigManagementMembershipState
/**
 * **Anthos Config Management**: State for a single cluster.
**/
var ConfigManagementMembershipState = /** @class */ (function (_super) {
    __extends(ConfigManagementMembershipState, _super);
    function ConfigManagementMembershipState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], ConfigManagementMembershipState.prototype, "clusterName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configSyncState" }),
        __metadata("design:type", configmanagementconfigsyncstate_1.ConfigManagementConfigSyncState)
    ], ConfigManagementMembershipState.prototype, "configSyncState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hierarchyControllerState" }),
        __metadata("design:type", configmanagementhierarchycontrollerstate_1.ConfigManagementHierarchyControllerState)
    ], ConfigManagementMembershipState.prototype, "hierarchyControllerState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=membershipSpec" }),
        __metadata("design:type", configmanagementmembershipspec_1.ConfigManagementMembershipSpec)
    ], ConfigManagementMembershipState.prototype, "membershipSpec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operatorState" }),
        __metadata("design:type", configmanagementoperatorstate_1.ConfigManagementOperatorState)
    ], ConfigManagementMembershipState.prototype, "operatorState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyControllerState" }),
        __metadata("design:type", configmanagementpolicycontrollerstate_1.ConfigManagementPolicyControllerState)
    ], ConfigManagementMembershipState.prototype, "policyControllerState", void 0);
    return ConfigManagementMembershipState;
}(utils_1.SpeakeasyBase));
exports.ConfigManagementMembershipState = ConfigManagementMembershipState;

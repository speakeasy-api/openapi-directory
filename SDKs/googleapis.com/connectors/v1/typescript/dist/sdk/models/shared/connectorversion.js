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
exports.ConnectorVersion = exports.ConnectorVersionLaunchStageEnum = void 0;
var utils_1 = require("../../../internal/utils");
var authconfigtemplate_1 = require("./authconfigtemplate");
var configvariabletemplate_1 = require("./configvariabletemplate");
var egresscontrolconfig_1 = require("./egresscontrolconfig");
var rolegrant_1 = require("./rolegrant");
var supportedruntimefeatures_1 = require("./supportedruntimefeatures");
var ConnectorVersionLaunchStageEnum;
(function (ConnectorVersionLaunchStageEnum) {
    ConnectorVersionLaunchStageEnum["LaunchStageUnspecified"] = "LAUNCH_STAGE_UNSPECIFIED";
    ConnectorVersionLaunchStageEnum["Preview"] = "PREVIEW";
    ConnectorVersionLaunchStageEnum["Ga"] = "GA";
    ConnectorVersionLaunchStageEnum["Deprecated"] = "DEPRECATED";
})(ConnectorVersionLaunchStageEnum = exports.ConnectorVersionLaunchStageEnum || (exports.ConnectorVersionLaunchStageEnum = {}));
// ConnectorVersion
/**
 * ConnectorVersion indicates a specific version of a connector.
**/
var ConnectorVersion = /** @class */ (function (_super) {
    __extends(ConnectorVersion, _super);
    function ConnectorVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authConfigTemplates", elemType: authconfigtemplate_1.AuthConfigTemplate }),
        __metadata("design:type", Array)
    ], ConnectorVersion.prototype, "authConfigTemplates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configVariableTemplates", elemType: configvariabletemplate_1.ConfigVariableTemplate }),
        __metadata("design:type", Array)
    ], ConnectorVersion.prototype, "configVariableTemplates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ConnectorVersion.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConnectorVersion.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=egressControlConfig" }),
        __metadata("design:type", egresscontrolconfig_1.EgressControlConfig)
    ], ConnectorVersion.prototype, "egressControlConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], ConnectorVersion.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=launchStage" }),
        __metadata("design:type", String)
    ], ConnectorVersion.prototype, "launchStage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectorVersion.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseVersion" }),
        __metadata("design:type", String)
    ], ConnectorVersion.prototype, "releaseVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roleGrant" }),
        __metadata("design:type", rolegrant_1.RoleGrant)
    ], ConnectorVersion.prototype, "roleGrant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roleGrants", elemType: rolegrant_1.RoleGrant }),
        __metadata("design:type", Array)
    ], ConnectorVersion.prototype, "roleGrants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=supportedRuntimeFeatures" }),
        __metadata("design:type", supportedruntimefeatures_1.SupportedRuntimeFeatures)
    ], ConnectorVersion.prototype, "supportedRuntimeFeatures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ConnectorVersion.prototype, "updateTime", void 0);
    return ConnectorVersion;
}(utils_1.SpeakeasyBase));
exports.ConnectorVersion = ConnectorVersion;

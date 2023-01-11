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
exports.NodeSettings = exports.NodeSettingsStateEnum = exports.NodeSettingsProperties = exports.NodeSettingsPolicyModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var agentkey_1 = require("./agentkey");
var NodeSettingsPolicyModeEnum;
(function (NodeSettingsPolicyModeEnum) {
    NodeSettingsPolicyModeEnum["Audit"] = "audit";
    NodeSettingsPolicyModeEnum["Enforce"] = "enforce";
    NodeSettingsPolicyModeEnum["Default"] = "default";
})(NodeSettingsPolicyModeEnum = exports.NodeSettingsPolicyModeEnum || (exports.NodeSettingsPolicyModeEnum = {}));
var NodeSettingsProperties = /** @class */ (function (_super) {
    __extends(NodeSettingsProperties, _super);
    function NodeSettingsProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeSettingsProperties.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], NodeSettingsProperties.prototype, "value", void 0);
    return NodeSettingsProperties;
}(utils_1.SpeakeasyBase));
exports.NodeSettingsProperties = NodeSettingsProperties;
var NodeSettingsStateEnum;
(function (NodeSettingsStateEnum) {
    NodeSettingsStateEnum["Enabled"] = "enabled";
    NodeSettingsStateEnum["Ignored"] = "ignored";
    NodeSettingsStateEnum["EmptyPolicies"] = "empty-policies";
    NodeSettingsStateEnum["Initializing"] = "initializing";
    NodeSettingsStateEnum["PreparingEol"] = "preparing-eol";
})(NodeSettingsStateEnum = exports.NodeSettingsStateEnum || (exports.NodeSettingsStateEnum = {}));
var NodeSettings = /** @class */ (function (_super) {
    __extends(NodeSettings, _super);
    function NodeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agentKey" }),
        __metadata("design:type", agentkey_1.AgentKey)
    ], NodeSettings.prototype, "agentKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyMode" }),
        __metadata("design:type", String)
    ], NodeSettings.prototype, "policyMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties", elemType: NodeSettingsProperties }),
        __metadata("design:type", Array)
    ], NodeSettings.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], NodeSettings.prototype, "state", void 0);
    return NodeSettings;
}(utils_1.SpeakeasyBase));
exports.NodeSettings = NodeSettings;

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
exports.ManagedClusterInput = exports.ManagedCluster = void 0;
var utils_1 = require("../../../internal/utils");
var clusterconfig_1 = require("./clusterconfig");
var clusterconfig_2 = require("./clusterconfig");
// ManagedCluster
/**
 * Cluster that is managed by the workflow.
**/
var ManagedCluster = /** @class */ (function (_super) {
    __extends(ManagedCluster, _super);
    function ManagedCluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], ManagedCluster.prototype, "clusterName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=config" }),
        __metadata("design:type", clusterconfig_1.ClusterConfig)
    ], ManagedCluster.prototype, "config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], ManagedCluster.prototype, "labels", void 0);
    return ManagedCluster;
}(utils_1.SpeakeasyBase));
exports.ManagedCluster = ManagedCluster;
// ManagedClusterInput
/**
 * Cluster that is managed by the workflow.
**/
var ManagedClusterInput = /** @class */ (function (_super) {
    __extends(ManagedClusterInput, _super);
    function ManagedClusterInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], ManagedClusterInput.prototype, "clusterName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=config" }),
        __metadata("design:type", clusterconfig_2.ClusterConfigInput)
    ], ManagedClusterInput.prototype, "config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], ManagedClusterInput.prototype, "labels", void 0);
    return ManagedClusterInput;
}(utils_1.SpeakeasyBase));
exports.ManagedClusterInput = ManagedClusterInput;

"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GoogleCloudIntegrationsV1alphaExecutionSnapshot = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata_1 = require("./googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata");
var googlecloudintegrationsv1alphataskexecutiondetails_1 = require("./googlecloudintegrationsv1alphataskexecutiondetails");
var googlecloudintegrationsv1alphavaluetype_1 = require("./googlecloudintegrationsv1alphavaluetype");
var class_transformer_1 = require("class-transformer");
/**
 * Contains the snapshot of the execution for a given checkpoint.
 */
var GoogleCloudIntegrationsV1alphaExecutionSnapshot = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaExecutionSnapshot, _super);
    function GoogleCloudIntegrationsV1alphaExecutionSnapshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "checkpointTaskNumber" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaExecutionSnapshot.prototype, "checkpointTaskNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "executionSnapshotMetadata" }),
        (0, class_transformer_1.Type)(function () {
            return googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata_1.GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata;
        }),
        __metadata("design:type", googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata_1.GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata)
    ], GoogleCloudIntegrationsV1alphaExecutionSnapshot.prototype, "executionSnapshotMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: googlecloudintegrationsv1alphavaluetype_1.GoogleCloudIntegrationsV1alphaValueType }),
        (0, class_transformer_1.Expose)({ name: "params" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            var obj = {};
            for (var key in value) {
                obj[key] = (0, utils_1.objectToClass)(value[key], googlecloudintegrationsv1alphavaluetype_1.GoogleCloudIntegrationsV1alphaValueType);
            }
            return obj;
        }, { toClassOnly: true }),
        __metadata("design:type", Object)
    ], GoogleCloudIntegrationsV1alphaExecutionSnapshot.prototype, "params", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: googlecloudintegrationsv1alphataskexecutiondetails_1.GoogleCloudIntegrationsV1alphaTaskExecutionDetails,
        }),
        (0, class_transformer_1.Expose)({ name: "taskExecutionDetails" }),
        (0, class_transformer_1.Type)(function () { return googlecloudintegrationsv1alphataskexecutiondetails_1.GoogleCloudIntegrationsV1alphaTaskExecutionDetails; }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaExecutionSnapshot.prototype, "taskExecutionDetails", void 0);
    return GoogleCloudIntegrationsV1alphaExecutionSnapshot;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudIntegrationsV1alphaExecutionSnapshot = GoogleCloudIntegrationsV1alphaExecutionSnapshot;

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
exports.GoogleCloudDatalabelingV1beta1Dataset = void 0;
var utils_1 = require("../../../internal/utils");
var googleclouddatalabelingv1beta1inputconfig_1 = require("./googleclouddatalabelingv1beta1inputconfig");
// GoogleCloudDatalabelingV1beta1Dataset
/**
 * Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
**/
var GoogleCloudDatalabelingV1beta1Dataset = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1Dataset, _super);
    function GoogleCloudDatalabelingV1beta1Dataset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blockingResources" }),
        __metadata("design:type", Array)
    ], GoogleCloudDatalabelingV1beta1Dataset.prototype, "blockingResources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Dataset.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataItemCount" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Dataset.prototype, "dataItemCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Dataset.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Dataset.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inputConfigs", elemType: googleclouddatalabelingv1beta1inputconfig_1.GoogleCloudDatalabelingV1beta1InputConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudDatalabelingV1beta1Dataset.prototype, "inputConfigs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastMigrateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Dataset.prototype, "lastMigrateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Dataset.prototype, "name", void 0);
    return GoogleCloudDatalabelingV1beta1Dataset;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudDatalabelingV1beta1Dataset = GoogleCloudDatalabelingV1beta1Dataset;

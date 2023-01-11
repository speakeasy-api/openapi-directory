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
exports.UpdateNetworkTrafficAnalysisResponse = exports.UpdateNetworkTrafficAnalysisRequest = exports.UpdateNetworkTrafficAnalysisRequestBody = exports.UpdateNetworkTrafficAnalysisRequestBodyModeEnum = exports.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems = exports.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum = exports.UpdateNetworkTrafficAnalysisPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkTrafficAnalysisPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkTrafficAnalysisPathParams, _super);
    function UpdateNetworkTrafficAnalysisPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisPathParams.prototype, "networkId", void 0);
    return UpdateNetworkTrafficAnalysisPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkTrafficAnalysisPathParams = UpdateNetworkTrafficAnalysisPathParams;
var UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;
(function (UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum) {
    UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum["Host"] = "host";
    UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum["Port"] = "port";
    UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum["IpRange"] = "ipRange";
})(UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum = exports.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum || (exports.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum = {}));
var UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems = /** @class */ (function (_super) {
    __extends(UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems, _super);
    function UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems.prototype, "value", void 0);
    return UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems = UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems;
var UpdateNetworkTrafficAnalysisRequestBodyModeEnum;
(function (UpdateNetworkTrafficAnalysisRequestBodyModeEnum) {
    UpdateNetworkTrafficAnalysisRequestBodyModeEnum["Disabled"] = "disabled";
    UpdateNetworkTrafficAnalysisRequestBodyModeEnum["Basic"] = "basic";
    UpdateNetworkTrafficAnalysisRequestBodyModeEnum["Detailed"] = "detailed";
})(UpdateNetworkTrafficAnalysisRequestBodyModeEnum = exports.UpdateNetworkTrafficAnalysisRequestBodyModeEnum || (exports.UpdateNetworkTrafficAnalysisRequestBodyModeEnum = {}));
var UpdateNetworkTrafficAnalysisRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkTrafficAnalysisRequestBody, _super);
    function UpdateNetworkTrafficAnalysisRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customPieChartItems", elemType: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems }),
        __metadata("design:type", Array)
    ], UpdateNetworkTrafficAnalysisRequestBody.prototype, "customPieChartItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisRequestBody.prototype, "mode", void 0);
    return UpdateNetworkTrafficAnalysisRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkTrafficAnalysisRequestBody = UpdateNetworkTrafficAnalysisRequestBody;
var UpdateNetworkTrafficAnalysisRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkTrafficAnalysisRequest, _super);
    function UpdateNetworkTrafficAnalysisRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkTrafficAnalysisPathParams)
    ], UpdateNetworkTrafficAnalysisRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkTrafficAnalysisRequestBody)
    ], UpdateNetworkTrafficAnalysisRequest.prototype, "request", void 0);
    return UpdateNetworkTrafficAnalysisRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkTrafficAnalysisRequest = UpdateNetworkTrafficAnalysisRequest;
var UpdateNetworkTrafficAnalysisResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkTrafficAnalysisResponse, _super);
    function UpdateNetworkTrafficAnalysisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkTrafficAnalysisResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkTrafficAnalysisResponse.prototype, "updateNetworkTrafficAnalysis200ApplicationJSONObject", void 0);
    return UpdateNetworkTrafficAnalysisResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkTrafficAnalysisResponse = UpdateNetworkTrafficAnalysisResponse;

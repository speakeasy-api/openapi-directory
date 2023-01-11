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
exports.CreateNetworkFirmwareUpgradesRollbackResponse = exports.CreateNetworkFirmwareUpgradesRollbackRequest = exports.CreateNetworkFirmwareUpgradesRollbackRequestBody = exports.CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion = exports.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons = exports.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = exports.CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum = exports.CreateNetworkFirmwareUpgradesRollbackPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateNetworkFirmwareUpgradesRollbackPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkFirmwareUpgradesRollbackPathParams, _super);
    function CreateNetworkFirmwareUpgradesRollbackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkFirmwareUpgradesRollbackPathParams.prototype, "networkId", void 0);
    return CreateNetworkFirmwareUpgradesRollbackPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkFirmwareUpgradesRollbackPathParams = CreateNetworkFirmwareUpgradesRollbackPathParams;
var CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;
(function (CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum) {
    CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum["Wireless"] = "wireless";
    CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum["Switch"] = "switch";
    CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum["Appliance"] = "appliance";
    CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum["Camera"] = "camera";
    CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum["VmxHost"] = "vmxHost";
    CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum["CellularGateway"] = "cellularGateway";
})(CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum = exports.CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum || (exports.CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum = {}));
var CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;
(function (CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum) {
    CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum["Performance"] = "performance";
    CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum["Stability"] = "stability";
    CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum["BrokeOldFeatures"] = "broke old features";
    CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum["UnifyingNetworksVersions"] = "unifying networks versions";
    CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum["Testing"] = "testing";
    CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum["Other"] = "other";
})(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = exports.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum || (exports.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = {}));
var CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons = /** @class */ (function (_super) {
    __extends(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons, _super);
    function CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons.prototype, "comment", void 0);
    return CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons = CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons;
// CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion
/**
 * Version to downgrade to (if the network has firmware flexibility)
**/
var CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion = /** @class */ (function (_super) {
    __extends(CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion, _super);
    function CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion.prototype, "id", void 0);
    return CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion = CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;
var CreateNetworkFirmwareUpgradesRollbackRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkFirmwareUpgradesRollbackRequestBody, _super);
    function CreateNetworkFirmwareUpgradesRollbackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], CreateNetworkFirmwareUpgradesRollbackRequestBody.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reasons", elemType: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons }),
        __metadata("design:type", Array)
    ], CreateNetworkFirmwareUpgradesRollbackRequestBody.prototype, "reasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Date)
    ], CreateNetworkFirmwareUpgradesRollbackRequestBody.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toVersion" }),
        __metadata("design:type", CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion)
    ], CreateNetworkFirmwareUpgradesRollbackRequestBody.prototype, "toVersion", void 0);
    return CreateNetworkFirmwareUpgradesRollbackRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkFirmwareUpgradesRollbackRequestBody = CreateNetworkFirmwareUpgradesRollbackRequestBody;
var CreateNetworkFirmwareUpgradesRollbackRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkFirmwareUpgradesRollbackRequest, _super);
    function CreateNetworkFirmwareUpgradesRollbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkFirmwareUpgradesRollbackPathParams)
    ], CreateNetworkFirmwareUpgradesRollbackRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkFirmwareUpgradesRollbackRequestBody)
    ], CreateNetworkFirmwareUpgradesRollbackRequest.prototype, "request", void 0);
    return CreateNetworkFirmwareUpgradesRollbackRequest;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkFirmwareUpgradesRollbackRequest = CreateNetworkFirmwareUpgradesRollbackRequest;
var CreateNetworkFirmwareUpgradesRollbackResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkFirmwareUpgradesRollbackResponse, _super);
    function CreateNetworkFirmwareUpgradesRollbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateNetworkFirmwareUpgradesRollbackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateNetworkFirmwareUpgradesRollbackResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkFirmwareUpgradesRollbackResponse.prototype, "createNetworkFirmwareUpgradesRollback200ApplicationJSONObject", void 0);
    return CreateNetworkFirmwareUpgradesRollbackResponse;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkFirmwareUpgradesRollbackResponse = CreateNetworkFirmwareUpgradesRollbackResponse;

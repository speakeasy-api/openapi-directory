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
exports.UrlMapList = exports.UrlMapListWarning = exports.UrlMapListWarningData = exports.UrlMapListWarningCodeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var urlmap_1 = require("./urlmap");
var class_transformer_1 = require("class-transformer");
/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
var UrlMapListWarningCodeEnum;
(function (UrlMapListWarningCodeEnum) {
    UrlMapListWarningCodeEnum["CleanupFailed"] = "CLEANUP_FAILED";
    UrlMapListWarningCodeEnum["DeprecatedResourceUsed"] = "DEPRECATED_RESOURCE_USED";
    UrlMapListWarningCodeEnum["DeprecatedTypeUsed"] = "DEPRECATED_TYPE_USED";
    UrlMapListWarningCodeEnum["DiskSizeLargerThanImageSize"] = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE";
    UrlMapListWarningCodeEnum["ExperimentalTypeUsed"] = "EXPERIMENTAL_TYPE_USED";
    UrlMapListWarningCodeEnum["ExternalApiWarning"] = "EXTERNAL_API_WARNING";
    UrlMapListWarningCodeEnum["FieldValueOverriden"] = "FIELD_VALUE_OVERRIDEN";
    UrlMapListWarningCodeEnum["InjectedKernelsDeprecated"] = "INJECTED_KERNELS_DEPRECATED";
    UrlMapListWarningCodeEnum["InvalidHealthCheckForDynamicWieghtedLb"] = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB";
    UrlMapListWarningCodeEnum["LargeDeploymentWarning"] = "LARGE_DEPLOYMENT_WARNING";
    UrlMapListWarningCodeEnum["MissingTypeDependency"] = "MISSING_TYPE_DEPENDENCY";
    UrlMapListWarningCodeEnum["NextHopAddressNotAssigned"] = "NEXT_HOP_ADDRESS_NOT_ASSIGNED";
    UrlMapListWarningCodeEnum["NextHopCannotIpForward"] = "NEXT_HOP_CANNOT_IP_FORWARD";
    UrlMapListWarningCodeEnum["NextHopInstanceHasNoIpv6Interface"] = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE";
    UrlMapListWarningCodeEnum["NextHopInstanceNotFound"] = "NEXT_HOP_INSTANCE_NOT_FOUND";
    UrlMapListWarningCodeEnum["NextHopInstanceNotOnNetwork"] = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK";
    UrlMapListWarningCodeEnum["NextHopNotRunning"] = "NEXT_HOP_NOT_RUNNING";
    UrlMapListWarningCodeEnum["NotCriticalError"] = "NOT_CRITICAL_ERROR";
    UrlMapListWarningCodeEnum["NoResultsOnPage"] = "NO_RESULTS_ON_PAGE";
    UrlMapListWarningCodeEnum["PartialSuccess"] = "PARTIAL_SUCCESS";
    UrlMapListWarningCodeEnum["RequiredTosAgreement"] = "REQUIRED_TOS_AGREEMENT";
    UrlMapListWarningCodeEnum["ResourceInUseByOtherResourceWarning"] = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING";
    UrlMapListWarningCodeEnum["ResourceNotDeleted"] = "RESOURCE_NOT_DELETED";
    UrlMapListWarningCodeEnum["SchemaValidationIgnored"] = "SCHEMA_VALIDATION_IGNORED";
    UrlMapListWarningCodeEnum["SingleInstancePropertyTemplate"] = "SINGLE_INSTANCE_PROPERTY_TEMPLATE";
    UrlMapListWarningCodeEnum["UndeclaredProperties"] = "UNDECLARED_PROPERTIES";
    UrlMapListWarningCodeEnum["Unreachable"] = "UNREACHABLE";
})(UrlMapListWarningCodeEnum = exports.UrlMapListWarningCodeEnum || (exports.UrlMapListWarningCodeEnum = {}));
var UrlMapListWarningData = /** @class */ (function (_super) {
    __extends(UrlMapListWarningData, _super);
    function UrlMapListWarningData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "key" }),
        __metadata("design:type", String)
    ], UrlMapListWarningData.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "value" }),
        __metadata("design:type", String)
    ], UrlMapListWarningData.prototype, "value", void 0);
    return UrlMapListWarningData;
}(utils_1.SpeakeasyBase));
exports.UrlMapListWarningData = UrlMapListWarningData;
/**
 * [Output Only] Informational warning message.
 */
var UrlMapListWarning = /** @class */ (function (_super) {
    __extends(UrlMapListWarning, _super);
    function UrlMapListWarning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], UrlMapListWarning.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: UrlMapListWarningData }),
        (0, class_transformer_1.Expose)({ name: "data" }),
        (0, class_transformer_1.Type)(function () { return UrlMapListWarningData; }),
        __metadata("design:type", Array)
    ], UrlMapListWarning.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], UrlMapListWarning.prototype, "message", void 0);
    return UrlMapListWarning;
}(utils_1.SpeakeasyBase));
exports.UrlMapListWarning = UrlMapListWarning;
/**
 * Contains a list of UrlMap resources.
 */
var UrlMapList = /** @class */ (function (_super) {
    __extends(UrlMapList, _super);
    function UrlMapList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], UrlMapList.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: urlmap_1.UrlMap }),
        (0, class_transformer_1.Expose)({ name: "items" }),
        (0, class_transformer_1.Type)(function () { return urlmap_1.UrlMap; }),
        __metadata("design:type", Array)
    ], UrlMapList.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], UrlMapList.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "nextPageToken" }),
        __metadata("design:type", String)
    ], UrlMapList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "selfLink" }),
        __metadata("design:type", String)
    ], UrlMapList.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "warning" }),
        (0, class_transformer_1.Type)(function () { return UrlMapListWarning; }),
        __metadata("design:type", UrlMapListWarning)
    ], UrlMapList.prototype, "warning", void 0);
    return UrlMapList;
}(utils_1.SpeakeasyBase));
exports.UrlMapList = UrlMapList;

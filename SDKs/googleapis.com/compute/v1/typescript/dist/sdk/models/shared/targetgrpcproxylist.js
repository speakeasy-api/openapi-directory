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
exports.TargetGrpcProxyList = exports.TargetGrpcProxyListWarning = exports.TargetGrpcProxyListWarningData = exports.TargetGrpcProxyListWarningCodeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var targetgrpcproxy_1 = require("./targetgrpcproxy");
var class_transformer_1 = require("class-transformer");
/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
var TargetGrpcProxyListWarningCodeEnum;
(function (TargetGrpcProxyListWarningCodeEnum) {
    TargetGrpcProxyListWarningCodeEnum["CleanupFailed"] = "CLEANUP_FAILED";
    TargetGrpcProxyListWarningCodeEnum["DeprecatedResourceUsed"] = "DEPRECATED_RESOURCE_USED";
    TargetGrpcProxyListWarningCodeEnum["DeprecatedTypeUsed"] = "DEPRECATED_TYPE_USED";
    TargetGrpcProxyListWarningCodeEnum["DiskSizeLargerThanImageSize"] = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE";
    TargetGrpcProxyListWarningCodeEnum["ExperimentalTypeUsed"] = "EXPERIMENTAL_TYPE_USED";
    TargetGrpcProxyListWarningCodeEnum["ExternalApiWarning"] = "EXTERNAL_API_WARNING";
    TargetGrpcProxyListWarningCodeEnum["FieldValueOverriden"] = "FIELD_VALUE_OVERRIDEN";
    TargetGrpcProxyListWarningCodeEnum["InjectedKernelsDeprecated"] = "INJECTED_KERNELS_DEPRECATED";
    TargetGrpcProxyListWarningCodeEnum["InvalidHealthCheckForDynamicWieghtedLb"] = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB";
    TargetGrpcProxyListWarningCodeEnum["LargeDeploymentWarning"] = "LARGE_DEPLOYMENT_WARNING";
    TargetGrpcProxyListWarningCodeEnum["MissingTypeDependency"] = "MISSING_TYPE_DEPENDENCY";
    TargetGrpcProxyListWarningCodeEnum["NextHopAddressNotAssigned"] = "NEXT_HOP_ADDRESS_NOT_ASSIGNED";
    TargetGrpcProxyListWarningCodeEnum["NextHopCannotIpForward"] = "NEXT_HOP_CANNOT_IP_FORWARD";
    TargetGrpcProxyListWarningCodeEnum["NextHopInstanceHasNoIpv6Interface"] = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE";
    TargetGrpcProxyListWarningCodeEnum["NextHopInstanceNotFound"] = "NEXT_HOP_INSTANCE_NOT_FOUND";
    TargetGrpcProxyListWarningCodeEnum["NextHopInstanceNotOnNetwork"] = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK";
    TargetGrpcProxyListWarningCodeEnum["NextHopNotRunning"] = "NEXT_HOP_NOT_RUNNING";
    TargetGrpcProxyListWarningCodeEnum["NotCriticalError"] = "NOT_CRITICAL_ERROR";
    TargetGrpcProxyListWarningCodeEnum["NoResultsOnPage"] = "NO_RESULTS_ON_PAGE";
    TargetGrpcProxyListWarningCodeEnum["PartialSuccess"] = "PARTIAL_SUCCESS";
    TargetGrpcProxyListWarningCodeEnum["RequiredTosAgreement"] = "REQUIRED_TOS_AGREEMENT";
    TargetGrpcProxyListWarningCodeEnum["ResourceInUseByOtherResourceWarning"] = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING";
    TargetGrpcProxyListWarningCodeEnum["ResourceNotDeleted"] = "RESOURCE_NOT_DELETED";
    TargetGrpcProxyListWarningCodeEnum["SchemaValidationIgnored"] = "SCHEMA_VALIDATION_IGNORED";
    TargetGrpcProxyListWarningCodeEnum["SingleInstancePropertyTemplate"] = "SINGLE_INSTANCE_PROPERTY_TEMPLATE";
    TargetGrpcProxyListWarningCodeEnum["UndeclaredProperties"] = "UNDECLARED_PROPERTIES";
    TargetGrpcProxyListWarningCodeEnum["Unreachable"] = "UNREACHABLE";
})(TargetGrpcProxyListWarningCodeEnum = exports.TargetGrpcProxyListWarningCodeEnum || (exports.TargetGrpcProxyListWarningCodeEnum = {}));
var TargetGrpcProxyListWarningData = /** @class */ (function (_super) {
    __extends(TargetGrpcProxyListWarningData, _super);
    function TargetGrpcProxyListWarningData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "key" }),
        __metadata("design:type", String)
    ], TargetGrpcProxyListWarningData.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "value" }),
        __metadata("design:type", String)
    ], TargetGrpcProxyListWarningData.prototype, "value", void 0);
    return TargetGrpcProxyListWarningData;
}(utils_1.SpeakeasyBase));
exports.TargetGrpcProxyListWarningData = TargetGrpcProxyListWarningData;
/**
 * [Output Only] Informational warning message.
 */
var TargetGrpcProxyListWarning = /** @class */ (function (_super) {
    __extends(TargetGrpcProxyListWarning, _super);
    function TargetGrpcProxyListWarning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], TargetGrpcProxyListWarning.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: TargetGrpcProxyListWarningData }),
        (0, class_transformer_1.Expose)({ name: "data" }),
        (0, class_transformer_1.Type)(function () { return TargetGrpcProxyListWarningData; }),
        __metadata("design:type", Array)
    ], TargetGrpcProxyListWarning.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], TargetGrpcProxyListWarning.prototype, "message", void 0);
    return TargetGrpcProxyListWarning;
}(utils_1.SpeakeasyBase));
exports.TargetGrpcProxyListWarning = TargetGrpcProxyListWarning;
/**
 * Successful response
 */
var TargetGrpcProxyList = /** @class */ (function (_super) {
    __extends(TargetGrpcProxyList, _super);
    function TargetGrpcProxyList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], TargetGrpcProxyList.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: targetgrpcproxy_1.TargetGrpcProxy }),
        (0, class_transformer_1.Expose)({ name: "items" }),
        (0, class_transformer_1.Type)(function () { return targetgrpcproxy_1.TargetGrpcProxy; }),
        __metadata("design:type", Array)
    ], TargetGrpcProxyList.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], TargetGrpcProxyList.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "nextPageToken" }),
        __metadata("design:type", String)
    ], TargetGrpcProxyList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "selfLink" }),
        __metadata("design:type", String)
    ], TargetGrpcProxyList.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "warning" }),
        (0, class_transformer_1.Type)(function () { return TargetGrpcProxyListWarning; }),
        __metadata("design:type", TargetGrpcProxyListWarning)
    ], TargetGrpcProxyList.prototype, "warning", void 0);
    return TargetGrpcProxyList;
}(utils_1.SpeakeasyBase));
exports.TargetGrpcProxyList = TargetGrpcProxyList;

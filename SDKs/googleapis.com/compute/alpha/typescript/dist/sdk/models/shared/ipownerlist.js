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
exports.IpOwnerList = exports.IpOwnerListWarning = exports.IpOwnerListWarningData = exports.IpOwnerListWarningCodeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var internalipowner_1 = require("./internalipowner");
var class_transformer_1 = require("class-transformer");
/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
var IpOwnerListWarningCodeEnum;
(function (IpOwnerListWarningCodeEnum) {
    IpOwnerListWarningCodeEnum["CleanupFailed"] = "CLEANUP_FAILED";
    IpOwnerListWarningCodeEnum["DeprecatedResourceUsed"] = "DEPRECATED_RESOURCE_USED";
    IpOwnerListWarningCodeEnum["DeprecatedTypeUsed"] = "DEPRECATED_TYPE_USED";
    IpOwnerListWarningCodeEnum["DiskSizeLargerThanImageSize"] = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE";
    IpOwnerListWarningCodeEnum["ExperimentalTypeUsed"] = "EXPERIMENTAL_TYPE_USED";
    IpOwnerListWarningCodeEnum["ExternalApiWarning"] = "EXTERNAL_API_WARNING";
    IpOwnerListWarningCodeEnum["FieldValueOverriden"] = "FIELD_VALUE_OVERRIDEN";
    IpOwnerListWarningCodeEnum["InjectedKernelsDeprecated"] = "INJECTED_KERNELS_DEPRECATED";
    IpOwnerListWarningCodeEnum["InvalidHealthCheckForDynamicWieghtedLb"] = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB";
    IpOwnerListWarningCodeEnum["LargeDeploymentWarning"] = "LARGE_DEPLOYMENT_WARNING";
    IpOwnerListWarningCodeEnum["MissingTypeDependency"] = "MISSING_TYPE_DEPENDENCY";
    IpOwnerListWarningCodeEnum["NextHopAddressNotAssigned"] = "NEXT_HOP_ADDRESS_NOT_ASSIGNED";
    IpOwnerListWarningCodeEnum["NextHopCannotIpForward"] = "NEXT_HOP_CANNOT_IP_FORWARD";
    IpOwnerListWarningCodeEnum["NextHopInstanceHasNoIpv6Interface"] = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE";
    IpOwnerListWarningCodeEnum["NextHopInstanceNotFound"] = "NEXT_HOP_INSTANCE_NOT_FOUND";
    IpOwnerListWarningCodeEnum["NextHopInstanceNotOnNetwork"] = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK";
    IpOwnerListWarningCodeEnum["NextHopNotRunning"] = "NEXT_HOP_NOT_RUNNING";
    IpOwnerListWarningCodeEnum["NotCriticalError"] = "NOT_CRITICAL_ERROR";
    IpOwnerListWarningCodeEnum["NoResultsOnPage"] = "NO_RESULTS_ON_PAGE";
    IpOwnerListWarningCodeEnum["PartialSuccess"] = "PARTIAL_SUCCESS";
    IpOwnerListWarningCodeEnum["RequiredTosAgreement"] = "REQUIRED_TOS_AGREEMENT";
    IpOwnerListWarningCodeEnum["ResourceInUseByOtherResourceWarning"] = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING";
    IpOwnerListWarningCodeEnum["ResourceNotDeleted"] = "RESOURCE_NOT_DELETED";
    IpOwnerListWarningCodeEnum["SchemaValidationIgnored"] = "SCHEMA_VALIDATION_IGNORED";
    IpOwnerListWarningCodeEnum["SingleInstancePropertyTemplate"] = "SINGLE_INSTANCE_PROPERTY_TEMPLATE";
    IpOwnerListWarningCodeEnum["UndeclaredProperties"] = "UNDECLARED_PROPERTIES";
    IpOwnerListWarningCodeEnum["Unreachable"] = "UNREACHABLE";
})(IpOwnerListWarningCodeEnum = exports.IpOwnerListWarningCodeEnum || (exports.IpOwnerListWarningCodeEnum = {}));
var IpOwnerListWarningData = /** @class */ (function (_super) {
    __extends(IpOwnerListWarningData, _super);
    function IpOwnerListWarningData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "key" }),
        __metadata("design:type", String)
    ], IpOwnerListWarningData.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "value" }),
        __metadata("design:type", String)
    ], IpOwnerListWarningData.prototype, "value", void 0);
    return IpOwnerListWarningData;
}(utils_1.SpeakeasyBase));
exports.IpOwnerListWarningData = IpOwnerListWarningData;
/**
 * [Output Only] Informational warning message.
 */
var IpOwnerListWarning = /** @class */ (function (_super) {
    __extends(IpOwnerListWarning, _super);
    function IpOwnerListWarning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], IpOwnerListWarning.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: IpOwnerListWarningData }),
        (0, class_transformer_1.Expose)({ name: "data" }),
        (0, class_transformer_1.Type)(function () { return IpOwnerListWarningData; }),
        __metadata("design:type", Array)
    ], IpOwnerListWarning.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], IpOwnerListWarning.prototype, "message", void 0);
    return IpOwnerListWarning;
}(utils_1.SpeakeasyBase));
exports.IpOwnerListWarning = IpOwnerListWarning;
/**
 * Contains a list of IP owners.
 */
var IpOwnerList = /** @class */ (function (_super) {
    __extends(IpOwnerList, _super);
    function IpOwnerList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], IpOwnerList.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: internalipowner_1.InternalIpOwner }),
        (0, class_transformer_1.Expose)({ name: "items" }),
        (0, class_transformer_1.Type)(function () { return internalipowner_1.InternalIpOwner; }),
        __metadata("design:type", Array)
    ], IpOwnerList.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], IpOwnerList.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "nextPageToken" }),
        __metadata("design:type", String)
    ], IpOwnerList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "selfLink" }),
        __metadata("design:type", String)
    ], IpOwnerList.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "warning" }),
        (0, class_transformer_1.Type)(function () { return IpOwnerListWarning; }),
        __metadata("design:type", IpOwnerListWarning)
    ], IpOwnerList.prototype, "warning", void 0);
    return IpOwnerList;
}(utils_1.SpeakeasyBase));
exports.IpOwnerList = IpOwnerList;

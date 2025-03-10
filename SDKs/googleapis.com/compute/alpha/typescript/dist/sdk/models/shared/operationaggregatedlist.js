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
exports.OperationAggregatedList = exports.OperationAggregatedListWarning = exports.OperationAggregatedListWarningData = exports.OperationAggregatedListWarningCodeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var operationsscopedlist_1 = require("./operationsscopedlist");
var class_transformer_1 = require("class-transformer");
/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
var OperationAggregatedListWarningCodeEnum;
(function (OperationAggregatedListWarningCodeEnum) {
    OperationAggregatedListWarningCodeEnum["CleanupFailed"] = "CLEANUP_FAILED";
    OperationAggregatedListWarningCodeEnum["DeprecatedResourceUsed"] = "DEPRECATED_RESOURCE_USED";
    OperationAggregatedListWarningCodeEnum["DeprecatedTypeUsed"] = "DEPRECATED_TYPE_USED";
    OperationAggregatedListWarningCodeEnum["DiskSizeLargerThanImageSize"] = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE";
    OperationAggregatedListWarningCodeEnum["ExperimentalTypeUsed"] = "EXPERIMENTAL_TYPE_USED";
    OperationAggregatedListWarningCodeEnum["ExternalApiWarning"] = "EXTERNAL_API_WARNING";
    OperationAggregatedListWarningCodeEnum["FieldValueOverriden"] = "FIELD_VALUE_OVERRIDEN";
    OperationAggregatedListWarningCodeEnum["InjectedKernelsDeprecated"] = "INJECTED_KERNELS_DEPRECATED";
    OperationAggregatedListWarningCodeEnum["InvalidHealthCheckForDynamicWieghtedLb"] = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB";
    OperationAggregatedListWarningCodeEnum["LargeDeploymentWarning"] = "LARGE_DEPLOYMENT_WARNING";
    OperationAggregatedListWarningCodeEnum["MissingTypeDependency"] = "MISSING_TYPE_DEPENDENCY";
    OperationAggregatedListWarningCodeEnum["NextHopAddressNotAssigned"] = "NEXT_HOP_ADDRESS_NOT_ASSIGNED";
    OperationAggregatedListWarningCodeEnum["NextHopCannotIpForward"] = "NEXT_HOP_CANNOT_IP_FORWARD";
    OperationAggregatedListWarningCodeEnum["NextHopInstanceHasNoIpv6Interface"] = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE";
    OperationAggregatedListWarningCodeEnum["NextHopInstanceNotFound"] = "NEXT_HOP_INSTANCE_NOT_FOUND";
    OperationAggregatedListWarningCodeEnum["NextHopInstanceNotOnNetwork"] = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK";
    OperationAggregatedListWarningCodeEnum["NextHopNotRunning"] = "NEXT_HOP_NOT_RUNNING";
    OperationAggregatedListWarningCodeEnum["NotCriticalError"] = "NOT_CRITICAL_ERROR";
    OperationAggregatedListWarningCodeEnum["NoResultsOnPage"] = "NO_RESULTS_ON_PAGE";
    OperationAggregatedListWarningCodeEnum["PartialSuccess"] = "PARTIAL_SUCCESS";
    OperationAggregatedListWarningCodeEnum["RequiredTosAgreement"] = "REQUIRED_TOS_AGREEMENT";
    OperationAggregatedListWarningCodeEnum["ResourceInUseByOtherResourceWarning"] = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING";
    OperationAggregatedListWarningCodeEnum["ResourceNotDeleted"] = "RESOURCE_NOT_DELETED";
    OperationAggregatedListWarningCodeEnum["SchemaValidationIgnored"] = "SCHEMA_VALIDATION_IGNORED";
    OperationAggregatedListWarningCodeEnum["SingleInstancePropertyTemplate"] = "SINGLE_INSTANCE_PROPERTY_TEMPLATE";
    OperationAggregatedListWarningCodeEnum["UndeclaredProperties"] = "UNDECLARED_PROPERTIES";
    OperationAggregatedListWarningCodeEnum["Unreachable"] = "UNREACHABLE";
})(OperationAggregatedListWarningCodeEnum = exports.OperationAggregatedListWarningCodeEnum || (exports.OperationAggregatedListWarningCodeEnum = {}));
var OperationAggregatedListWarningData = /** @class */ (function (_super) {
    __extends(OperationAggregatedListWarningData, _super);
    function OperationAggregatedListWarningData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "key" }),
        __metadata("design:type", String)
    ], OperationAggregatedListWarningData.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "value" }),
        __metadata("design:type", String)
    ], OperationAggregatedListWarningData.prototype, "value", void 0);
    return OperationAggregatedListWarningData;
}(utils_1.SpeakeasyBase));
exports.OperationAggregatedListWarningData = OperationAggregatedListWarningData;
/**
 * [Output Only] Informational warning message.
 */
var OperationAggregatedListWarning = /** @class */ (function (_super) {
    __extends(OperationAggregatedListWarning, _super);
    function OperationAggregatedListWarning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], OperationAggregatedListWarning.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: OperationAggregatedListWarningData }),
        (0, class_transformer_1.Expose)({ name: "data" }),
        (0, class_transformer_1.Type)(function () { return OperationAggregatedListWarningData; }),
        __metadata("design:type", Array)
    ], OperationAggregatedListWarning.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], OperationAggregatedListWarning.prototype, "message", void 0);
    return OperationAggregatedListWarning;
}(utils_1.SpeakeasyBase));
exports.OperationAggregatedListWarning = OperationAggregatedListWarning;
/**
 * Successful response
 */
var OperationAggregatedList = /** @class */ (function (_super) {
    __extends(OperationAggregatedList, _super);
    function OperationAggregatedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], OperationAggregatedList.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: operationsscopedlist_1.OperationsScopedList }),
        (0, class_transformer_1.Expose)({ name: "items" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            var obj = {};
            for (var key in value) {
                obj[key] = (0, utils_1.objectToClass)(value[key], operationsscopedlist_1.OperationsScopedList);
            }
            return obj;
        }, { toClassOnly: true }),
        __metadata("design:type", Object)
    ], OperationAggregatedList.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], OperationAggregatedList.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "nextPageToken" }),
        __metadata("design:type", String)
    ], OperationAggregatedList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "selfLink" }),
        __metadata("design:type", String)
    ], OperationAggregatedList.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "unreachables" }),
        __metadata("design:type", Array)
    ], OperationAggregatedList.prototype, "unreachables", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "warning" }),
        (0, class_transformer_1.Type)(function () { return OperationAggregatedListWarning; }),
        __metadata("design:type", OperationAggregatedListWarning)
    ], OperationAggregatedList.prototype, "warning", void 0);
    return OperationAggregatedList;
}(utils_1.SpeakeasyBase));
exports.OperationAggregatedList = OperationAggregatedList;

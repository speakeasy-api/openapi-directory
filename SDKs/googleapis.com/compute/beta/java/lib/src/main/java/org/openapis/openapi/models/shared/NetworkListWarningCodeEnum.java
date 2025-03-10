/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * NetworkListWarningCodeEnum - [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
public enum NetworkListWarningCodeEnum {
    CLEANUP_FAILED("CLEANUP_FAILED"),
    DEPRECATED_RESOURCE_USED("DEPRECATED_RESOURCE_USED"),
    DEPRECATED_TYPE_USED("DEPRECATED_TYPE_USED"),
    DISK_SIZE_LARGER_THAN_IMAGE_SIZE("DISK_SIZE_LARGER_THAN_IMAGE_SIZE"),
    EXPERIMENTAL_TYPE_USED("EXPERIMENTAL_TYPE_USED"),
    EXTERNAL_API_WARNING("EXTERNAL_API_WARNING"),
    FIELD_VALUE_OVERRIDEN("FIELD_VALUE_OVERRIDEN"),
    INJECTED_KERNELS_DEPRECATED("INJECTED_KERNELS_DEPRECATED"),
    INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB("INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB"),
    LARGE_DEPLOYMENT_WARNING("LARGE_DEPLOYMENT_WARNING"),
    MISSING_TYPE_DEPENDENCY("MISSING_TYPE_DEPENDENCY"),
    NEXT_HOP_ADDRESS_NOT_ASSIGNED("NEXT_HOP_ADDRESS_NOT_ASSIGNED"),
    NEXT_HOP_CANNOT_IP_FORWARD("NEXT_HOP_CANNOT_IP_FORWARD"),
    NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE("NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE"),
    NEXT_HOP_INSTANCE_NOT_FOUND("NEXT_HOP_INSTANCE_NOT_FOUND"),
    NEXT_HOP_INSTANCE_NOT_ON_NETWORK("NEXT_HOP_INSTANCE_NOT_ON_NETWORK"),
    NEXT_HOP_NOT_RUNNING("NEXT_HOP_NOT_RUNNING"),
    NOT_CRITICAL_ERROR("NOT_CRITICAL_ERROR"),
    NO_RESULTS_ON_PAGE("NO_RESULTS_ON_PAGE"),
    PARTIAL_SUCCESS("PARTIAL_SUCCESS"),
    REQUIRED_TOS_AGREEMENT("REQUIRED_TOS_AGREEMENT"),
    RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING("RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING"),
    RESOURCE_NOT_DELETED("RESOURCE_NOT_DELETED"),
    SCHEMA_VALIDATION_IGNORED("SCHEMA_VALIDATION_IGNORED"),
    SINGLE_INSTANCE_PROPERTY_TEMPLATE("SINGLE_INSTANCE_PROPERTY_TEMPLATE"),
    UNDECLARED_PROPERTIES("UNDECLARED_PROPERTIES"),
    UNREACHABLE("UNREACHABLE");

    @JsonValue
    public final String value;

    private NetworkListWarningCodeEnum(String value) {
        this.value = value;
    }
}

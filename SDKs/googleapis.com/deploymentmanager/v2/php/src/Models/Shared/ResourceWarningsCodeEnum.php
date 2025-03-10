<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. */
enum ResourceWarningsCodeEnum: string
{
    case DEPRECATED_RESOURCE_USED = 'DEPRECATED_RESOURCE_USED';
    case NO_RESULTS_ON_PAGE = 'NO_RESULTS_ON_PAGE';
    case UNREACHABLE = 'UNREACHABLE';
    case NEXT_HOP_ADDRESS_NOT_ASSIGNED = 'NEXT_HOP_ADDRESS_NOT_ASSIGNED';
    case NEXT_HOP_INSTANCE_NOT_FOUND = 'NEXT_HOP_INSTANCE_NOT_FOUND';
    case NEXT_HOP_INSTANCE_NOT_ON_NETWORK = 'NEXT_HOP_INSTANCE_NOT_ON_NETWORK';
    case NEXT_HOP_CANNOT_IP_FORWARD = 'NEXT_HOP_CANNOT_IP_FORWARD';
    case NEXT_HOP_NOT_RUNNING = 'NEXT_HOP_NOT_RUNNING';
    case INJECTED_KERNELS_DEPRECATED = 'INJECTED_KERNELS_DEPRECATED';
    case REQUIRED_TOS_AGREEMENT = 'REQUIRED_TOS_AGREEMENT';
    case DISK_SIZE_LARGER_THAN_IMAGE_SIZE = 'DISK_SIZE_LARGER_THAN_IMAGE_SIZE';
    case RESOURCE_NOT_DELETED = 'RESOURCE_NOT_DELETED';
    case SINGLE_INSTANCE_PROPERTY_TEMPLATE = 'SINGLE_INSTANCE_PROPERTY_TEMPLATE';
    case NOT_CRITICAL_ERROR = 'NOT_CRITICAL_ERROR';
    case CLEANUP_FAILED = 'CLEANUP_FAILED';
    case FIELD_VALUE_OVERRIDEN = 'FIELD_VALUE_OVERRIDEN';
    case RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING = 'RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING';
    case MISSING_TYPE_DEPENDENCY = 'MISSING_TYPE_DEPENDENCY';
    case EXTERNAL_API_WARNING = 'EXTERNAL_API_WARNING';
    case SCHEMA_VALIDATION_IGNORED = 'SCHEMA_VALIDATION_IGNORED';
    case UNDECLARED_PROPERTIES = 'UNDECLARED_PROPERTIES';
    case EXPERIMENTAL_TYPE_USED = 'EXPERIMENTAL_TYPE_USED';
    case DEPRECATED_TYPE_USED = 'DEPRECATED_TYPE_USED';
    case PARTIAL_SUCCESS = 'PARTIAL_SUCCESS';
    case LARGE_DEPLOYMENT_WARNING = 'LARGE_DEPLOYMENT_WARNING';
    case NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE = 'NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE';
    case INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB = 'INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB';
}

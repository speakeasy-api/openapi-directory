<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Filter by node object type. */
enum GetVcdHierarchyChildrenV1ObjectTypeEnum: string
{
    case CLUSTER = 'Cluster';
    case VIM_SERVER = 'VimServer';
    case ORG = 'Org';
    case ORG_VDC = 'OrgVdc';
    case CATALOG = 'Catalog';
    case V_APP = 'vApp';
}

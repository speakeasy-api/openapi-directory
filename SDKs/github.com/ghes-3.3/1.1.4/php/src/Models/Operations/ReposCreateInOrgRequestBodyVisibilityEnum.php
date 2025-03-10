<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * The visibility of the repository. **Note**: For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://docs.github.com/enterprise-server@3.3/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.  
 * 
 * The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.
 */
enum ReposCreateInOrgRequestBodyVisibilityEnum: string
{
    case PUBLIC = 'public';
    case PRIVATE = 'private';
    case INTERNAL = 'internal';
}

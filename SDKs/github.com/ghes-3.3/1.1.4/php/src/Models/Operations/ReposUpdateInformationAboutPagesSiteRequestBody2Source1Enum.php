<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`. */
enum ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum: string
{
    case GH_PAGES = 'gh-pages';
    case MASTER = 'master';
    case MASTER_DOCS = 'master /docs';
}

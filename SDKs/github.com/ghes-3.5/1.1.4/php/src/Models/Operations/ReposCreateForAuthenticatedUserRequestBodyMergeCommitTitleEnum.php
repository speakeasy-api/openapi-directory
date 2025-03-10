<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * The default value for a merge commit title.
 * 
 * 
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
enum ReposCreateForAuthenticatedUserRequestBodyMergeCommitTitleEnum: string
{
    case PR_TITLE = 'PR_TITLE';
    case MERGE_MESSAGE = 'MERGE_MESSAGE';
}

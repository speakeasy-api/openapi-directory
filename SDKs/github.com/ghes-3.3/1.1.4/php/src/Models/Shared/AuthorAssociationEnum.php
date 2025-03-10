<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** How the author is associated with the repository. */
enum AuthorAssociationEnum: string
{
    case COLLABORATOR = 'COLLABORATOR';
    case CONTRIBUTOR = 'CONTRIBUTOR';
    case FIRST_TIMER = 'FIRST_TIMER';
    case FIRST_TIME_CONTRIBUTOR = 'FIRST_TIME_CONTRIBUTOR';
    case MANNEQUIN = 'MANNEQUIN';
    case MEMBER = 'MEMBER';
    case NONE = 'NONE';
    case OWNER = 'OWNER';
}

<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The [reaction type](https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#reaction-types) to add to the team discussion comment. */
enum ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum: string
{
    case PLUS1 = '+1';
    case MINUS1 = '-1';
    case LAUGH = 'laugh';
    case CONFUSED = 'confused';
    case HEART = 'heart';
    case HOORAY = 'hooray';
    case ROCKET = 'rocket';
    case EYES = 'eyes';
}

<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** who can embed this track "all", "me", or "none" */
enum TrackMetadataRequestTrackEmbeddableByEnum: string
{
    case ALL = 'all';
    case ME = 'me';
    case NONE = 'none';
}

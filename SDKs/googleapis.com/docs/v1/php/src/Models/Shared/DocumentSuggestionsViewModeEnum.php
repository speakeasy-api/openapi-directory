<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Output only. The suggestions view mode applied to the document. Note: When editing a document, changes must be based on a document with SUGGESTIONS_INLINE. */
enum DocumentSuggestionsViewModeEnum: string
{
    case DEFAULT_FOR_CURRENT_ACCESS = 'DEFAULT_FOR_CURRENT_ACCESS';
    case SUGGESTIONS_INLINE = 'SUGGESTIONS_INLINE';
    case PREVIEW_SUGGESTIONS_ACCEPTED = 'PREVIEW_SUGGESTIONS_ACCEPTED';
    case PREVIEW_WITHOUT_SUGGESTIONS = 'PREVIEW_WITHOUT_SUGGESTIONS';
}

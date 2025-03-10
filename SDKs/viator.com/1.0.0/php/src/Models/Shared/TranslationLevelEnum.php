<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * **numeric indicator** of the language translation level for *this* product that is one of:
 * 
 * - `0`: no translation (English only)
 * - `80`: full machine translation
 * - `100`: full human translation
 * 
 * See: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information
 * 
 */
enum TranslationLevelEnum: int
{
    case ZERO = 0;
    case EIGHTY = 80;
    case ONE_HUNDRED = 100;
}

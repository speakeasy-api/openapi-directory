<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Call leg(s) for which the media will be played; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable. */
enum SchedulePlayParametersLegsEnum: string
{
    case ALEG = 'aleg';
    case BLEG = 'bleg';
    case BOTH = 'both';
}

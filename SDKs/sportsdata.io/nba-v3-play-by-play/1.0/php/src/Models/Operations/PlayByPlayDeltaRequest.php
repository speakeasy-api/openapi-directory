<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PlayByPlayDeltaRequest
{
    /**
     * The date of the game(s).
     * 
     * <br>Examples: <code>2016-OCT-31</code>, <code>2017-JAN-15</code>.
     * 
     * @var string $date
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=date')]
    public string $date;
    
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\PlayByPlayDeltaFormatEnum $format
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=format')]
    public PlayByPlayDeltaFormatEnum $format;
    
    /**
     * Only returns plays that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:
     * 
     * <code>1</code>, <code>2</code> ... <code>all</code>.
     * 
     * @var string $minutes
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=minutes')]
    public string $minutes;
    
	public function __construct()
	{
		$this->date = "";
		$this->format = \OpenAPI\OpenAPI\Models\Operations\PlayByPlayDeltaFormatEnum::XML;
		$this->minutes = "";
	}
}

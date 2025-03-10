<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ByeWeeksRequest
{
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     * 
     * @var string $format
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=format')]
    public string $format;
    
    /**
     * 
     *           Year of the season and the season type. If no season type is provided, then the default is regular season.
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *         
     * 
     * @var string $season
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=season')]
    public string $season;
    
	public function __construct()
	{
		$this->format = "";
		$this->season = "";
	}
}

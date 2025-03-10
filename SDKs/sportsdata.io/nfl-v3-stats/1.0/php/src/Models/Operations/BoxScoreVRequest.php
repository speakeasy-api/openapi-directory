<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class BoxScoreVRequest
{
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\BoxScoreVFormatEnum $format
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=format')]
    public BoxScoreVFormatEnum $format;
    
    /**
     * Abbreviation of a team playing in this game. Example: <code>WAS</code>.
     * 
     * @var string $hometeam
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=hometeam')]
    public string $hometeam;
    
    /**
     * Year of the season and the season type. If no season type is provided, then the default is regular season.
     * 
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *         
     * 
     * @var string $season
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=season')]
    public string $season;
    
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
     * 
     *           Example: <code>1</code>
     *         
     * 
     * @var string $week
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=week')]
    public string $week;
    
	public function __construct()
	{
		$this->format = \OpenAPI\OpenAPI\Models\Operations\BoxScoreVFormatEnum::XML;
		$this->hometeam = "";
		$this->season = "";
		$this->week = "";
	}
}

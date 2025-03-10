<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PlayerSeasonStatsByTeamRequest
{
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonStatsByTeamFormatEnum $format
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=format')]
    public PlayerSeasonStatsByTeamFormatEnum $format;
    
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
     * 
     * @var string $season
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=season')]
    public string $season;
    
    /**
     * The abbreviation of the requested team.
     * 
     * <br>Examples: <code>SF</code>, <code>NYY</code>.
     * 
     * @var string $team
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=team')]
    public string $team;
    
	public function __construct()
	{
		$this->format = \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonStatsByTeamFormatEnum::XML;
		$this->season = "";
		$this->team = "";
	}
}

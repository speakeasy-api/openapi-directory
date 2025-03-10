<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PlayerGameLogsBySeasonRequest
{
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\PlayerGameLogsBySeasonFormatEnum $format
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=format')]
    public PlayerGameLogsBySeasonFormatEnum $format;
    
    /**
     * How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
     * 
     * @var string $numberofgames
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=numberofgames')]
    public string $numberofgames;
    
    /**
     * Unique FantasyData Player ID. Example:<code>17920</code>.
     * 
     * @var string $playerid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=playerid')]
    public string $playerid;
    
    /**
     * Season to get games from. Example <code>2019POST</code>, <code>2020</code>
     * 
     * @var string $season
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=season')]
    public string $season;
    
	public function __construct()
	{
		$this->format = \OpenAPI\OpenAPI\Models\Operations\PlayerGameLogsBySeasonFormatEnum::JSON;
		$this->numberofgames = "";
		$this->playerid = "";
		$this->season = "";
	}
}

<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CompetitionDetail
{
	#[\JMS\Serializer\Annotation\SerializedName('AreaId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $areaId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('AreaName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $areaName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CompetitionId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $competitionId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CurrentSeason')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Season')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Season $currentSeason = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Format')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $format = null;
    
    /**
     * $games
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Game> $games
     */
	#[\JMS\Serializer\Annotation\SerializedName('Games')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Game>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $games = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Gender')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $gender = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PlayerStatsCoverage')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $playerStatsCoverage = null;
    
    /**
     * $seasons
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Season> $seasons
     */
	#[\JMS\Serializer\Annotation\SerializedName('Seasons')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Season>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $seasons = null;
    
    /**
     * $teams
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\TeamDetail> $teams
     */
	#[\JMS\Serializer\Annotation\SerializedName('Teams')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\TeamDetail>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $teams = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $type = null;
    
	public function __construct()
	{
		$this->areaId = null;
		$this->areaName = null;
		$this->competitionId = null;
		$this->currentSeason = null;
		$this->format = null;
		$this->games = null;
		$this->gender = null;
		$this->name = null;
		$this->playerStatsCoverage = null;
		$this->seasons = null;
		$this->teams = null;
		$this->type = null;
	}
}

<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Round
{
	#[\JMS\Serializer\Annotation\SerializedName('CurrentRound')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $currentRound = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CurrentWeek')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $currentWeek = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EndDate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $endDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RoundId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $roundId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Season')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $season = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SeasonId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $seasonId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SeasonType')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $seasonType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('StartDate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $startDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $type = null;
    
	public function __construct()
	{
		$this->currentRound = null;
		$this->currentWeek = null;
		$this->endDate = null;
		$this->name = null;
		$this->roundId = null;
		$this->season = null;
		$this->seasonId = null;
		$this->seasonType = null;
		$this->startDate = null;
		$this->type = null;
	}
}

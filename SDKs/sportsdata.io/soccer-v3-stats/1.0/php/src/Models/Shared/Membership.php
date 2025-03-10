<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Membership
{
	#[\JMS\Serializer\Annotation\SerializedName('Active')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $active = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EndDate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $endDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Jersey')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $jersey = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('MembershipId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $membershipId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PlayerId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $playerId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PlayerName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $playerName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('StartDate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $startDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TeamArea')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $teamArea = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TeamId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $teamId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TeamName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $teamName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Updated')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updated = null;
    
	public function __construct()
	{
		$this->active = null;
		$this->endDate = null;
		$this->jersey = null;
		$this->membershipId = null;
		$this->playerId = null;
		$this->playerName = null;
		$this->startDate = null;
		$this->teamArea = null;
		$this->teamId = null;
		$this->teamName = null;
		$this->updated = null;
	}
}

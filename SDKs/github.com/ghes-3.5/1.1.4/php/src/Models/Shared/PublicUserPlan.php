<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PublicUserPlan
{
	#[\JMS\Serializer\Annotation\SerializedName('collaborators')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $collaborators;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('private_repos')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $privateRepos;
    
	#[\JMS\Serializer\Annotation\SerializedName('space')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $space;
    
	public function __construct()
	{
		$this->collaborators = 0;
		$this->name = "";
		$this->privateRepos = 0;
		$this->space = 0;
	}
}

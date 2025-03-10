<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CreateAnAccountParameters
{
    /**
     * The identifier for the Entity that will own the Account.
     * 
     * @var ?string $entityId
     */
	#[\JMS\Serializer\Annotation\SerializedName('entity_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $entityId = null;
    
    /**
     * The identifier of an Entity that, while not owning the Account, is associated with its activity. Its relationship to your group must be `informational`.
     * 
     * @var ?string $informationalEntityId
     */
	#[\JMS\Serializer\Annotation\SerializedName('informational_entity_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $informationalEntityId = null;
    
    /**
     * The name you choose for the Account.
     * 
     * @var string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
    /**
     * The identifier for the Program that this Account falls under.
     * 
     * @var ?string $programId
     */
	#[\JMS\Serializer\Annotation\SerializedName('program_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $programId = null;
    
	public function __construct()
	{
		$this->entityId = null;
		$this->informationalEntityId = null;
		$this->name = "";
		$this->programId = null;
	}
}

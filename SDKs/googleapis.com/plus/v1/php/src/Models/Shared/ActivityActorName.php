<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ActivityActorName - An object representation of the individual components of name.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ActivityActorName
{
    /**
     * The family name ("last name") of the actor.
     * 
     * @var ?string $familyName
     */
	#[\JMS\Serializer\Annotation\SerializedName('familyName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $familyName = null;
    
    /**
     * The given name ("first name") of the actor.
     * 
     * @var ?string $givenName
     */
	#[\JMS\Serializer\Annotation\SerializedName('givenName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $givenName = null;
    
	public function __construct()
	{
		$this->familyName = null;
		$this->givenName = null;
	}
}

<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Filter - Represents a user-defined filter for determining which statuses should not be shown to the user.
 * 
 * https://docs.joinmastodon.org/entities/filter/
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 * @see https://docs.joinmastodon.org/entities/filter/
 */
class Filter
{
    /**
     * The contexts in which the filter should be applied.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\FilterContextEnum> $context
     */
	#[\JMS\Serializer\Annotation\SerializedName('context')]
    #[\JMS\Serializer\Annotation\Type('array<enum<OpenAPI\OpenAPI\Models\Shared\FilterContextEnum>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $context = null;
    
    /**
     * When the filter should no longer be applied. ISO 8601 Datetime, or null if the filter does not expire
     * 
     * @var ?string $expiresAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('expires_at')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $expiresAt = null;
    
    /**
     * The ID of the filter in the database. Cast from an integer, but not guaranteed to be a number.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * Should matching entities in home and notifications be dropped by the server?
     * 
     * @var ?bool $irreversible
     */
	#[\JMS\Serializer\Annotation\SerializedName('irreversible')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $irreversible = null;
    
    /**
     * The text to be filtered.
     * 
     * @var ?string $phrase
     */
	#[\JMS\Serializer\Annotation\SerializedName('phrase')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $phrase = null;
    
    /**
     * Should the filter consider word boundaries?
     * 
     * @var ?bool $wholeWord
     */
	#[\JMS\Serializer\Annotation\SerializedName('whole_word')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $wholeWord = null;
    
	public function __construct()
	{
		$this->context = null;
		$this->expiresAt = null;
		$this->id = null;
		$this->irreversible = null;
		$this->phrase = null;
		$this->wholeWord = null;
	}
}

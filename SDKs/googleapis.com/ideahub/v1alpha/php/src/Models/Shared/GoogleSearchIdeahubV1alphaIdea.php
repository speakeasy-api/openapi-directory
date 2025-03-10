<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleSearchIdeahubV1alphaIdea - A single Idea that we want to show the end user.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleSearchIdeahubV1alphaIdea
{
    /**
     * Unique identifier for the idea. Format: ideas/{ideaId}
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * The idea’s text.
     * 
     * @var ?string $text
     */
	#[\JMS\Serializer\Annotation\SerializedName('text')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $text = null;
    
    /**
     * The Topics that match the idea.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1alphaTopic> $topics
     */
	#[\JMS\Serializer\Annotation\SerializedName('topics')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1alphaTopic>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $topics = null;
    
	public function __construct()
	{
		$this->name = null;
		$this->text = null;
		$this->topics = null;
	}
}

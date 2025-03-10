<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * LanguagesListResponse - Language List Response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class LanguagesListResponse
{
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse".
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
    /**
     * Language collection.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Language> $languages
     */
	#[\JMS\Serializer\Annotation\SerializedName('languages')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Language>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $languages = null;
    
	public function __construct()
	{
		$this->kind = null;
		$this->languages = null;
	}
}

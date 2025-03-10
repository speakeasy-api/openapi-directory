<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GlossaryInput - Represents a glossary built from user provided data.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GlossaryInput
{
    /**
     * Input configuration for glossaries.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GlossaryInputConfig $inputConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('inputConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GlossaryInputConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GlossaryInputConfig $inputConfig = null;
    
    /**
     * Used with equivalent term set glossaries.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\LanguageCodesSet $languageCodesSet
     */
	#[\JMS\Serializer\Annotation\SerializedName('languageCodesSet')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LanguageCodesSet')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LanguageCodesSet $languageCodesSet = null;
    
    /**
     * Used with unidirectional glossaries.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\LanguageCodePair $languagePair
     */
	#[\JMS\Serializer\Annotation\SerializedName('languagePair')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LanguageCodePair')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LanguageCodePair $languagePair = null;
    
    /**
     * Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->inputConfig = null;
		$this->languageCodesSet = null;
		$this->languagePair = null;
		$this->name = null;
	}
}

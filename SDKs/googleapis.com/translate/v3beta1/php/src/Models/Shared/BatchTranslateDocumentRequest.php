<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BatchTranslateDocumentRequest - The BatchTranslateDocument request.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BatchTranslateDocumentRequest
{
    /**
     * Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos
     * 
     * @var ?string $customizedAttribution
     */
	#[\JMS\Serializer\Annotation\SerializedName('customizedAttribution')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $customizedAttribution = null;
    
    /**
     * Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false
     * 
     * @var ?bool $enableShadowRemovalNativePdf
     */
	#[\JMS\Serializer\Annotation\SerializedName('enableShadowRemovalNativePdf')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $enableShadowRemovalNativePdf = null;
    
    /**
     * Optional.
     * 
     * @var ?array<string, string> $formatConversions
     */
	#[\JMS\Serializer\Annotation\SerializedName('formatConversions')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $formatConversions = null;
    
    /**
     * Optional. Glossaries to be applied. It's keyed by target language code.
     * 
     * @var ?array<string, \OpenAPI\OpenAPI\Models\Shared\TranslateTextGlossaryConfig> $glossaries
     */
	#[\JMS\Serializer\Annotation\SerializedName('glossaries')]
    #[\JMS\Serializer\Annotation\Type('array<string, OpenAPI\OpenAPI\Models\Shared\TranslateTextGlossaryConfig>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $glossaries = null;
    
    /**
     * Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\BatchDocumentInputConfig> $inputConfigs
     */
	#[\JMS\Serializer\Annotation\SerializedName('inputConfigs')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\BatchDocumentInputConfig>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $inputConfigs = null;
    
    /**
     * Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.
     * 
     * @var ?array<string, string> $models
     */
	#[\JMS\Serializer\Annotation\SerializedName('models')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $models = null;
    
    /**
     * Output configuration for BatchTranslateDocument request.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BatchDocumentOutputConfig $outputConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('outputConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\BatchDocumentOutputConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?BatchDocumentOutputConfig $outputConfig = null;
    
    /**
     * Required. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).
     * 
     * @var ?string $sourceLanguageCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('sourceLanguageCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sourceLanguageCode = null;
    
    /**
     * Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.
     * 
     * @var ?array<string> $targetLanguageCodes
     */
	#[\JMS\Serializer\Annotation\SerializedName('targetLanguageCodes')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $targetLanguageCodes = null;
    
	public function __construct()
	{
		$this->customizedAttribution = null;
		$this->enableShadowRemovalNativePdf = null;
		$this->formatConversions = null;
		$this->glossaries = null;
		$this->inputConfigs = null;
		$this->models = null;
		$this->outputConfig = null;
		$this->sourceLanguageCode = null;
		$this->targetLanguageCodes = null;
	}
}

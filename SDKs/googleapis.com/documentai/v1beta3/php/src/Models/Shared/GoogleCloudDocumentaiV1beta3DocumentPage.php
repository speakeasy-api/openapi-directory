<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudDocumentaiV1beta3DocumentPage - A page in a Document.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudDocumentaiV1beta3DocumentPage
{
    /**
     * A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageBlock> $blocks
     */
	#[\JMS\Serializer\Annotation\SerializedName('blocks')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageBlock>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $blocks = null;
    
    /**
     * A list of detected barcodes.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode> $detectedBarcodes
     */
	#[\JMS\Serializer\Annotation\SerializedName('detectedBarcodes')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $detectedBarcodes = null;
    
    /**
     * A list of detected languages together with confidence.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage> $detectedLanguages
     */
	#[\JMS\Serializer\Annotation\SerializedName('detectedLanguages')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $detectedLanguages = null;
    
    /**
     * Dimension for the page.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDimension $dimension
     */
	#[\JMS\Serializer\Annotation\SerializedName('dimension')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDimension')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDocumentaiV1beta3DocumentPageDimension $dimension = null;
    
    /**
     * A list of visually detected form fields on the page.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageFormField> $formFields
     */
	#[\JMS\Serializer\Annotation\SerializedName('formFields')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageFormField>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $formFields = null;
    
    /**
     * Rendered image contents for this page.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageImage $image
     */
	#[\JMS\Serializer\Annotation\SerializedName('image')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageImage')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDocumentaiV1beta3DocumentPageImage $image = null;
    
    /**
     * Image Quality Scores for the page image
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores $imageQualityScores
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageQualityScores')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores $imageQualityScores = null;
    
    /**
     * Visual element describing a layout unit on a page.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageLayout $layout
     */
	#[\JMS\Serializer\Annotation\SerializedName('layout')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageLayout')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDocumentaiV1beta3DocumentPageLayout $layout = null;
    
    /**
     * A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageLine> $lines
     */
	#[\JMS\Serializer\Annotation\SerializedName('lines')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageLine>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $lines = null;
    
    /**
     * 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
     * 
     * @var ?int $pageNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('pageNumber')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $pageNumber = null;
    
    /**
     * A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageParagraph> $paragraphs
     */
	#[\JMS\Serializer\Annotation\SerializedName('paragraphs')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageParagraph>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $paragraphs = null;
    
    /**
     * Structure to identify provenance relationships between annotations in different revisions.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentProvenance $provenance
     */
	#[\JMS\Serializer\Annotation\SerializedName('provenance')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentProvenance')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDocumentaiV1beta3DocumentProvenance $provenance = null;
    
    /**
     * A list of visually detected symbols on the page.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageSymbol> $symbols
     */
	#[\JMS\Serializer\Annotation\SerializedName('symbols')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageSymbol>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $symbols = null;
    
    /**
     * A list of visually detected tables on the page.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTable> $tables
     */
	#[\JMS\Serializer\Annotation\SerializedName('tables')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTable>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tables = null;
    
    /**
     * A list of visually detected tokens on the page.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageToken> $tokens
     */
	#[\JMS\Serializer\Annotation\SerializedName('tokens')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageToken>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tokens = null;
    
    /**
     * Transformation matrices that were applied to the original document image to produce Page.image.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageMatrix> $transforms
     */
	#[\JMS\Serializer\Annotation\SerializedName('transforms')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageMatrix>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $transforms = null;
    
    /**
     * A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageVisualElement> $visualElements
     */
	#[\JMS\Serializer\Annotation\SerializedName('visualElements')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageVisualElement>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $visualElements = null;
    
	public function __construct()
	{
		$this->blocks = null;
		$this->detectedBarcodes = null;
		$this->detectedLanguages = null;
		$this->dimension = null;
		$this->formFields = null;
		$this->image = null;
		$this->imageQualityScores = null;
		$this->layout = null;
		$this->lines = null;
		$this->pageNumber = null;
		$this->paragraphs = null;
		$this->provenance = null;
		$this->symbols = null;
		$this->tables = null;
		$this->tokens = null;
		$this->transforms = null;
		$this->visualElements = null;
	}
}

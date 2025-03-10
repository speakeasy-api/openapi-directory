<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class DownloadTranslatedDocumentForLanguageRequest
{
    /**
     * Download certified translation
     * 
     * @var ?bool $certified
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=certified')]
    public ?bool $certified = null;
    
    /**
     * Document ID
     * 
     * @var int $documentId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=documentId')]
    public int $documentId;
    
    /**
     * Target language code.
     * 
     * @var string $language
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=language')]
    public string $language;
    
    /**
     * Project ID
     * 
     * @var int $projectId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=projectId')]
    public int $projectId;
    
	public function __construct()
	{
		$this->certified = null;
		$this->documentId = 0;
		$this->language = "";
		$this->projectId = 0;
	}
}

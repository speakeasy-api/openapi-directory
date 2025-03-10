<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateHdfsTemplateRequest
{
    /**
     * Provide an object with the HDFS directory template definition.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\HdfsTemplatePatch $hdfsTemplatePatch
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\HdfsTemplatePatch $hdfsTemplatePatch;
    
    /**
     * ID of the HDFS directory template to update.
     * 
     * @var string $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public string $id;
    
	public function __construct()
	{
		$this->hdfsTemplatePatch = new \OpenAPI\OpenAPI\Models\Shared\HdfsTemplatePatch();
		$this->id = "";
	}
}

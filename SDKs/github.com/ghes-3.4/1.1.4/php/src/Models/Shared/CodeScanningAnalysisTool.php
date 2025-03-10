<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CodeScanningAnalysisTool
{
    /**
     * The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data.
     * 
     * @var ?string $guid
     */
	#[\JMS\Serializer\Annotation\SerializedName('guid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $guid = null;
    
    /**
     * The name of the tool used to generate the code scanning analysis.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * The version of the tool used to generate the code scanning analysis.
     * 
     * @var ?string $version
     */
	#[\JMS\Serializer\Annotation\SerializedName('version')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $version = null;
    
	public function __construct()
	{
		$this->guid = null;
		$this->name = null;
		$this->version = null;
	}
}

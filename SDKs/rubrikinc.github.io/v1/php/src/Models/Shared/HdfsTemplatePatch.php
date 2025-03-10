<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * HdfsTemplatePatch - Provide an object with the HDFS directory template definition.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class HdfsTemplatePatch
{
    /**
     * $exceptions
     * 
     * @var ?array<string> $exceptions
     */
	#[\JMS\Serializer\Annotation\SerializedName('exceptions')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $exceptions = null;
    
    /**
     * $excludes
     * 
     * @var ?array<string> $excludes
     */
	#[\JMS\Serializer\Annotation\SerializedName('excludes')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $excludes = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $id;
    
    /**
     * $includes
     * 
     * @var ?array<string> $includes
     */
	#[\JMS\Serializer\Annotation\SerializedName('includes')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $includes = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->exceptions = null;
		$this->excludes = null;
		$this->id = "";
		$this->includes = null;
		$this->name = null;
	}
}

<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UnliWithoutApplicationnkApplication409ApplicationJSON - Conflict.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UnliWithoutApplicationnkApplication409ApplicationJSON
{
    /**
     * The application is not linked or doesn't exist.
     * 
     * @var ?string $detail
     */
	#[\JMS\Serializer\Annotation\SerializedName('detail')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $detail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $title = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $type = null;
    
	public function __construct()
	{
		$this->detail = null;
		$this->title = null;
		$this->type = null;
	}
}

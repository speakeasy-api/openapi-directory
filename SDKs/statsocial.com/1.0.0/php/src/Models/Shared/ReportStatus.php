<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ReportStatus - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ReportStatus
{
	#[\JMS\Serializer\Annotation\SerializedName('msg')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $msg = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('success')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $success = null;
    
	public function __construct()
	{
		$this->msg = null;
		$this->success = null;
	}
}

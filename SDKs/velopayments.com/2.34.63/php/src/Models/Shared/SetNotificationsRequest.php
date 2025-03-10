<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SetNotificationsRequest - Body to included minimum balance to set
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SetNotificationsRequest
{
    /**
     * Amount to set as minimum balance in minor units
     * 
     * @var int $minimumBalance
     */
	#[\JMS\Serializer\Annotation\SerializedName('minimumBalance')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $minimumBalance;
    
	public function __construct()
	{
		$this->minimumBalance = 0;
	}
}

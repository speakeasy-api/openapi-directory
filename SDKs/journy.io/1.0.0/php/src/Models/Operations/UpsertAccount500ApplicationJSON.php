<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpsertAccount500ApplicationJSON - The message specifies what is done
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpsertAccount500ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $message;
    
	#[\JMS\Serializer\Annotation\SerializedName('meta')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\UpsertAccount500ApplicationJSONMeta')]
    public UpsertAccount500ApplicationJSONMeta $meta;
    
	public function __construct()
	{
		$this->message = "";
		$this->meta = new \OpenAPI\OpenAPI\Models\Operations\UpsertAccount500ApplicationJSONMeta();
	}
}

<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * PostServersCreateServerResponseServerImageCreatedFrom - Information about the Server the Image was created from
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class PostServersCreateServerResponseServerImageCreatedFrom
{
    /**
     * ID of the Server the Image was created from
     * 
     * @var int $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $id;
    
    /**
     * Server name at the time the Image was created
     * 
     * @var string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	public function __construct()
	{
		$this->id = 0;
		$this->name = "";
	}
}

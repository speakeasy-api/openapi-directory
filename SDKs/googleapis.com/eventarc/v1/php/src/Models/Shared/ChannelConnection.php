<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ChannelConnection - A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ChannelConnection
{
    /**
     * Input only. Activation token for the channel. The token will be used during the creation of ChannelConnection to bind the channel with the provider project. This field will not be stored in the provider resource.
     * 
     * @var ?string $activationToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('activationToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $activationToken = null;
    
    /**
     * Required. The name of the connected subscriber Channel. This is a weak reference to avoid cross project and cross accounts references. This must be in `projects/{project}/location/{location}/channels/{channel_id}` format.
     * 
     * @var ?string $channel
     */
	#[\JMS\Serializer\Annotation\SerializedName('channel')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $channel = null;
    
    /**
     * Output only. The creation time.
     * 
     * @var ?string $createTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('createTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createTime = null;
    
    /**
     * Required. The name of the connection.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Output only. Server assigned ID of the resource. The server guarantees uniqueness and immutability until deleted.
     * 
     * @var ?string $uid
     */
	#[\JMS\Serializer\Annotation\SerializedName('uid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uid = null;
    
    /**
     * Output only. The last-modified time.
     * 
     * @var ?string $updateTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('updateTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updateTime = null;
    
	public function __construct()
	{
		$this->activationToken = null;
		$this->channel = null;
		$this->createTime = null;
		$this->name = null;
		$this->uid = null;
		$this->updateTime = null;
	}
}

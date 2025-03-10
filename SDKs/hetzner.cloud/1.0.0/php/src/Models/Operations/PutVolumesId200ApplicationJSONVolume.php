<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PutVolumesId200ApplicationJSONVolume
{
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     * 
     * @var string $created
     */
	#[\JMS\Serializer\Annotation\SerializedName('created')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $created;
    
    /**
     * Filesystem of the Volume if formatted on creation, null if not formatted on creation
     * 
     * @var string $format
     */
	#[\JMS\Serializer\Annotation\SerializedName('format')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $format;
    
    /**
     * ID of the Resource
     * 
     * @var int $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $id;
    
    /**
     * User-defined labels (key-value pairs)
     * 
     * @var array<string, string> $labels
     */
	#[\JMS\Serializer\Annotation\SerializedName('labels')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    public array $labels;
    
    /**
     * Device path on the file system for the Volume
     * 
     * @var string $linuxDevice
     */
	#[\JMS\Serializer\Annotation\SerializedName('linux_device')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $linuxDevice;
    
    /**
     * Location of the Volume. Volume can only be attached to Servers in the same Location.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\PutVolumesId200ApplicationJSONVolumeLocation $location
     */
	#[\JMS\Serializer\Annotation\SerializedName('location')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\PutVolumesId200ApplicationJSONVolumeLocation')]
    public PutVolumesId200ApplicationJSONVolumeLocation $location;
    
    /**
     * Name of the Resource. Must be unique per Project.
     * 
     * @var string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
    /**
     * Protection configuration for the Resource
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\PutVolumesId200ApplicationJSONVolumeProtection $protection
     */
	#[\JMS\Serializer\Annotation\SerializedName('protection')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\PutVolumesId200ApplicationJSONVolumeProtection')]
    public PutVolumesId200ApplicationJSONVolumeProtection $protection;
    
    /**
     * ID of the Server the Volume is attached to, null if it is not attached at all
     * 
     * @var int $server
     */
	#[\JMS\Serializer\Annotation\SerializedName('server')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $server;
    
    /**
     * Size in GB of the Volume
     * 
     * @var float $size
     */
	#[\JMS\Serializer\Annotation\SerializedName('size')]
    #[\JMS\Serializer\Annotation\Type('float')]
    public float $size;
    
    /**
     * Current status of the Volume
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\PutVolumesId200ApplicationJSONVolumeStatusEnum $status
     */
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\PutVolumesId200ApplicationJSONVolumeStatusEnum>')]
    public PutVolumesId200ApplicationJSONVolumeStatusEnum $status;
    
	public function __construct()
	{
		$this->created = "";
		$this->format = "";
		$this->id = 0;
		$this->labels = [];
		$this->linuxDevice = "";
		$this->location = new \OpenAPI\OpenAPI\Models\Operations\PutVolumesId200ApplicationJSONVolumeLocation();
		$this->name = "";
		$this->protection = new \OpenAPI\OpenAPI\Models\Operations\PutVolumesId200ApplicationJSONVolumeProtection();
		$this->server = 0;
		$this->size = 0;
		$this->status = \OpenAPI\OpenAPI\Models\Operations\PutVolumesId200ApplicationJSONVolumeStatusEnum::CREATING;
	}
}

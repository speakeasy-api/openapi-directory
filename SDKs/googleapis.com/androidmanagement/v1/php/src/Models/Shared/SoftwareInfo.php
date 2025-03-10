<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SoftwareInfo - Information about device software.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SoftwareInfo
{
    /**
     * Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys.
     * 
     * @var ?string $androidBuildNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('androidBuildNumber')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $androidBuildNumber = null;
    
    /**
     * Build time.
     * 
     * @var ?string $androidBuildTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('androidBuildTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $androidBuildTime = null;
    
    /**
     * The Android Device Policy app version code.
     * 
     * @var ?int $androidDevicePolicyVersionCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('androidDevicePolicyVersionCode')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $androidDevicePolicyVersionCode = null;
    
    /**
     * The Android Device Policy app version as displayed to the user.
     * 
     * @var ?string $androidDevicePolicyVersionName
     */
	#[\JMS\Serializer\Annotation\SerializedName('androidDevicePolicyVersionName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $androidDevicePolicyVersionName = null;
    
    /**
     * The user-visible Android version string. For example, 6.0.1.
     * 
     * @var ?string $androidVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('androidVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $androidVersion = null;
    
    /**
     * The system bootloader version number, e.g. 0.6.7.
     * 
     * @var ?string $bootloaderVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('bootloaderVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bootloaderVersion = null;
    
    /**
     * SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified.
     * 
     * @var ?string $deviceBuildSignature
     */
	#[\JMS\Serializer\Annotation\SerializedName('deviceBuildSignature')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $deviceBuildSignature = null;
    
    /**
     * Kernel version, for example, 2.6.32.9-g103d848.
     * 
     * @var ?string $deviceKernelVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('deviceKernelVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $deviceKernelVersion = null;
    
    /**
     * An IETF BCP 47 language code for the primary locale on the device.
     * 
     * @var ?string $primaryLanguageCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('primaryLanguageCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $primaryLanguageCode = null;
    
    /**
     * Security patch level, e.g. 2016-05-01.
     * 
     * @var ?string $securityPatchLevel
     */
	#[\JMS\Serializer\Annotation\SerializedName('securityPatchLevel')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $securityPatchLevel = null;
    
    /**
     * Information about a potential pending system update.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\SystemUpdateInfo $systemUpdateInfo
     */
	#[\JMS\Serializer\Annotation\SerializedName('systemUpdateInfo')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\SystemUpdateInfo')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SystemUpdateInfo $systemUpdateInfo = null;
    
	public function __construct()
	{
		$this->androidBuildNumber = null;
		$this->androidBuildTime = null;
		$this->androidDevicePolicyVersionCode = null;
		$this->androidDevicePolicyVersionName = null;
		$this->androidVersion = null;
		$this->bootloaderVersion = null;
		$this->deviceBuildSignature = null;
		$this->deviceKernelVersion = null;
		$this->primaryLanguageCode = null;
		$this->securityPatchLevel = null;
		$this->systemUpdateInfo = null;
	}
}

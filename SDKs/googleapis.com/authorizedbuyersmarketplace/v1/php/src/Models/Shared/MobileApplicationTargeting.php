<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * MobileApplicationTargeting - Mobile application targeting settings.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class MobileApplicationTargeting
{
    /**
     * Represents a list of targeted and excluded mobile application IDs that publishers own. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\FirstPartyMobileApplicationTargeting $firstPartyTargeting
     */
	#[\JMS\Serializer\Annotation\SerializedName('firstPartyTargeting')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\FirstPartyMobileApplicationTargeting')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?FirstPartyMobileApplicationTargeting $firstPartyTargeting = null;
    
	public function __construct()
	{
		$this->firstPartyTargeting = null;
	}
}

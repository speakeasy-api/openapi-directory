<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * MoveOrganizationLicensingCotermLicenses200ApplicationJSON - Successful operation
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class MoveOrganizationLicensingCotermLicenses200ApplicationJSON
{
    /**
     * Newly moved licenses created in the destination organization of the license move operation
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicenses200ApplicationJSONMovedLicenses> $movedLicenses
     */
	#[\JMS\Serializer\Annotation\SerializedName('movedLicenses')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicenses200ApplicationJSONMovedLicenses>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $movedLicenses = null;
    
    /**
     * Remainder licenses created in the source organization as a result of moving a subset of the counts of a license
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicenses200ApplicationJSONRemainderLicenses> $remainderLicenses
     */
	#[\JMS\Serializer\Annotation\SerializedName('remainderLicenses')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicenses200ApplicationJSONRemainderLicenses>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $remainderLicenses = null;
    
	public function __construct()
	{
		$this->movedLicenses = null;
		$this->remainderLicenses = null;
	}
}

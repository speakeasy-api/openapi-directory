<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * LicensesReadLicense - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class LicensesReadLicense
{
    /**
     * The properties of the license.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\LicensesReadLicenseAttributes $attributes
     */
	
    public ?LicensesReadLicenseAttributes $attributes = null;
    
    /**
     * The identifier of the license.
     * 
     * @var ?string $id
     */
	
    public ?string $id = null;
    
    /**
     * URLs to alternative representations of the license.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\LicensesReadLicenseLinks $links
     */
	
    public ?LicensesReadLicenseLinks $links = null;
    
    /**
     * The type identifier of the license (`license`).
     * 
     * @var ?string $type
     */
	
    public ?string $type = null;
    
	public function __construct()
	{
		$this->attributes = null;
		$this->id = null;
		$this->links = null;
		$this->type = null;
	}
}

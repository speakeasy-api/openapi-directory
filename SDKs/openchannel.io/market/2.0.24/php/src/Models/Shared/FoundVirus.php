<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * FoundVirus - The virus found within this file
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class FoundVirus
{
    /**
     * The name of the file
     * 
     * @var ?string $fileName
     */
	
    public ?string $fileName = null;
    
    /**
     * The name of the virus
     * 
     * @var ?string $virusName
     */
	
    public ?string $virusName = null;
    
	public function __construct()
	{
		$this->fileName = null;
		$this->virusName = null;
	}
}

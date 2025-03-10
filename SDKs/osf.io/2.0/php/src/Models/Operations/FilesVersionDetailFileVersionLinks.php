<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * FilesVersionDetailFileVersionLinks - Links to alternative representations of the file version entity.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class FilesVersionDetailFileVersionLinks
{
    /**
     * A link to the html version page.
     * 
     * @var ?string $html
     */
	
    public ?string $html = null;
    
    /**
     * A link to the detail page for a file version.
     * 
     * @var ?string $self
     */
	
    public ?string $self = null;
    
	public function __construct()
	{
		$this->html = null;
		$this->self = null;
	}
}

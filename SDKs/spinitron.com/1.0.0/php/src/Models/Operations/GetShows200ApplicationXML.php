<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetShows200ApplicationXML - The shows
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetShows200ApplicationXML
{
	
    public ?GetShows200ApplicationXMLLinks $links = null;
    
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Pagination $meta = null;
    
    /**
     * $items
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Show> $items
     */
	
    public ?array $items = null;
    
	public function __construct()
	{
		$this->links = null;
		$this->meta = null;
		$this->items = null;
	}
}

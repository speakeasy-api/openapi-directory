<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * WikiReadWikiAttributes - The properties of the wiki.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class WikiReadWikiAttributes
{
    /**
     * Content type of the wiki (`text/markdown`).
     * 
     * @var string $contentType
     */
	
    public string $contentType;
    
    /**
     * Whether the current user is allowed to post comments on this wiki.
     * 
     * @var string $currentUserCanComment
     */
	
    public string $currentUserCanComment;
    
    /**
     * The date and time at which the wiki was last modified, as an iso8601 formatted timestamp.
     * 
     * @var \DateTime $dateModified
     */
	
    public \DateTime $dateModified;
    
    /**
     * A dictionary containing additional metadata about this wiki, including version information.
     * 
     * @var string $extra
     */
	
    public string $extra;
    
    /**
     * The type of object.
     * 
     * @var string $kind
     */
	
    public string $kind;
    
    /**
     * Materialized path to the wiki object.
     * 
     * @var string $materializedPath
     */
	
    public string $materializedPath;
    
    /**
     * The name/title of the wiki page.
     * 
     * @var string $name
     */
	
    public string $name;
    
    /**
     * Path to the wiki object.
     * 
     * @var string $path
     */
	
    public string $path;
    
    /**
     * Size of the wiki.
     * 
     * @var string $size
     */
	
    public string $size;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->currentUserCanComment = "";
		$this->dateModified = new \DateTime();
		$this->extra = "";
		$this->kind = "";
		$this->materializedPath = "";
		$this->name = "";
		$this->path = "";
		$this->size = "";
	}
}

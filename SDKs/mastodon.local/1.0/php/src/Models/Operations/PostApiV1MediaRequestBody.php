<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PostApiV1MediaRequestBody
{
    /**
     * A plain-text description of the media, for accessibility purposes.
     * 
     * @var ?string $description
     */
	
    public ?string $description = null;
    
    /**
     * The file to be attached, using multipart form data.
     * 
     * @var string $file
     */
	
    public string $file;
    
    /**
     * Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 (see “Focal points” below)
     * 
     * @var ?string $focus
     */
	
    public ?string $focus = null;
    
    /**
     * The custom thumbnail of the media to be attached, using multipart form data.
     * 
     * @var ?string $thumbnail
     */
	
    public ?string $thumbnail = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->file = "";
		$this->focus = null;
		$this->thumbnail = null;
	}
}

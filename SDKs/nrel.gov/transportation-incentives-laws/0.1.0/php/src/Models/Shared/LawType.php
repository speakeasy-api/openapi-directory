<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * LawType - The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class LawType
{
    /**
     * The code used to identify the law type
     * 
     * @var string $code
     */
	
    public string $code;
    
    /**
     * The id of the law type
     * 
     * @var int $id
     */
	
    public int $id;
    
    /**
     * The name of the law type
     * 
     * @var string $title
     */
	
    public string $title;
    
	public function __construct()
	{
		$this->code = "";
		$this->id = 0;
		$this->title = "";
	}
}

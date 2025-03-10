<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Employee - The employee object.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Employee
{
	#[\JMS\Serializer\Annotation\SerializedName('Employee')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\EmployeeEmployee')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EmployeeEmployee $employee = null;
    
	public function __construct()
	{
		$this->employee = null;
	}
}

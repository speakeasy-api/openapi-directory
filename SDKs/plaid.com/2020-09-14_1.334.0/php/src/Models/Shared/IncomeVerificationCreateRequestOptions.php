<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * IncomeVerificationCreateRequestOptions - Optional arguments for `/income/verification/create`
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class IncomeVerificationCreateRequestOptions
{
    /**
     * An array of access tokens corresponding to the Items that will be cross-referenced with the product data. Plaid will attempt to correlate transaction history from these Items with data from the user's paystub, such as date and amount. The `verification` status of the paystub as returned by `/income/verification/paystubs/get` will indicate if the verification status was successful, or, if not, why it failed. If the `transactions` product was not initialized for the Items during Link, it will be initialized after this Link session.
     * 
     * @var ?array<string> $accessTokens
     */
	#[\JMS\Serializer\Annotation\SerializedName('access_tokens')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $accessTokens = null;
    
	public function __construct()
	{
		$this->accessTokens = null;
	}
}

<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateCustomerCardRequest - Defines the fields that are included in the request body of a request
 * 
 * to the `CreateCustomerCard` endpoint.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateCustomerCardRequest
{
    /**
     * Represents a postal address in a country. The address format is based 
     * 
     * on an [open-source library from Google](https://github.com/google/libaddressinput). For more information, 
     * see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata). 
     * This format has dedicated fields for four address components: postal code, 
     * locality (city), administrative district (state, prefecture, or province), and 
     * sublocality (town or village). These components have dedicated fields in the 
     * `Address` object because software sometimes behaves differently based on them. 
     * For example, sales tax software may charge different amounts of sales tax 
     * based on the postal code, and some software is only available in 
     * certain states due to compliance reasons.
     * 
     * For the remaining address components, the `Address` type provides the 
     * `address_line_1` and `address_line_2` fields for free-form data entry. 
     * These fields are free-form because the remaining address components have 
     * too many variations around the world and typical software does not parse 
     * these components. These fields enable users to enter anything they want. 
     * 
     * Note that, in the current implementation, all other `Address` type fields are blank. 
     * These include `address_line_3`, `sublocality_2`, `sublocality_3`, 
     * `administrative_district_level_2`, `administrative_district_level_3`, 
     * `first_name`, `last_name`, and `organization`. 
     * 
     * When it comes to localization, the seller's language preferences 
     * (see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences)) 
     * are ignored for addresses. Even though Square products (such as Square Point of Sale 
     * and the Seller Dashboard) mostly use a seller's language preference in 
     * communication, when it comes to addresses, they will use English for a US address, 
     * Japanese for an address in Japan, and so on.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Address $billingAddress
     */
	#[\JMS\Serializer\Annotation\SerializedName('billing_address')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Address')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Address $billingAddress = null;
    
    /**
     * A card nonce representing the credit card to link to the customer.
     * 
     * 
     * Card nonces are generated by the Square payment form when customers enter
     * their card information. For more information, see
     * [Walkthrough: Integrate Square Payments in a Website](https://developer.squareup.com/docs/web-payments/take-card-payment).
     * 
     * __NOTE:__ Card nonces generated by digital wallets (such as Apple Pay)
     * cannot be used to create a customer card.
     * 
     * @var string $cardNonce
     */
	#[\JMS\Serializer\Annotation\SerializedName('card_nonce')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $cardNonce;
    
    /**
     * The full name printed on the credit card.
     * 
     * @var ?string $cardholderName
     */
	#[\JMS\Serializer\Annotation\SerializedName('cardholder_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $cardholderName = null;
    
    /**
     * An identifying token generated by [Payments.verifyBuyer()](https://developer.squareup.com/reference/sdks/web/payments/objects/Payments#Payments.verifyBuyer).
     * 
     * Verification tokens encapsulate customer device information and 3-D Secure
     * challenge results to indicate that Square has verified the buyer identity.
     * 
     * @var ?string $verificationToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('verification_token')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $verificationToken = null;
    
	public function __construct()
	{
		$this->billingAddress = null;
		$this->cardNonce = "";
		$this->cardholderName = null;
		$this->verificationToken = null;
	}
}

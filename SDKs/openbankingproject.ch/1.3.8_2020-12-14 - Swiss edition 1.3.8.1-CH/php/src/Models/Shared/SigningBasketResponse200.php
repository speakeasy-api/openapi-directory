<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SigningBasketResponse200 - Body of the JSON response for a successful get signing basket request.
 * 
 * 
 *   * 'payments': payment initiations which shall be authorised through this signing basket.
 *   * 'consents': consent objects which shall be authorised through this signing basket.
 *   * 'transactionStatus': Only the codes RCVD, ACTC, RJCT are used.
 *   * '_links': The ASPSP might integrate hyperlinks to indicate next (authorisation) steps to be taken.
 * 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SigningBasketResponse200
{
    /**
     * A list of hyperlinks to be recognised by the TPP. The actual hyperlinks used in the
     * 
     * response depend on the dynamical decisions of the ASPSP when processing the request.
     * 
     * Remark: All links can be relative or full links, to be decided by the ASPSP.
     * Type of links admitted in this response, (further links might be added for ASPSP defined
     * extensions):
     * 
     *   * 'scaRedirect':
     *     In case of an SCA Redirect Approach, the ASPSP is transmitting the link to
     *     which to redirect the PSU browser.
     *   * 'scaOAuth':
     *     In case of a SCA OAuth2 Approach, the ASPSP is transmitting the URI where the configuration of
     *     the Authorisation Server can be retrieved. The configuration follows the
     *     OAuth 2.0 Authorisation Server Metadata specification.
     *   * 'startAuthorisation':
     *     In case, where an explicit start of the transaction authorisation is needed,
     *     but no more data needs to be updated (no authentication method to be selected,
     *     no PSU identification nor PSU authentication data to be uploaded).
     *   * 'startAuthorisationWithPsuIdentification':
     *     The link to the authorisation end-point, where the authorisation sub-resource
     *     has to be generated while uploading the PSU identification data.
     *   * 'startAuthorisationWithPsuAuthentication':
     *     The link to the authorisation end-point, where the authorisation sub-resource
     *     has to be generated while uploading the PSU authentication data.
     *   * 'startAuthorisationWithEncryptedPsuAuthentication':
     *     The link to the authorisation end-point, where the authorisation sub-resource has
     *     to be generated while uploading the encrypted PSU authentication data.
     *   * 'startAuthorisationWithAuthenticationMethodSelection':
     *     The link to the authorisation end-point, where the authorisation sub-resource
     *     has to be generated while selecting the authentication method.
     *     This link is contained under exactly the same conditions as the data element 'scaMethods'
     *   * 'startAuthorisationWithTransactionAuthorisation':
     *     The link to the authorisation end-point, where the authorisation sub-resource
     *     has to be generated while authorising the transaction e.g. by uploading an
     *     OTP received by SMS.
     *   * 'self':
     *     The link to the payment initiation resource created by this request.
     *     This link can be used to retrieve the resource data.
     *   * 'status':
     *     The link to retrieve the transaction status of the payment initiation.
     *   * 'scaStatus':
     *     The link to retrieve the scaStatus of the corresponding authorisation sub-resource.
     *     This link is only contained, if an authorisation sub-resource has been already created.
     * 
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\LinksSigningBasket $links
     */
	#[\JMS\Serializer\Annotation\SerializedName('_links')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LinksSigningBasket')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LinksSigningBasket $links = null;
    
    /**
     * A list of consentIds.
     * 
     * @var ?array<string> $consents
     */
	#[\JMS\Serializer\Annotation\SerializedName('consents')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $consents = null;
    
    /**
     * A list of paymentIds.
     * 
     * @var ?array<string> $payments
     */
	#[\JMS\Serializer\Annotation\SerializedName('payments')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $payments = null;
    
    /**
     * The transaction status is filled with codes of the ISO 20022 data table.
     * 
     * Only the codes RCVD, PATC, ACTC, ACWC and RJCT are used:
     * - 'ACSP': 'AcceptedSettlementInProcess' -
     *   All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution.
     * - 'ACTC': 'AcceptedTechnicalValidation' -
     *   Authentication and syntactical and semantical validation are successful.
     * - 'ACWC': 'AcceptedWithChange' -
     *   Instruction is accepted but a change will be made, such as date or remittance not sent.
     * - 'RCVD': 'Received' -
     *   Payment initiation has been received by the receiving agent.
     * - 'RJCT': 'Rejected' -
     *   Payment initiation or individual transaction included in the payment initiation has been rejected.
     * 
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\TransactionStatusSBSEnum $transactionStatus
     */
	#[\JMS\Serializer\Annotation\SerializedName('transactionStatus')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\TransactionStatusSBSEnum>')]
    public TransactionStatusSBSEnum $transactionStatus;
    
	public function __construct()
	{
		$this->links = null;
		$this->consents = null;
		$this->payments = null;
		$this->transactionStatus = \OpenAPI\OpenAPI\Models\Shared\TransactionStatusSBSEnum::ACSC;
	}
}

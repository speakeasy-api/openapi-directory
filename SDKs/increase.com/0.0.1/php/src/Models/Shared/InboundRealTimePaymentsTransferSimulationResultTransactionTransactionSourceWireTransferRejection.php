<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceWireTransferRejection - A Wire Transfer Rejection object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_rejection`.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceWireTransferRejection
{
	#[\JMS\Serializer\Annotation\SerializedName('transfer_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $transferId;
    
	public function __construct()
	{
		$this->transferId = "";
	}
}

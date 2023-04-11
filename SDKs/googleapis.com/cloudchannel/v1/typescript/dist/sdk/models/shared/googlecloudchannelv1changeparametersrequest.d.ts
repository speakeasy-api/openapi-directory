import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ParameterInput } from "./googlecloudchannelv1parameter";
/**
 * Request message for CloudChannelService.ChangeParametersRequest.
 */
export declare class GoogleCloudChannelV1ChangeParametersRequestInput extends SpeakeasyBase {
    /**
     * Required. Entitlement parameters to update. You can only change editable parameters. To view the available Parameters for a request, refer to the Offer.parameter_definitions from the desired offer.
     */
    parameters?: GoogleCloudChannelV1ParameterInput[];
    /**
     * Optional. Purchase order ID provided by the reseller.
     */
    purchaseOrderId?: string;
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string;
}

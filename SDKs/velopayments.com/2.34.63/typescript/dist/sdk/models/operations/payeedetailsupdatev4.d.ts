import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PayeeDetailsUpdateV4Request extends SpeakeasyBase {
    /**
     * Request to update payee details
     */
    updatePayeeDetailsRequestV4Input: shared.UpdatePayeeDetailsRequestV4Input;
    /**
     * The UUID of the payee.
     */
    payeeId: string;
}
export declare class PayeeDetailsUpdateV4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
    /**
     * Invalid access token. May be expired or invalid
     */
    inlineResponse401?: shared.InlineResponse401;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
    /**
     * The resource was not found or is no longer available
     *
     * @remarks
     *
     */
    inlineResponse404?: shared.InlineResponse404;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PayorLinksV1Request extends SpeakeasyBase {
    /**
     * The Payor ID from which to start the query to show all descendants
     */
    descendantsOfPayor?: string;
    /**
     * <p>List of additional Payor fields to include in the response for each Payor</p>
     *
     * @remarks
     * <p>The values of payorId and payorName are always included for each Payor by default</p>
     * <p>You can add fields to the response for each payor by including them in the fields parameter separated by commas</p>
     * <p>The supported fields are any combination of: primaryContactEmail,kycState</p>
     *
     */
    fields?: string;
    /**
     * Query for the parent payor details for this payor id
     */
    parentOfPayor?: string;
}
export declare class PayorLinksV1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Details of Payor Links
     */
    payorLinksResponse?: shared.PayorLinksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
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

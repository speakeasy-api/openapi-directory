import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportTransactionsCsvv3Request extends SpeakeasyBase {
    /**
     * End date, inclusive. Format is YYYY-MM-DD
     */
    endDate?: Date;
    /**
     * The Payor ID for whom you wish to run the report.
     *
     * @remarks
     * For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.
     *
     */
    payorId?: string;
    /**
     * Start date, inclusive. Format is YYYY-MM-DD
     */
    startDate?: Date;
}
export declare class ExportTransactionsCsvv3Response extends SpeakeasyBase {
    body?: Uint8Array;
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
}

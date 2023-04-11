import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveApplicationsRequest extends SpeakeasyBase {
    /**
     * You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
     */
    apiKey: string;
    /**
     * You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
     */
    apiSecret: string;
    /**
     * Set the offset from the first page. The default value is `0`.
     */
    pageIndex?: number;
    /**
     * Set the number of items returned on each call to this endpoint. The default is 10 records.
     */
    pageSize?: number;
}
export declare class RetrieveApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    applications?: shared.Applications;
}

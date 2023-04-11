import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveApplicationRequest extends SpeakeasyBase {
    /**
     * You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
     */
    apiKey: string;
    /**
     * You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
     */
    apiSecret: string;
    /**
     * The ID allocated to your application by Nexmo.
     */
    appId: string;
}
export declare class RetrieveApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    application?: shared.Application;
}

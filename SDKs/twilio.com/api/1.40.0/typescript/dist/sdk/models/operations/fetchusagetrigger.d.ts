import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUsageTriggerServerList: readonly ["https://api.twilio.com"];
export declare class FetchUsageTriggerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUsageTriggerRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the UsageTrigger resource to fetch.
     */
    sid: string;
}
export declare class FetchUsageTriggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountUsageUsageTrigger?: shared.ApiV2010AccountUsageUsageTrigger;
}

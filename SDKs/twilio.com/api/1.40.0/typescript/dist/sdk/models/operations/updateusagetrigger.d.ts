import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUsageTriggerServerList: readonly ["https://api.twilio.com"];
export declare class UpdateUsageTriggerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is `POST`.
 */
export declare enum UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateUsageTriggerUpdateUsageTriggerRequest extends SpeakeasyBase {
    /**
     * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is `POST`.
     */
    callbackMethod?: UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum;
    /**
     * The URL we should call using `callback_method` when the trigger fires.
     */
    callbackUrl?: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateUsageTriggerRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to update.
     */
    accountSid: string;
    requestBody?: UpdateUsageTriggerUpdateUsageTriggerRequest;
    /**
     * The Twilio-provided string that uniquely identifies the UsageTrigger resource to update.
     */
    sid: string;
}
export declare class UpdateUsageTriggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountUsageUsageTrigger?: shared.ApiV2010AccountUsageUsageTrigger;
}

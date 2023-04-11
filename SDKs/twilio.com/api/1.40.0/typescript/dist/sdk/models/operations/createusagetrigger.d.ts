import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUsageTriggerServerList: readonly ["https://api.twilio.com"];
export declare class CreateUsageTriggerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is `POST`.
 */
export declare enum CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateUsageTriggerCreateUsageTriggerRequest extends SpeakeasyBase {
    /**
     * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is `POST`.
     */
    callbackMethod?: CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum;
    /**
     * The URL we should call using `callback_method` when the trigger fires.
     */
    callbackUrl: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    recurring?: shared.UsageTriggerEnumRecurringEnum;
    triggerBy?: shared.UsageTriggerEnumTriggerFieldEnum;
    /**
     * The usage value at which the trigger should fire.  For convenience, you can use an offset value such as `+30` to specify a trigger_value that is 30 units more than the current usage value. Be sure to urlencode a `+` as `%2B`.
     */
    triggerValue: string;
    usageCategory: shared.UsageTriggerEnumUsageCategoryEnum;
}
export declare class CreateUsageTriggerRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource.
     */
    accountSid: string;
    requestBody?: CreateUsageTriggerCreateUsageTriggerRequest;
}
export declare class CreateUsageTriggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountUsageUsageTrigger?: shared.ApiV2010AccountUsageUsageTrigger;
}

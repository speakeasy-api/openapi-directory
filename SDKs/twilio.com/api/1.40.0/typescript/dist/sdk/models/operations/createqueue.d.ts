import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateQueueServerList: readonly ["https://api.twilio.com"];
export declare class CreateQueueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateQueueCreateQueueRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you created to describe this resource. It can be up to 64 characters long.
     */
    friendlyName: string;
    /**
     * The maximum number of calls allowed to be in the queue. The default is 1000. The maximum is 5000.
     */
    maxSize?: number;
}
export declare class CreateQueueRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource.
     */
    accountSid: string;
    requestBody?: CreateQueueCreateQueueRequest;
}
export declare class CreateQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountQueue?: shared.ApiV2010AccountQueue;
}

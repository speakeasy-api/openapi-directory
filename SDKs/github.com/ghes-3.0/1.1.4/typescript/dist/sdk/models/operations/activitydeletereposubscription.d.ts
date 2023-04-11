import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActivityDeleteRepoSubscriptionRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityDeleteRepoSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

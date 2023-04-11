import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSubscriptionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSubscriptionResponse?: shared.CreateSubscriptionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateEventNotificationRequest extends SpeakeasyBase {
    /**
     * Create an Callback URI
     */
    requestBody: string;
    /**
     * The unique id of the ASPSP to which the request is issued. The unique id will be issued by OB.
     */
    xFapiFinancialId: string;
    /**
     * An RFC4122 UID used as a correlation id.
     */
    xFapiInteractionId?: string;
}
export declare class CreateEventNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

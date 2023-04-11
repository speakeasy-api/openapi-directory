import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AutoCheckInSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class AutoCheckInRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Email address
     */
    emailAddress: string;
    /**
     * Ticket number
     */
    ticketnumber: string;
}
export declare class AutoCheckInResponse extends SpeakeasyBase {
    autoCheckIn200ApplicationJSONString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

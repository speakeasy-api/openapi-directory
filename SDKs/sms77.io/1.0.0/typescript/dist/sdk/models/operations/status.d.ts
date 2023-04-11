import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StatusRequest extends SpeakeasyBase {
    /**
     * The ID from the SMS.
     */
    msgId: string;
}
export declare class StatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    status200TextPlainString?: string;
}

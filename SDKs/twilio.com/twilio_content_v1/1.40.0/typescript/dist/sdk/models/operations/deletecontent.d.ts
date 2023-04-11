import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteContentServerList: readonly ["https://content.twilio.com"];
export declare class DeleteContentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteContentRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Content resource to fetch.
     */
    sid: string;
}
export declare class DeleteContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

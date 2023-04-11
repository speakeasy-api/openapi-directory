import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteServiceServerList: readonly ["https://verify.twilio.com"];
export declare class DeleteServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Verification Service resource to delete.
     */
    sid: string;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

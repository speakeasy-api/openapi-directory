import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteFaxServerList: readonly ["https://fax.twilio.com"];
export declare class DeleteFaxSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteFaxRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Fax resource to delete.
     */
    sid: string;
}
export declare class DeleteFaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

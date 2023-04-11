import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteFaxMediaServerList: readonly ["https://fax.twilio.com"];
export declare class DeleteFaxMediaSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteFaxMediaRequest extends SpeakeasyBase {
    /**
     * The SID of the fax with the FaxMedia resource to delete.
     */
    faxSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the FaxMedia resource to delete.
     */
    sid: string;
}
export declare class DeleteFaxMediaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

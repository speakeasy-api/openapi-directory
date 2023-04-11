import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFaxMediaServerList: readonly ["https://fax.twilio.com"];
export declare class FetchFaxMediaSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFaxMediaRequest extends SpeakeasyBase {
    /**
     * The SID of the fax with the FaxMedia resource to fetch.
     */
    faxSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the FaxMedia resource to fetch.
     */
    sid: string;
}
export declare class FetchFaxMediaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    faxV1FaxFaxMedia?: shared.FaxV1FaxFaxMedia;
}

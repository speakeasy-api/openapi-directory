import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFaxServerList: readonly ["https://fax.twilio.com"];
export declare class FetchFaxSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFaxRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Fax resource to fetch.
     */
    sid: string;
}
export declare class FetchFaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    faxV1Fax?: shared.FaxV1Fax;
}

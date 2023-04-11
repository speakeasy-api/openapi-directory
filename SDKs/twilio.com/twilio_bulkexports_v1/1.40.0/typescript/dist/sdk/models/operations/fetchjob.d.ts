import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchJobServerList: readonly ["https://bulkexports.twilio.com"];
export declare class FetchJobSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchJobRequest extends SpeakeasyBase {
    /**
     * The unique string that that we created to identify the Bulk Export job
     */
    jobSid: string;
}
export declare class FetchJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    bulkexportsV1ExportJob?: shared.BulkexportsV1ExportJob;
}

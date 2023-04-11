import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteJobServerList: readonly ["https://bulkexports.twilio.com"];
export declare class DeleteJobSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteJobRequest extends SpeakeasyBase {
    /**
     * The unique string that that we created to identify the Bulk Export job
     */
    jobSid: string;
}
export declare class DeleteJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

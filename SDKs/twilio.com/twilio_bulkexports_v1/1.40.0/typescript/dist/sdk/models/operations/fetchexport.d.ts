import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchExportServerList: readonly ["https://bulkexports.twilio.com"];
export declare class FetchExportSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchExportRequest extends SpeakeasyBase {
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType: string;
}
export declare class FetchExportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    bulkexportsV1Export?: shared.BulkexportsV1Export;
}

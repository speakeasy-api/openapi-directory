import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchExportConfigurationServerList: readonly ["https://bulkexports.twilio.com"];
export declare class FetchExportConfigurationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchExportConfigurationRequest extends SpeakeasyBase {
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType: string;
}
export declare class FetchExportConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    bulkexportsV1ExportConfiguration?: shared.BulkexportsV1ExportConfiguration;
}

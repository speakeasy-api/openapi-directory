import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateExportConfigurationServerList: readonly ["https://bulkexports.twilio.com"];
export declare class UpdateExportConfigurationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateExportConfigurationUpdateExportConfigurationRequest extends SpeakeasyBase {
    /**
     * If true, Twilio will automatically generate every day's file when the day is over.
     */
    enabled?: boolean;
    /**
     * Sets whether Twilio should call a webhook URL when the automatic generation is complete, using GET or POST. The actual destination is set in the webhook_url
     */
    webhookMethod?: string;
    /**
     * Stores the URL destination for the method specified in webhook_method.
     */
    webhookUrl?: string;
}
export declare class UpdateExportConfigurationRequest extends SpeakeasyBase {
    requestBody?: UpdateExportConfigurationUpdateExportConfigurationRequest;
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType: string;
}
export declare class UpdateExportConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    bulkexportsV1ExportConfiguration?: shared.BulkexportsV1ExportConfiguration;
}

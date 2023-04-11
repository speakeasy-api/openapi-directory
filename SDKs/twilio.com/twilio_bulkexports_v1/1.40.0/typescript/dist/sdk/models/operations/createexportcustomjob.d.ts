import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateExportCustomJobServerList: readonly ["https://bulkexports.twilio.com"];
export declare class CreateExportCustomJobSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateExportCustomJobCreateExportCustomJobRequest extends SpeakeasyBase {
    /**
     * The optional email to send the completion notification to. You can set both webhook, and email, or one or the other. If you set neither, the job will run but you will have to query to determine your job's status.
     */
    email?: string;
    /**
     * The end day for the custom export specified as a string in the format of yyyy-mm-dd. End day is inclusive and must be 2 days earlier than the current UTC day.
     */
    endDay: string;
    /**
     * The friendly name specified when creating the job
     */
    friendlyName: string;
    /**
     * The start day for the custom export specified as a string in the format of yyyy-mm-dd
     */
    startDay: string;
    /**
     * This is the method used to call the webhook on completion of the job. If this is supplied, `WebhookUrl` must also be supplied.
     */
    webhookMethod?: string;
    /**
     * The optional webhook url called on completion of the job. If this is supplied, `WebhookMethod` must also be supplied. If you set neither webhook nor email, you will have to check your job's status manually.
     */
    webhookUrl?: string;
}
export declare class CreateExportCustomJobRequest extends SpeakeasyBase {
    requestBody?: CreateExportCustomJobCreateExportCustomJobRequest;
    /**
     * The type of communication – Messages or Calls, Conferences, and Participants
     */
    resourceType: string;
}
export declare class CreateExportCustomJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    bulkexportsV1ExportExportCustomJob?: shared.BulkexportsV1ExportExportCustomJob;
}

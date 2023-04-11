import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Flow import mode. If not specified, `KEEP` is assumed.
 */
export declare enum GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum {
    ImportOptionUnspecified = "IMPORT_OPTION_UNSPECIFIED",
    Keep = "KEEP",
    Fallback = "FALLBACK"
}
/**
 * The request message for Flows.ImportFlow.
 */
export declare class GoogleCloudDialogflowCxV3beta1ImportFlowRequest extends SpeakeasyBase {
    /**
     * Uncompressed raw byte content for flow.
     */
    flowContent?: string;
    /**
     * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import flow from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage).
     */
    flowUri?: string;
    /**
     * Flow import mode. If not specified, `KEEP` is assumed.
     */
    importOption?: GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum;
}

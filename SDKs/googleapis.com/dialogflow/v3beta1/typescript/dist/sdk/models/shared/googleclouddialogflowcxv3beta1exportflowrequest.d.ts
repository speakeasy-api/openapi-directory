import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for Flows.ExportFlow.
 */
export declare class GoogleCloudDialogflowCxV3beta1ExportFlowRequest extends SpeakeasyBase {
    /**
     * Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the flow to. The format of this URI must be `gs:///`. If left unspecified, the serialized flow is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage).
     */
    flowUri?: string;
    /**
     * Optional. Whether to export flows referenced by the specified flow.
     */
    includeReferencedFlows?: boolean;
}

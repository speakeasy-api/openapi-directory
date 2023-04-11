import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for TestCases.ImportTestCases.
 */
export declare class GoogleCloudDialogflowCxV3ImportTestCasesRequest extends SpeakeasyBase {
    /**
     * Uncompressed raw byte content for test cases.
     */
    content?: string;
    /**
     * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import test cases from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage).
     */
    gcsUri?: string;
}

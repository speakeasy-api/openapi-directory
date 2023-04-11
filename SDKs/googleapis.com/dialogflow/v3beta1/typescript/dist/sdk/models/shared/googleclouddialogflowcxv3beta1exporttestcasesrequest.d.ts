import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The data format of the exported test cases. If not specified, `BLOB` is assumed.
 */
export declare enum GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Blob = "BLOB",
    Json = "JSON"
}
/**
 * The request message for TestCases.ExportTestCases.
 */
export declare class GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest extends SpeakeasyBase {
    /**
     * The data format of the exported test cases. If not specified, `BLOB` is assumed.
     */
    dataFormat?: GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum;
    /**
     * The filter expression used to filter exported test cases, see [API Filtering](https://aip.dev/160). The expression is case insensitive and supports the following syntax: name = [OR name = ] ... For example: * "name = t1 OR name = t2" matches the test case with the exact resource name "t1" or "t2".
     */
    filter?: string;
    /**
     * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the test cases to. The format of this URI must be `gs:///`. If unspecified, the serialized test cases is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage).
     */
    gcsUri?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for uploading a file for a policy.
 */
export declare class GoogleChromePolicyVersionsV1UploadPolicyFileRequest extends SpeakeasyBase {
    /**
     * Required. The fully qualified policy schema and field name this file is uploaded for. This information will be used to validate the content type of the file.
     */
    policyField?: string;
}

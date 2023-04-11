import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ExtendSchemaRequest is the request message for ExtendSchema method.
 */
export declare class ExtendSchemaRequest extends SpeakeasyBase {
    /**
     * Required. Description for Schema Change.
     */
    description?: string;
    /**
     * File uploaded as a byte stream input.
     */
    fileContents?: string;
    /**
     * File stored in Cloud Storage bucket and represented in the form projects/{project_id}/buckets/{bucket_name}/objects/{object_name} File should be in the same project as the domain.
     */
    gcsPath?: string;
}

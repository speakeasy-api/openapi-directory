import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Cloud Storage location for the output content
 */
export declare class GcsDestination extends SpeakeasyBase {
    /**
     * Required. Data destination URI (e.g. 'gs://my_bucket/my_object'). Existing files will be overwritten.
     */
    uri?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Google Cloud Storage location for the input content.
 */
export declare class GcsInputSource extends SpeakeasyBase {
    /**
     * Required. Source data URI. For example, `gs://my_bucket/my_object`.
     */
    inputUri?: string;
}

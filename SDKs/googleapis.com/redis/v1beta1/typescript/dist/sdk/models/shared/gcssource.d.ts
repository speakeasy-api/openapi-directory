import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Cloud Storage location for the input content
 */
export declare class GcsSource extends SpeakeasyBase {
    /**
     * Required. Source data URI. (e.g. 'gs://my_bucket/my_object').
     */
    uri?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A product label represented as a key-value pair.
 */
export declare class GoogleCloudVisionV1p2beta1ProductKeyValue extends SpeakeasyBase {
    /**
     * The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    key?: string;
    /**
     * The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    value?: string;
}

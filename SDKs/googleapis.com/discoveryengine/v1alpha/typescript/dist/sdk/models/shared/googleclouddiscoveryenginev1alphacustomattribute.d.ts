import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent.
 */
export declare class GoogleCloudDiscoveryengineV1alphaCustomAttribute extends SpeakeasyBase {
    /**
     * The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    numbers?: number[];
    /**
     * The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". Empty string is not allowed. Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    text?: string[];
}

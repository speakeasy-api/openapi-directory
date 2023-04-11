import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for supported attribute values.
 */
export declare class AttributeValueMetadata extends SpeakeasyBase {
    /**
     * The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name. For example, for a "WiFi" enum attribute, this could contain "Paid" to represent paid Wi-Fi.
     */
    displayName?: string;
    /**
     * The attribute value.
     */
    value?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class Alert extends SpeakeasyBase {
    /**
     * Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;
    /**
     * Whether this alert can be dismissed.
     */
    isDismissible?: boolean;
    /**
     * Kind of resource this is, in this case adsense#alert.
     */
    kind?: string;
    /**
     * The localized alert message.
     */
    message?: string;
    /**
     * Severity of this alert. Possible values: INFO, WARNING, SEVERE.
     */
    severity?: string;
    /**
     * Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY, GRAYLISTED_PUBLISHER, API_HOLD.
     */
    type?: string;
}

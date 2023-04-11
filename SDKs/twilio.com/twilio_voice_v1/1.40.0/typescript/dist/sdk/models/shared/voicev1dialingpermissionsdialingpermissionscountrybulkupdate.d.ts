import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate extends SpeakeasyBase {
    /**
     * The number of countries updated
     */
    updateCount?: number;
    /**
     * A bulk update request to change voice dialing country permissions stored as a URL-encoded, JSON array of update objects. For example : `[ { "iso_code": "GB", "low_risk_numbers_enabled": "true", "high_risk_special_numbers_enabled":"true", "high_risk_tollfraud_numbers_enabled": "false" } ]`
     */
    updateRequest?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The organizational unit covered by a hold. This structure is immutable.
 */
export declare class HeldOrgUnit extends SpeakeasyBase {
    /**
     * When the organizational unit was put on hold. This property is immutable.
     */
    holdTime?: string;
    /**
     * The organizational unit's immutable ID as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).
     */
    orgUnitId?: string;
}

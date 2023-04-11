import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalNrqzValidation } from "./sasportalnrqzvalidation";
/**
 * Device data overridable by both SAS Portal and registration requests.
 */
export declare class SasPortalDeviceMetadata extends SpeakeasyBase {
    /**
     * If populated, the Antenna Model Pattern to use. Format is: `RecordCreatorId:PatternId`
     */
    antennaModel?: string;
    /**
     * Common Channel Group (CCG). A group of CBSDs in the same ICG requesting a common primary channel assignment. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf).
     */
    commonChannelGroup?: string;
    /**
     * Interference Coordination Group (ICG). A group of CBSDs that manage their own interference with the group. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf).
     */
    interferenceCoordinationGroup?: string;
    /**
     * Output only. Set to `true` if a CPI has validated that they have coordinated with the National Quiet Zone office.
     */
    nrqzValidated?: boolean;
    /**
     * Information about National Radio Quiet Zone validation.
     */
    nrqzValidation?: SasPortalNrqzValidation;
}
/**
 * Device data overridable by both SAS Portal and registration requests.
 */
export declare class SasPortalDeviceMetadataInput extends SpeakeasyBase {
    /**
     * If populated, the Antenna Model Pattern to use. Format is: `RecordCreatorId:PatternId`
     */
    antennaModel?: string;
    /**
     * Common Channel Group (CCG). A group of CBSDs in the same ICG requesting a common primary channel assignment. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf).
     */
    commonChannelGroup?: string;
    /**
     * Interference Coordination Group (ICG). A group of CBSDs that manage their own interference with the group. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf).
     */
    interferenceCoordinationGroup?: string;
    /**
     * Information about National Radio Quiet Zone validation.
     */
    nrqzValidation?: SasPortalNrqzValidation;
}

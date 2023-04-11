import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldLimits } from "./googleappsdrivelabelsv2betafieldlimits";
/**
 * Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
 */
export declare class GoogleAppsDriveLabelsV2betaLabelLimits extends SpeakeasyBase {
    /**
     * Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.
     */
    fieldLimits?: GoogleAppsDriveLabelsV2betaFieldLimits;
    /**
     * The maximum number of published Fields that can be deleted.
     */
    maxDeletedFields?: number;
    /**
     * The maximum number of characters allowed for the description.
     */
    maxDescriptionLength?: number;
    /**
     * The maximum number of draft revisions that will be kept before deleting old drafts.
     */
    maxDraftRevisions?: number;
    /**
     * The maximum number of Fields allowed within the label.
     */
    maxFields?: number;
    /**
     * The maximum number of characters allowed for the title.
     */
    maxTitleLength?: number;
    /**
     * Resource name.
     */
    name?: string;
}

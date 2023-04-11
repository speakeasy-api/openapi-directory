import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDateLimits } from "./googleappsdrivelabelsv2betadatelimits";
import { GoogleAppsDriveLabelsV2betaIntegerLimits } from "./googleappsdrivelabelsv2betaintegerlimits";
import { GoogleAppsDriveLabelsV2betaLongTextLimits } from "./googleappsdrivelabelsv2betalongtextlimits";
import { GoogleAppsDriveLabelsV2betaSelectionLimits } from "./googleappsdrivelabelsv2betaselectionlimits";
import { GoogleAppsDriveLabelsV2betaTextLimits } from "./googleappsdrivelabelsv2betatextlimits";
import { GoogleAppsDriveLabelsV2betaUserLimits } from "./googleappsdrivelabelsv2betauserlimits";
/**
 * Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.
 */
export declare class GoogleAppsDriveLabelsV2betaFieldLimits extends SpeakeasyBase {
    /**
     * Limits for date Field type.
     */
    dateLimits?: GoogleAppsDriveLabelsV2betaDateLimits;
    /**
     * Limits for integer Field type.
     */
    integerLimits?: GoogleAppsDriveLabelsV2betaIntegerLimits;
    /**
     * Limits for long text Field type.
     */
    longTextLimits?: GoogleAppsDriveLabelsV2betaLongTextLimits;
    /**
     * Limits for Field description, also called help text.
     */
    maxDescriptionLength?: number;
    /**
     * Limits for Field title.
     */
    maxDisplayNameLength?: number;
    /**
     * Max length for the id.
     */
    maxIdLength?: number;
    /**
     * Limits for selection Field type.
     */
    selectionLimits?: GoogleAppsDriveLabelsV2betaSelectionLimits;
    /**
     * Limits for text Field type.
     */
    textLimits?: GoogleAppsDriveLabelsV2betaTextLimits;
    /**
     * Limits for Field.Type.USER.
     */
    userLimits?: GoogleAppsDriveLabelsV2betaUserLimits;
}

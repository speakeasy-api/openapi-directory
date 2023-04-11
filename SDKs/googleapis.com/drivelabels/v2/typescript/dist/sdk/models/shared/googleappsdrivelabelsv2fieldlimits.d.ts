import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2DateLimits } from "./googleappsdrivelabelsv2datelimits";
import { GoogleAppsDriveLabelsV2IntegerLimits } from "./googleappsdrivelabelsv2integerlimits";
import { GoogleAppsDriveLabelsV2LongTextLimits } from "./googleappsdrivelabelsv2longtextlimits";
import { GoogleAppsDriveLabelsV2SelectionLimits } from "./googleappsdrivelabelsv2selectionlimits";
import { GoogleAppsDriveLabelsV2TextLimits } from "./googleappsdrivelabelsv2textlimits";
import { GoogleAppsDriveLabelsV2UserLimits } from "./googleappsdrivelabelsv2userlimits";
/**
 * Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.
 */
export declare class GoogleAppsDriveLabelsV2FieldLimits extends SpeakeasyBase {
    /**
     * Limits for date Field type.
     */
    dateLimits?: GoogleAppsDriveLabelsV2DateLimits;
    /**
     * Limits for integer Field type.
     */
    integerLimits?: GoogleAppsDriveLabelsV2IntegerLimits;
    /**
     * Limits for long text Field type.
     */
    longTextLimits?: GoogleAppsDriveLabelsV2LongTextLimits;
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
    selectionLimits?: GoogleAppsDriveLabelsV2SelectionLimits;
    /**
     * Limits for text Field type.
     */
    textLimits?: GoogleAppsDriveLabelsV2TextLimits;
    /**
     * Limits for Field.Type.USER.
     */
    userLimits?: GoogleAppsDriveLabelsV2UserLimits;
}

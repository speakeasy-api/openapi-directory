import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Defines text alignment for all cells in this column.
 */
export declare enum GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum {
    HorizontalAlignmentUnspecified = "HORIZONTAL_ALIGNMENT_UNSPECIFIED",
    Leading = "LEADING",
    Center = "CENTER",
    Trailing = "TRAILING"
}
/**
 * Column properties for TableCard.
 */
export declare class GoogleCloudDialogflowV2IntentMessageColumnProperties extends SpeakeasyBase {
    /**
     * Required. Column heading.
     */
    header?: string;
    /**
     * Optional. Defines text alignment for all cells in this column.
     */
    horizontalAlignment?: GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response message for Versions.CompareVersions.
 */
export declare class GoogleCloudDialogflowCxV3CompareVersionsResponse extends SpeakeasyBase {
    /**
     * JSON representation of the base version content.
     */
    baseVersionContentJson?: string;
    /**
     * The timestamp when the two version compares.
     */
    compareTime?: string;
    /**
     * JSON representation of the target version content.
     */
    targetVersionContentJson?: string;
}

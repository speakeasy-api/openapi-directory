import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An instance's screenshot.
 */
export declare class Screenshot extends SpeakeasyBase {
    /**
     * [Output Only] The Base64-encoded screenshot data.
     */
    contents?: string;
    /**
     * [Output Only] Type of the resource. Always compute#screenshot for the screenshots.
     */
    kind?: string;
}

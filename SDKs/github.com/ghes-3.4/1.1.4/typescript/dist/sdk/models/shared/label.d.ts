import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
 */
export declare class Label extends SpeakeasyBase {
    /**
     * 6-character hex code, without the leading #, identifying the color
     */
    color: string;
    default: boolean;
    description: string;
    id: number;
    /**
     * The name of the label.
     */
    name: string;
    nodeId: string;
    /**
     * URL for the label
     */
    url: string;
}

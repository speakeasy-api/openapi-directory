import { SpeakeasyBase } from "../../../internal/utils";
import { ResultDisplayLine } from "./resultdisplayline";
export declare class ResultDisplayMetadata extends SpeakeasyBase {
    /**
     * The metalines content to be displayed with the result.
     */
    metalines?: ResultDisplayLine[];
    /**
     * The display label for the object.
     */
    objectTypeLabel?: string;
}

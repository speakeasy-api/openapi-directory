import { SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
export declare class DeveloperComment extends SpeakeasyBase {
    lastModified?: Timestamp;
    /**
     * The content of the comment, i.e. reply body.
     */
    text?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
/**
 * A list of File objects
 */
export declare class FileList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: File[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}

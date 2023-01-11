import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectT } from "./object";
/**
 * A list of objects.
**/
export declare class Objects extends SpeakeasyBase {
    items?: ObjectT[];
    kind?: string;
    nextPageToken?: string;
    prefixes?: string[];
}

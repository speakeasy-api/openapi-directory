import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
/**
 * Successful response
 */
export declare class Seriesmembership extends SpeakeasyBase {
    /**
     * Resorce type.
     */
    kind?: string;
    member?: Volume[];
    nextPageToken?: string;
}

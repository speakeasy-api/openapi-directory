import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The identifying metadata.
 */
export declare class Metadata extends SpeakeasyBase {
    /**
     * If the request returns an array of results, this is the number of results returned in the array
     */
    count?: number;
    /**
     * This is the version of the api
     */
    version: string;
}

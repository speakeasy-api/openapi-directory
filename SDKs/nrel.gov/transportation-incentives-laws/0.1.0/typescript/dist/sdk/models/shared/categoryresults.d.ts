import { SpeakeasyBase } from "../../../internal/utils";
import { FullCategory } from "./fullcategory";
import { Metadata } from "./metadata";
/**
 * Successful request
 */
export declare class CategoryResults extends SpeakeasyBase {
    /**
     * The parameters that were passed to the API
     */
    inputs: any;
    /**
     * The identifying metadata.
     */
    metadata: Metadata;
    /**
     * The array of law categories returned
     */
    result: FullCategory[];
}

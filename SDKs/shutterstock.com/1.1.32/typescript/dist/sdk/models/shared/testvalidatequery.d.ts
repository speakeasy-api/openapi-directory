import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Validation results
 */
export declare class TestValidateQuery extends SpeakeasyBase {
    /**
     * Integer ID that was passed in the request
     */
    id: number;
    /**
     * List of tags that were passed in the request
     */
    tag?: string[];
}

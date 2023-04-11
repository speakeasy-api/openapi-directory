import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResponseDefaultResourceResource extends SpeakeasyBase {
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
/**
 * A JSON object containing the newly added resource
 */
export declare class ResponseDefaultResource extends SpeakeasyBase {
    resource?: ResponseDefaultResourceResource;
    /**
     * Status code
     */
    status?: number;
}

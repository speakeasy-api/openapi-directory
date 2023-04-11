import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class Connection extends SpeakeasyBase {
    /**
     * Created timestamp.
     */
    createdAt?: string;
    /**
     * Full Name.
     */
    displayName?: string;
    /**
     * Unique identifier
     */
    id?: number;
    /**
     * Kind of resource.
     */
    kind?: string;
    postFavorite?: boolean;
    postPublish?: boolean;
    /**
     * Service.
     */
    service?: string;
    /**
     * Type.
     */
    type?: string;
    /**
     * The external link URI.
     */
    uri?: string;
}

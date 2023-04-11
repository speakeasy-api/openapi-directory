import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A broadcast service that can subscribe to content for multiple destinations.
 */
export declare class BroadcastService extends SpeakeasyBase {
    /**
     * The date the broadcast service was created.
     */
    createdDate: Date;
    /**
     * The description of the broadcast service.
     */
    description?: string;
    /**
     * The ID of the broadcast service.
     */
    id: number;
    /**
     * The date the broadcast service was last modified.
     */
    lastModifiedDate: Date;
    /**
     * The name of the broadcast service.
     */
    name: string;
}

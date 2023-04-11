import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
import { SuccessCounts } from "./successcounts";
export declare class Success extends SpeakeasyBase {
    counts?: SuccessCounts;
    /**
     * Datetime of when the success was created
     */
    createdAt?: Date;
    /**
     * ID of success
     */
    id?: number;
    latestAction?: EmbeddedResource;
    latestCadence?: EmbeddedResource;
    latestCall?: EmbeddedResource;
    latestEmail?: EmbeddedResource;
    latestStep?: EmbeddedResource;
    person?: EmbeddedResource;
    /**
     * Datetime of when the success was recorded
     */
    succeededAt?: Date;
    /**
     * Datetime of when this person was first worked, leading up to the success
     */
    successWindowStartedAt?: Date;
    /**
     * Datetime of when the success was last updated
     */
    updatedAt?: Date;
    user?: EmbeddedResource;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";
/**
 * The type of the entity to apply the augmentation data.
 */
export declare enum AugmentationDataRelatedEntityTypeEnum {
    Event = "event",
    Attraction = "attraction",
    Venue = "venue"
}
/**
 * This class defines the Augmentation Data on the Publish API
 */
export declare class AugmentationData extends SpeakeasyBase {
    /**
     * List of changes to apply to the related entity
     */
    changes: Change[];
    /**
     * Id of the entity to apply the augmentation data.
     */
    relatedEntityId: string;
    /**
     * The type of the entity to apply the augmentation data.
     */
    relatedEntityType: AugmentationDataRelatedEntityTypeEnum;
    /**
     * The confidence (%) level of the accuracy of this augmention data. 100 is the better
     */
    score?: number;
    /**
     * The source where the augementation data came from
     */
    source: string;
    /**
     * Vesion of this augmentation data. This field is to avoid updating entity with old data.
     */
    versionNumber: number;
}

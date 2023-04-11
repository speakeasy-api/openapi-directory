import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Entity deduced from similar images on the Internet.
 */
export declare class GoogleCloudVisionV1p1beta1WebDetectionWebEntity extends SpeakeasyBase {
    /**
     * Canonical description of the entity, in English.
     */
    description?: string;
    /**
     * Opaque entity ID.
     */
    entityId?: string;
    /**
     * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
     */
    score?: number;
}

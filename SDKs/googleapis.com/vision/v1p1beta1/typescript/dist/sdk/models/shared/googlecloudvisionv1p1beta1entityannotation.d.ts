import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1LocationInfo } from "./googlecloudvisionv1p1beta1locationinfo";
import { GoogleCloudVisionV1p1beta1Property } from "./googlecloudvisionv1p1beta1property";
/**
 * Set of detected entity features.
 */
export declare class GoogleCloudVisionV1p1beta1EntityAnnotation extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
     */
    confidence?: number;
    /**
     * Entity textual description, expressed in its `locale` language.
     */
    description?: string;
    /**
     * The language code for the locale in which the entity textual `description` is expressed.
     */
    locale?: string;
    /**
     * The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
     */
    locations?: GoogleCloudVisionV1p1beta1LocationInfo[];
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    mid?: string;
    /**
     * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
     */
    properties?: GoogleCloudVisionV1p1beta1Property[];
    /**
     * Overall score of the result. Range [0, 1].
     */
    score?: number;
    /**
     * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
     */
    topicality?: number;
}

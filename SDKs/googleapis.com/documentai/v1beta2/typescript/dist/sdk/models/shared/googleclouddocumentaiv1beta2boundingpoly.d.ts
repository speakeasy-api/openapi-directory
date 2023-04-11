import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2NormalizedVertex } from "./googleclouddocumentaiv1beta2normalizedvertex";
import { GoogleCloudDocumentaiV1beta2Vertex } from "./googleclouddocumentaiv1beta2vertex";
/**
 * A bounding polygon for the detected image annotation.
 */
export declare class GoogleCloudDocumentaiV1beta2BoundingPoly extends SpeakeasyBase {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: GoogleCloudDocumentaiV1beta2NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: GoogleCloudDocumentaiV1beta2Vertex[];
}

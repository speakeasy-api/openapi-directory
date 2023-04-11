import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRunRenderMetadata } from "./cloudrunrendermetadata";
/**
 * RenderMetadata includes information associated with a `Release` render.
 */
export declare class RenderMetadata extends SpeakeasyBase {
    /**
     * CloudRunRenderMetadata contains Cloud Run information associated with a `Release` render.
     */
    cloudRun?: CloudRunRenderMetadata;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Layer holds metadata specific to a layer of a Docker image.
 */
export declare class Layer extends SpeakeasyBase {
    /**
     * The recovered arguments to the Dockerfile directive.
     */
    arguments?: string;
    /**
     * Required. The recovered Dockerfile directive used to construct this layer. See https://docs.docker.com/engine/reference/builder/ for more information.
     */
    directive?: string;
}

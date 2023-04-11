import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CloudRunRenderMetadata contains Cloud Run information associated with a `Release` render.
 */
export declare class CloudRunRenderMetadata extends SpeakeasyBase {
    /**
     * Output only. The name of the Cloud Run Service in the rendered manifest. Format is projects/{project}/locations/{location}/services/{service}.
     */
    service?: string;
}

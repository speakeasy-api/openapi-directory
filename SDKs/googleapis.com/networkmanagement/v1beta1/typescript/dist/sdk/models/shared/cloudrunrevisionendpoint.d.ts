import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Wrapper for Cloud Run revision attributes.
 */
export declare class CloudRunRevisionEndpoint extends SpeakeasyBase {
    /**
     * A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get) URI. The format is: projects/{project}/locations/{location}/revisions/{revision}
     */
    uri?: string;
}

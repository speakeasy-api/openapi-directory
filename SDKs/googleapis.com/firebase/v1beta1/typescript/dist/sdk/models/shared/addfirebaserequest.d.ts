import { SpeakeasyBase } from "../../../internal/utils";
/**
 * All fields are required.
 */
export declare class AddFirebaseRequest extends SpeakeasyBase {
    /**
     * Deprecated. Instead, to set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the GCP `Project`. The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations).
     */
    locationId?: string;
}

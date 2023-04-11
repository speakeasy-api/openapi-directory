import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a Google Cloud Platform (GCP) `Project`.
 */
export declare class ProjectInfo extends SpeakeasyBase {
    /**
     * The user-assigned display name of the GCP `Project`, for example: `My App`
     */
    displayName?: string;
    /**
     * The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). Not all Projects will have this field populated. If it is not populated, it means that the Project does not yet have a default GCP resource location. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project.
     */
    locationId?: string;
    /**
     * The resource name of the GCP `Project` to which Firebase resources can be added, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     */
    project?: string;
}

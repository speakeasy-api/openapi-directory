import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
/**
 * Identifying information for a single ancestor of a project.
 */
export declare class Ancestor extends SpeakeasyBase {
    /**
     * A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on.
     */
    resourceId?: ResourceId;
}

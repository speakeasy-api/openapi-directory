import { SpeakeasyBase } from "../../../internal/utils";
/**
 * App Engine service. Learn more at https://cloud.google.com/appengine.
 */
export declare class AppEngine extends SpeakeasyBase {
    /**
     * The ID of the App Engine module underlying this service. Corresponds to the module_id resource label in the gae_app monitored resource (https://cloud.google.com/monitoring/api/resources#tag_gae_app).
     */
    moduleId?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCoordinate } from "./googlecloudintegrationsv1alphacoordinate";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";
/**
 * Configuration detail of a error catch task
 */
export declare class GoogleCloudIntegrationsV1alphaErrorCatcherConfig extends SpeakeasyBase {
    /**
     * Optional. User-provided description intended to give more business context about the error catcher config.
     */
    description?: string;
    /**
     * Required. An error catcher id is string representation for the error catcher config. Within a workflow, error_catcher_id uniquely identifies an error catcher config among all error catcher configs for the workflow
     */
    errorCatcherId?: string;
    /**
     * Required. A number to uniquely identify each error catcher config within the workflow on UI.
     */
    errorCatcherNumber?: string;
    /**
     * Optional. The user created label for a particular error catcher. Optional.
     */
    label?: string;
    /**
     * Configuration detail of coordinate, it used for UI
     */
    position?: GoogleCloudIntegrationsV1alphaCoordinate;
    /**
     * Required. The set of start tasks that are to be executed for the error catch flow
     */
    startErrorTasks?: GoogleCloudIntegrationsV1alphaNextTask[];
}

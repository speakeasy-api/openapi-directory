import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. State of the API.
 */
export declare enum ApigatewayApiStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * An API that can be served by one or more Gateways.
 */
export declare class ApigatewayApi extends SpeakeasyBase {
    /**
     * Output only. Created time.
     */
    createTime?: string;
    /**
     * Optional. Display name.
     */
    displayName?: string;
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Optional. Immutable. The name of a Google Managed Service ( https://cloud.google.com/service-infrastructure/docs/glossary#managed). If not specified, a new Service will automatically be created in the same project as this API.
     */
    managedService?: string;
    /**
     * Output only. Resource name of the API. Format: projects/{project}/locations/global/apis/{api}
     */
    name?: string;
    /**
     * Output only. State of the API.
     */
    state?: ApigatewayApiStateEnum;
    /**
     * Output only. Updated time.
     */
    updateTime?: string;
}
/**
 * An API that can be served by one or more Gateways.
 */
export declare class ApigatewayApiInput extends SpeakeasyBase {
    /**
     * Optional. Display name.
     */
    displayName?: string;
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Optional. Immutable. The name of a Google Managed Service ( https://cloud.google.com/service-infrastructure/docs/glossary#managed). If not specified, a new Service will automatically be created in the same project as this API.
     */
    managedService?: string;
}

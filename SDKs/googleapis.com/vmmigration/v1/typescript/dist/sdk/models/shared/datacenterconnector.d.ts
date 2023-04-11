import { SpeakeasyBase } from "../../../internal/utils";
import { AvailableUpdates } from "./availableupdates";
import { Status } from "./status";
import { UpgradeStatus } from "./upgradestatus";
/**
 * Output only. State of the DatacenterConnector, as determined by the health checks.
 */
export declare enum DatacenterConnectorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Offline = "OFFLINE",
    Failed = "FAILED",
    Active = "ACTIVE"
}
/**
 * DatacenterConnector message describes a connector between the Source and Google Cloud, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to Google Cloud and support vm migration data transfer.
 */
export declare class DatacenterConnector extends SpeakeasyBase {
    /**
     * Output only. Appliance OVA version. This is the OVA which is manually installed by the user and contains the infrastructure for the automatically updatable components on the appliance.
     */
    applianceInfrastructureVersion?: string;
    /**
     * Output only. Appliance last installed update bundle version. This is the version of the automatically updatable components on the appliance.
     */
    applianceSoftwareVersion?: string;
    /**
     * Holds informatiom about the available versions for upgrade.
     */
    availableVersions?: AvailableUpdates;
    /**
     * Output only. The communication channel between the datacenter connector and Google Cloud.
     */
    bucket?: string;
    /**
     * Output only. The time the connector was created (as an API call, not when it was actually installed).
     */
    createTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * Output only. The connector's name.
     */
    name?: string;
    /**
     * Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified.
     */
    registrationId?: string;
    /**
     * The service account to use in the connector when communicating with the cloud.
     */
    serviceAccount?: string;
    /**
     * Output only. State of the DatacenterConnector, as determined by the health checks.
     */
    state?: DatacenterConnectorStateEnum;
    /**
     * Output only. The time the state was last set.
     */
    stateTime?: string;
    /**
     * Output only. The last time the connector was updated with an API call.
     */
    updateTime?: string;
    /**
     * UpgradeStatus contains information about upgradeAppliance operation.
     */
    upgradeStatus?: UpgradeStatus;
    /**
     * The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified.
     */
    version?: string;
}
/**
 * DatacenterConnector message describes a connector between the Source and Google Cloud, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to Google Cloud and support vm migration data transfer.
 */
export declare class DatacenterConnectorInput extends SpeakeasyBase {
    /**
     * Holds informatiom about the available versions for upgrade.
     */
    availableVersions?: AvailableUpdates;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified.
     */
    registrationId?: string;
    /**
     * The service account to use in the connector when communicating with the cloud.
     */
    serviceAccount?: string;
    /**
     * UpgradeStatus contains information about upgradeAppliance operation.
     */
    upgradeStatus?: UpgradeStatus;
    /**
     * The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified.
     */
    version?: string;
}

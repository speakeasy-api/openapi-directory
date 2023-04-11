import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
/**
 * ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
 */
export declare class GoogleCloudConnectorsV1ConfigVariable extends SpeakeasyBase {
    /**
     * Value is a bool.
     */
    boolValue?: boolean;
    /**
     * Value is an integer
     */
    intValue?: string;
    /**
     * Key of the config variable.
     */
    key?: string;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    secretValue?: GoogleCloudConnectorsV1Secret;
    /**
     * Value is a string.
     */
    stringValue?: string;
}

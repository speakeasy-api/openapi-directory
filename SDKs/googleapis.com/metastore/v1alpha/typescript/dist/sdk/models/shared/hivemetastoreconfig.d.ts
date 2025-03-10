import { SpeakeasyBase } from "../../../internal/utils";
import { AuxiliaryVersionConfig, AuxiliaryVersionConfigInput } from "./auxiliaryversionconfig";
import { KerberosConfig } from "./kerberosconfig";
/**
 * The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT.
 */
export declare enum HiveMetastoreConfigEndpointProtocolEnum {
    EndpointProtocolUnspecified = "ENDPOINT_PROTOCOL_UNSPECIFIED",
    Thrift = "THRIFT",
    Grpc = "GRPC"
}
/**
 * Specifies configuration information specific to running Hive metastore software as the metastore service.
 */
export declare class HiveMetastoreConfig extends SpeakeasyBase {
    /**
     * A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary Hive metastore service is created along with the primary service. All auxiliary versions must be less than the service's primary version. The key is the auxiliary service name and it must match the regular expression a-z?. This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.
     */
    auxiliaryVersions?: Record<string, AuxiliaryVersionConfig>;
    /**
     * A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). These overrides are also applied to auxiliary versions and can be further customized in the auxiliary version's AuxiliaryVersionConfig.
     */
    configOverrides?: Record<string, string>;
    /**
     * The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT.
     */
    endpointProtocol?: HiveMetastoreConfigEndpointProtocolEnum;
    /**
     * Configuration information for a Kerberos principal.
     */
    kerberosConfig?: KerberosConfig;
    /**
     * Immutable. The Hive metastore schema version.
     */
    version?: string;
}
/**
 * Specifies configuration information specific to running Hive metastore software as the metastore service.
 */
export declare class HiveMetastoreConfigInput extends SpeakeasyBase {
    /**
     * A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary Hive metastore service is created along with the primary service. All auxiliary versions must be less than the service's primary version. The key is the auxiliary service name and it must match the regular expression a-z?. This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.
     */
    auxiliaryVersions?: Record<string, AuxiliaryVersionConfigInput>;
    /**
     * A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). These overrides are also applied to auxiliary versions and can be further customized in the auxiliary version's AuxiliaryVersionConfig.
     */
    configOverrides?: Record<string, string>;
    /**
     * The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT.
     */
    endpointProtocol?: HiveMetastoreConfigEndpointProtocolEnum;
    /**
     * Configuration information for a Kerberos principal.
     */
    kerberosConfig?: KerberosConfig;
    /**
     * Immutable. The Hive metastore schema version.
     */
    version?: string;
}

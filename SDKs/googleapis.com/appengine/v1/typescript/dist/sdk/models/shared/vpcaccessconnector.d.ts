import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The egress setting for the connector, controlling what traffic is diverted through it.
 */
export declare enum VpcAccessConnectorEgressSettingEnum {
    EgressSettingUnspecified = "EGRESS_SETTING_UNSPECIFIED",
    AllTraffic = "ALL_TRAFFIC",
    PrivateIpRanges = "PRIVATE_IP_RANGES"
}
/**
 * VPC access connector specification.
 */
export declare class VpcAccessConnector extends SpeakeasyBase {
    /**
     * The egress setting for the connector, controlling what traffic is diverted through it.
     */
    egressSetting?: VpcAccessConnectorEgressSettingEnum;
    /**
     * Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.
     */
    name?: string;
}

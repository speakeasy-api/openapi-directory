import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of this IP address. A `PRIMARY` address is a public address that can accept incoming connections. A `PRIVATE` address is a private address that can accept incoming connections. An `OUTGOING` address is the source address of connections originating from the instance, if supported.
 */
export declare enum IpMappingTypeEnum {
    SqlIpAddressTypeUnspecified = "SQL_IP_ADDRESS_TYPE_UNSPECIFIED",
    Primary = "PRIMARY",
    Outgoing = "OUTGOING",
    Private = "PRIVATE",
    Migrated1StGen = "MIGRATED_1ST_GEN"
}
/**
 * Database instance IP Mapping.
 */
export declare class IpMapping extends SpeakeasyBase {
    /**
     * The IP address assigned.
     */
    ipAddress?: string;
    /**
     * The due time for this IP to be retired in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. This field is only available when the IP is scheduled to be retired.
     */
    timeToRetire?: string;
    /**
     * The type of this IP address. A `PRIMARY` address is a public address that can accept incoming connections. A `PRIVATE` address is a private address that can accept incoming connections. An `OUTGOING` address is the source address of connections originating from the instance, if supported.
     */
    type?: IpMappingTypeEnum;
}

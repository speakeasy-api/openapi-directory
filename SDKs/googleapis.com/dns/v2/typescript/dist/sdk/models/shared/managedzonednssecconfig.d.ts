import { SpeakeasyBase } from "../../../internal/utils";
import { DnsKeySpec } from "./dnskeyspec";
/**
 * Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF.
 */
export declare enum ManagedZoneDnsSecConfigNonExistenceEnum {
    Nsec = "NSEC",
    Nsec3 = "NSEC3"
}
/**
 * Specifies whether DNSSEC is enabled, and what mode it is in.
 */
export declare enum ManagedZoneDnsSecConfigStateEnum {
    Off = "OFF",
    On = "ON",
    Transfer = "TRANSFER"
}
export declare class ManagedZoneDnsSecConfig extends SpeakeasyBase {
    /**
     * Specifies parameters for generating initial DnsKeys for this ManagedZone. Can only be changed while the state is OFF.
     */
    defaultKeySpecs?: DnsKeySpec[];
    kind?: string;
    /**
     * Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF.
     */
    nonExistence?: ManagedZoneDnsSecConfigNonExistenceEnum;
    /**
     * Specifies whether DNSSEC is enabled, and what mode it is in.
     */
    state?: ManagedZoneDnsSecConfigStateEnum;
}

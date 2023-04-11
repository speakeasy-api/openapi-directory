import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Area types in OSPF. Must be one of: ["normal", "stub", "nssa"]
 */
export declare enum UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum {
    Normal = "normal",
    Nssa = "nssa",
    Stub = "stub"
}
export declare class UpdateNetworkSwitchRoutingOspfRequestBodyAreas extends SpeakeasyBase {
    /**
     * OSPF area ID
     */
    areaId: string;
    /**
     * Name of the OSPF area
     */
    areaName: string;
    /**
     * Area types in OSPF. Must be one of: ["normal", "stub", "nssa"]
     */
    areaType: UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
}
/**
 * MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
 */
export declare class UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey extends SpeakeasyBase {
    /**
     * MD5 authentication key index. Key index must be between 1 to 255
     */
    id?: number;
    /**
     * MD5 authentication passphrase
     */
    passphrase?: string;
}
/**
 * Area types in OSPF. Must be one of: ["normal", "stub", "nssa"]
 */
export declare enum UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum {
    Normal = "normal",
    Nssa = "nssa",
    Stub = "stub"
}
export declare class UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas extends SpeakeasyBase {
    /**
     * OSPF area ID
     */
    areaId: string;
    /**
     * Name of the OSPF area
     */
    areaName: string;
    /**
     * Area types in OSPF. Must be one of: ["normal", "stub", "nssa"]
     */
    areaType: UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum;
}
/**
 * OSPF v3 configuration
 */
export declare class UpdateNetworkSwitchRoutingOspfRequestBodyV3 extends SpeakeasyBase {
    /**
     * OSPF v3 areas
     */
    areas?: UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas[];
    /**
     * Time interval to determine when the peer will be declared inactive/dead. Value must be between 1 and 65535
     */
    deadTimerInSeconds?: number;
    /**
     * Boolean value to enable or disable V3 OSPF routing. OSPF V3 routing is disabled by default.
     */
    enabled?: boolean;
    /**
     * Time interval in seconds at which hello packet will be sent to OSPF neighbors to maintain connectivity. Value must be between 1 and 255. Default is 10 seconds.
     */
    helloTimerInSeconds?: number;
}
export declare class UpdateNetworkSwitchRoutingOspfRequestBody extends SpeakeasyBase {
    /**
     * OSPF areas
     */
    areas?: UpdateNetworkSwitchRoutingOspfRequestBodyAreas[];
    /**
     * Time interval to determine when the peer will be declared inactive/dead. Value must be between 1 and 65535
     */
    deadTimerInSeconds?: number;
    /**
     * Boolean value to enable or disable OSPF routing. OSPF routing is disabled by default.
     */
    enabled?: boolean;
    /**
     * Time interval in seconds at which hello packet will be sent to OSPF neighbors to maintain connectivity. Value must be between 1 and 255. Default is 10 seconds.
     */
    helloTimerInSeconds?: number;
    /**
     * Boolean value to enable or disable MD5 authentication. MD5 authentication is disabled by default.
     */
    md5AuthenticationEnabled?: boolean;
    /**
     * MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
     */
    md5AuthenticationKey?: UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
    /**
     * OSPF v3 configuration
     */
    v3?: UpdateNetworkSwitchRoutingOspfRequestBodyV3;
}
export declare class UpdateNetworkSwitchRoutingOspfRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchRoutingOspfRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchRoutingOspfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchRoutingOspf200ApplicationJSONObject?: Record<string, any>;
}

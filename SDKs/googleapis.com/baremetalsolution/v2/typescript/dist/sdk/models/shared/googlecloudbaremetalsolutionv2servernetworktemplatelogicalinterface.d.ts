import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Interface type.
 */
export declare enum GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum {
    InterfaceTypeUnspecified = "INTERFACE_TYPE_UNSPECIFIED",
    Bond = "BOND",
    Nic = "NIC"
}
/**
 * Logical interface.
 */
export declare class GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface extends SpeakeasyBase {
    /**
     * Interface name. This is not a globally unique identifier. Name is unique only inside the ServerNetworkTemplate. This is of syntax or and forms part of the network template name.
     */
    name?: string;
    /**
     * If true, interface must have network connected.
     */
    required?: boolean;
    /**
     * Interface type.
     */
    type?: GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum;
}

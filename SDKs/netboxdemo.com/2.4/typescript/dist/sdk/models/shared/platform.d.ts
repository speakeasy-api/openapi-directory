import { SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";
export declare enum PlatformLegacyRPCClientEnum {
    JuniperJunos = "juniper-junos",
    CiscoIos = "cisco-ios",
    Opengear = "opengear"
}
export declare class Platform extends SpeakeasyBase {
    id?: number;
    manufacturer?: NestedManufacturer;
    name: string;
    /**
     * Additional arguments to pass when initiating the NAPALM driver (JSON format)
     */
    napalmArgs?: string;
    /**
     * The name of the NAPALM driver to use when interacting with devices
     */
    napalmDriver?: string;
    rpcClient?: PlatformLegacyRPCClientEnum;
    slug: string;
}

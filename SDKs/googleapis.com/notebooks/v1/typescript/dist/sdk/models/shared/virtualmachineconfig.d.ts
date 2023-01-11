import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeAcceleratorConfig } from "./runtimeacceleratorconfig";
import { ContainerImage } from "./containerimage";
import { LocalDiskInput } from "./localdisk";
import { EncryptionConfig } from "./encryptionconfig";
import { RuntimeShieldedInstanceConfig } from "./runtimeshieldedinstanceconfig";
import { LocalDisk } from "./localdisk";
export declare enum VirtualMachineConfigNicTypeEnum {
    UnspecifiedNicType = "UNSPECIFIED_NIC_TYPE",
    VirtioNet = "VIRTIO_NET",
    Gvnic = "GVNIC"
}
/**
 * The config settings for virtual machine.
**/
export declare class VirtualMachineConfigInput extends SpeakeasyBase {
    acceleratorConfig?: RuntimeAcceleratorConfig;
    bootImage?: Record<string, any>;
    containerImages?: ContainerImage[];
    dataDisk?: LocalDiskInput;
    encryptionConfig?: EncryptionConfig;
    internalIpOnly?: boolean;
    labels?: Record<string, string>;
    machineType?: string;
    metadata?: Record<string, string>;
    network?: string;
    nicType?: VirtualMachineConfigNicTypeEnum;
    reservedIpRange?: string;
    shieldedInstanceConfig?: RuntimeShieldedInstanceConfig;
    subnet?: string;
    tags?: string[];
}
/**
 * The config settings for virtual machine.
**/
export declare class VirtualMachineConfig extends SpeakeasyBase {
    acceleratorConfig?: RuntimeAcceleratorConfig;
    bootImage?: Record<string, any>;
    containerImages?: ContainerImage[];
    dataDisk?: LocalDisk;
    encryptionConfig?: EncryptionConfig;
    guestAttributes?: Record<string, string>;
    internalIpOnly?: boolean;
    labels?: Record<string, string>;
    machineType?: string;
    metadata?: Record<string, string>;
    network?: string;
    nicType?: VirtualMachineConfigNicTypeEnum;
    reservedIpRange?: string;
    shieldedInstanceConfig?: RuntimeShieldedInstanceConfig;
    subnet?: string;
    tags?: string[];
    zone?: string;
}

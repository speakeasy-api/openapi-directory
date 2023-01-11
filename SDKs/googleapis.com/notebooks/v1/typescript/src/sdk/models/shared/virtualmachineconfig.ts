import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeAcceleratorConfig } from "./runtimeacceleratorconfig";
import { ContainerImage } from "./containerimage";
import { LocalDiskInput } from "./localdisk";
import { EncryptionConfig } from "./encryptionconfig";
import { RuntimeShieldedInstanceConfig } from "./runtimeshieldedinstanceconfig";
import { LocalDisk } from "./localdisk";


export enum VirtualMachineConfigNicTypeEnum {
    UnspecifiedNicType = "UNSPECIFIED_NIC_TYPE",
    VirtioNet = "VIRTIO_NET",
    Gvnic = "GVNIC"
}


// VirtualMachineConfigInput
/** 
 * The config settings for virtual machine.
**/
export class VirtualMachineConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: RuntimeAcceleratorConfig;

  @SpeakeasyMetadata({ data: "json, name=bootImage" })
  bootImage?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=containerImages", elemType: ContainerImage })
  containerImages?: ContainerImage[];

  @SpeakeasyMetadata({ data: "json, name=dataDisk" })
  dataDisk?: LocalDiskInput;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=internalIpOnly" })
  internalIpOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=nicType" })
  nicType?: VirtualMachineConfigNicTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: RuntimeShieldedInstanceConfig;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


// VirtualMachineConfig
/** 
 * The config settings for virtual machine.
**/
export class VirtualMachineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: RuntimeAcceleratorConfig;

  @SpeakeasyMetadata({ data: "json, name=bootImage" })
  bootImage?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=containerImages", elemType: ContainerImage })
  containerImages?: ContainerImage[];

  @SpeakeasyMetadata({ data: "json, name=dataDisk" })
  dataDisk?: LocalDisk;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=guestAttributes" })
  guestAttributes?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=internalIpOnly" })
  internalIpOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=nicType" })
  nicType?: VirtualMachineConfigNicTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: RuntimeShieldedInstanceConfig;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}

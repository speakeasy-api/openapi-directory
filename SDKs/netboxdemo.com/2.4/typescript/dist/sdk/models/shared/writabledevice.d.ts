import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableDeviceRackFaceEnum {
    Zero = "0",
    One = "1"
}
export declare enum WritableDeviceStatusEnum {
    One = "1",
    Zero = "0",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5"
}
export declare class WritableDeviceInput extends SpeakeasyBase {
    /**
     * A unique tag used to identify this device
     */
    assetTag?: string;
    cluster?: number;
    comments?: string;
    customFields?: Record<string, any>;
    deviceRole: number;
    deviceType: number;
    face?: WritableDeviceRackFaceEnum;
    localContextData?: string;
    name?: string;
    platform?: number;
    /**
     * The lowest-numbered unit occupied by the device
     */
    position?: number;
    primaryIp4?: number;
    primaryIp6?: number;
    rack?: number;
    serial?: string;
    site: number;
    status?: WritableDeviceStatusEnum;
    tags?: string[];
    tenant?: number;
    vcPosition?: number;
    vcPriority?: number;
    virtualChassis?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { InputConfigurationContainer } from "./inputconfigurationcontainer";
import { OutputConfigurationContainer } from "./outputconfigurationcontainer";
import { SwitchConfigurationContainer } from "./switchconfigurationcontainer";
/**
 * Configuration of the dynamic DNS service. More information: http://wiki.smart-me.com/index.php/Dynamisches_DNS
 */
export declare enum SmartMeDeviceConfigurationContainerDnsUpdateStateEnum {
    NoUpdate = "NoUpdate",
    DnsUpdatePublicIp = "DnsUpdatePublicIp",
    DnsUpdateInternalIp = "DnsUpdateInternalIp"
}
/**
 * Number of seconds the device will upload the data. For smaller values maybe a professional license is needed.
 */
export declare enum SmartMeDeviceConfigurationContainerUploadIntervalEnum {
    UploadInterval1s = "UploadInterval_1s",
    UploadInterval5s = "UploadInterval_5s",
    UploadInterval10s = "UploadInterval_10s",
    UploadInterval30s = "UploadInterval_30s",
    UploadInterval60s = "UploadInterval_60s",
    UploadInterval5min = "UploadInterval_5min",
    UploadInterval15min = "UploadInterval_15min",
    UploadInterval30min = "UploadInterval_30min",
    UploadInterval60min = "UploadInterval_60min",
    UploadInterval6h = "UploadInterval_6h",
    UploadInterval12h = "UploadInterval_12h",
    UploadInterval24h = "UploadInterval_24h"
}
/**
 * API Container class for the meter configuration
 */
export declare class SmartMeDeviceConfigurationContainer extends SpeakeasyBase {
    /**
     * The encryption key used to decrypt messages received from an external meter (used only for the smart-me modules)
     */
    deviceEncryptionKey?: string;
    /**
     * PIN code to enter on a external meter (e.g. for the FNN meters)
     */
    devicePinCode?: string;
    /**
     * Configuration of the dynamic DNS service. More information: http://wiki.smart-me.com/index.php/Dynamisches_DNS
     */
    dnsUpdateState?: SmartMeDeviceConfigurationContainerDnsUpdateStateEnum;
    /**
     * Enables or disables Modbus TCP (if the meter supports it).
     */
    enableModbusTcp?: boolean;
    /**
     * The ID of the device
     */
    id?: string;
    /**
     * The configuration for the intput outputs
     */
    inputConfiguration?: InputConfigurationContainer[];
    /**
     * The configuration for the external outputs
     */
    outputConfiguration?: OutputConfigurationContainer[];
    /**
     * Shows the reactive energy values (if the meter supports it).
     */
    showReactiveEnergy?: boolean;
    /**
     * The configuration for the phase switches
     */
    switchConfiguration?: SwitchConfigurationContainer[];
    /**
     * Number of seconds the device will upload the data. For smaller values maybe a professional license is needed.
     */
    uploadInterval?: SmartMeDeviceConfigurationContainerUploadIntervalEnum;
}

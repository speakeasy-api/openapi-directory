import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conditional. This field specifies the radio access technology that is used for the CBSD.
 */
export declare enum SasPortalDeviceAirInterfaceRadioTechnologyEnum {
    RadioTechnologyUnspecified = "RADIO_TECHNOLOGY_UNSPECIFIED",
    EUtra = "E_UTRA",
    CambiumNetworks = "CAMBIUM_NETWORKS",
    FourGBbwSaa1 = "FOUR_G_BBW_SAA_1",
    Nr = "NR",
    DoodleCbrs = "DOODLE_CBRS",
    Cw = "CW",
    Redline = "REDLINE",
    TaranaWireless = "TARANA_WIRELESS"
}
/**
 * Information about the device's air interface.
 */
export declare class SasPortalDeviceAirInterface extends SpeakeasyBase {
    /**
     * Conditional. This field specifies the radio access technology that is used for the CBSD.
     */
    radioTechnology?: SasPortalDeviceAirInterfaceRadioTechnologyEnum;
    /**
     * Optional. This field is related to the `radioTechnology` and provides the air interface specification that the CBSD is compliant with at the time of registration.
     */
    supportedSpec?: string;
}

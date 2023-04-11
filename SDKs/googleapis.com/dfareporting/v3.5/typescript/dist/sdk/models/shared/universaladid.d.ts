import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Registry used for the Ad ID value.
 */
export declare enum UniversalAdIdRegistryEnum {
    Other = "OTHER",
    AdIdOfficial = "AD_ID_OFFICIAL",
    Clearcast = "CLEARCAST",
    Dcm = "DCM"
}
/**
 * A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.
 */
export declare class UniversalAdId extends SpeakeasyBase {
    /**
     * Registry used for the Ad ID value.
     */
    registry?: UniversalAdIdRegistryEnum;
    /**
     * ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\-". Maximum length is 64 characters. Read only when registry is DCM.
     */
    value?: string;
}

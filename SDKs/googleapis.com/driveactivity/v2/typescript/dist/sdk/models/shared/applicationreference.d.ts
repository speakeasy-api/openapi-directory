import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reference type corresponding to this event.
 */
export declare enum ApplicationReferenceTypeEnum {
    UnspecifiedReferenceType = "UNSPECIFIED_REFERENCE_TYPE",
    Link = "LINK",
    Discuss = "DISCUSS"
}
/**
 * Activity in applications other than Drive.
 */
export declare class ApplicationReference extends SpeakeasyBase {
    /**
     * The reference type corresponding to this event.
     */
    type?: ApplicationReferenceTypeEnum;
}

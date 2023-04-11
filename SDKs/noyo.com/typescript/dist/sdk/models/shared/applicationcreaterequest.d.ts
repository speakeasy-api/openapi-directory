import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of application for the group with this carrier
 */
export declare enum ApplicationCreateRequestApplicationTypeEnum {
    New = "new",
    Renewal = "renewal",
    Upsell = "upsell"
}
export declare class ApplicationCreateRequest extends SpeakeasyBase {
    /**
     * Type of application for the group with this carrier
     */
    applicationType: ApplicationCreateRequestApplicationTypeEnum;
    /**
     * An id given by the carrier to identify the group
     */
    carrierGroupId?: string;
    /**
     * Unique identifier of the associated carrier in Noyo
     */
    carrierId: string;
    /**
     * General platform notes about the group application
     */
    notes?: string;
}

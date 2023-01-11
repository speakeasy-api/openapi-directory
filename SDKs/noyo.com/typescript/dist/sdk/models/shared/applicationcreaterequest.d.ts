import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApplicationCreateRequestApplicationTypeEnum {
    New = "new",
    Renewal = "renewal",
    Upsell = "upsell"
}
export declare class ApplicationCreateRequest extends SpeakeasyBase {
    applicationType: ApplicationCreateRequestApplicationTypeEnum;
    carrierGroupId?: string;
    carrierId: string;
    notes?: string;
}

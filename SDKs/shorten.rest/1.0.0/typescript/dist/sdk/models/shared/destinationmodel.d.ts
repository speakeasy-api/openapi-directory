import { SpeakeasyBase } from "../../../internal/utils";
export declare class DestinationModel extends SpeakeasyBase {
    /**
     * ISO alpha-2 [country code](//en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
     */
    country?: string;
    /**
     * Please check the [supported OS list](#tag/OperatingSystems)
     */
    os?: string;
    url: string;
}

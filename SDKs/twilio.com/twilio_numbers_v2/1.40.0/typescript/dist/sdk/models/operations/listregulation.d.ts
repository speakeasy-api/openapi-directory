import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRegulationServerList: readonly ["https://numbers.twilio.com"];
export declare class ListRegulationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRegulationRequest extends SpeakeasyBase {
    /**
     * The type of End User the regulation requires - can be `individual` or `business`.
     */
    endUserType?: shared.RegulationEnumEndUserTypeEnum;
    /**
     * The ISO country code of the phone number's country.
     */
    isoCountry?: string;
    /**
     * The type of phone number that the regulatory requiremnt is restricting.
     */
    numberType?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListRegulationListRegulationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListRegulationListRegulationResponse extends SpeakeasyBase {
    meta?: ListRegulationListRegulationResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceRegulation[];
}
export declare class ListRegulationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRegulationResponse?: ListRegulationListRegulationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

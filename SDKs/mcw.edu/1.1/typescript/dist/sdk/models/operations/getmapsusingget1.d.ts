import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETMapsUsingGet1Request extends SpeakeasyBase {
    /**
     * RGD term acc
     */
    accId: string;
}
export declare class GETMapsUsingGet1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getMapsUsingGET1200WildcardString?: string;
}

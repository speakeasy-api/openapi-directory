import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LandlordControllerGetTenancyAgreementReportRequest extends SpeakeasyBase {
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The Tenancy ID
     */
    tenancyID: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class LandlordControllerGetTenancyAgreementReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

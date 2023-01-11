import { SpeakeasyBase } from "../../../internal/utils";
export declare class LandlordControllerGetTenancyAgreementReportPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetTenancyAgreementReportQueryParams extends SpeakeasyBase {
    tenancyID: string;
    token: string;
}
export declare class LandlordControllerGetTenancyAgreementReportRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetTenancyAgreementReportPathParams;
    queryParams: LandlordControllerGetTenancyAgreementReportQueryParams;
}
export declare class LandlordControllerGetTenancyAgreementReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Record<string, any>;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class LandlordControllerGetInvetoryReportPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetInvetoryReportQueryParams extends SpeakeasyBase {
    tenancyID: string;
    token: string;
}
export declare class LandlordControllerGetInvetoryReportRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetInvetoryReportPathParams;
    queryParams: LandlordControllerGetInvetoryReportQueryParams;
}
export declare class LandlordControllerGetInvetoryReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Record<string, any>;
    statusCode: number;
}

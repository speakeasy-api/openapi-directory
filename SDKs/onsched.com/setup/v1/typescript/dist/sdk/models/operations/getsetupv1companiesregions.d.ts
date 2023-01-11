import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1CompaniesRegionsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetSetupV1CompaniesRegionsRequest extends SpeakeasyBase {
    queryParams: GetSetupV1CompaniesRegionsQueryParams;
}
export declare class GetSetupV1CompaniesRegionsResponse extends SpeakeasyBase {
    contentType: string;
    regionListViewModel?: Record<string, any>;
    statusCode: number;
}

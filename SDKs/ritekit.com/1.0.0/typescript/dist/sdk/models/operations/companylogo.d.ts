import { SpeakeasyBase } from "../../../internal/utils";
export declare class CompanyLogoQueryParams extends SpeakeasyBase {
    domain: string;
}
export declare class CompanyLogoRequest extends SpeakeasyBase {
    queryParams: CompanyLogoQueryParams;
}
export declare class CompanyLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

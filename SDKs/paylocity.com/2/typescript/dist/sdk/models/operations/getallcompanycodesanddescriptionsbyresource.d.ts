import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllCompanyCodesAndDescriptionsByResourceSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetAllCompanyCodesAndDescriptionsByResourceRequest extends SpeakeasyBase {
    /**
     * Type of Company Code. Common values costcenter1, costcenter2, costcenter3, deductions, earnings, taxes, paygrade, positions.
     */
    codeResource: string;
    /**
     * Company Id
     */
    companyId: string;
}
export declare class GetAllCompanyCodesAndDescriptionsByResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved
     */
    companyCodes?: shared.CompanyCodes[];
    /**
     * Invalid Code Resource
     */
    errors?: shared.ErrorT[];
}

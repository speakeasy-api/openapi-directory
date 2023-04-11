import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompanySpecificOpenAPIDocumentationSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetCompanySpecificOpenAPIDocumentationRequest extends SpeakeasyBase {
    /**
     * Bearer + JWT
     */
    authorization: string;
    /**
     * Company Id
     */
    companyId: string;
}
export declare class GetCompanySpecificOpenAPIDocumentationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchRequestBodyAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
}
export declare class SearchRequestBody extends SpeakeasyBase {
    address?: SearchRequestBodyAddress;
    age?: number;
    dob?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    phoneNumber?: string;
}
export declare class SearchRequest extends SpeakeasyBase {
    requestBody?: SearchRequestBody;
    /**
     * e.g. Key
     */
    galaxyApName?: string;
    /**
     * e.g. Secret
     */
    galaxyApPassword?: string;
    /**
     * e.g. DevAPIIDVerification
     */
    galaxySearchType?: string;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

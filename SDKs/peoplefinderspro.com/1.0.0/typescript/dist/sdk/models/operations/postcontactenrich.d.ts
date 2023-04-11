import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostContactEnrichRequestBodyAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
}
export declare class PostContactEnrichRequestBody extends SpeakeasyBase {
    address?: PostContactEnrichRequestBodyAddress;
    age?: number;
    dob?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    phoneNumber?: string;
}
export declare class PostContactEnrichRequest extends SpeakeasyBase {
    requestBody?: PostContactEnrichRequestBody;
    /**
     * e.g. Key
     */
    galaxyApName?: string;
    /**
     * e.g. Secret
     */
    galaxyApPassword?: string;
    /**
     * e.g. DevAPIContactEnrich
     */
    galaxySearchType?: string;
}
export declare class PostContactEnrichResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

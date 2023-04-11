import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPhoneEnrichRequestBody extends SpeakeasyBase {
    phone?: string;
}
export declare class PostPhoneEnrichRequest extends SpeakeasyBase {
    requestBody?: PostPhoneEnrichRequestBody;
    /**
     * e.g. Key
     */
    galaxyApName?: string;
    /**
     * e.g. Secret
     */
    galaxyApPassword?: string;
    /**
     * e.g. DevAPICallerID
     */
    galaxySearchType?: string;
}
export declare class PostPhoneEnrichResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

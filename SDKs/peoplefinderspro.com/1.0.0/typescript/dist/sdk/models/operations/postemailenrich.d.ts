import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostEmailEnrichRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare class PostEmailEnrichRequest extends SpeakeasyBase {
    requestBody?: PostEmailEnrichRequestBody;
    /**
     * e.g. Key
     */
    galaxyApName?: string;
    /**
     * e.g. Secret
     */
    galaxyApPassword?: string;
    /**
     * e.g. DevAPIEmailID
     */
    galaxySearchType?: string;
}
export declare class PostEmailEnrichResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

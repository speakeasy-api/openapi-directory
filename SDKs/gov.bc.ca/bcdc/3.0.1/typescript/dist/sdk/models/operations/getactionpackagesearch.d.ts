import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionPackageSearchRequest extends SpeakeasyBase {
    /**
     * A query string
     */
    q?: string;
}
export declare class GetActionPackageSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQshowListSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQshowListRequest extends SpeakeasyBase {
    /**
     * Should include public qshows or not in the list
     */
    public?: boolean;
    /**
     * Response is paged. This parameter controls where response starts the listing at
     */
    start?: number;
}
export declare class GetQshowListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
